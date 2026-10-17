// Sahne 21 — 2013 doz denemesi: 79 kişi; iki kapsül ≈12 puan, bir kapsül belirgin fayda yok.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t79 = K(0, "79"), tUnc = K(0, "uncontrolled"), tIki = K(1, "two"), t12 = K(1, "twelve"), tBir = K(2, "one");
  const [s1, a1] = pop(t, t79, 0.5);
  const [s2, a2] = pop(t, tUnc, 0.5);
  const [s3, a3] = pop(t, tBir + 0.9, 0.5);
  return (
    <>
      <Kamera gorsel="tam/21" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800])}>
        <Etiket t={t} bas={tIki} bitis={tBir - 0.1} capa={[960, 790]} konum={[960, 905]} metin="2 CAPSULES A DAY" renk={RENK.yesil} />
        <Etiket t={t} bas={tBir + 0.1} capa={[330, 760]} konum={[330, 905]} metin="1 CAPSULE" renk={RENK.gri} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <Baslik t={t} bas={K(0, "2013")} metin="2013 DOSE TEST" x={90} y={185} boyut={86} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 90, top: 250, display: "flex", gap: 14 }}>
        <div style={{ transform: `scale(${s1})`, transformOrigin: "0% 50%", opacity: a1 }}><Hap metin="79 PEOPLE" renk={RENK.altin} boyut={21} /></div>
        <div style={{ transform: `scale(${s2})`, transformOrigin: "0% 50%", opacity: a2 }}><Hap metin="UNCONTROLLED SYSTOLIC" renk={RENK.mercan} boyut={21} /></div>
      </div>
      <VurguRozet t={t} bas={t12 - 0.1} vurgu="≈ –12" not="points vs. placebo, 2 capsules" x={1500} y={150} genislik={520} boyut={110} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 330, top: 405, transform: `translate(-50%, -50%) scale(${s3})`, opacity: a3 }}>
        <Hap metin="NO CLEAR HELP" renk={RENK.gri} boyut={26} />
      </div>
    </>
  );
};

export default S21;
