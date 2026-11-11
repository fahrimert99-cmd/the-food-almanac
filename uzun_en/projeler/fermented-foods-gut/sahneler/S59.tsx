// Sahne 59 — özet: pratik adımlar (kahvaltı masası, sol üstte onay listesi).
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Not, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S59: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSon = K(1, "Small");
  const aYama = eout(ilerle(t, 0.1, 0.5));
  const bit = tSon - 0.15;
  return (
    <>
      <Kamera gorsel="tam/59" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])}>
        <Etiket t={t} bas={K(0, "plain")} bitis={tSon} capa={[440, 690]} konum={[190, 830]} metin="PLAIN" renk={RENK.yesil} />
      </Kamera>
      <div style={{ position: "absolute", left: 0, top: 0, width: 880, height: 400, opacity: aYama * 0.9,
        background: `radial-gradient(ellipse 60% 60% at 40% 45%, ${kagit(0.92)} 0%, ${kagit(0.7)} 60%, ${kagit(0)} 100%)` }} />
      <Liste t={t} isaret="onay" x={80} y={70} aralik={72} boyut={34} genislik={760} ogeler={[
        { bas: K(0, "plain"), metin: "CHOOSE PLAIN", bitis: bit },
        { bas: K(0, "check"), metin: "CHECK THE SUGAR", bitis: bit },
        { bas: K(0, "eat"), metin: "EAT REGULARLY", bitis: bit },
        { bas: K(0, "enjoy"), metin: "ONE PART OF A VARIED DIET", bitis: bit },
      ]} />
      <BaslikBlok t={t} bas={tSon} satirlar={["SMALL, CALM", "HABITS"]} x={80} y={120} boyut={92} />
      <Not t={t} bas={K(1, "beat")} metin="BEAT BIG PROMISES" x={84} y={300} boyut={38} agirlik={800} />
    </>
  );
};

export default S59;
