// Sahne 13 — deneme öncesi plasebo hapları; çok atlayanlar çıkarıldı.
import React from "react";
import { Baslik, Etiket, Hap, IkonYol, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800]);
  const tAtla = K(0, "skipped"), tBit = K(1, "That") - 0.2;
  const [sc, al] = pop(t, tAtla, 0.5);
  const a = al * sol(t, tBit);
  return (
    <>
      <Kamera gorsel="tam/13" pencere={p}>
        <Etiket t={t} bas={K(0, "placebo pills")} bitis={K(0, "and people") } capa={[640, 560]} konum={[640, 270]} metin="PLACEBO PILLS" renk={RENK.lacivert} />
      </Kamera>
      <VurguRozet t={t} bas={K(0, "least two months")} vurgu="2+ MONTHS" not="BEFORE THE TRIAL" x={1680} y={120} genislik={380} boyut={72} />
      <div style={{ position: "absolute", left: 600, top: 150, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a }}>
        <Hap metin="SKIPPED TOO MANY → DROPPED" renk={RENK.mercan} boyut={32} />
      </div>
      <Baslik t={t} bas={K(1, "good at taking")} metin="GOOD AT TAKING PILLS" x={120} y={130} boyut={92} renk={RENK.koyuYesil} />
    </>
  );
};

export default S13;
