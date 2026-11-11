// Sahne 46 — 1,0–1,2 uzlaşı alt sınırı; ~1,6 g/kg üstünde ek kas tahmini yok.
import React from "react";
import { Baslik, Kamera, kagit, pop, sol, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCik = K(1, "Beyond") - 0.2;
  return (
    <>
      <Kamera gorsel="tam/46" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])} />
      <Baslik t={t} bas={K(0, "1.0")} bitis={tCik} metin="1.0–1.2 G/KG" x={960} y={120} boyut={100} renk={RENK.lacivert} hiza="orta" />
      <div style={{ position: "absolute", left: 540, top: 165, width: 840, height: 120, borderRadius: 18, background: kagit(0.92),
        opacity: pop(t, K(0, "consensus"), 0.4)[1] * sol(t, tCik) }} />
      <Not t={t} bas={K(0, "consensus")} bitis={tCik} metin="a consensus minimum for healthy older adults" x={960} y={185} hiza="orta" boyut={34} agirlik={800} />
      <Not t={t} bas={K(0, "not a")} bitis={tCik} metin="not a goal to keep pushing higher" x={960} y={235} hiza="orta" boyut={32} renk={RENK.mercan} agirlik={800} />
      <VurguRozet t={t} bas={K(1, "1.6")} vurgu="~1.6 G/KG" not="beyond this, no extra muscle estimated" x={960} y={110} genislik={620} boyut={100} />
    </>
  );
};

export default S46;
