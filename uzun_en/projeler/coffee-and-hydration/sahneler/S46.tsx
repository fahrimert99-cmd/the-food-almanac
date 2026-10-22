// Sahne 46 — "İki: su da sofrada kalsın."
import React from "react";
import { ANTON, Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const pen = kameraYolu(t, s.sure, [20, 10, 1880], [70, 40, 1780]);
  const [sn, an] = pop(t, 0.05, 0.5);
  const tNo = K(2, "nothing in");
  return (
    <>
      <Kamera gorsel="tam/46" pencere={pen}>
        <Etiket t={t} bas={K(2, "baseline")} capa={[700, 470]} konum={[230, 440]} metin="THE BASELINE" renk={RENK.yesil} boyut={26} />
        <Etiket t={t} bas={K(2, "no caffeine")} capa={[890, 520]} konum={[1350, 300]} metin="NO CAFFEINE" renk={RENK.altin} boyut={26} />
      </Kamera>
      <div style={{ position: "absolute", left: 90, top: 100, width: 110, height: 110, borderRadius: "50%", background: RENK.lacivert, color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 76, transform: `scale(${sn})`, opacity: an,
        border: `4px solid ${RENK.kagitAcik}` }}>2</div>
      <Baslik t={t} bas={K(1, "water")} bitis={tNo - 0.2} metin="KEEP WATER IN THE MIX" x={1010} y={95} boyut={92} hiza="orta" renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tNo} metin="NO REASON TO GIVE IT UP" x={1010} y={95} boyut={80} hiza="orta" renk={RENK.lacivert} />
    </>
  );
};

export default S46;
