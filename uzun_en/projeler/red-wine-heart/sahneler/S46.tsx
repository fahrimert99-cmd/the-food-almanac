// Sahne 46 — Madde 2: zevk, ilaç değil. Solda tepsi, sağda başlık + erkek/kadın sınır çubukları.
import React from "react";
import { ANTON, BaslikBlok, CubukGrafik, Etiket, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTitle = K(1, "pleasure"), tWine = K(1, "red wine"), tMen = K(2, "two drinks"), tWomen = K(2, "one for"), tRisk = K(2, "any level");
  const [sc, al] = pop(t, 0.05, 0.5);
  return (
    <>
      <Kamera gorsel="tam/46" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1800])}>
        <Etiket t={t} bas={tWine} bitis={5.2} capa={[595, 480]} konum={[820, 330]} metin="RED WINE" renk={RENK.mercan} />
      </Kamera>
      <div style={{ position: "absolute", left: 1000, top: 110, width: 84, height: 84, borderRadius: "50%", background: RENK.altin, color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 52, transform: `scale(${sc})`, opacity: al }}>2</div>
      <BaslikBlok t={t} bas={tTitle - 0.3} satirlar={["A PLEASURE,", "NOT MEDICINE"]} x={1000} y={270} boyut={100} renkler={[RENK.lacivert, RENK.mercan]} />
      <CubukGrafik t={t} bas={tMen} x={1040} y={590} w={640} h={200} maks={2.3}
        cubuklar={[
          { etiket: "MEN", deger: 2, metin: "2", renk: RENK.lacivert, bas: tMen },
          { etiket: "WOMEN", deger: 1, metin: "1", renk: RENK.altin, bas: tWomen },
        ]} />
      <Not t={t} bas={tMen} metin="MAX DRINKS PER DAY (AHA)" x={1040} y={440} boyut={30} agirlik={800} renk={RENK.gri} />
      <Ikon t={t} bas={tRisk} ad="uyari" x={1070} y={915} boyut={64} zemin={RENK.mercan} />
      <Not t={t} bas={tRisk} metin="ANY LEVEL CARRIES POTENTIAL RISK" x={1120} y={886} boyut={36} agirlik={800} />
    </>
  );
};

export default S46;
