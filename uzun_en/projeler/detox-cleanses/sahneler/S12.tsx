// Sahne 12 — mineral dengesi: potasyum, sodyum, kalsiyum; sinir ve kas
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, Liste, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tMin = K(0, "minerals"), tPot = K(0, "potassium"), tSod = K(0, "sodium"), tCal = K(0, "calcium");
  const tWith = K(1, "Without that"), tNerv = K(1, "nerves"), tMus = K(1, "muscles"), tOth = K(1, "other tissues");
  const tRem = K(2, "Remember");
  const pP = eout(ilerle(t, tMin - 0.3, 0.7));
  return (
    <>
      <Kamera gorsel="tam/12" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1760])} />
      <Panel a={pP} taraf="sag" genislik={640} />
      <Etiket t={t} bas={K(0, "kidneys")} bitis={tWith} capa={[300, 450]} konum={[330, 130]} metin="KIDNEY" renk={RENK.mercan} />
      <BaslikBlok t={t} bas={tMin} satirlar={s.meta.baslik?.satirlar ?? []} x={1340} y={190} boyut={104} renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Liste t={t} x={1340} y={430} aralik={92} boyut={34} isaret="nokta" genislik={540} ogeler={[
        { bas: tPot, metin: "POTASSIUM", renk: RENK.altin, bitis: tWith },
        { bas: tSod, metin: "SODIUM", renk: RENK.altin, bitis: tWith },
        { bas: tCal, metin: "CALCIUM", renk: RENK.altin, bitis: tWith },
      ]} />
      <Not t={t} bas={tWith} metin="WITHOUT BALANCE, NIH SAYS:" x={1344} y={440} boyut={26} agirlik={800} renk={RENK.gri} genislik={540} />
      <Liste t={t} x={1340} y={500} aralik={92} boyut={34} isaret="carpi" genislik={540} ogeler={[
        { bas: tNerv, metin: "NERVES", renk: RENK.mercan },
        { bas: tMus, metin: "MUSCLES", renk: RENK.mercan },
        { bas: tOth, metin: "OTHER TISSUES", renk: RENK.mercan },
      ]} />
      <Baslik t={t} bas={tRem} metin="REMEMBER THIS" x={1340} y={850} boyut={64} renk={RENK.altin} />
    </>
  );
};

export default S12;
