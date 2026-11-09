// Sahne 18 — kitaplık masası: 107 çalışma, 4,8 milyon kişi, 425.000+ ölüm.
import React from "react";
import { Baslik, Hap, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t107 = K(0, "107 studies"), tFol = K(0, "followed over time");
  const tM = K(1, "4.8 million"), tD = K(1, "425,000");
  const [sd, ad] = pop(t, tD, 0.5);
  return (
    <>
      <Kamera gorsel="tam/18" pencere={kameraYolu(t, s.sure, [0, 40, 1760], [90, 90, 1600])} />
      <Baslik t={t} bas={t107 - 0.1} metin="107 STUDIES" x={110} y={190} boyut={124} renk={RENK.koyuYesil} />
      <Not t={t} bas={tFol} metin="people followed over time" x={116} y={282} boyut={38} />
      <VurguRozet t={t} bas={tM - 0.1} vurgu="4.8M" not="PEOPLE" x={330} y={370} genislik={340} renk={RENK.altin} />
      <div style={{ position: "absolute", left: 330, top: 590, transform: `translate(-50%,0) scale(${sd})`, opacity: ad }}>
        <Hap metin="425,000+ DEATHS" renk={RENK.mercan} boyut={30} />
      </div>
    </>
  );
};

export default S18;
