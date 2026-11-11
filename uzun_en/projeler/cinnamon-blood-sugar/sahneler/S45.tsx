// Sahne 45 — hap kutusu + tarçın tabağı: tarçın tedavi değil; en fazla ek destek, ilacın yerine geçmez.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol, INTER } from "../kutuphane";

const Cip: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string; boyut?: number }> = ({
  t, bas, bitis = 1e9, x, y, metin, renk, boyut = 28,
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

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCin = K(0, "cinnamon"), tAdd = K(1, "add-on"), tUsual = K(1, "usual"), tSug = K(2, "suggests"), tDia = K(2, "diabetes");
  const [sp, ap] = pop(t, tAdd, 0.4);
  return (
    <>
      <Kamera gorsel="tam/45" pencere={kameraYolu(t, s.sure, [0, 30, 1900], [60, 70, 1760])}>
        <Etiket t={t} bas={tCin} bitis={6.9} capa={[1290, 300]} konum={[1640, 340]} metin="CINNAMON" renk={RENK.altin} />
        <Etiket t={t} bas={tDia} capa={[640, 560]} konum={[640, 905]} metin="DIABETES MEDICATION" renk={RENK.mercan} />
      </Kamera>
      {/* 2. cümle: ek destek şeması */}
      <Cip t={t} bas={tUsual} bitis={7.2} x={1330} y={560} metin="USUAL CARE" renk={RENK.lacivert} boyut={26} />
      <div style={{ position: "absolute", left: 1500, top: 560, transform: `translate(-50%, -50%) scale(${sp})`, opacity: ap * sol(t, 7.2),
        fontFamily: INTER, fontWeight: 800, fontSize: 44, color: RENK.altin }}>+</div>
      <Cip t={t} bas={tAdd} bitis={7.2} x={1660} y={560} metin="ADD-ON" renk={RENK.yesil} boyut={26} />
      <BaslikBlok t={t} bas={tSug} satirlar={["NOT A", "SUBSTITUTE"]} x={1850} y={730} boyut={100} hiza="sag" renkler={[RENK.mercan, RENK.lacivert]} />
    </>
  );
};

export default S45;
