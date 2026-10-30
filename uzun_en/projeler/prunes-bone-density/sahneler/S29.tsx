// Sahne 29 — ikincil sonuçlar: 50 g ve 100 g gruplarında farklı sinyaller
import React from "react";
import { BaslikBlok, Etiket, INTER, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Chip: React.FC<{ t: number; bas: number; bitis: number; x: number; y: number; metin: string; renk: string }> = ({ t, bas, bitis, x, y, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: a, whiteSpace: "nowrap",
      background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 14, padding: "8px 20px", fontFamily: INTER, fontWeight: 800,
      fontSize: 30, letterSpacing: 1.5, color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>{metin}</div>
  );
};

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kam = kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1840]);
  const tSec = K(1, "secondary");
  const son = tSec - 0.25;
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/29" pencere={kam}>
        <Etiket t={t} bas={K(0, "50")} bitis={son} capa={[790, 600]} konum={[1290, 210]} metin="50 GRAM GROUP" renk={RENK.altin} boyut={28} />
        <Etiket t={t} bas={K(0, "100")} bitis={son} capa={[860, 640]} konum={[1290, 440]} metin="100 GRAM GROUP" renk={RENK.koyuYesil} boyut={28} />
      </Kamera>
      <Chip t={t} bas={K(0, "lower") + 0.1} bitis={son} x={1140} y={275} metin="LOWER TNF ALPHA" renk={RENK.altin} />
      <Chip t={t} bas={K(0, "interleukin")} bitis={son} x={1140} y={505} metin="LOWER INTERLEUKIN" renk={RENK.koyuYesil} />
      <Chip t={t} bas={K(0, "beta,")} bitis={son} x={1140} y={575} metin="1 BETA" renk={RENK.koyuYesil} />
      <Chip t={t} bas={K(0, "6")} bitis={son} x={1330} y={575} metin="6" renk={RENK.koyuYesil} />
      <Chip t={t} bas={K(0, "8.")} bitis={son} x={1420} y={575} metin="8" renk={RENK.koyuYesil} />
      <BaslikBlok t={t} bas={tSec} satirlar={b.satirlar} x={1140} y={300} boyut={112} renkler={[RENK.lacivert, RENK.altin]} />
      <Not t={t} bas={tSec + 0.5} metin={b.not ?? ""} x={1140} y={520} genislik={680} boyut={34} />
    </>
  );
};

export default S29;
