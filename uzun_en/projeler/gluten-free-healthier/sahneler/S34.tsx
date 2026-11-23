// Sahne 34 — iki çalışma küçüktü, IBS'li yetişkinler; neden yalnız gluten olmayabilir.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Pil: React.FC<{ t: number; bas: number; bitis: number; y: number; metin: string; renk: string }> = ({ t, bas, bitis, y, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.55);
  if (al <= 0 || t > bitis) return null;
  return (
    <div style={{ position: "absolute", left: 960, top: y, transform: `translate(-50%, 0) scale(${sc})`, opacity: al }}>
      <Hap metin={metin} renk={renk} boyut={32} />
    </div>
  );
};

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kam = kameraYolu(t, s.sure, [100, 40, 1720], [160, 70, 1600]);
  const bit = K(1, "But") - 0.25;
  return (
    <>
      <Kamera gorsel="tam/34" pencere={kam}>
        <Etiket t={t} bas={K(1, "second trial")} capa={[667, 440]} konum={[420, 190]} metin="SECOND TRIAL" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "small")} bitis={bit} metin="BOTH TRIALS WERE SMALL" x={960} y={120} boyut={84} hiza="orta" renk={RENK.lacivert} />
      <Pil t={t} bas={K(0, "irritable")} bitis={K(0, "so they") - 0.1} y={190} metin="ADULTS WITH IRRITABLE BOWEL SYNDROME" renk={RENK.altin} />
      <Pil t={t} bas={K(0, "settle")} bitis={bit} y={190} metin="CAN'T SETTLE IT FOR EVERYONE" renk={RENK.mercan} />
      <BaslikBlok t={t} bas={K(1, "something other")} satirlar={["SOMETHING OTHER", "THAN GLUTEN ALONE"]} x={960} y={845} boyut={62} hiza="orta" renkler={[RENK.lacivert, RENK.koyuYesil]} />
    </>
  );
};

export default S34;
