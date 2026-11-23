// Sahne 42 — uzun vadeli etkiler bilinmiyor
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, Not, RENK, SP, kelimeZamani, kameraYolu, pop, sol } from "../kutuphane";

const Pil: React.FC<{ t: number; bas: number; metin: string; renk: string; x: number; y: number }> = ({ t, bas, metin, renk, x, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
      <Hap metin={metin} renk={renk} boyut={30} />
    </div>
  );
};

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const w = kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740]);
  const c2 = c[2].bas - 0.15;
  return (
    <>
      <Kamera gorsel="tam/42" pencere={w}>
        <Etiket t={t} bas={K(0, "unknown")} bitis={c[1].bas + 0.6} capa={[1130, 700]} konum={[1560, 760]} metin="STILL UNKNOWN" renk={RENK.altin} />
      </Kamera>
      {/* 2. cümle: meta başlığı */}
      <BaslikBlok t={t} bas={K(1, "long-term")} bitis={c2} satirlar={["LONG-TERM", "EFFECTS?"]} x={1130} y={200} boyut={104}
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Not t={t} bas={K(1, "no studies")} bitis={c2} metin="no studies yet" x={1134} y={380} boyut={38} agirlik={700} />
      {/* 3. cümle: daha fazla araştırma */}
      <Pil t={t} bas={K(2, "Klein")} metin="KLEIN & KIAT" renk={RENK.altin} x={1420} y={150} />
      <BaslikBlok t={t} bas={K(2, "more research")} satirlar={["MORE", "RESEARCH"]} x={1130} y={270} boyut={104}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Pil t={t} bas={K(2, "benefits")} metin="POSSIBLE BENEFITS" renk={RENK.yesil} x={1420} y={520} />
      <Pil t={t} bas={K(2, "risks")} metin="RISKS" renk={RENK.mercan} x={1420} y={605} />
    </>
  );
};

export default S42;
