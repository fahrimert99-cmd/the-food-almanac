// Sahne 30 — nocebo etkisi: koltuk ve çay; sol üstte zeminli başlık kutusu.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const Kutu: React.FC<{ h: number }> = ({ h }) => (
  <div style={{ position: "absolute", left: 60, top: 60, width: 880, height: h, borderRadius: 30, background: kagit(0.93),
    boxShadow: "0 10px 26px rgba(48,40,34,0.14)" }} />
);

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tNoc = K(0, "nocebo"), tExp = K(0, "expecting"), tFak = K(1, "faked");
  const tShape = K(2, "expectations"), tTrial = K(2, "good trial");
  return (
    <>
      <Kamera gorsel="tam/30" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 70, 1720])}>
        <Etiket t={t} bas={tExp} bitis={tFak - 0.2} capa={[690, 620]} konum={[1120, 440]} metin="EXPECT TO FEEL WORSE" renk={RENK.mercan} boyut={26} />
      </Kamera>
      <Kutu h={tShape > t ? 250 : 310} />
      <Baslik t={t} bas={tNoc} bitis={tFak - 0.1} metin="NOCEBO EFFECT" x={100} y={140} boyut={112} renk={RENK.mercan} />
      <Not t={t} bas={tExp + 0.6} bitis={tFak - 0.1} metin="expecting worse can feel worse" x={104} y={215} boyut={34} />
      <Baslik t={t} bas={tFak} bitis={tShape - 0.1} metin="NOT FAKED" x={100} y={140} boyut={112} renk={RENK.koyuYesil} />
      <Not t={t} bas={tFak + 0.4} bitis={tShape - 0.1} metin="the symptoms are real" x={104} y={215} boyut={34} />
      <Baslik t={t} bas={tShape} metin="EXPECTATIONS" x={100} y={130} boyut={90} renk={RENK.lacivert} />
      <Baslik t={t} bas={tShape + 0.18} metin="SHAPE THE GUT" x={100} y={225} boyut={90} renk={RENK.koyuYesil} />
      <Not t={t} bas={tTrial} metin="A good trial has to account for that" x={104} y={295} boyut={32} />
    </>
  );
};

export default S30;
