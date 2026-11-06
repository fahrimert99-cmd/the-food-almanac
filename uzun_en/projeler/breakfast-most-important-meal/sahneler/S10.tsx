// Sahne 10 — kahvaltı en az 700 kalori; açlık öğlene kadar hiçbir şey.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, RENK, SP, VurguRozet, ilerle, kelimeZamani } from "../kutuphane";

const S10: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t700 = K(0, "700"), tOnce = K(0, "before eleven"), tFast = K(1, "Fasting"), tNoon = K(1, "until noon");
  const z = ilerle(t, 0, s.sure);
  const tSon = tFast - 0.1;
  return (
    <>
      <Kamera gorsel="tam/10" pencere={[0 + 30 * z, 40 + 30 * z, 1920 - 100 * z]}>
        <Etiket t={t} bas={K(0, "Breakfast")} bitis={tSon} capa={[800, 880]} konum={[760, 420]} metin="BREAKFAST" renk={RENK.yesil} />
      </Kamera>
      <VurguRozet t={t} bas={t700} bitis={tSon} vurgu="700+" not="CALORIES" x={400} y={130} renk={RENK.yesil} genislik={380} />
      <Baslik t={t} bas={tOnce} bitis={tSon} metin="BEFORE 11 AM" x={400} y={380} boyut={64} renk={RENK.koyuYesil} hiza="orta" style={{}} />
      <Baslik t={t} bas={tFast} metin="NOTHING" x={140} y={170} boyut={120} renk={RENK.mercan} />
      <Baslik t={t} bas={tNoon} metin="UNTIL NOON" x={140} y={290} boyut={120} renk={RENK.lacivert} />
      <Ikon t={t} bas={tFast + 0.3} ad="carpi" x={700} y={200} boyut={70} renk="#fff" zemin={RENK.mercan} />
    </>
  );
};

export default S10;
