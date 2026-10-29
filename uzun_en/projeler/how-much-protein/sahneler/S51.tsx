// Sahne 51 — adım 3: önce kahvaltı; yumurta, süzme peynir ve yoğurt.
import React from "react";
import { ANTON, Baslik, Etiket, INTER, Kamera, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S51: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sn, an] = pop(t, 0.0, 0.5);
  const aK = eout(ilerle(t, 0.0, 0.5));
  const tYog = K(3, "greek");
  return (
    <>
      <Kamera gorsel="tam/51" pencere={kameraYolu(t, s.sure, [40, 20, 1840], [120, 70, 1680])}>
        <Etiket t={t} bas={K(2, "eggs")} bitis={tYog - 0.3} capa={[860, 640]} konum={[860, 410]} metin="TWO EGGS" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "cottage")} bitis={tYog - 0.3} capa={[290, 540]} konum={[430, 400]} metin="½ CUP COTTAGE CHEESE" renk={RENK.yesil} />
        <Etiket t={t} bas={tYog} capa={[1310, 430]} konum={[1250, 180]} metin="PLAIN GREEK YOGURT" renk={RENK.koyuYesil} />
      </Kamera>
      {/* sol üstte adım başlığı, kâğıt zeminli */}
      <div style={{ position: "absolute", left: 56, top: 40, width: 840, height: 118, borderRadius: 59, background: "rgba(252,248,236,0.95)",
        border: `4px solid ${RENK.lacivert}`, opacity: aK, boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }}>
        <div style={{ position: "absolute", left: 12, top: 12, width: 86, height: 86, borderRadius: "50%", background: RENK.altin, color: "#fff",
          transform: `scale(${sn})`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 56 }}>3</div>
      </div>
      <Baslik t={t} bas={K(1, "fix")} metin="FIX BREAKFAST FIRST" x={170} y={99} boyut={70} renk={RENK.lacivert} />
      <div style={{ position: "absolute", left: 56, top: 176, opacity: eout(ilerle(t, K(1, "often"), 0.5)), background: "rgba(252,248,236,0.95)", borderRadius: 14,
        padding: "6px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 30, color: RENK.lacivert }}>OFTEN THE LIGHTEST</div>
      <VurguRozet t={t} bas={K(2, "25")} vurgu="≈ 25 G" x={960} y={760} genislik={340} boyut={92} />
    </>
  );
};

export default S51;
