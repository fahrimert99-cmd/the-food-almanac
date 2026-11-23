// Sahne 51 — Akan suyun altında yıka: musluk, kevgir, "FREE" rozeti
import React from "react";
import { ANTON, BaslikBlok, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S51: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFour = K(0, "Four"), tWash = K(1, "running"), tOrg = K(1, "organic"), tStd = K(2, "standard"), tCost = K(2, "costs");
  const [sc, al] = pop(t, tFour, 0.5);
  return (
    <>
      <Kamera gorsel="tam/51" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1780])}>
        <Etiket t={t} bas={tWash} bitis={tStd} capa={[967, 420]} konum={[1380, 250]} metin="RUNNING WATER" renk={RENK.lacivert} />
        <Etiket t={t} bas={tStd} capa={[533, 727]} konum={[350, 880]} metin="FOOD-SAFETY ADVICE" renk={RENK.yesil} boyut={26} />
      </Kamera>
      <div style={{ position: "absolute", left: 56, top: 56, width: 84, height: 84, borderRadius: "50%", background: RENK.lacivert, color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 54, transform: `scale(${sc})`, opacity: al }}>4</div>
      <BaslikBlok t={t} bas={tOrg} bitis={tStd - 0.1} satirlar={["ORGANIC", "OR NOT"]} x={70} y={340} boyut={88} />
      <VurguRozet t={t} bas={tCost} vurgu="FREE" not="IT COSTS NOTHING" x={235} y={330} genislik={380} boyut={104} renk={RENK.koyuYesil} />
    </>
  );
};

export default S51;
