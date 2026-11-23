// Sahne 27 — çalışmanın sınırları: küçük, karşılaştırma yok, savunuculuk finansmanı; "ipucu".
import React from "react";
import { Baslik, Etiket, Ikon, INTER, Kamera, Ortu, RENK, SP, einout, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const SATIR = (t: number, bas: number, y: number, ad: "onay" | "carpi", renk: string, ana: string, alt: string) => {
  const [sc, al] = pop(t, bas, 0.55);
  if (al <= 0) return null;
  return (
    <div key={ana} style={{ position: "absolute", left: 960, top: y, transform: `translate(-50%, 0) scale(${sc})`, opacity: al,
      display: "flex", alignItems: "center", gap: 28, background: "#FCF8EC", border: `4px solid ${renk}`, borderRadius: 26,
      padding: "20px 44px 20px 24px", boxShadow: "0 10px 26px rgba(48,40,34,0.18)", whiteSpace: "nowrap" }}>
      <span style={{ width: 84, height: 84, borderRadius: "50%", background: renk, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg width={50} height={50} viewBox="0 0 48 48" fill="none" stroke="#fff" strokeWidth={6} strokeLinecap="round" strokeLinejoin="round">
          {ad === "onay" ? <polyline points="9,25 20,36 39,13" /> : <><line x1="12" y1="12" x2="36" y2="36" /><line x1="36" y1="12" x2="12" y2="36" /></>}
        </svg>
      </span>
      <span>
        <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 44, color: renk, letterSpacing: 1 }}>{ana}</div>
        <div style={{ fontFamily: INTER, fontWeight: 600, fontSize: 28, color: RENK.lacivert }}>{alt}</div>
      </span>
    </div>
  );
};

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSmall = K(0, "small"), tNo = K(0, "no comparison"), tFund = K(0, "funded"), tClue = K(0, "treat it");
  const tDown = K(1, "exposure"), tUp = K(2, "health");
  const cik = K(1, "It") - 0.2;
  const pOrtu = eout(ilerle(t, cik, 0.5)) * 0.93;
  return (
    <>
      <Kamera gorsel="tam/27" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820])}>
        <Etiket t={t} bas={tSmall} bitis={cik} capa={[450, 400]} konum={[450, 190]} metin="SMALL" renk={RENK.altin} />
        <Etiket t={t} bas={tNo} bitis={cik} capa={[1130, 360]} konum={[1130, 110]} metin="NO COMPARISON GROUP" renk={RENK.mercan} />
        <Etiket t={t} bas={tFund} bitis={cik} capa={[1560, 640]} konum={[1560, 440]} metin="ADVOCACY-FUNDED" renk={RENK.lacivert} boyut={26} />
      </Kamera>
      <Baslik t={t} bas={tClue} bitis={cik} metin="A CLUE" x={1840} y={200} hiza="sag" boyut={100} renk={RENK.koyuYesil} />
      <Ortu a={pOrtu} />
      {SATIR(t, tDown, 330, "onay", RENK.yesil, "EXPOSURE GOES DOWN", "shown by the study")}
      {SATIR(t, tUp, 560, "carpi", RENK.mercan, "HEALTH GOES UP", "not shown")}
    </>
  );
};

export default S27;
