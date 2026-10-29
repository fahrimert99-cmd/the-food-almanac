// Sahne 49 — sade ceviz, şekerli/tuzlu olanlar.
import React from "react";
import { BaslikBlok, Baslik, Etiket, Hap, Ikon, Kamera, Liste, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Konumlu, pop ile gelen hap
const Hp: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string; boyut?: number }> = ({
  t, bas, bitis = 1e9, x, y, metin, renk, boyut = 30,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a }}>
      <Hap metin={metin} renk={renk} boyut={boyut} />
    </div>
  );
};

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAdd = K(2, "add");
  return (
    <>
      <Kamera gorsel="tam/49" pencere={kameraYolu(t, s.sure, [80, 60, 1760], [20, 20, 1800])} />
      <Etiket t={t} bas={K(1, "plain")} capa={[640, 330]} konum={[560, 170]} metin="PLAIN WALNUTS" renk={RENK.yesil} />
      <Ikon t={t} bas={K(1, "walnuts.") + 0.3} ad="onay" x={850} y={170} boyut={72} zemin={RENK.yesil} />
      <Etiket t={t} bas={K(2, "candied")} capa={[1280, 330]} konum={[1420, 130]} metin="CANDIED" renk={RENK.mercan} />
      <Hp t={t} bas={K(2, "salted")} x={1600} y={730} metin="HEAVILY SALTED" renk={RENK.mercan} />
      <Hp t={t} bas={K(2, "sugar")} x={1600} y={640} metin="ADDED SUGAR" renk={RENK.mercan} />
      <Hp t={t} bas={K(2, "sodium,")} x={1600} y={820} metin="SODIUM" renk={RENK.mercan} />
      <Hp t={t} bas={K(2, "blood") } x={1500} y={900} metin="BLOOD PRESSURE: LIMIT" renk={RENK.altin} boyut={27} />
    </>
  );
};

export default S49;
