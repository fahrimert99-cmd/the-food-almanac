// Sahne 50 — mit: sirke, limon, tuzlu su; yalnızca ısı.
import React from "react";
import { BaslikBlok, Etiket, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tMyth = K(0, "myth"), tVin = K(1, "vinegar"), tLem = K(1, "lemon"), tSalt = K(1, "salt water");
  const tNot = K(1, "doesn't"), tHeat = K(2, "heat"), tKills = K(2, "kills");
  const bit = K(2, "only") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/50" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840])}>
        <Etiket t={t} bas={tVin} bitis={bit} capa={[980, 740]} konum={[1500, 540]} metin="VINEGAR" renk={RENK.altin} />
        <Etiket t={t} bas={tLem} bitis={bit} capa={[1150, 650]} konum={[1500, 640]} metin="LEMON JUICE" renk={RENK.altin} />
        <Etiket t={t} bas={tSalt} bitis={bit} capa={[1130, 880]} konum={[1500, 760]} metin="SALT WATER" renk={RENK.altin} />
        <Etiket t={t} bas={tHeat} capa={[985, 640]} konum={[1480, 560]} metin="ONLY HEAT" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={tMyth} satirlar={["MYTH:", "A RINSE", "MAKES IT SAFE"]} x={1300} y={170} boyut={90}
        renkler={[RENK.mercan, RENK.lacivert, RENK.lacivert]} />
      {[540, 640, 760].map((y, i) => (
        <Ikon key={y} t={t} bas={tNot + i * 0.3} bitis={bit} ad="carpi" x={1780} y={y} boyut={64} zemin={RENK.mercan} />
      ))}
      <Ikon t={t} bas={tKills} ad="onay" x={1780} y={560} boyut={64} zemin={RENK.yesil} />
    </>
  );
};

export default S50;
