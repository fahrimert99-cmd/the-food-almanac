// Sahne 51 — uyarı listesi (sağ panel) + ciltte çiğ sarımsak uyarısı.
import React from "react";
import { BaslikBlok, Etiket, Ikon, Kamera, Liste, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S51: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSkin = K(1, "Never"), tNih = K(2, "NIH"), tBurn = K(2, "chemical");
  const bitisListe = tSkin - 0.1;
  const pPanel = eout(ilerle(t, 0.1, 0.6));
  return (
    <>
      <Kamera gorsel="tam/51" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 22, 1840])}>
        {/* 2. vuruş: çiğ sarımsak */}
        <Etiket t={t} bas={K(1, "raw")} capa={[950, 560]} konum={[640, 290]} metin="RAW GARLIC" renk={RENK.mercan} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={760} />
      {/* 1. vuruş: uyarı listesi, sağ panelde */}
      <Liste t={t} x={1250} y={300} boyut={36} genislik={620} aralik={96} isaret="nokta" ogeler={[
        { bas: K(0, "upsets"), metin: "STOMACH UPSET", renk: RENK.mercan, bitis: bitisListe },
        { bas: K(0, "unusual"), metin: "UNUSUAL BLEEDING", renk: RENK.mercan, bitis: bitisListe },
        { bas: K(0, "talk"), metin: "TALK TO YOUR DOCTOR", renk: RENK.yesil, bitis: bitisListe },
      ]} />
      {/* 2. vuruş: cilde sürme */}
      <BaslikBlok t={t} bas={tSkin} bitis={tNih - 0.1} satirlar={["NEVER ON", "YOUR SKIN"]} x={1560} y={300} boyut={96} hiza="orta"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Ikon t={t} bas={tSkin + 0.5} bitis={tNih - 0.1} ad="carpi" x={1560} y={560} zemin={RENK.mercan} />
      {/* 3. vuruş: NIH uyarısı */}
      <Not t={t} bas={tNih} metin="THE NIH WARNS" x={1560} y={250} hiza="orta" boyut={34} agirlik={800} renk={RENK.altin} />
      <BaslikBlok t={t} bas={tBurn} satirlar={["CHEMICAL", "BURNS"]} x={1560} y={380} boyut={104} hiza="orta"
        renkler={[RENK.mercan, RENK.mercan]} />
    </>
  );
};

export default S51;
