// Sahne 1 — akşam yemeği sonrası: boş masa, açık kapı, ayakkabılar.
import React from "react";
import { Baslik, Etiket, Kamera, Panel, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const cikis1 = c[1].bas + 5.8;
  const pSol = eout(ilerle(t, 0.1, 0.6)) * (1 - eout(ilerle(t, c[1].bas - 0.2, 0.5)));
  const pSag = eout(ilerle(t, K(2, "almost") - 0.3, 0.7));
  return (
    <>
      <Kamera gorsel="tam/01" pencere={kameraYolu(t, s.sure, [40, 22, 1840], [110, 58, 1700])}>
        <Etiket t={t} bas={K(1, "plates")} bitis={cikis1} capa={[440, 783]} konum={[330, 890]} metin="CLEARED PLATES" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "stroll")} bitis={c[2].bas - 0.1} capa={[1200, 560]} konum={[1130, 400]} metin="TEN MINUTE STROLL" renk={RENK.yesil} />
      </Kamera>
      {/* Giriş: sol duvarda başlık */}
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 760, opacity: pSol,
        background: `linear-gradient(to right, ${kagit(0.92)} 0%, ${kagit(0.85)} 60%, ${kagit(0)} 100%)` }} />
      <Baslik t={t} bas={K(0, "end")} bitis={c[1].bas - 0.2} metin="AFTER" x={90} y={260} boyut={110} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "dinner")} bitis={c[1].bas - 0.2} metin="DINNER…" x={90} y={375} boyut={110} renk={RENK.koyuYesil} />
      {/* Kapanış: sağ panel */}
      <Panel a={pSag} taraf="sag" genislik={760} />
      <Baslik t={t} bas={K(2, "almost")} metin="ALMOST" x={1860} y={330} boyut={100} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(2, "too")} metin="TOO SIMPLE" x={1860} y={450} boyut={100} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(2, "matter")} metin="TO MATTER?" x={1860} y={570} boyut={100} hiza="sag" renk={RENK.altin} />
    </>
  );
};

export default S01;
