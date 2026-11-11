// Sahne 23 — yıl başına +%13 ve katılımcı yaşları: raf üstünde takvim kutuları ve cep saati.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop, VurguRozet } from "../kutuphane";

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tEach = K(0, "each"), t13 = K(0, "13"), tOdds = K(0, "odds"), tPart = K(1, "participants"), t64 = K(1, "64"), t51 = K(1, "51"), tSo = K(1, "so");
  const [sc, al] = pop(t, tSo, 0.5);
  return (
    <>
      <Kamera gorsel="tam/23" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        {/* alttaki imza kalıntısı kâğıt rengiyle örtülür */}
        <div style={{ position: "absolute", left: 270, top: 1000, width: 220, height: 60, background: "rgb(247,237,202)", borderRadius: 24,
          boxShadow: "0 0 22px 16px rgb(247,237,202)" }} />
        <Etiket t={t} bas={tEach} bitis={tPart - 0.1} capa={[1570, 760]} konum={[1500, 520]} metin="EACH ADDITIONAL YEAR" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={t13} satirlar={["+13%", "PER YEAR"]} x={140} y={150} boyut={128} />
      <Not t={t} bas={tOdds} metin="higher odds of deficiency per year of metformin" x={146} y={430 - 60} genislik={640} boyut={32} />
      <VurguRozet t={t} bas={t64} vurgu="64–66" not="years old, by the later visits" x={1290} y={130} genislik={360} boyut={92} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={t51} vurgu="51" not="years old, at the start" x={1690} y={130} genislik={340} boyut={92} />
      <div style={{ position: "absolute", left: 1500, top: 380, transform: `translate(-50%, 0) scale(${sc})`, opacity: al }}>
        <Hap metin="NOT ONLY AN OLDER-ADULT STUDY" renk={RENK.mercan} boyut={28} />
      </div>
    </>
  );
};

export default S23;
