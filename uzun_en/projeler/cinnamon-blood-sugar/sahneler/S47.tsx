// Sahne 47 — eczane tezgâhı: ilaç/karaciğer durumunda takviyeden önce doktora ya da eczacıya sor; NIH aynı tavsiyeyi verir.
import React from "react";
import { Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

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

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tMed = K(0, "medicine,"), tLiv = K(0, "liver"), tDoc = K(0, "doctor"), tPh = K(0, "pharmacist"), tSup = K(0, "supplements.");
  const tNat = K(1, "national"), tSame = K(1, "same");
  return (
    <>
      <Kamera gorsel="tam/47" pencere={kameraYolu(t, s.sure, [20, 20, 1880], [90, 40, 1720])}>
        <Etiket t={t} bas={tSup - 0.5} bitis={7.2} capa={[1230, 745]} konum={[1000, 850]} metin="CINNAMON SUPPLEMENTS" renk={RENK.altin} boyut={26} />
      </Kamera>
      <Cip t={t} bas={tMed} bitis={7.2} x={380} y={78} metin="ANY MEDICINE" renk={RENK.altin} boyut={26} />
      <Cip t={t} bas={tLiv} bitis={7.2} x={790} y={78} metin="LIVER CONDITION" renk={RENK.mercan} boyut={26} />
      <Cip t={t} bas={tDoc} bitis={7.2} x={1170} y={78} metin="ASK YOUR DOCTOR" renk={RENK.yesil} boyut={26} />
      <Cip t={t} bas={tPh} bitis={7.2} x={1500} y={160} metin="OR PHARMACIST" renk={RENK.yesil} boyut={26} />
      <Cip t={t} bas={tNat} bitis={10.0} x={960} y={90} metin="NATIONAL INSTITUTES OF HEALTH" renk={RENK.lacivert} boyut={28} />
      <Cip t={t} bas={tSame} x={960} y={90} metin="THE SAME ADVICE" renk={RENK.yesil} boyut={28} />
    </>
  );
};

export default S47;
