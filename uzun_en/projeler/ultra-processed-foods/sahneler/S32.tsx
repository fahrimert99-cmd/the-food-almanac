// Sahne 32 — cam fanus altındaki yiyecek; kanıt derecelendirmesi listesi, sonra "bir tuzak var".
import React from "react";
import { Baslik, Ikon, Kamera, Liste, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tListe = K(0, "convincing");
  const tSon = K(1, "alarming");
  const tTuzak = K(2, "catch");
  const pL = eout(ilerle(t, tListe - 0.2, 0.6)) * (1 - eout(ilerle(t, tSon + 0.4, 0.5)));
  const pR = eout(ilerle(t, tSon - 0.2, 0.6));
  return (
    <>
      <Kamera gorsel="tam/32" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 34, 1800])} />
      <Panel a={pL} taraf="sol" genislik={700} />
      <Not t={t} bas={tListe} metin="GRADED CONVINCING FOR" x={60} y={250} boyut={30} renk={RENK.altin} agirlik={800} bitis={tSon + 0.4} />
      <Liste t={t} isaret="onay" x={60} y={320} aralik={92} boyut={32} genislik={620} ogeler={[
        { bas: K(0, "heart"), metin: "HEART DISEASE DEATHS", bitis: tSon + 0.4 },
        { bas: K(0, "type"), metin: "TYPE 2 DIABETES", bitis: tSon + 0.4 },
        { bas: K(0, "anxiety"), metin: "ANXIETY", bitis: tSon + 0.4 },
        { bas: K(0, "common"), metin: "COMMON MENTAL DISORDERS", bitis: tSon + 0.4 },
      ]} />
      <Panel a={pR} taraf="sag" genislik={680} />
      <Ikon t={t} bas={tSon} ad="uyari" x={1640} y={250} zemin={RENK.altin} bitis={tTuzak + 0.3} />
      <Baslik t={t} bas={tTuzak} metin="THERE'S" x={1860} y={290} boyut={100} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={tTuzak + 0.15} metin="A CATCH" x={1860} y={400} boyut={100} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={K(2, "every")} metin="HIDING IN EVERY ONE OF THESE STUDIES" x={1860} y={500} boyut={30} hiza="sag" genislik={560} agirlik={800} />
    </>
  );
};
export default S32;
