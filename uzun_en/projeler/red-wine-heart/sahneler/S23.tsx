// Sahne 23 — Çin'de 512.715 yetişkin, genetik analiz
import React from "react";
import { Baslik, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, ANTON, INTER, eout, ilerle, kameraYolu, kelimeZamani, sol } from "../kutuphane";

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tU = K(1, "U-shape");
  const a = eout(ilerle(t, tU - 0.3, 0.5)) * sol(t, K(2, "genes") - 0.3);
  const cizim = eout(ilerle(t, tU, 1.2));
  const tH = K(2, "different");
  return (
    <>
      <Kamera gorsel="tam/23" pencere={kameraYolu(t, s.sure, [0, 20, 1850], [50, 60, 1700])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <VurguRozet t={t} bas={K(0, "512,715")} bitis={K(0, "studied") - 0.2} vurgu="512,715" not="adults in China" x={1000} y={130} genislik={440} />
      <VurguRozet t={t} bas={K(0, "161,498")} bitis={K(1, "In") - 0.2} vurgu="161,498" not="had genes studied" x={1000} y={130} genislik={440} />
      {a > 0 && (
        <div style={{ position: "absolute", left: 1000, top: 130, width: 440, transform: "translate(-50%,0)", opacity: a, background: "#FCF8EC",
          border: `4px solid ${RENK.altin}`, borderRadius: 26, padding: "10px 18px 14px", textAlign: "center", boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }}>
          <svg width={200} height={110} viewBox="0 0 200 110">
            <path d="M20,10 C40,80 70,100 100,100 C130,100 160,80 180,10" fill="none" stroke={RENK.mercan} strokeWidth={9} strokeLinecap="round"
              pathLength={1} strokeDasharray={1} strokeDashoffset={1 - cizim} />
          </svg>
          <div style={{ fontFamily: ANTON, fontSize: 52, color: RENK.altin, lineHeight: 1.1 }}>U-SHAPE FOR STROKE</div>
          <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 24, color: RENK.lacivert }}>men, reported drinking</div>
        </div>
      )}
      {t >= tH && (
        <div style={{ position: "absolute", left: 1000, top: 130, width: 600, transform: "translate(-50%,0)", opacity: eout(ilerle(t, tH, 0.4)), background: "#FCF8EC",
          border: `4px solid ${RENK.koyuYesil}`, borderRadius: 26, padding: "6px 20px 10px", textAlign: "center", boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }}>
          <Baslik t={t} bas={tH} metin="THE GENES: A DIFFERENT STORY" x={300} y={46} boyut={44} renk={RENK.koyuYesil} hiza="orta" />
          <div style={{ height: 70 }} />
        </div>
      )}
    </>
  );
};
export default S23;
