// Sahne 53 — ipucu 2: etikette "Ceylon" ara.
import React from "react";
import { ANTON, Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sb, ab] = pop(t, 0.05, 0.5);
  return (
    <>
      <Kamera gorsel="tam/53" pencere={kameraYolu(t, s.sure, [30, 10, 1860], [120, 60, 1700])}>
        <Etiket t={t} bas={K(1, "label")} bitis={K(2, "cinnamon") - 0.05} capa={[760, 470]} konum={[1130, 500]} metin="LABEL" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(2, "cinnamon")} bitis={K(2, "cassia") - 0.05} capa={[760, 470]} konum={[1130, 500]} metin="SAYS CINNAMON" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "cassia")} capa={[760, 470]} konum={[1130, 500]} metin="MAY BE CASSIA" renk={RENK.mercan} />
      </Kamera>
      <div style={{ position: "absolute", left: 1250, top: 100, transform: `scale(${sb})`, opacity: ab, width: 100, height: 100, borderRadius: "50%",
        background: RENK.altin, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON,
        fontSize: 70, border: `5px solid ${RENK.kagitAcik}` }}>2</div>
      <Baslik t={t} bas={K(1, "every day,")} metin="EVERY DAY?" x={1860} y={110} boyut={34} renk={RENK.altin} hiza="sag" font="inter" aralik={6} />
      <Baslik t={t} bas={K(1, "look for")} metin="LOOK FOR" x={1860} y={215} boyut={110} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(1, "Ceylon.")} metin="CEYLON" x={1860} y={335} boyut={110} renk={RENK.koyuYesil} hiza="sag" />
    </>
  );
};

export default S53;
