// Sahne 36 — Kim fark eder? Boş iki koltuk: yaşlılar ve yeni anneler; tanılı uykusuzluk değil.
import React from "react";
import { Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Kart: React.FC<{ t: number; bas: number; bitis?: number; metin: string; renk: string; y?: number }> = ({ t, bas, bitis = 1e9, metin, renk, y = 868 }) => {
  const [sc, al] = pop(t, bas, 0.55);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 960, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a,
      background: RENK.kagit, borderRadius: 999, padding: 6, boxShadow: "0 8px 22px rgba(48,40,34,0.2)" }}>
      <Hap metin={metin} renk={renk} boyut={38} />
    </div>
  );
};

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tPoor = K(0, "everyday");
  const tIns = K(0, "diagnosed");
  return (
    <>
      <Kamera gorsel="tam/36" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820])}>
        <Etiket t={t} bas={K(0, "older")} capa={[500, 480]} konum={[420, 160]} metin="OLDER ADULTS" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "new mothers")} capa={[1500, 500]} konum={[1520, 160]} metin="NEW MOTHERS" renk={RENK.altin} />
      </Kamera>
      <Kart t={t} bas={tPoor} bitis={tIns - 0.15} metin="EVERYDAY POOR SLEEP" renk={RENK.yesil} />
      <Kart t={t} bas={tIns} metin="NOT DIAGNOSED INSOMNIA" renk={RENK.mercan} />
    </>
  );
};

export default S36;
