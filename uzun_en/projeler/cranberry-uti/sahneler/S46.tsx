// Sahne 46 — eczacı sahnesi: sol üstte sırayla kutular, sağda şişe etiketi.
import React from "react";
import { ANTON, Etiket, Ikon, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, sol } from "../kutuphane";

// Krem zeminli bilgi kutusu (sol üst boş jaket alanı)
const Kutu: React.FC<{ t: number; bas: number; bitis?: number; satirlar: { m: string; r: string; boyut: number; anton?: boolean }[] }> = ({ t, bas, bitis = 1e9, satirlar }) => {
  const a = eout(ilerle(t, bas, 0.5)) * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 60, top: 150, opacity: a, transform: `translateY(${(1 - a) * 14}px)`, background: "#FCF8EC",
      border: `4px solid ${RENK.altin}`, borderRadius: 22, padding: "12px 26px", boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }}>
      {satirlar.map((l, i) => (
        <div key={i} style={{ fontFamily: l.anton ? ANTON : INTER, fontWeight: 800, fontSize: l.boyut, lineHeight: 1.15, color: l.r, whiteSpace: "nowrap" }}>{l.m}</div>
      ))}
    </div>
  );
};

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAsk = K(1, "worth");
  return (
    <>
      <Kamera gorsel="tam/46" pencere={kameraYolu(t, s.sure, [100, 150, 1640], [150, 165, 1560])}>
        {/* tahtadaki anlamsız yazıyı soru rozeti örter */}
        <Ikon t={t} bas={0} ad="soru" x={1262} y={272} boyut={132} zemin={RENK.altin} />
      </Kamera>
      <Kutu t={t} bas={K(0, "Conflicting")} bitis={tAsk - 0.1} satirlar={[
        { m: "CONFLICTING", r: RENK.lacivert, boyut: 76, anton: true },
        { m: "SAFE OR UNSAFE?", r: RENK.mercan, boyut: 40 },
      ]} />
      <Kutu t={t} bas={tAsk} satirlar={[
        { m: "WORTH ASKING", r: RENK.koyuYesil, boyut: 64, anton: true },
        { m: "YOUR CARE TEAM", r: RENK.lacivert, boyut: 40 },
      ]} />
      <Etiket t={t} bas={K(1, "prescription")} capa={[1150, 560]} konum={[1470, 560]} metin="PRESCRIPTION MEDICINE" renk={RENK.mercan} boyut={28} />
    </>
  );
};

export default S46;
