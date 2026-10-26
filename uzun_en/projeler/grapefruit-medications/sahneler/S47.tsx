// Sahne 47 — izlenecek meyveler: Seville, pomelo, tangelo (FDA).
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const b = s.meta.baslik!;
  const gT = c[1].bas - 0.1;
  const [s1, a1] = pop(t, K(1, "might"), 0.5);
  const [s2, a2] = pop(t, K(2, "sour"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/47" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 40, 1740])}>
        <Etiket t={t} bas={K(1, "Seville")} capa={[400, 570]} konum={[280, 170]} metin="SEVILLE ORANGE" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "pomelos")} capa={[933, 330]} konum={[640, 120]} metin="POMELO" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "tangelos")} capa={[1270, 700]} konum={[1500, 900]} metin="TANGELO" renk={RENK.koyuYesil} />
      </Kamera>
      <Panel a={eout(ilerle(t, 0, 0.5)) * (t < gT ? 1 : 0)} taraf="sol" genislik={900} opak={0.92} />
      <BaslikBlok t={t} bas={0.1} bitis={gT} satirlar={b.satirlar} x={70} y={330} boyut={104}
        renkler={[RENK.mercan, RENK.lacivert]} />
      <Not t={t} bas={K(0, "fruits")} bitis={gT} metin={b.not!} x={74} y={560} boyut={34} genislik={700} />
      <div style={{ position: "absolute", left: 960, top: 905, transform: `translate(-50%,-50%) scale(${s1})`, opacity: a1 * (t < K(2, "Seville") - 0.1 ? 1 : 0) }}>
        <Hap metin="MIGHT ACT LIKE GRAPEFRUIT JUICE" renk={RENK.mercan} boyut={28} />
      </div>
      <div style={{ position: "absolute", left: 960, top: 905, transform: `translate(-50%,-50%) scale(${s2})`, opacity: a2 }}>
        <Hap metin="SEVILLE = SOUR ORANGE" renk={RENK.altin} boyut={28} />
      </div>
    </>
  );
};

export default S47;
