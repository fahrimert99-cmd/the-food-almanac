// Sahne 18 — DiPietro 2013 sonuçları: 3×15 dk, -%10; 45 dk sabah -%8, öğleden sonra neredeyse hiç
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tThree = K(0, "three"), tMeals = K(0, "after meals"), t10 = K(0, "10");
  const tOne = K(1, "forty"), t8 = K(1, "8"), tAft = K(1, "afternoon,"), tBar = K(1, "barely");
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/18" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 10, 1850])}>
        {/* sağ alttaki silik imza kâğıt yamayla örtülür */}
        <div style={{ position: "absolute", left: 1660, top: 990, width: 260, height: 90,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, rgb(250,249,219) 0%, rgb(250,249,219) 60%, rgba(250,249,219,0) 100%)` }} />
        <Etiket t={t} bas={tMeals} bitis={9.0} capa={[440, 555]} konum={[440, 380]} metin="AFTER MEALS" renk={RENK.koyuYesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={0.2} />
      <Baslik t={t} bas={tThree} metin={b.satirlar[0]} x={140} y={210} boyut={120} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={t10 - 0.1} vurgu={b.vurgu!} not={b.not} x={1200} y={130} genislik={520} boyut={110} renk={RENK.yesil} />
      <Baslik t={t} bas={tOne} metin="1 × 45 MIN" x={140} y={790} boyut={92} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={t8 - 0.1} vurgu="–8%" not="MORNING WALK" x={870} y={725} genislik={340} boyut={92} renk={RENK.altin} />
      <VurguRozet t={t} bas={tAft - 0.1} vurgu="BARELY" not="AFTERNOON WALK" x={1270} y={725} genislik={380} boyut={92} renk={RENK.mercan} />
    </>
  );
};

export default S18;
