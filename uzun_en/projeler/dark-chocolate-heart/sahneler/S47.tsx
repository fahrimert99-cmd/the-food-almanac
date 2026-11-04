// Sahne 47 — ipucu 2: haftada birkaç porsiyon
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTwo = K(0, "Two."), tDark = K(1, "dark"), tPlea = K(1, "small"), tCR = K(2, "Consumer"), tFew = K(2, "few");
  const tLow = K(2, "lower-metal"), tDaily = K(2, "daily");
  const pP = eout(ilerle(t, tCR - 0.2, 0.6));
  return (
    <>
      <Kamera gorsel="tam/47" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 40, 1800])}>
        <Etiket t={t} bas={tDark} bitis={tCR} capa={[627, 640]} konum={[430, 420]} metin="DARK CHOCOLATE" renk={RENK.altin} boyut={30} />
        <Etiket t={t} bas={tPlea} bitis={tCR} capa={[1030, 460]} konum={[900, 250]} metin="A SMALL PLEASURE" renk={RENK.koyuYesil} boyut={30} />
      </Kamera>
      <VurguRozet t={t} bas={tTwo} bitis={tCR - 0.1} vurgu="2" x={1500} y={150} genislik={170} boyut={100} />
      <Panel a={pP} taraf="sag" genislik={780} opak={1} />
      <Not t={t} bas={tCR} metin="CONSUMER REPORTS SUGGESTS" x={1860} y={150} hiza="sag" genislik={640} boyut={30} agirlik={800} renk={RENK.altin} />
      <BaslikBlok t={t} bas={tFew} satirlar={["A FEW", "SERVINGS A WEEK"]} x={1860} y={290} boyut={84} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Liste t={t} isaret="onay" x={1250} y={520} boyut={34} genislik={620}
        ogeler={[{ bas: tLow, metin: "LOWER-METAL BAR", renk: RENK.yesil }]} />
      <Liste t={t} isaret="carpi" x={1250} y={650} boyut={34} genislik={620}
        ogeler={[{ bas: tDaily, metin: "NOT A DAILY HABIT", renk: RENK.mercan }]} />
    </>
  );
};

export default S47;
