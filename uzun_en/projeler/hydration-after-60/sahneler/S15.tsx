import React from "react";
import { Baslik, BaslikBlok, BolumKarti, Etiket, INTER, IkonYol, Kamera, KaynakEtiketi, Liste, Not, Panel, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Sahne 15 — Kenney & Chiu 2001: sağda akan panel
const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t1 = K(1, "Older adults") - 0.15, t2 = K(2, "But after") - 0.15;
  const x = 1340;
  return (
    <>
      <Kamera gorsel="tam/15" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 30, 1780])}>
        <Etiket t={t} bas={K(2, "without fluids")} capa={[910, 640]} konum={[560, 540]} metin="WITHOUT FLUIDS" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "heat")} capa={[990, 770]} konum={[620, 870]} metin="EXERCISE IN HEAT" renk={RENK.mercan} />
      </Kamera>
      <Panel a={1} genislik={880} opak={0.97} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(0, "Kenney")} />
      <BaslikBlok t={t} bas={K(0, "2001")} bitis={t1} satirlar={["2001", "REVIEW"]} x={x} y={260} boyut={110} />
      <Not t={t} bas={t1 + 0.1} bitis={t2} metin="OLDER ADULTS" x={x} y={200} boyut={30} renk={RENK.altin} agirlik={800} />
      <Liste t={t} x={x} y={270} boyut={34} isaret="onay" genislik={540} ogeler={[
        { bas: K(1, "drink enough"), metin: "USUALLY DRINK ENOUGH", bitis: t2 },
      ]} />
      <Not t={t} bas={K(1, "day to day")} bitis={t2} metin="day to day" x={x} y={350} boyut={30} renk={RENK.gri} />
      <Not t={t} bas={t2 + 0.1} metin="BUT AFTER:" x={x} y={170} boyut={30} renk={RENK.altin} agirlik={800} />
      <Liste t={t} x={x} y={230} aralik={84} boyut={32} isaret="nokta" genislik={540} ogeler={[
        { bas: K(2, "without fluids"), metin: "GOING WITHOUT FLUIDS", renk: RENK.altin },
        { bas: K(2, "exercising"), metin: "EXERCISING IN THE HEAT", renk: RENK.altin },
      ]} />
      <Liste t={t} x={x} y={470} aralik={84} boyut={34} isaret="carpi" genislik={540} ogeler={[
        { bas: K(2, "less thirst"), metin: "LESS THIRST", renk: RENK.mercan },
        { bas: K(2, "drink less"), metin: "DRINK LESS", renk: RENK.mercan },
      ]} />
      <BaslikBlok t={t} bas={K(2, "restore")} satirlar={["SLOWER", "TO RECOVER"]} x={x} y={720} boyut={92} renkler={[RENK.lacivert, RENK.koyuYesil]} />
    </>
  );
};
export default S15;
