// Sahne 43 — iki doğrulama grubu: ABD 2.149, Avrupa 833. İki pencere + sandalye sıraları.
import React from "react";
import { Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/43" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])} />
      <Not t={t} bas={K(0, "held")} bitis={K(0, "all") - 0.1} metin="HELD UP IN TWO MORE GROUPS" x={960} y={170} hiza="orta" genislik={470} boyut={40} agirlik={800} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(0, "2,149")} vurgu="2,149" not="UNITED STATES" x={440} y={170} genislik={380} boyut={96} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(0, "833")} vurgu="833" not="EUROPE" x={1440} y={170} genislik={380} boyut={96} renk={RENK.altin} />
      <Not t={t} bas={K(0, "all")} metin="ALL BEING EVALUATED FOR HEART PROBLEMS" x={960} y={170} hiza="orta" genislik={470} boyut={36} agirlik={800} renk={RENK.mercan} />
    </>
  );
};

export default S43;
