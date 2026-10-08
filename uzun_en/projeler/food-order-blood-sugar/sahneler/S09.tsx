// Sahne 9 — diyabeti olmayan birinde yemek sonrası "normal eğri": 2–3 saatte iner, 2. saatte ~140 mg/dL altında.
import React from "react";
import { ANTON, Baslik, BaslikBlok, Etiket, INTER, KanSekeriGrafigi, Kamera, RENK, SP, egriDeger, eout, ilerle, kameraYolu,
  kelimeZamani, pop, sol } from "../kutuphane";

// Görsel (tam/09): solda gövde + kol, kolda sensör (x 280–400, y 410–560; üstünde sahte "33" yazısı ve çatlak çizgiler),
// sağ altta boş tabak (x 1190–1870, y 725–935), en altta kesik el (y > 1000). Kusurlar kamera penceresiyle dışarıda:
// pencere x >= 420 (sensör, sahte "33" ve gövde yok), alt kenar 935–940 (tabak tam görünür, el yok).
// Ortadaki geniş boş kâğıda grafik çizilir.
// Temsili eğri (mg/dL); çizimde 50 çıkarılır (eksen sayısız, kesik eksen). 140 eşiği ve 2–3 saat anlatımdan.
const NORMAL: [number, number][] = [[0, 90], [15, 108], [30, 124], [45, 130], [60, 126], [90, 112], [120, 102], [150, 94], [180, 90]];
const KAY = 50;
const EGRI = NORMAL.map(([m, v]) => [m, v - KAY] as [number, number]);
const X0 = 600, X1 = 1400, YT = 300, YB = 690, YMAX = 100, XMAX = 180;
const xs = (m: number) => X0 + (m / XMAX) * (X1 - X0);
const ys = (v: number) => YB - (v / YMAX) * (YB - YT);

// rozet satırı: söylendiğinde yükseklik açılır ve belirir
const Satir: React.FC<{ p: number; h: number; children: React.ReactNode }> = ({ p, h, children }) => (
  <div style={{ height: h * p, opacity: p, overflow: "hidden" }}>{children}</div>
);

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pen = kameraYolu(t, s.sure, [420, 96, 1500], [450, 125, 1440]);
  const tKisi = K(0, "without diabetes"), tBS = K(0, "blood sugar"), tArt = K(0, "rises"), tYemek = K(0, "after a meal");
  const tSaat = K(0, "two to three hours"), t140 = K(0, "140"), tMg = K(0, "milligrams"), tMmol = K(0, "7.8");
  const t2s = K(0, "two-hour mark");
  const aEtk = eout(ilerle(t, tBS - 0.1, 0.6));
  const pBant = eout(ilerle(t, tSaat - 0.05, 0.6));
  const [sr, ar] = pop(t, t140, 0.6);
  const satir = (b: number) => eout(ilerle(t, b, 0.45));
  const [sd, ad] = pop(t, t2s + 0.1, 0.5);
  const y120 = ys(egriDeger(EGRI, 120));
  return (
    <>
      <Kamera gorsel="tam/09" pencere={pen}>
        <Etiket t={t} bas={tYemek} bitis={t140 - 0.3} capa={[1515, 748]} konum={[1730, 690]} metin="AFTER A MEAL" renk={RENK.altin} boyut={24} />
      </Kamera>
      {/* başlık: sol üst */}
      <Baslik t={t} bas={tKisi - 0.1} metin="WITHOUT DIABETES" x={94} y={96} boyut={26} renk={RENK.altin} font="inter" aralik={5} />
      <BaslikBlok t={t} bas={tKisi + 0.15} satirlar={["THE NORMAL", "CURVE"]} x={90} y={170} boyut={88} />
      {/* 2–3 saat bandı (eğrinin altında kalır) */}
      {pBant > 0 && (
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          <rect x={xs(120)} y={YT} width={(xs(180) - xs(120)) * pBant} height={YB - YT} fill={RENK.yesil} opacity={0.12} />
        </svg>
      )}
      <KanSekeriGrafigi t={t} egriler={[{ noktalar: EGRI, renk: RENK.yesil }]} cizimBas={tArt} cizimSure={3.6}
        x0={X0} x1={X1} yt={YT} yb={YB} ymax={YMAX} xmax={XMAX} taban={NORMAL[0][1] - KAY} eksenBas={tBS - 0.1}
        dkEtiketleri={[0, 60, 120, 180]} esik={{ deger: 140 - KAY, etiket: "140 mg/dL", bas: t140 }}
        isaretler={[{ dk: 120, bas: t2s }]} />
      <div style={{ position: "absolute", left: xs(150), top: 640, transform: `translate(-50%, -50%) translateY(${(1 - pBant) * 10}px)`,
        opacity: pBant, fontFamily: ANTON, fontSize: 44, lineHeight: 1, color: RENK.koyuYesil, whiteSpace: "nowrap" }}>2–3 HOURS</div>
      {/* 2. saat noktası */}
      {ad > 0 && (
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          <circle cx={xs(120)} cy={y120} r={15 * sd} fill={RENK.kagitAcik} stroke={RENK.lacivert} strokeWidth={5} opacity={ad} />
        </svg>
      )}
      {/* ILLUSTRATIVE etiketi */}
      <div style={{ position: "absolute", left: X0, top: 222, opacity: aEtk, fontFamily: INTER, fontWeight: 800, fontSize: 22,
        letterSpacing: 2, color: RENK.altin, border: `3px solid ${RENK.altin}`, background: "#FCF6E6", borderRadius: 999,
        padding: "5px 16px" }}>ILLUSTRATIVE</div>
      {/* <140 rozeti: satırlar söylendikçe gelir */}
      {ar > 0 && (
        <div style={{ position: "absolute", left: 1665, top: 300, width: 370, transform: `translate(-50%, 0) scale(${sr})`,
          transformOrigin: "50% 0", opacity: ar * sol(t, 1e9), padding: "8px 18px 18px", textAlign: "center", background: "#FCF8EC",
          border: `4px solid ${RENK.altin}`, borderRadius: 26, boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }}>
          <div style={{ fontFamily: ANTON, fontSize: 112, lineHeight: 1.05, color: RENK.altin }}>&lt;140</div>
          <Satir p={satir(tMg)} h={42}>
            <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 32, lineHeight: "42px", color: RENK.lacivert }}>mg/dL</div>
          </Satir>
          <Satir p={satir(tMmol)} h={38}>
            <div style={{ fontFamily: INTER, fontWeight: 700, fontSize: 28, lineHeight: "38px", color: RENK.gri }}>(7.8 mmol/L)</div>
          </Satir>
          <Satir p={satir(t2s)} h={52}>
            <div style={{ marginTop: 8, display: "inline-block", fontFamily: INTER, fontWeight: 800, fontSize: 24, letterSpacing: 2,
              color: "#fff", background: RENK.lacivert, borderRadius: 999, padding: "6px 18px" }}>AT 2 HOURS</div>
          </Satir>
        </div>
      )}
    </>
  );
};

export default S09;
