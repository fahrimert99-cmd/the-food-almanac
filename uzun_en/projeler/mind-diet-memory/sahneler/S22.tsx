// Sahne 22 — Birliktelik, kanıt değil: karıştırıcı farklar (örtü + diyagram)
import React from "react";
import { ANTON, Baslik, BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Not, Ortu, RENK, SP, VurguRozet, kameraYolu, einout, eout, ilerle,
  kelimeZamani, pop, sol } from "../kutuphane";

// Hap etiketi (ekran koordinatı, pop ile gelir)
const Pil: React.FC<{ t: number; bas: number; x: number; y: number; metin: string; renk: string; boyut?: number; bitis?: number }> = ({
  t, bas, x, y, metin, renk, boyut = 30, bitis = 1e9,
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

const Kart: React.FC<{ t: number; bas: number; x: number; y: number; metin: string; renk: string }> = ({ t, bas, x, y, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.55);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, width: 500, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al,
      textAlign: "center", background: "#FCF8EC", border: `4px solid ${renk}`, borderRadius: 26, padding: "20px 12px",
      boxShadow: "0 10px 26px rgba(48,40,34,0.18)", fontFamily: ANTON, fontSize: 48, color: RENK.lacivert, whiteSpace: "nowrap" }}>
      {metin}
    </div>
  );
};

const Arti: React.FC<{ t: number; bas: number; x: number; y: number }> = ({ t, bas, x, y }) => {
  const a = eout(ilerle(t, bas, 0.4));
  return <div style={{ position: "absolute", left: x, top: y, transform: "translate(-50%, -50%)", opacity: a,
    fontFamily: ANTON, fontSize: 70, color: RENK.altin }}>+</div>;
};

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kam = kameraYolu(t, s.sure, [0, 20, 1920], [60, 40, 1800]);
  const tOrtu = K(1, "But") - 0.1;
  const pOrtu = 0.94 * einout(ilerle(t, tOrtu, 0.8));
  return (
    <>
      <Kamera gorsel="tam/22" pencere={kam} />
      <Pil t={t} bas={K(0, "striking")} x={960} y={540} metin="STRIKING NUMBERS" renk={RENK.altin} boyut={36} bitis={tOrtu + 0.2} />
      <Ortu a={pOrtu} />
      <Baslik t={t} bas={K(1, "all")} metin="ALL OF THEM ARE" x={960} y={120} boyut={36} renk={RENK.altin} font="inter" aralik={8} hiza="orta" />
      <Baslik t={t} bas={K(1, "associations")} metin="ASSOCIATIONS" x={960} y={230} boyut={130} renk={RENK.koyuYesil} hiza="orta" />
      <Kart t={t} bas={K(2, "greens")} x={330} y={480} metin="MORE GREENS & BERRIES" renk={RENK.yesil} />
      <Arti t={t} bas={K(2, "exercise") - 0.2} x={640} y={480} />
      <Kart t={t} bas={K(2, "exercise")} x={960} y={480} metin="MORE EXERCISE" renk={RENK.altin} />
      <Arti t={t} bas={K(2, "differ") - 0.2} x={1270} y={480} />
      <Kart t={t} bas={K(2, "differ")} x={1590} y={480} metin="OTHER DIFFERENCES" renk={RENK.mercan} />
      <Pil t={t} bas={K(3, "adjusted")} x={960} y={720} metin="ADJUSTED FOR MANY" renk={RENK.yesil} boyut={34} />
      <Pil t={t} bas={K(3, "statistics")} x={960} y={830} metin="NO STATISTICS REMOVE EVERY DIFFERENCE" renk={RENK.mercan} boyut={34} />
    </>
  );
};

export default S22;
