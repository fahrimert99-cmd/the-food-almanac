// Sahne 26 — terazi: tek deneme, tek kapsül türü; havuzlanmış sonuç "az ya da hiç yarar".
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  return (
    <>
      <Kamera gorsel="tam/26" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800])}>
        <Etiket t={t} bas={K(1, "one trial")} bitis={c[2].bas} capa={[980, 262]} konum={[1380, 130]} metin="ONE TRIAL" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "capsule")} bitis={c[2].bas} capa={[1300, 655]} konum={[1580, 800]} metin="ONE CAPSULE TYPE" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "useless")} bitis={c[1].bas} metin="EVERY OLDER ADULT?" x={60} y={130} boyut={72} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={K(2, "little")} vurgu="LITTLE OR NO" not="BENEFIT · POOLED CARE HOME RESULTS" x={1660} y={330} genislik={400} boyut={62} renk={RENK.mercan} />
    </>
  );
};

export default S26;
