// Sahne 29 — Peters 1993: yarış sonrası belirtiler, C vitamini vs plasebo (33% / 68%).
import React from "react";
import { Baslik, CubukGrafik, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [60, 60, 1800]);
  const bit = c[1].bas - 0.15;
  const X = 1180;
  const cub = [
    { etiket: "VITAMIN C", deger: 33, metin: "33%", renk: RENK.yesil, bas: K(1, "33") - 0.05 },
    { etiket: "PLACEBO", deger: 68, metin: "68%", renk: RENK.mercan, bas: K(1, "68") - 0.05 },
  ];
  return (
    <>
      <Kamera gorsel="tam/29" pencere={pen}>
        <Etiket t={t} bas={K(0, "ultramarathon")} bitis={bit} capa={[500, 720]} konum={[560, 150]} metin="ULTRAMARATHON RUNNERS" renk={RENK.altin} />
      </Kamera>
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} bas={0.2} y={900} />}
      <Baslik t={t} bas={K(0, "1993")} bitis={bit} metin="1993" x={X} y={230} boyut={130} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={K(0, "600")} bitis={bit} vurgu="600 MG" not="vitamin C a day, or placebo" x={1520} y={380} genislik={560} renk={RENK.altin} />
      <Baslik t={t} bas={K(1, "after the race")} metin="AFTER THE RACE" x={X} y={200} boyut={96} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(1, "reported")} metin="Reported cold symptoms in the two weeks after" x={X} y={280} boyut={32} genislik={680} />
      <CubukGrafik t={t} bas={cub[0].bas} cubuklar={cub} x={X + 20} y={520} w={660} h={330} maks={80} />
    </>
  );
};

export default S29;
