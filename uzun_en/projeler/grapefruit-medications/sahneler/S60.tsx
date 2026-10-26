// Sahne 60 — özet: portakal güvenli seçenek, limon büyük olasılıkla düşük risk, Seville/pomelo/tangelo dikkat.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S60: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSon = K(3, "never");
  return (
    <>
      <Kamera gorsel="tam/60" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [100, 110, 1720])}>
        <Etiket t={t} bas={K(0, "oranges")} bitis={2.4} capa={[640, 650]} konum={[560, 300]} metin="COMMON ORANGES" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "Lemons")} bitis={4.5} capa={[1280, 680]} konum={[1280, 290]} metin="LEMONS: LIKELY LOW RISK" renk={RENK.yesil} boyut={26} />
        <Etiket t={t} bas={K(2, "like")} bitis={tSon - 0.2} capa={[1600, 800]} konum={[1650, 560]} metin="LIKE GRAPEFRUIT" renk={RENK.mercan} />
      </Kamera>
      <Liste t={t} x={1180} y={120} isaret="nokta" boyut={36} aralik={80} genislik={640} ogeler={[
        { bas: K(2, "Seville"), metin: "SEVILLE ORANGES", renk: RENK.mercan, bitis: tSon - 0.2 },
        { bas: K(2, "pomelos"), metin: "POMELOS", renk: RENK.mercan, bitis: tSon - 0.2 },
        { bas: K(2, "tangelos"), metin: "TANGELOS", renk: RENK.mercan, bitis: tSon - 0.2 },
      ]} />
      <BaslikBlok t={t} bas={tSon} satirlar={["NEVER STOP", "ON YOUR OWN"]} x={90} y={150} boyut={92}
        renkler={[RENK.lacivert, RENK.mercan]} />
    </>
  );
};

export default S60;
