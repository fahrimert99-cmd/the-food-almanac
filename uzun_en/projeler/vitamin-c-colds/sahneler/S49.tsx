// Sahne 49 — madde 2: meyve suyu ve hap soğuk kalkanı değil.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop, ANTON } from "../kutuphane";

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sn, an] = pop(t, 0.05, 0.5);
  const [sh, ah] = pop(t, K(2, "every day"), 0.5);
  const [sb, ab] = pop(t, K(2, "biggest review"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/49" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1780])}>
        <Etiket t={t} bas={K(1, "juice")} capa={[480, 590]} konum={[270, 190]} metin="JUICE" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "tablets")} capa={[860, 700]} konum={[900, 880]} metin="TABLETS" renk={RENK.lacivert} />
      </Kamera>
      <div style={{ position: "absolute", left: 1500, top: 150, width: 100, height: 100, borderRadius: "50%", background: RENK.altin,
        color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 64,
        opacity: an, transform: `scale(${sn})`, boxShadow: "0 8px 22px rgba(48,40,34,0.2)" }}>2</div>
      <BaslikBlok t={t} bas={K(1, "stop") - 0.1} satirlar={["NOT A", "COLD SHIELD"]} x={1860} y={340} boyut={92} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <div style={{ position: "absolute", right: 60, top: 560, display: "flex", gap: 16 }}>
        <div style={{ opacity: ab, transform: `scale(${sb})`, transformOrigin: "100% 50%" }}><Hap metin="BIGGEST REVIEW" renk={RENK.altin} boyut={28} /></div>
        <div style={{ opacity: ah, transform: `scale(${sh})`, transformOrigin: "100% 50%" }}><Hap metin="EVERY DAY" renk={RENK.yesil} boyut={28} /></div>
      </div>
      <VurguRozet t={t} bas={K(2, "almost no")} vurgu="≈ NO CHANGE" not="in colds caught" x={1570} y={660} genislik={500} boyut={84} renk={RENK.mercan} />
    </>
  );
};

export default S49;
