// Sahne 29 — "NOT PROOF": solda sepet/ayakkabı görseli, sağda neden-sonuç değil notu ve yaşam tarzı maddeleri.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Madde: React.FC<{ t: number; bas: number; y: number; metin: string; renk: string }> = ({ t, bas, y, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  return (
    <div style={{ position: "absolute", left: 1230, top: y, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
      <Hap metin={metin} renk={renk} boyut={36} />
    </div>
  );
};

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), b = s.meta.baslik!;
  const tAsos = K(0, "association"), tNot = K(0, "not"), tUst = K(1, "heavier");
  const tEgz = K(1, "exercised"), tSig = K(1, "smoked"), tMeyve = K(1, "fruits");
  const tAdj = K(2, "adjustments");
  const aAdj = eout(ilerle(t, tAdj, 0.5));
  return (
    <>
      <Kamera gorsel="tam/29" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 20, 1860])} />
      <Baslik t={t} bas={tAsos} metin="ASSOCIATION" x={1230} y={160} boyut={92} renk={RENK.lacivert} />
      <Baslik t={t} bas={tNot} metin={b.satirlar[0]} x={1230} y={270} boyut={110} renk={RENK.mercan} />
      <Not t={t} bas={tUst} metin={b.not!} x={1234} y={355} boyut={30} genislik={650} />
      <Madde t={t} bas={tEgz} y={470} metin="EXERCISED MORE" renk={RENK.yesil} />
      <Madde t={t} bas={tSig} y={560} metin="SMOKED LESS" renk={RENK.yesil} />
      <Madde t={t} bas={tMeyve} y={650} metin="MORE FRUIT & VEG" renk={RENK.yesil} />
      <Etiket t={t} bas={tEgz} capa={[667, 870]} konum={[470, 650]} metin="EXERCISE" renk={RENK.altin} boyut={24} />
      <Etiket t={t} bas={tMeyve} capa={[790, 720]} konum={[820, 540]} metin="FRUIT & VEG" renk={RENK.yesil} boyut={24} />
      <div style={{ position: "absolute", left: 1230, top: 790, width: 650, opacity: aAdj, transform: `translateY(${(1 - aAdj) * 12}px)`,
        borderLeft: `8px solid ${RENK.altin}`, paddingLeft: 22, fontFamily: "inherit" }}>
        <Not t={t} bas={tAdj} metin="Adjustments helped, but cannot erase every difference." x={0} y={0} boyut={34} agirlik={700} />
      </div>
    </>
  );
};

export default S29;
