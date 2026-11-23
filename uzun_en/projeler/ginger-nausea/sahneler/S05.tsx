// Sahne 5 — zencefil kökü: yeraltı gövdesi, kullanım biçimleri
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S05: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tStom = K(1, "stomach");
  return (
    <>
      <Kamera gorsel="tam/05" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 17, 1840])}>
        <Etiket t={t} bas={K(0, "knobby")} bitis={K(1, "People")} capa={[420, 330]} konum={[760, 170]} metin="KNOBBY ROOT" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "underground")} bitis={K(1, "People")} capa={[620, 540]} konum={[1000, 380]} metin="PALE FLESH" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "fresh,")} capa={[780, 730]} konum={[1080, 880]} metin="FRESH SLICES" renk={RENK.koyuYesil} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "Ginger")} satirlar={["THE ROOT"]} x={1860} y={170} boyut={110} hiza="sag" />
      <Liste t={t} x={1300} y={330} aralik={92} boyut={46} isaret="nokta" genislik={560} ogeler={[
        { bas: K(1, "fresh,"), metin: "FRESH", renk: RENK.yesil },
        { bas: K(1, "dried,"), metin: "DRIED", renk: RENK.altin },
        { bas: K(1, "candied"), metin: "CANDIED", renk: RENK.mercan },
        { bas: K(1, "brewed,"), metin: "BREWED", renk: RENK.koyuYesil },
      ]} />
      <Not t={t} bas={tStom} metin="a stomach remedy many people reach for" x={1860} y={730} hiza="sag" genislik={560} boyut={36} agirlik={800} />
    </>
  );
};

export default S05;
