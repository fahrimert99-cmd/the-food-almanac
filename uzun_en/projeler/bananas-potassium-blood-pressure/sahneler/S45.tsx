// Sahne 45 — potasyumu yükselten ilaçlar: solda ilaç kutusu, sağda liste.
import React from "react";
import { BaslikBlok, Hap, Kamera, Liste, Not, Parcaciklar, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Ust: React.FC<{ t: number; bas: number; bitis?: number; metin: string; renk: string }> = ({ t, bas, bitis = 1e9, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const c = Math.max(0, Math.min(1, 1 - (t - bitis) / 0.4));
  if (al <= 0 || c <= 0) return null;
  return <div style={{ position: "absolute", left: 1060, top: 490, opacity: al * c, transform: `scale(${sc})`, transformOrigin: "0 50%" }}>
    <Hap metin={metin} renk={renk} boyut={32} />
  </div>;
};

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tMed = K(0, "medicines"), tRaise = K(0, "raise"), tPot = K(0, "potassium");
  const tAHA = K(1, "American"), tACE = K(1, "ACE"), tARB = K(1, "angiotensin"), tIki = K(1, "two common");
  const tHar = K(2, "Harvard's"), tAnti = K(2, "anti-inflammatory"), tNS = K(2, "NSAIDs");
  const c1 = K(2, "Harvard's") - 0.2;
  return (
    <>
      <Kamera gorsel="tam/45" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1780])}>
        <Parcaciklar t={t} bas={tRaise} kaynak={[480, 640]} hedef={[480, 330]} adet={14} aralik={0.12} yayilma={300} hedefYayilma={200} kavis={-60} tohum="p45" />
      </Kamera>
      <BaslikBlok t={t} bas={tMed} satirlar={["SOME", "MEDICINES"]} x={1860} y={230} boyut={100} hiza="sag" renkler={[RENK.lacivert, RENK.mercan]} />
      <Not t={t} bas={tPot} metin="can raise potassium" x={1860} y={395} hiza="sag" boyut={36} genislik={700} bitis={c1} />
      <Ust t={t} bas={tAHA} bitis={c1} metin="AMERICAN HEART ASSOCIATION" renk={RENK.lacivert} />
      <Liste t={t} isaret="nokta" x={1060} y={570} aralik={96} boyut={40} genislik={800}
        ogeler={[{ bas: tACE, metin: "ACE INHIBITORS", renk: RENK.mercan, bitis: c1 }, { bas: tARB, metin: "RECEPTOR BLOCKERS", renk: RENK.mercan, bitis: c1 }]} />
      <Not t={t} bas={tIki} metin="two common blood pressure medicines" x={1060} y={800} boyut={34} genislik={800} bitis={c1} />
      <Ust t={t} bas={tHar} metin="HARVARD NUTRITION SOURCE" renk={RENK.lacivert} />
      <Not t={t} bas={tAnti} metin="anti-inflammatory pain relievers" x={1060} y={580} boyut={36} genislik={800} />
      <Liste t={t} isaret="nokta" x={1060} y={660} boyut={46} genislik={800} ogeler={[{ bas: tNS, metin: "NSAIDS", renk: RENK.mercan }]} />
    </>
  );
};

export default S45;
