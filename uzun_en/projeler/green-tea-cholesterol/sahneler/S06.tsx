// Sahne 6 — EGCG: moleküle etiket, başlık, "mg catechins / mg EGCG" hapları.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Pop: React.FC<{ t: number; bas: number; x: number; y: number; metin: string; renk: string }> = ({ t, bas, x, y, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
      <Hap metin={metin} renk={renk} />
    </div>
  );
};

const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tEgcg = K(0, "EGCG.");
  const tDoz = K(1, "dose");
  const tMg = K(1, "milligrams");
  return (
    <>
      <Kamera gorsel="tam/06" pencere={kameraYolu(t, s.sure, [0, 60, 1920], [60, 100, 1780])}>
        <Etiket t={t} bas={K(0, "catechin")} bitis={tDoz} capa={[1290, 580]} konum={[1580, 720]} metin="CATECHIN" renk={RENK.altin} />
        <Etiket t={t} bas={tDoz} bitis={tMg - 0.2} capa={[450, 640]} konum={[560, 910]} metin="DOSE OF TEA" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={tEgcg - 0.1} metin="EGCG" x={1860} y={200} boyut={140} renk={RENK.koyuYesil} hiza="sag" />
      <Not t={t} bas={tEgcg + 0.3} metin={s.meta.baslik!.not!} x={1860} y={300} hiza="sag" genislik={820} />
      <Pop t={t} bas={tMg + 0.7} x={1060} y={880} metin="MG OF CATECHINS" renk={RENK.yesil} />
      <Pop t={t} bas={K(1, "EGCG alone") } x={1520} y={880} metin="OR MG OF EGCG" renk={RENK.altin} />
    </>
  );
};

export default S06;
