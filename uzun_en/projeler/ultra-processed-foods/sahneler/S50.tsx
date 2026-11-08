// Sahne 50 — Eklenmiş şeker ve sodyum; lazanya örneği.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tAdded = K(2, "Added"), tNa = K(3, "sodium"), t2300 = K(3, "2,300"), tLas = K(3, "FDA's"), t850 = K(3, "850"), t37 = K(3, "37");
  const sekiller = [["SYRUPS", "syrups"], ["HONEY", "honey"], ["CONCENTRATED JUICES", "concentrated"]];
  return (
    <>
      <Kamera gorsel="tam/50" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 70, 1700])}>
        <Etiket t={t} bas={tAdded} bitis={c[3].bas - 0.1} capa={[1400, 760]} konum={[1640, 880]} metin="ADDED SUGARS" renk={RENK.altin} />
        <Etiket t={t} bas={tNa} capa={[600, 470]} konum={[250, 200]} metin="SODIUM" renk={RENK.mercan} />
        <Etiket t={t} bas={tLas} capa={[900, 590]} konum={[930, 440]} metin="SAMPLE LASAGNA" renk={RENK.lacivert} boyut={26} />
      </Kamera>
      <Baslik t={t} bas={0.05} metin="FOUR:" x={1840} y={150} boyut={80} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={c[1].bas} metin="SUGAR · SODIUM" x={1840} y={235} boyut={80} renk={RENK.koyuYesil} hiza="sag" />
      {sekiller.map(([m, f], i) => {
        const [sc, al] = pop(t, K(2, f) - 0.05, 0.5);
        return (
          <div key={m} style={{ position: "absolute", right: 70, top: 370 + i * 76, transform: `scale(${sc})`, transformOrigin: "100% 50%",
            opacity: al * (t < c[3].bas - 0.1 ? 1 : 0) }}>
            <Hap metin={m} renk={RENK.altin} boyut={28} />
          </div>
        );
      })}
      <VurguRozet t={t} bas={t2300} vurgu="2,300 MG" not="DAILY VALUE" x={250} y={290} genislik={380} boyut={72} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={t850} vurgu="850 MG" not="SAMPLE LASAGNA" x={250} y={510} genislik={380} boyut={72} renk={RENK.altin} />
      <VurguRozet t={t} bas={t37} vurgu="37%" not="OF THE DAILY VALUE" x={250} y={730} genislik={380} boyut={72} renk={RENK.mercan} />
    </>
  );
};

export default S50;
