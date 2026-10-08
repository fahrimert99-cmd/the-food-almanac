// Sahne 55 — Özet: küçük çalışmalarda sebze + protein önce -> kan şekeri yükselişi daha düşük.
// Düzen: önce tabakta yemek etiketleri; "rise" ile görüntü sola kayar, sağ panelde iki temsili çubuk çifti
// (orijinal çalışma ≈ 1/3, takip çalışması ≈ yarı). Çubuklar yalnızca anlatımdaki oranları gösterir (ILLUSTRATIVE, sayısız eksen).
import React from "react";
import { ANTON, Baslik, Etiket, INTER, Kamera, KaynakEtiketi, Not, Pencere, RENK, SP, einout, eout, ilerle, kagit,
  kelimeZamani, pencereAra, pop } from "../kutuphane";

// grafik (ekran koordinatı)
const CX = 1480;               // sağ sütun ortası
const YB = 800, H = 270;       // taban ve tam çubuk yüksekliği
const CW = 112;                // çubuk genişliği
const GRUP = [1270, 1690];     // grup ortaları

const Rozet: React.FC<{ t: number; bas: number; notBas: number; vurgu: string; not: string; x: number }> = ({ t, bas, notBas, vurgu, not, x }) => {
  const [sc, al] = pop(t, bas, 0.6);
  if (al <= 0) return null;
  const an = eout(ilerle(t, notBas, 0.45));
  return (
    <div style={{ position: "absolute", left: x, top: 392, width: 300, transform: `translate(-50%, 0) scale(${sc})`, transformOrigin: "50% 100%",
      opacity: al, padding: "4px 0 10px", textAlign: "center", background: "#FCF8EC", border: `4px solid ${RENK.altin}`, borderRadius: 24,
      boxShadow: "0 10px 26px rgba(48,40,34,0.16)" }}>
      <div style={{ fontFamily: ANTON, fontSize: 64, lineHeight: 1.1, color: RENK.altin, whiteSpace: "nowrap" }}>{vurgu}</div>
      <div style={{ opacity: an, fontFamily: INTER, fontWeight: 800, fontSize: 20, letterSpacing: 1.5, color: RENK.lacivert, whiteSpace: "nowrap" }}>{not}</div>
    </div>
  );
};

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const z = ilerle(t, 0, s.sure);
  const tKucuk = K(0, "small studies"), tSebze = K(0, "vegetables"), tProt = K(0, "protein"), tKarb = K(0, "carbohydrates");
  const tRise = K(0, "rise"), tKan = K(0, "blood sugar"), tOgun = K(0, "after a meal");
  const t1 = K(1, "By about"), tUc = K(1, "third"), tSaat = K(1, "one-hour"), tOrj = K(1, "original study");
  const t2 = K(1, "by roughly"), tYari = K(1, "half"), tTakip = K(1, "follow-up");

  // kamera: önce tabak ortada; "rise" ile sola kayar (sağ taraf panelin altında kalır)
  const pPan = einout(ilerle(t, tRise, 1.1));
  const p1: Pencere = [30 + 40 * z, 18 + 12 * z, 1860 - 50 * z];
  const p2: Pencere = [470 + 20 * z, 12, 1880 - 12 * z];
  const pPanel = eout(ilerle(t, tRise - 0.05, 0.35));
  const panelSol = 1400 - 520 * pPan;
  const cikis = tRise + 0.05;

  const aLeg = eout(ilerle(t, tOgun + 0.45, 0.5));
  const cubuklar = [
    { g: 0, renk: RENK.mercan, oran: 1, bas: t1 },
    { g: 0, renk: RENK.yesil, oran: 2 / 3, bas: t1 + 0.25 },
    { g: 1, renk: RENK.mercan, oran: 1, bas: t2 },
    { g: 1, renk: RENK.yesil, oran: 0.5, bas: t2 + 0.25 },
  ];
  const hayalet = [{ g: 0, oran: 2 / 3, bas: tUc }, { g: 1, oran: 0.5, bas: tYari }];
  const aTaban = [eout(ilerle(t, t1 - 0.3, 0.5)), eout(ilerle(t, t2 - 0.3, 0.5))];
  return (
    <>
      <Kamera gorsel="tam/55" pencere={pencereAra(p1, p2, pPan)} sinirla={false}>
        <Etiket t={t} bas={tSebze - 0.1} bitis={cikis} capa={[1300, 410]} konum={[1700, 270]} metin="VEGETABLES" renk={RENK.yesil} />
        <Etiket t={t} bas={tProt - 0.1} bitis={cikis} capa={[700, 680]} konum={[200, 640]} metin="PROTEIN" renk={RENK.yesil} />
        <Etiket t={t} bas={tKarb - 0.1} bitis={cikis} capa={[640, 250]} konum={[225, 330]} metin="THEN CARBS" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} bas={tKucuk - 0.1} bitis={tRise - 0.1} metin="IN SMALL STUDIES" />

      {/* sağ panel (görselin sağ kenarı bunun altında kalır) */}
      {/* panel, kayan görselin sağ kenarını takip ederek sağdan gelir (opak kısım hep kenarın solunda) */}
      <div style={{ position: "absolute", left: panelSol, right: 0, top: 0, bottom: 0, opacity: pPanel,
        background: `linear-gradient(to right, ${kagit(0)} 0px, ${kagit(0.995)} 150px, ${kagit(1)} 230px, ${kagit(1)} 100%)` }} />

      {/* başlık */}
      <Baslik t={t} bas={tRise + 0.3} metin="IN SMALL STUDIES" x={CX} y={152} boyut={26} renk={RENK.altin} hiza="orta" font="inter" aralik={6} />
      <Baslik t={t} bas={tKan - 0.05} metin="A SMALLER RISE" x={CX} y={222} boyut={84} renk={RENK.lacivert} hiza="orta" />
      <Not t={t} bas={tOgun - 0.1} metin="in blood sugar after a meal" x={CX} y={270} hiza="orta" boyut={30} agirlik={500} />

      {/* lejant + ILLUSTRATIVE */}
      <div style={{ position: "absolute", left: CX, top: 340, transform: `translate(-50%, -50%) translateY(${(1 - aLeg) * 10}px)`, opacity: aLeg,
        display: "flex", alignItems: "center", gap: 22, whiteSpace: "nowrap", fontFamily: INTER, fontWeight: 800, fontSize: 21, letterSpacing: 1.5,
        color: RENK.lacivert }}>
        {[{ m: "CARBS FIRST", r: RENK.mercan }, { m: "VEG + PROTEIN FIRST", r: RENK.yesil }].map((o) => (
          <span key={o.m} style={{ display: "flex", alignItems: "center", gap: 9 }}>
            <span style={{ width: 18, height: 18, borderRadius: 5, background: o.r }} />{o.m}
          </span>
        ))}
        <span style={{ fontSize: 17, letterSpacing: 2, color: RENK.altin, border: `2.5px solid ${RENK.altin}`, background: "#FCF6E6",
          borderRadius: 999, padding: "3px 11px" }}>ILLUSTRATIVE</span>
      </div>

      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        {GRUP.map((gx, g) => (
          <line key={g} x1={gx - 150} x2={gx - 150 + 300 * aTaban[g]} y1={YB} y2={YB} stroke={RENK.murekkep} strokeWidth={4}
            strokeLinecap="round" opacity={aTaban[g]} />
        ))}
        {cubuklar.map((c, i) => {
          const p = eout(ilerle(t, c.bas, 0.9));
          if (p <= 0) return null;
          const h = H * c.oran * p;
          const x = GRUP[c.g] + (c.renk === RENK.mercan ? -64 : 64);
          return (
            <g key={i}>
              <rect x={x - CW / 2} y={YB - h} width={CW} height={h} rx={10} fill={c.renk} />
              <rect x={x - CW / 2} y={YB - h} width={CW * 0.18} height={h} rx={6} fill="#fff" opacity={0.18} />
            </g>
          );
        })}
        {/* azalan kısım: kesikli referans çizgisi + boş çubuk parçası + aşağı ok */}
        {hayalet.map((h, i) => {
          const p = eout(ilerle(t, h.bas, 0.6));
          if (p <= 0) return null;
          const gx = GRUP[h.g], yTepe = YB - H, yYesil = YB - H * h.oran;
          const xs = gx + 64;
          return (
            <g key={i} opacity={p}>
              <line x1={gx - 64 + CW / 2} x2={gx - 64 + CW / 2 + (128) * p} y1={yTepe} y2={yTepe} stroke={RENK.murekkep} strokeOpacity={0.55}
                strokeWidth={3} strokeDasharray="10 9" />
              <rect x={xs - CW / 2 + 2} y={yTepe + 2} width={CW - 4} height={Math.max(0, (yYesil - yTepe - 6) * p)} rx={10} fill="none"
                stroke={RENK.yesil} strokeWidth={3.5} strokeDasharray="9 8" />
              <line x1={xs} x2={xs} y1={yTepe + 14} y2={yTepe + 14 + (yYesil - yTepe - 40) * p} stroke={RENK.altin} strokeWidth={6} strokeLinecap="round" />
              <polygon points={`${xs - 12},${yYesil - 30} ${xs + 12},${yYesil - 30} ${xs},${yYesil - 14}`} fill={RENK.altin} opacity={p > 0.9 ? 1 : 0} />
            </g>
          );
        })}
      </svg>

      <Rozet t={t} bas={tUc - 0.05} notBas={tSaat} vurgu="≈ 1/3" not="LOWER AT 1 HOUR" x={GRUP[0]} />
      <Rozet t={t} bas={tYari - 0.05} notBas={tYari + 0.25} vurgu="≈ HALF" not="LOWER RISE" x={GRUP[1]} />
      <Baslik t={t} bas={tOrj - 0.05} metin="ORIGINAL STUDY" x={GRUP[0]} y={838} boyut={26} renk={RENK.lacivert} hiza="orta" font="inter" aralik={2} />
      <Baslik t={t} bas={tTakip - 0.05} metin="FOLLOW-UP" x={GRUP[1]} y={838} boyut={26} renk={RENK.lacivert} hiza="orta" font="inter" aralik={2} />
    </>
  );
};

export default S55;
