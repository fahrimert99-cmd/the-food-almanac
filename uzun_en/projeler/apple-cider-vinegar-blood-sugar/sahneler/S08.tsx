// Sahne 8 — tüp solda; önce iki durum listesi, sonra sağ panelde "HIGHER AND LONGER" (garip kadran panelle örtülü).
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tPanel = s.cumleler[1].bas - 0.1;
  return (
    <>
      <Kamera gorsel="tam/08" pencere={kameraYolu(t, s.sure, [0, 0, 1860], [40, 40, 1700])}>
        <Etiket t={t} bas={K(1, "blood")} capa={[440, 560]} konum={[760, 560]} metin="BLOOD SUGAR" renk={RENK.mercan} />
      </Kamera>
      <Panel a={eout(ilerle(t, tPanel, 0.7))} taraf="sag" genislik={1000} />
      <Liste t={t} x={700} y={250} aralik={110} boyut={46} genislik={900} isaret="nokta" ogeler={[
        { bas: K(0, "type"), metin: "TYPE 2 DIABETES", renk: RENK.mercan, bitis: tPanel - 0.1 },
        { bas: K(0, "prediabetes,"), metin: "PREDIABETES", renk: RENK.altin, bitis: tPanel - 0.1 },
      ]} />
      <Not t={t} bas={K(0, "less")} bitis={tPanel - 0.1} metin="works less smoothly" x={700} y={500} boyut={40} genislik={800} />
      <BaslikBlok t={t} bas={K(1, "higher,")} satirlar={["HIGHER", "AND LONGER"]} x={1860} y={400} boyut={120} hiza="sag"
        renkler={[RENK.mercan, RENK.lacivert]} adim={K(1, "longer.") - K(1, "higher,") - 0.3} />
    </>
  );
};

export default S08;
