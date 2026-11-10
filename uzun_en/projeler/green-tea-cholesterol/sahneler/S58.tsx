// Sahne 58 — özet: 31 deneme, ≈4,5 mg/dL LDL düşüşü; kanıtın çoğu özütten, içecekte daha küçük ve belirsiz.
import React from "react";
import { AbsoluteFill, Baslik, INTER, Kamera, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S58: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOrtu = K(1, "Most") - 0.2;
  const aOrtu = eout(ilerle(t, tOrtu, 0.6)) * 0.9;
  const tExt = K(1, "concentrated"), tDrk = K(2, "green tea"), tKucuk = K(2, "smaller"), tBel = K(2, "less certain");
  const X0 = 300, BW = 1300;
  const pE = eout(ilerle(t, tExt, 0.9));
  const pD = eout(ilerle(t, tKucuk, 0.8));
  const pU = eout(ilerle(t, tBel, 0.6));
  const [sT, aT] = pop(t, tExt, 0.5), [sD, aD] = pop(t, tDrk, 0.5);
  const bar = { position: "absolute" as const, left: X0, height: 64, borderRadius: 14 };
  return (
    <>
      <Kamera gorsel="tam/58" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])} />
      {/* 1. cümle: başlık ve rozet (sol üst boş kâğıt) */}
      <Baslik t={t} bas={K(0, "31")} bitis={tOrtu} metin="31 TRIALS" x={70} y={190} boyut={110} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(0, "four")} bitis={tOrtu} vurgu="–4.5 MG/DL" not="LDL cholesterol" x={330} y={290} genislik={540} renk={RENK.altin} />
      <AbsoluteFill style={{ backgroundColor: RENK.kagit, opacity: aOrtu }} />
      {/* 2.-3. cümle: kanıtın çoğu özütten; içecek etkisi küçük ve belirsiz */}
      <div style={{ opacity: aT, transform: `scale(${sT})`, transformOrigin: "0 50%" }}>
        <Baslik t={t} bas={tExt} metin="CONCENTRATED EXTRACT" x={X0} y={250} boyut={64} renk={RENK.lacivert} />
        <div style={{ ...bar, top: 320, width: BW * pE, background: RENK.koyuYesil }} />
        <div style={{ position: "absolute", left: X0, top: 400, opacity: pE, fontFamily: INTER, fontWeight: 700, fontSize: 28, color: RENK.lacivert }}>most of the evidence</div>
      </div>
      <div style={{ opacity: aD, transform: `scale(${sD})`, transformOrigin: "0 50%" }}>
        <Baslik t={t} bas={tDrk} metin="GREEN TEA AS A DRINK" x={X0} y={560} boyut={64} renk={RENK.lacivert} />
        <div style={{ ...bar, top: 630, width: BW * 0.38 * pD, background: RENK.yesil }} />
        {pU > 0 && <div style={{ ...bar, left: X0 + BW * 0.38, top: 630, width: BW * 0.62 * pU, border: `4px dashed ${RENK.yesil}`, borderLeft: "none",
          borderRadius: "0 14px 14px 0", background: "rgba(86,138,70,0.08)", boxSizing: "border-box" }} />}
        <div style={{ position: "absolute", left: X0, top: 710, opacity: pD, fontFamily: INTER, fontWeight: 700, fontSize: 28, color: RENK.lacivert }}>smaller, less certain drop</div>
      </div>
      <div style={{ position: "absolute", right: 320, top: 850, opacity: aT, fontFamily: INTER, fontWeight: 800, fontSize: 20, letterSpacing: 2,
        color: RENK.altin, border: `3px solid ${RENK.altin}`, borderRadius: 999, padding: "4px 14px", background: "#FCF6E6" }}>ILLUSTRATIVE</div>
    </>
  );
};

export default S58;
