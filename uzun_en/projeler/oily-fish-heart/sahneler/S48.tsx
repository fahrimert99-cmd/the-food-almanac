// Sahne 48 — İki: konserve de sayılır; etikette sodyuma bak.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, Not, RENK, SP, VurguRozet, kelimeZamani, pop, ANTON } from "../kutuphane";

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const m = s.meta.baslik!;
  const tSal = K(2, "salmon"), tSar = K(2, "sardines"), tKeep = K(2, "keep"), tLab = K(3, "label"), tSod = K(3, "sodium,"), tBp = K(3, "blood");
  const [sn, an] = pop(t, 0.0, 0.5);
  const [sl, al] = pop(t, tLab, 0.5);
  return (
    <>
      <Kamera gorsel="tam/48" pencere={[0, 0, 1920]}>
        <Etiket t={t} bas={tSal} capa={[1140, 790]} konum={[1500, 880]} metin="CANNED SALMON" renk={RENK.mercan} boyut={26} bitis={tLab - 0.1} />
        <Etiket t={t} bas={tSar} capa={[400, 300]} konum={[560, 90]} metin="CANNED SARDINES" renk={RENK.lacivert} boyut={26} bitis={tLab - 0.1} />
      </Kamera>
      <div style={{ position: "absolute", left: 1250, top: 80, opacity: an, transform: `scale(${sn})`, transformOrigin: "0 50%",
        fontFamily: ANTON, fontSize: 56, letterSpacing: 5, color: RENK.altin }}>TWO</div>
      <BaslikBlok t={t} bas={0.75} satirlar={m.satirlar} x={1250} y={210} boyut={84} />
      <Not t={t} bas={tKeep} metin="KEEPS WELL IN THE PANTRY" x={1250} y={380} boyut={30} agirlik={800} renk={RENK.koyuYesil} bitis={tLab - 0.1} />
      <div style={{ position: "absolute", left: 1250, top: 395, transform: `scale(${sl})`, transformOrigin: "0 50%", opacity: al }}>
        <Hap metin="CHECK THE LABEL" renk={RENK.altin} boyut={28} />
      </div>
      <VurguRozet t={t} bas={tSod} vurgu="SODIUM" x={1680} y={470} boyut={56} genislik={360} renk={RENK.mercan} />
      <Not t={t} bas={tBp} metin="IF YOU'RE WATCHING BLOOD PRESSURE" x={1590} y={610} boyut={26} agirlik={800} genislik={290} />
    </>
  );
};
export default S48;
