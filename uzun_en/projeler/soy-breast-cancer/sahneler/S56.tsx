// Sahne 56 — İPUCU 3: takviyelere dikkat. Dolap solda; sağda başlık, etiketler ve doktor/eczacı notu.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S56: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik?.satirlar ?? ["PILLS ARE", "NOT FOOD"];
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1840]);
  const cik = K(2, "guidelines") - 0.15;
  return (
    <>
      <Kamera gorsel="tam/56" pencere={p}>
        <Etiket t={t} bas={K(2, "pills")} bitis={cik} capa={[650, 330]} konum={[980, 120]} metin="ISOFLAVONE PILLS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "powders")} bitis={cik} capa={[800, 385]} konum={[1330, 380]} metin="POWDERS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "food")} bitis={cik} capa={[890, 500]} konum={[1330, 580]} metin="FOOD" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={K(1, "supplements") - 0.5} bitis={cik} satirlar={b} x={1150} y={210} boyut={100}
        renkler={[RENK.lacivert, RENK.mercan]} adim={0.3} />
      <Baslik t={t} bas={K(2, "advise caution")} metin="ADVISE CAUTION" x={1180} y={150} boyut={90} renk={RENK.altin} />
      <Not t={t} bas={K(2, "guidelines")} metin="GUIDELINES SAY" x={1184} y={60} boyut={28} renk={RENK.gri} agirlik={800} />
      <Liste t={t} x={1180} y={330} aralik={96} boyut={38} isaret="onay" genislik={680} ogeler={[
        { bas: K(2, "doctor"), metin: "YOUR DOCTOR", renk: RENK.koyuYesil },
        { bas: K(2, "pharmacist"), metin: "OR PHARMACIST", renk: RENK.koyuYesil },
      ]} />
      <Not t={t} bas={K(2, "before taking")} metin="Talk before taking them." x={1184} y={540} boyut={34} renk={RENK.lacivert} genislik={640} />
    </>
  );
};

export default S56;
