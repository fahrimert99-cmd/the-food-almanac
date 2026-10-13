// Sahne 44 — birleştirilmiş analiz: oran 1.25, aralık etkisizliği içeriyor, çalışmalar tutarsız → soru açık.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, VurguRozet, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Pill: React.FC<{ t: number; bas: number; metin: string; renk: string; y: number }> = ({ t, bas, metin, renk, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  return (
    <div style={{ position: "absolute", left: 1000, top: y, transform: `translate(-50%,-50%) scale(${sc})`, opacity: al }}>
      <Hap metin={metin} renk={renk} boyut={28} />
    </div>
  );
};

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tPool = K(0, "pooled analysis"), tOran = K(0, "1.25"), tAralik = K(0, "range included"), tTut = K(0, "inconsistent");
  const tAcik = K(1, "open,"), tSoru = K(1, "question");
  return (
    <>
      <Kamera gorsel="tam/44" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 20, 1830])}>
        {/* sağ alttaki imza kalıntısı kâğıt/tahta rengiyle örtülür */}
        <div style={{ position: "absolute", left: 1780, top: 1000, width: 140, height: 80,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, #C99A62 0%, #C99A62 50%, rgba(201,154,98,0) 100%)` }} />
        <Etiket t={t} bas={tPool} bitis={4.9} capa={[700, 880]} konum={[700, 600]} metin="POOLED ANALYSIS" renk={RENK.koyuYesil} boyut={32} />
        <Etiket t={t} bas={tAcik} capa={[1490, 300]} konum={[1060, 680]} metin="OPEN QUESTION" renk={RENK.mercan} boyut={32} />
      </Kamera>
      <VurguRozet t={t} bas={tOran} vurgu="1.25" not="PER EGG A DAY" x={1000} y={150} genislik={400} />
      <Pill t={t} bas={tAralik} metin="RANGE INCLUDED NO EFFECT" renk={RENK.altin} y={400} />
      <Pill t={t} bas={tTut} metin="STUDIES INCONSISTENT" renk={RENK.mercan} y={480} />
      <Baslik t={t} bas={tSoru} metin="OPEN," x={160} y={230} boyut={104} renk={RENK.lacivert} />
      <Baslik t={t} bas={tSoru + 0.15} metin="NOT SETTLED" x={160} y={350} boyut={104} renk={RENK.koyuYesil} />
    </>
  );
};

export default S44;
