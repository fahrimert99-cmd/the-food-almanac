// Sahne 49 — Üç: kızartma değil, fırında/ızgarada; kızarmış balık ve kalp yetmezliği.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, ANTON } from "../kutuphane";

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const m = s.meta.baslik!;
  const tNon = K(2, "non-fried"), tStud = K(2, "two US"), tFried = K(2, "fried"), tOnce = K(2, "once a"), tPct = K(2, "48");
  const [sn, an] = pop(t, 0.0, 0.5);
  return (
    <>
      <Kamera gorsel="tam/49" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 30, 1860])}>
        <Etiket t={t} bas={tNon} capa={[590, 730]} konum={[1290, 480]} metin="NON-FRIED COUNTS" renk={RENK.yesil} boyut={26} />
        <Etiket t={t} bas={tFried} capa={[640, 300]} konum={[1040, 200]} metin="FRIED FISH" renk={RENK.mercan} boyut={26} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.3} />
      <div style={{ position: "absolute", left: 1220, top: 110, opacity: an, transform: `scale(${sn})`, transformOrigin: "0 50%",
        fontFamily: ANTON, fontSize: 52, letterSpacing: 5, color: RENK.altin }}>THREE</div>
      <BaslikBlok t={t} bas={0.85} satirlar={m.satirlar} x={1220} y={250} boyut={88} renkler={[RENK.koyuYesil, RENK.mercan]} />
      <Not t={t} bas={tStud} metin="2 US STUDIES · 90,000+ PEOPLE" x={1220} y={560} boyut={28} agirlik={800} renk={RENK.lacivert} />
      <Not t={t} bas={tOnce} metin="FRIED FISH ONCE A WEEK OR MORE" x={1220} y={610} boyut={26} agirlik={800} renk={RENK.mercan} />
      <VurguRozet t={t} bas={tPct} vurgu="UP TO 48%" not="HIGHER RISK OF HEART FAILURE" x={1560} y={680} boyut={92} genislik={560} renk={RENK.mercan} />
    </>
  );
};
export default S49;
