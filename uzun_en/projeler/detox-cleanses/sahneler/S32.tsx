// Sahne 32 — Getting vd. 2013: vaka ve 65 biyopsi. Mikroskop, bardak, kavanoz, lam rafı.
import React from "react";
import { Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t2013 = K(0, "2013"), tHasta = K(0, "patient"), tSuyu = K(0, "juicing"), tSebze = K(0, "fruits");
  const c1 = s.cumleler[1].bas - 0.1;
  const t65 = K(1, "65"), tYil = K(1, "1985"), tBiy = K(1, "biopsies"), tKri = K(1, "calcium");
  return (
    <>
      <Kamera gorsel="tam/32" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1800])}>
        <Etiket t={t} bas={tSuyu} bitis={c1} capa={[830, 520]} konum={[830, 910]} metin="OXALATE-RICH JUICE" renk={RENK.yesil} />
        <Etiket t={t} bas={tSebze} bitis={c1} capa={[1090, 700]} konum={[1330, 900]} metin="FRUITS + VEGETABLES" renk={RENK.mercan} />
        <Etiket t={t} bas={tBiy} capa={[560, 560]} konum={[340, 800]} metin="KIDNEY BIOPSIES" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={tKri} capa={[1500, 700]} konum={[1560, 440]} metin="CALCIUM OXALATE" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      <VurguRozet t={t} bas={t2013} vurgu="2013" not="Mayo Clinic · one patient" x={1500} y={110} genislik={400} bitis={c1} />
      <VurguRozet t={t} bas={t65} vurgu="65" not="Mayo patients" x={1500} y={110} genislik={400} />
      <Not t={t} bas={tYil} metin="1985 – 2010" x={1500} y={300} boyut={40} hiza="orta" agirlik={800} renk={RENK.koyuYesil} />
    </>
  );
};

export default S32;
