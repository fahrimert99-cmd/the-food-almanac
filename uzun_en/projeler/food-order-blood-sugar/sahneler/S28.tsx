// Sahne 28 — mide bir kapı bekçisi: yiyecek ince bağırsağa azar azar geçer.
import React from "react";
import { ANTON, Baslik, BaslikBlok, Etiket, Hap, INTER, IkonYol, Ikon, Kamera, Panel, RENK, SP, eout, einout, ilerle,
  kameraYolu, kelimeZamani, kis, pop, sol } from "../kutuphane";

type N = [number, number];

// Görsel 28: soldaki midenin yemek kesitinde harfe benzeyen kıvrımlar var -> sol panel hep örter.
// Sağdaki temiz mide (x 980-1730) kullanılır.
const YEMEK_YOLU: N[] = [[1236, 150], [1240, 215], [1262, 262], [1300, 292], [1360, 318], [1430, 335], [1480, 362]];
const YUVALAR: N[] = [[1520, 430], [1610, 410], [1675, 470], [1500, 520], [1590, 510], [1660, 570], [1540, 610],
  [1620, 660], [1480, 690], [1570, 740]];
// kapıdan sırayla geçecek yuvalar (çıkışa en yakından)
const SIRA = [8, 9, 6, 7, 3, 4];
const KAPI: N = [1322, 712];
const ARALIK = 1.0;
const KAPI_ONU: N[] = [[1440, 742], [1366, 720]];
const CIKIS_YOLU: N[] = [KAPI, [1220, 690], [1140, 668], [1078, 690], [1048, 750], [1040, 830], [1042, 905]];

/** Çoklu çizgide u (0-1) oranındaki nokta. */
const yolda = (pts: N[], u: number): N => {
  const boy = pts.slice(1).map((p, i) => Math.hypot(p[0] - pts[i][0], p[1] - pts[i][1]));
  let kalan = kis(u) * boy.reduce((a, b) => a + b, 0);
  for (let i = 0; i < boy.length; i++) {
    if (kalan <= boy[i] || i === boy.length - 1) {
      const f = boy[i] ? kis(kalan / boy[i]) : 0;
      return [pts[i][0] + (pts[i + 1][0] - pts[i][0]) * f, pts[i][1] + (pts[i + 1][1] - pts[i][1]) * f];
    }
    kalan -= boy[i];
  }
  return pts[pts.length - 1];
};

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBir = K(0, "first"), tMide = K(0, "your stomach");
  const tYemek = K(1, "Food"), tTabak = K(1, "plate"), tKan = K(1, "bloodstream");
  const tBekci = K(2, "gatekeeper"), tSal = K(2, "releasing"), tInce = K(2, "small intestine"), tAzar = K(2, "a little at a time");
  const pencere = kameraYolu(t, s.sure, [400, 130, 1520], [480, 190, 1400]);

  // yiyecek taneleri: yemek borusundan mideye iner, sonra kapıdan teker teker geçer
  const taneler: { p: N; a: number }[] = [];
  let acik = 0;
  YUVALAR.forEach((y, i) => {
    const t0 = tYemek + i * 0.13;
    if (t < t0) return;
    const pIn = eout(ilerle(t, t0, 1.1));
    const k = SIRA.indexOf(i);
    const tCik = k >= 0 ? tSal + k * ARALIK : 1e9;
    let p: N, a = Math.min(1, pIn * 4);
    if (t < tCik) {
      p = pIn < 1 ? yolda([...YEMEK_YOLU, y], pIn) : y;
      const dalga = pIn * 3;
      p = [p[0] + Math.sin(t * 2.1 + i) * dalga, p[1] + Math.cos(t * 1.7 + i * 2) * dalga];
    } else {
      // kapının önüne gel, kapı açılınca geç, kapı kapanır
      const tKapi = tCik + 0.8;
      if (t < tKapi + 0.22) p = yolda([y, ...KAPI_ONU], eout(ilerle(t, tCik, 0.8)));
      else {
        const q = ilerle(t, tKapi + 0.22, 2.0), u = 0.4 * q + 0.6 * eout(q);
        p = yolda([KAPI_ONU[KAPI_ONU.length - 1], ...CIKIS_YOLU], u);
        a = 1 - kis((u - 0.8) / 0.2);
      }
      acik = Math.max(acik, eout(ilerle(t, tKapi - 0.08, 0.3)) * (1 - einout(ilerle(t, tKapi + 0.5, 0.3))));
    }
    taneler.push({ p, a });
  });

  // kapı (kapakçık): "gatekeeper" ile belirir, tane geçerken aralanır
  const [kSc, kAl] = pop(t, tBekci + 0.15, 0.5);
  const halka = ilerle(t, tBekci + 0.15, 1.0);
  const aci = 58 * acik;

  // TABAK -> KAN düz yolu (çarpı ile)
  const bitisA = tBekci - 0.6;
  const aA = sol(t, bitisA, 0.45);
  const pOk = eout(ilerle(t, tTabak + 0.3, Math.max(0.3, tKan - tTabak - 0.2)));

  return (
    <>
      <Kamera gorsel="tam/28" pencere={pencere}>
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
          {/* kapakçık: duvara menteşeli iki altın kanat; tane geçerken akış yönüne (sola) açılır */}
          {kAl > 0 && (
            <g opacity={kAl}>
              <circle cx={KAPI[0]} cy={KAPI[1]} r={30 + 70 * halka} fill="none" stroke={RENK.altin} strokeWidth={5} opacity={(1 - halka) * 0.9} />
              <ellipse cx={KAPI[0]} cy={714} rx={20} ry={84} fill="none" stroke={RENK.kagitAcik} strokeWidth={4} strokeDasharray="8 8" opacity={0.85} />
              <g transform={`translate(${KAPI[0]} ${KAPI[1]}) scale(${kSc}) translate(${-KAPI[0]} ${-KAPI[1]})`}>
                <g transform={`rotate(${aci} ${KAPI[0]} 638)`}>
                  <rect x={KAPI[0] - 11} y={632} width={22} height={74} rx={11} fill={RENK.altinAcik} stroke={RENK.murekkep} strokeWidth={4} />
                </g>
                <g transform={`rotate(${-aci} ${KAPI[0]} 790)`}>
                  <rect x={KAPI[0] - 11} y={722} width={22} height={74} rx={11} fill={RENK.altinAcik} stroke={RENK.murekkep} strokeWidth={4} />
                </g>
                <circle cx={KAPI[0]} cy={638} r={7} fill={RENK.murekkep} />
                <circle cx={KAPI[0]} cy={790} r={7} fill={RENK.murekkep} />
              </g>
            </g>
          )}
          {/* yiyecek taneleri */}
          {taneler.map((d, i) => d.a > 0 && (
            <g key={i} opacity={d.a}>
              <circle cx={d.p[0] + 2} cy={d.p[1] + 4} r={13} fill={RENK.murekkep} opacity={0.3} />
              <circle cx={d.p[0]} cy={d.p[1]} r={12} fill={RENK.altinAcik} stroke={RENK.murekkep} strokeWidth={3} />
            </g>
          ))}
        </svg>
        <Etiket t={t} bas={tInce} capa={[1165, 630]} konum={[1140, 470]} metin="SMALL INTESTINE" renk={RENK.altin} boyut={26} />
      </Kamera>
      <Panel a={1} taraf="sol" genislik={720} opak={1} />

      {/* 1 — midemiz */}
      {(() => {
        const [sc, al] = pop(t, tBir, 0.5);
        return (
          <div style={{ position: "absolute", left: 70, top: 168, width: 64, height: 64, borderRadius: "50%", background: RENK.lacivert,
            color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 38,
            transform: `scale(${sc})`, opacity: al }}>1</div>
        );
      })()}
      <Baslik t={t} bas={tMide - 0.05} metin="YOUR STOMACH" x={154} y={200} boyut={34} renk={RENK.lacivert} font="inter" aralik={5} />

      {/* tabaktan doğrudan kana: hayır */}
      {aA > 0 && (
        <div style={{ opacity: aA }}>
          {(() => {
            const [s1, a1] = pop(t, tTabak, 0.5);
            const [s2, a2] = pop(t, tKan, 0.5);
            return (
              <>
                <div style={{ position: "absolute", left: 70, top: 470, transform: `translateY(-50%) scale(${s1})`, transformOrigin: "0 50%", opacity: a1 }}>
                  <Hap metin="PLATE" renk={RENK.yesil} boyut={30} />
                </div>
                <div style={{ position: "absolute", left: 430, top: 470, transform: `translateY(-50%) scale(${s2})`, transformOrigin: "0 50%", opacity: a2 }}>
                  <Hap metin="BLOOD" renk={RENK.mercan} boyut={30} />
                </div>
                <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
                  {pOk > 0 && (
                    <g>
                      <line x1={278} y1={470} x2={278 + 120 * pOk} y2={470} stroke={RENK.lacivert} strokeWidth={6} strokeDasharray="14 10" strokeLinecap="round" />
                      <polygon points={`${400 + 120 * (pOk - 1) + 18},470 ${400 + 120 * (pOk - 1)},458 ${400 + 120 * (pOk - 1)},482`} fill={RENK.lacivert} />
                    </g>
                  )}
                </svg>
                <Ikon t={t} bas={tKan + 0.3} ad="carpi" x={345} y={470} boyut={66} zemin={RENK.mercan} />
                <Baslik t={t} bas={tKan + 0.45} metin="NOT STRAIGHT THROUGH" x={70} y={560} boyut={26} renk={RENK.gri} font="inter" aralik={3} />
              </>
            );
          })()}
        </div>
      )}

      {/* kapı bekçisi */}
      <BaslikBlok t={t} bas={tBekci - 0.18} satirlar={["THE", "GATEKEEPER"]} x={66} y={420} boyut={112} />
      {(() => {
        const [sc, al] = pop(t, tAzar, 0.55);
        return (
          <div style={{ position: "absolute", left: 70, top: 640, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al,
            display: "flex", alignItems: "center", gap: 14, background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`, borderRadius: 999,
            padding: "10px 26px 10px 12px", fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 2, color: RENK.murekkep,
            whiteSpace: "nowrap", boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
            <span style={{ width: 46, height: 46, borderRadius: "50%", background: RENK.altin, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <IkonYol ad="saat" boyut={32} renk="#fff" kalinlik={5} />
            </span>
            A LITTLE AT A TIME
          </div>
        );
      })()}
    </>
  );
};

export default S28;
