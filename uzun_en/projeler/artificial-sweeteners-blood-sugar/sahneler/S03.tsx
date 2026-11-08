// Sahne 3 — "ne gösteriyor, hangi tatlandırıcı?" ürün sırası + büyüteç.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/03" pencere={kameraYolu(t, s.sure, [20, 10, 1880], [120, 60, 1700])}>
        {/* ölçüm cihazı ekranındaki bozuk rakamlar örtülür */}
        <div style={{ position: "absolute", left: 1498, top: 606, width: 86, height: 54, borderRadius: 8, background: "#B7D4B0" }} />
        <Etiket t={t} bas={K(0, "sweetener")} bitis={K(0, "look") - 0.3} capa={[820, 560]} konum={[760, 330]} metin="WHICH SWEETENER?" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "ingredient")} capa={[1150, 600]} konum={[1250, 390]} metin="INGREDIENT LIST" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "evidence") - 0.2} metin="WHAT THE EVIDENCE SHOWS" x={960} y={95} boyut={84} hiza="orta" renk={RENK.koyuYesil} />
    </>
  );
};

export default S03;
