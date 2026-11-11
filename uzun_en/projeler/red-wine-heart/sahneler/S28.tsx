// Sahne 28 — bir bardakta ~1 mg, hap çalışmalarında 150 mg+
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/28" pencere={kameraYolu(t, s.sure, [0, 0, 1900], [50, 50, 1760])}>
        <Etiket t={t} bas={K(0, "glass")} bitis={K(1, "Studies") - 0.1} capa={[1090, 640]} konum={[760, 640]} metin="ONE GLASS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "pills")} capa={[1480, 330]} konum={[1050, 130]} metin="RESVERATROL PILLS" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "about")} satirlar={b.satirlar} x={100} y={200} boyut={84} />
      <Not t={t} bas={K(0, "about") + 0.5} metin={b.not!} x={100} y={400} boyut={34} agirlik={800} genislik={600} />
      <VurguRozet t={t} bas={K(1, "150")} vurgu="150+ MG" not="in pill studies" x={400} y={500} genislik={440} renk={RENK.altin} />
    </>
  );
};
export default S28;
