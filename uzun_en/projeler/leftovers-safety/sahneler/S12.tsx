// Sahne 12 — Virginia: gece pilav tenceresi, etiketler ve sağda B. cereus bulguları.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Liste, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBac = K(2, "Bacillus");
  const pPanel = eout(ilerle(t, tBac - 0.2, 0.6));
  return (
    <>
      <Kamera gorsel="tam/12" pencere={kameraYolu(t, s.sure, [60, 40, 1800], [140, 80, 1620])}>
        <Etiket t={t} bas={K(1, "rice")} bitis={tBac} capa={[540, 640]} konum={[390, 730]} metin="COOKED RICE" renk={RENK.altin} boyut={28} />
        <Etiket t={t} bas={K(1, "night")} bitis={tBac} capa={[540, 260]} konum={[960, 170]} metin="NIGHT BEFORE" renk={RENK.altin} boyut={28} />
        <Etiket t={t} bas={K(1, "room")} bitis={tBac} capa={[480, 800]} konum={[330, 880]} metin="ROOM TEMPERATURE" renk={RENK.mercan} boyut={28} />
        <Etiket t={t} bas={K(1, "refrigeration.")} bitis={tBac} capa={[1330, 480]} konum={[1090, 640]} metin="REFRIGERATION" renk={RENK.yesil} boyut={28} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={820} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={K(0, "Virginia.")} />
      <Baslik t={t} bas={tBac} metin="BACILLUS" x={1860} y={280} boyut={110} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={tBac + 0.18} metin="CEREUS" x={1860} y={400} boyut={110} renk={RENK.koyuYesil} hiza="sag" />
      <Liste t={t} x={1140} y={540} aralik={96} boyut={32} isaret="onay" genislik={700}
        ogeler={[
          { bas: K(2, "rice"), metin: "IN THE LEFTOVER RICE", renk: RENK.yesil },
          { bas: K(2, "child's"), metin: "IN A SICK CHILD'S VOMIT", renk: RENK.mercan },
        ]} />
    </>
  );
};

export default S12;
