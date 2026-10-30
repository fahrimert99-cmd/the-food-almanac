// Sahne 42 — iki kase: 100 g sorbitol ve küçük başlangıç.
import React from "react";
import { BaslikBlok, Etiket, INTER, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Belirti: React.FC<{ t: number; bas: number; bitis: number; metin: string; x: number }> = ({ t, bas, bitis, metin, x }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: 440, opacity: a, transform: `scale(${sc})`, transformOrigin: "0 50%",
      background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`, borderRadius: 999, padding: "10px 26px", fontFamily: INTER,
      fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.murekkep, whiteSpace: "nowrap", boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
      {metin}
    </div>
  );
};

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tKucuk = K(2, "Starting") - 0.2;
  return (
    <>
      <Kamera gorsel="tam/42" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={K(1, "100 grams")} bitis={tKucuk} capa={[1400, 330]} konum={[1000, 140]} metin="100 G OF PRUNES" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "smaller")} capa={[600, 590]} konum={[600, 440]} metin="SMALLER PORTION" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "side effect")} bitis={K(1, "100 grams") - 0.2} satirlar={["SIDE EFFECT"]} x={60} y={190} boyut={110} renkler={[RENK.mercan]} />
      <VurguRozet t={t} bas={K(1, "15")} bitis={tKucuk} vurgu="≈ 15 g" not="sorbitol in 100 g of prunes" x={290} y={110} genislik={430} />
      <Belirti t={t} bas={K(1, "gas,")} bitis={tKucuk} metin="GAS" x={60} />
      <Belirti t={t} bas={K(1, "cramps")} bitis={tKucuk} metin="CRAMPS" x={230} />
      <Belirti t={t} bas={K(1, "loose")} bitis={tKucuk} metin="LOOSE STOOLS" x={440} />
      <BaslikBlok t={t} bas={K(2, "Starting")} satirlar={["START SMALL"]} x={60} y={190} boyut={130} renkler={[RENK.koyuYesil]} />
    </>
  );
};

export default S42;
