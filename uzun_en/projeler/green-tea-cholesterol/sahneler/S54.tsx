// Sahne 54 — İpucu 3: fincana ne giriyor? Şişe, besin etiketi alanı, şeker ve demlik etiketlenir.
import React from "react";
import { ANTON, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sb, ab] = pop(t, 0.05, 0.55);
  return (
    <>
      <Kamera gorsel="tam/54" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [70, 50, 1780])} />
      <div style={{ position: "absolute", left: 150, top: 120, transform: `scale(${sb})`, opacity: ab, width: 92, height: 92, borderRadius: "50%",
        background: RENK.lacivert, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 60 }}>3</div>
      <Etiket t={t} bas={K(2, "bottled")} bitis={K(2, "Nutrition") - 0.2} capa={[545, 330]} konum={[820, 130]} metin="BOTTLED GREEN TEA" renk={RENK.gri} />
      <Etiket t={t} bas={K(2, "Nutrition")} capa={[545, 620]} konum={[250, 560]} metin="NUTRITION FACTS" renk={RENK.lacivert} />
      <Etiket t={t} bas={K(2, "added")} capa={[760, 790]} konum={[900, 150]} metin="ADDED SUGARS" renk={RENK.mercan} />
      <Etiket t={t} bas={K(2, "brew")} capa={[1500, 520]} konum={[1450, 150]} metin="BREW YOUR OWN" renk={RENK.yesil} />
    </>
  );
};

export default S54;
