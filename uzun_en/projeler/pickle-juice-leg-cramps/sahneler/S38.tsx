// Sahne 38 — yazarların sonucu, hafif yan etkiler, gebelik sonuçları çelişkili.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tUn = K(0, "unlikely"), tMag = K(0, "magnesium");
  const tMild = K(1, "Mild"), tDia = K(1, "diarrhea,"), tPreg = K(2, "pregnancy");
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1740]);
  const b = s.meta.baslik ?? { satirlar: ["UNLIKELY TO", "HELP OLDER ADULTS"] };
  const satir = (bas: number, metin: string, renk: string, y: number) => {
    const [sc, al] = pop(t, bas, 0.5);
    return (
      <div style={{ position: "absolute", left: 1480, top: y, transform: `translate(-50%,-50%) scale(${sc})`, opacity: al }}>
        <Hap metin={metin} renk={renk} boyut={28} />
      </div>
    );
  };
  return (
    <>
      <Kamera gorsel="tam/38" pencere={p} />
      <BaslikBlok t={t} bas={tUn} satirlar={b.satirlar} x={1160} y={230} boyut={84} renkler={[RENK.lacivert, RENK.mercan]} />
      <Etiket t={t} bas={tMag} capa={[520, 770]} konum={[900, 190]} metin="MAGNESIUM" renk={RENK.koyuYesil} boyut={28} />
      {satir(tMild, "MILD SIDE EFFECTS", RENK.altin, 560)}
      {satir(tDia, "MOSTLY DIARRHEA", RENK.mercan, 650)}
      {satir(tPreg, "PREGNANCY: CONFLICTING", RENK.lacivert, 760)}
    </>
  );
};

export default S38;
