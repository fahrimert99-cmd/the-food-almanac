// Sahne 22 — ölümde fark küçük (şans olabilir); yalnızca nüks bulgusu istatistiksel olarak sağlam. Terazi görseli.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDeaths = K(0, "deaths"), tLower = K(1, "lower"), tChance = K(1, "chance"), tRec = K(2, "recurrence"), tSolid = K(2, "solid");
  const [sc, al] = pop(t, tLower, 0.5);
  const [sc2, al2] = pop(t, tSolid - 0.4, 0.5);
  return (
    <>
      <Kamera gorsel="tam/22" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820])}>
        <Etiket t={t} bas={tChance} capa={[960, 245]} konum={[960, 100]} metin="COULD BE CHANCE" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={tDeaths} metin="DEATHS" x={90} y={170} boyut={110} renk={RENK.lacivert} />
      <div style={{ position: "absolute", left: 90, top: 250, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
        <Hap metin="LOWER, BUT SMALL" renk={RENK.altin} boyut={32} />
      </div>
      <Baslik t={t} bas={tRec} metin="RECURRENCE" x={1860} y={790} boyut={92} renk={RENK.koyuYesil} hiza="sag" />
      <div style={{ position: "absolute", right: 60, top: 860, transform: `scale(${sc2})`, transformOrigin: "100% 50%", opacity: al2, display: "flex", alignItems: "center", gap: 16 }}>
        <Hap metin="STATISTICALLY SOLID" renk={RENK.yesil} boyut={32} />
      </div>
    </>
  );
};

export default S22;
