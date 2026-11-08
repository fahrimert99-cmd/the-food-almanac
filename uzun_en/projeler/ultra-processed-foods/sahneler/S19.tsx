// Sahne 19 — PYY hormonu: bağırsaktan beyne sinyal; "ipucu, kanıt değil".
import React from "react";
import { AltSis, Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tYuksek = K(0, "higher"), tIpucu = K(1, "clue");
  const cik = tIpucu - 0.2;
  return (
    <>
      <Kamera gorsel="tam/19" pencere={kameraYolu(t, s.sure, [0, 40, 1850], [60, 20, 1760])}>
        <Etiket t={t} bas={K(0, "PYY")} capa={[1000, 440]} konum={[1010, 240]} metin="PYY" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "signal fullness")} capa={[1080, 520]} konum={[1100, 730]} metin="FULLNESS SIGNAL" renk={RENK.yesil} />
      </Kamera>
      <AltSis a={0.4} />
      <Baslik t={t} bas={tYuksek} bitis={cik} metin="HIGHER" x={1560} y={770} boyut={120} hiza="orta" renk={RENK.koyuYesil} />
      <Not t={t} bas={tYuksek + 0.15} bitis={cik} metin="AFTER THE UNPROCESSED DIET" x={1560} y={830} hiza="orta" boyut={30} agirlik={800} />
      <Baslik t={t} bas={tIpucu} metin="A CLUE," x={1560} y={760} boyut={100} hiza="orta" renk={RENK.altin} />
      <Baslik t={t} bas={K(1, "not proof")} metin="NOT PROOF" x={1560} y={865} boyut={100} hiza="orta" renk={RENK.lacivert} />
    </>
  );
};

export default S19;
