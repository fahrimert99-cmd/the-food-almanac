// Sahne 29 — özet: durulama sıçratır, mikroplar eller ve yüzeyler üzerinden de yayılır.
import React from "react";
import { Etiket, Hap, Kamera, Parcaciklar, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTavuk = K(0, "picture");
  const tFirlat = K(1, "throws"), tLavabo = K(1, "sink");
  const tEl = K(2, "hands"), tYuzey = K(2, "surfaces"), tSu = K(2, "without running");
  const [sh, ah] = pop(t, tEl, 0.55);
  return (
    <>
      <Kamera gorsel="tam/29" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1810])}>
        <Etiket t={t} bas={tTavuk + 0.5} bitis={tEl - 0.3} capa={[960, 460]} konum={[960, 62]} metin="RAW CHICKEN" renk={RENK.mercan} boyut={30} />
        <Etiket t={t} bas={tLavabo - 0.3} bitis={tYuzey} capa={[290, 520]} konum={[300, 890]} metin="SINK" renk={RENK.lacivert} boyut={30} />
        <Etiket t={t} bas={tYuzey} capa={[1400, 800]} konum={[1020, 900]} metin="SURFACES" renk={RENK.altin} boyut={30} />
      </Kamera>
      <Parcaciklar t={t} bas={tFirlat} kaynak={[860, 400]} hedef={[290, 480]} adet={16} aralik={0.14} omur={1.5} yayilma={120} kavis={-120}
        renk={RENK.mercan} boyut={6} tohum="s29a" hedefYayilma={200} />
      <Parcaciklar t={t} bas={tYuzey} kaynak={[1060, 520]} hedef={[1450, 760]} adet={16} aralik={0.18} omur={1.5} yayilma={100} kavis={-60}
        renk={RENK.altin} boyut={6} tohum="s29b" hedefYayilma={200} />
      <div style={{ position: "absolute", left: 960, top: 62, transform: `translate(-50%, -50%) scale(${sh})`, opacity: ah }}>
        <Hap metin="HANDS" renk={RENK.mercan} boyut={30} />
      </div>
    </>
  );
};

export default S29;
