// Sahne 25 — iki çalışma: kalp yararı yok, diyabet riski yüksek; sağ panelde başlık.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tIki = K(0, "two large studies"), tKalp = K(0, "no heart"), tDiy = K(0, "higher risk");
  const tAso = K(1, "associations"), tNe = K(2, "neither supports"), tHer = K(2, "healthier");
  const [sc, al] = pop(t, tAso, 0.5);
  const [sk, ak] = pop(t, tIki, 0.5);
  return (
    <>
      <Kamera gorsel="tam/25" pencere={kameraYolu(t, s.sure, [0, 120, 1800], [60, 200, 1680])}>
        <Etiket t={t} bas={tKalp} capa={[268, 530]} konum={[290, 330]} metin="NO HEART BENEFIT" renk={RENK.mercan} boyut={26} />
        <Etiket t={t} bas={tDiy} capa={[873, 520]} konum={[900, 260]} metin="HIGHER DIABETES RISK" renk={RENK.mercan} boyut={26} />
      </Kamera>
      <Panel a={eout(ilerle(t, 0.1, 0.8))} taraf="sag" genislik={780} opak={1} />
      <div style={{ position: "absolute", left: 1290, top: 190, transform: `scale(${sk})`, transformOrigin: "0 50%", opacity: ak }}>
        <Hap metin="2 LARGE STUDIES" renk={RENK.altin} boyut={28} />
      </div>
      <div style={{ position: "absolute", left: 1290, top: 290, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
        <Hap metin="BOTH ASSOCIATIONS" renk={RENK.lacivert} boyut={28} />
      </div>
      <Baslik t={t} bas={tNe} metin="NO CLEAR" x={1290} y={500} boyut={110} renk={RENK.lacivert} />
      <Baslik t={t} bas={tNe + 0.18} metin="BENEFIT" x={1290} y={625} boyut={110} renk={RENK.koyuYesil} />
      <Not t={t} bas={tHer} metin="Gluten-free healthier for everyone? Not supported." x={1294} y={730} boyut={34} genislik={560} />
    </>
  );
};

export default S25;
