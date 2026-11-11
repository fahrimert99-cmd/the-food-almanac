// Sahne 36 — ilişki ≠ kanıt: kalabalık + büyüteç. Sağda başlık, karıştırıcılar, ters nedensellik oku.
import React from "react";
import { BaslikBlok, Etiket, Ikon, INTER, Kamera, Liste, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Hap2: React.FC<{ t: number; bas: number; metin: string; renk: string; y: number }> = ({ t, bas, metin, renk, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  return (
    <div style={{ position: "absolute", left: 1260, top: y, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al, whiteSpace: "nowrap",
      background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999, padding: "10px 26px", fontFamily: INTER, fontWeight: 800,
      fontSize: 28, letterSpacing: 1.5, color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>{metin}</div>
  );
};

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const bit1 = c[2].bas - 0.1;
  const tOk = K(2, "choosing");
  const pOk = eout(ilerle(t, tOk - 0.1, 0.5));
  return (
    <>
      <Kamera gorsel="tam/36" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 60, 1840])}>
        <Etiket t={t} bas={K(0, "observational")} bitis={c[1].bas} capa={[490, 270]} konum={[900, 190]} metin="OBSERVATIONAL" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "diet drinks")} capa={[960, 700]} konum={[1060, 560]} metin="DIET DRINKS" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "association")} satirlar={["ASSOCIATION,", "NOT PROOF"]} x={1860} y={175} boyut={96} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      {/* 2. cümle: karıştırıcı etkenler */}
      <Not t={t} bas={K(1, "confounded")} bitis={bit1} metin="LINKS MAY BE CONFOUNDED BY" x={1260} y={430} boyut={26} renk={RENK.altin} agirlik={800} />
      <div style={{ opacity: sol(t, bit1) }}><Liste t={t} x={1260} y={490} isaret="nokta" boyut={30} aralik={80} genislik={600}
        ogeler={[
          { bas: K(1, "baseline"), metin: "BASELINE CHARACTERISTICS", renk: RENK.lacivert },
          { bas: K(1, "complex patterns"), metin: "COMPLEX PATTERNS OF USE", renk: RENK.lacivert },
        ]} /></div>
      {/* 3. cümle: ters nedensellik */}
      <Hap2 t={t} bas={K(2, "already worried")} metin="ALREADY WORRIED" renk={RENK.altin} y={460} />
      <div style={{ position: "absolute", left: 0, top: 0, width: 0, height: 0, transformOrigin: "1320px 580px", transform: "rotate(90deg)", opacity: pOk }}>
        <Ikon t={t} bas={tOk - 0.1} ad="ok" x={1320} y={580} boyut={64} renk={RENK.lacivert} zemin={RENK.kagitAcik} />
      </div>
      <Hap2 t={t} bas={tOk} metin="CHOOSE DIET DRINKS" renk={RENK.mercan} y={650} />
    </>
  );
};

export default S36;
