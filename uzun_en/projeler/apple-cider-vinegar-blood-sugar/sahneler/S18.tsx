// Sahne 18 — 2022 derlemesi: sol sütunda başlık, nesnelere etiket; sonra 46 / 913 rozetleri.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBuyuk = K(0, "larger"), t22 = K(0, "2022"), tImp = K(0, "imperial"), tRnd = K(0, "randomized");
  const tVin = K(0, "vinegar"), tRel = K(0, "related");
  const t46 = K(1, "46"), t913 = K(1, "913"), tScfa = K(1, "short-chain"), tNot = K(1, "not");
  const tS1 = s.cumleler[1].bas - 0.15;
  const pill = (bas: number, metin: string, y: number, renk: string) => {
    const [sc, al] = pop(t, bas, 0.5);
    if (al <= 0) return null;
    return <div style={{ position: "absolute", left: 1560, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}><Hap metin={metin} renk={renk} boyut={28} /></div>;
  };
  return (
    <>
      <Kamera gorsel="tam/18" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])}>
        <Etiket t={t} bas={tRnd} bitis={tS1} capa={[420, 650]} konum={[250, 520]} metin="RANDOMIZED TRIALS" renk={RENK.altin} boyut={26} />
        <Etiket t={t} bas={tVin} bitis={tS1} capa={[1130, 580]} konum={[1010, 140]} metin="VINEGAR" renk={RENK.yesil} />
        <Etiket t={t} bas={tRel} bitis={tS1} capa={[1470, 640]} konum={[1640, 540]} metin="RELATED COMPOUNDS" renk={RENK.mercan} boyut={26} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <Baslik t={t} bas={tBuyuk} bitis={tS1} metin="LARGER REVIEW" x={70} y={190} boyut={86} renk={RENK.lacivert} />
      <Baslik t={t} bas={t22} bitis={tS1} metin="2022" x={70} y={290} boyut={110} renk={RENK.altin} />
      <Not t={t} bas={tImp} bitis={tS1} metin="Imperial College London" x={74} y={365} boyut={32} agirlik={800} />
      <VurguRozet t={t} bas={t46} vurgu="46" not="studies" x={300} y={140} genislik={340} boyut={96} />
      <VurguRozet t={t} bas={t913} vurgu="913" not="people" x={300} y={360} genislik={340} boyut={96} renk={RENK.koyuYesil} />
      {pill(tScfa, "SHORT-CHAIN FATTY ACIDS", 140, RENK.altin)}
      {pill(tNot, "NOT VINEGAR ALONE", 230, RENK.mercan)}
    </>
  );
};

export default S18;
