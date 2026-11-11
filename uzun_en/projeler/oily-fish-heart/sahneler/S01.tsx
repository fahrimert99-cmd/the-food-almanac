// Sahne 1 — 25,871 yaşlı yetişkin; kapsül ve sardalya solda, yazılar sağ boşlukta.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const c = K(0, "capsule"), kam = kameraYolu(t, s.sure, [0, 40, 1780], [10, 70, 1700]);
  const tList = K(0, "heart attack");
  return (
    <>
      <Kamera gorsel="tam/01" pencere={kam}>
        <Etiket t={t} bas={c} capa={[400, 690]} konum={[250, 440]} metin="FISH OIL CAPSULES" renk={RENK.altin} />
        <Etiket t={t} bas={tList} capa={[520, 250]} konum={[880, 160]} metin="HEART" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <Baslik t={t} bas={K(0, "25,871")} metin="25,871" x={1300} y={300} boyut={150} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "older")} metin="OLDER ADULTS" x={1304} y={420} boyut={72} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "did not")} metin="A daily fish oil capsule did not clearly lower heart events" x={1304} y={490} boyut={32} genislik={560} />
      <Liste t={t} x={1304} y={660} aralik={84} boyut={34} isaret="nokta" genislik={560} ogeler={[
        { bas: tList, metin: "HEART ATTACK", renk: RENK.mercan },
        { bas: K(0, "stroke"), metin: "STROKE", renk: RENK.mercan },
        { bas: K(0, "heart death"), metin: "HEART DEATH", renk: RENK.mercan },
      ]} />
    </>
  );
};
export default S01;
