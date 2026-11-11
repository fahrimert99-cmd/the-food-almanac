// Sahne 51 — 1. adım: yiyeceklerini topla, hedefle karşılaştır.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, VurguRozet, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S51: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const son = K(3, "1,200") - 0.1;
  const [sc, al] = pop(t, K(0, "One"), 0.45);
  return (
    <>
      <Kamera gorsel="tam/51" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780])}>
        {/* sağ alttaki imza kalıntısı kâğıt rengiyle örtülür */}
        <div style={{ position: "absolute", left: 1620, top: 940, width: 260, height: 140,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 55%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={K(2, "Dairy,")} bitis={son} capa={[885, 560]} konum={[900, 800]} metin="DAIRY" renk={RENK.yesil} />
        <Etiket t={t} bas={K(2, "fortified")} bitis={son} capa={[650, 330]} konum={[300, 260]} metin="FORTIFIED MILKS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(2, "canned")} bitis={son} capa={[970, 400]} konum={[1020, 150]} metin="CANNED FISH" renk={RENK.yesil} />
        <Etiket t={t} bas={K(2, "greens.")} bitis={son} capa={[1250, 340]} konum={[1560, 250]} metin="GREENS" renk={RENK.yesil} />
      </Kamera>
      <div style={{ position: "absolute", left: 60, top: 60, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
        <Hap metin="STEP 1" renk={RENK.altin} boyut={28} />
      </div>
      <Baslik t={t} bas={K(1, "Add")} metin="ADD UP YOUR FOOD" x={60} y={150} boyut={64} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(3, "1,200")} vurgu="1,200 MG" not="women over 50 · men over 70" x={1650} y={150} genislik={400} boyut={84} />
    </>
  );
};

export default S51;
