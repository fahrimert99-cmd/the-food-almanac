// Sahne 32 — havuç çorbası: doğrama, ezme, pişirme, yağ yardımcı oldu; ama laboratuvar modeli, kesin kazanç değil.
import React from "react";
import { Etiket, IkonYol, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

type Ik = "onay" | "carpi" | "ok";
const Pill: React.FC<{ t: number; bas: number; x: number; y: number; metin: string; renk: string; ikon?: Ik; bitis?: number; sol?: boolean }> = ({
  t, bas, x, y, metin, renk, ikon, bitis = 1e9, sol: solda,
}) => {
  const [sc, al0] = pop(t, bas, 0.5);
  const al = al0 * sol(t, bitis);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(${solda ? "0" : "-50%"}, 0) scale(${sc})`, transformOrigin: solda ? "0 50%" : "50% 50%",
      opacity: al, display: "flex", alignItems: "center", gap: 12, background: RENK.kagitAcik, border: `4px solid ${renk}`, borderRadius: 999,
      padding: "9px 30px 9px 12px", boxShadow: "0 10px 26px rgba(48,40,34,0.22)", whiteSpace: "nowrap" }}>
      {ikon && <span style={{ width: 44, height: 44, borderRadius: "50%", background: renk, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <IkonYol ad={ikon} boyut={26} renk="#fff" kalinlik={7} /></span>}
      <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 32, letterSpacing: 2, color: RENK.lacivert }}>{metin}</span>
    </div>
  );
};

const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tChop = K(0, "chopping"), tMash = K(0, "mashing"), tCook = K(0, "cooking"), tOil = K(0, "little oil");
  const tDig = K(1, "digestion"), tNotP = K(1, "not people"), tDir = K(1, "direction"), tExact = K(1, "not exact");
  return (
    <>
      <Kamera gorsel="tam/32" pencere={kameraYolu(t, s.sure, [0, 40, 1900], [80, 80, 1740])}>
        <Etiket t={t} bas={tOil} bitis={tDig - 0.3} capa={[907, 470]} konum={[1180, 100]} metin="COOKING OIL" renk={RENK.altin} />
      </Kamera>
      {/* 1. cümle: yardımcı olan dört şey */}
      <Pill t={t} bas={tChop} x={70} y={90} metin="CHOPPING" renk={RENK.yesil} ikon="onay" sol={true} />
      <Pill t={t} bas={tMash} x={70} y={178} metin="MASHING" renk={RENK.yesil} ikon="onay" sol={true} />
      <Pill t={t} bas={tCook} x={70} y={266} metin="COOKING" renk={RENK.yesil} ikon="onay" sol={true} />
      <Pill t={t} bas={tOil} x={70} y={354} metin="A LITTLE OIL" renk={RENK.yesil} ikon="onay" sol={true} />
      {/* 2. cümle: sınırlar */}
      <Pill t={t} bas={tDig} bitis={tDir - 0.2} x={1400} y={110} metin="LAB DIGESTION MODEL" renk={RENK.altin} />
      <Pill t={t} bas={tNotP} x={1640} y={790} metin="NOT PEOPLE" renk={RENK.mercan} ikon="carpi" />
      <Pill t={t} bas={tDir} x={1400} y={110} metin="SHOWS A DIRECTION" renk={RENK.yesil} ikon="ok" />
      <Pill t={t} bas={tExact} x={1640} y={880} metin="NOT EXACT GAINS" renk={RENK.mercan} ikon="carpi" />
    </>
  );
};

export default S32;
