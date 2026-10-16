// Sahne 35 — İlaçla karşılaştırma çalışmalar arasıydı; sarımsak ilaca eklenmişti, yerine geçmemişti.
import React from "react";
import { Baslik, Etiket, Kamera, Liste, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const aP = eout(ilerle(t, 0.2, 0.6));
  const b1 = K(1, "But") - 0.15;
  const b2 = K(2, "In") - 0.15;
  return (
    <>
      <Kamera gorsel="tam/35" pencere={kameraYolu(t, s.sure, [0, 0, 1800], [60, 40, 1640])}>
        {/* kutudaki sahte karalamayı hap örter */}
        <Etiket t={t} bas={K(2, "medicine")} capa={[820, 640]} konum={[820, 742]} metin="MEDICINE" renk={RENK.altin} />
      </Kamera>
      <Panel a={aP} taraf="sag" genislik={800} />
      <Not t={t} bas={K(0, "2010")} metin="2010 AUTHORS COMPARED WITH" x={1850} y={250} hiza="sag" boyut={30} agirlik={800} renk={RENK.altin} bitis={b1} />
      <Baslik t={t} bas={K(0, "first-line")} metin="FIRST-LINE" x={1850} y={360} boyut={100} hiza="sag" renk={RENK.lacivert} bitis={b1} />
      <Baslik t={t} bas={K(0, "blood pressure")} metin="BP DRUGS" x={1850} y={470} boyut={100} hiza="sag" renk={RENK.koyuYesil} bitis={b1} />
      <Liste t={t} isaret="onay" x={1130} y={310} boyut={34} genislik={720}
        ogeler={[{ bas: K(1, "comparison"), metin: "ACROSS STUDIES", renk: RENK.altin, bitis: b2 }]} />
      <Liste t={t} isaret="carpi" x={1130} y={420} boyut={34} genislik={720}
        ogeler={[{ bas: K(1, "not a"), metin: "NOT HEAD-TO-HEAD", renk: RENK.mercan, bitis: b2 }]} />
      <Baslik t={t} bas={K(2, "garlic")} metin="ADD-ON," x={1850} y={330} boyut={120} hiza="sag" renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(2, "not swapped")} metin="NOT SWAP" x={1850} y={470} boyut={120} hiza="sag" renk={RENK.mercan} />
    </>
  );
};
export default S35;
