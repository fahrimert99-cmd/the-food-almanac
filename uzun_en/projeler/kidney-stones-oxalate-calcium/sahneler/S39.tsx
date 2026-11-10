// Sahne 39 — AUA 2026: günde 2,5 L idrar (~85 oz); daha fazla içmek gerekebilir.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, KaynakEtiketi, Not, Panel, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [30, 20, 1860]);
  const tYeni = K(1, "You") - 0.1;
  const [sp1, ap1] = pop(t, K(0, "adults"), 0.5);
  const [sp2, ap2] = pop(t, K(0, "mostly"), 0.5);
  const sonuk = (a: number) => a * Math.max(0, Math.min(1, (tYeni + 0.3 - t) / 0.3));
  return (
    <>
      <Kamera gorsel="tam/39" pencere={pen}>
        <Etiket t={t} bas={K(0, "water.")} capa={[380, 430]} konum={[830, 290]} metin="WATER" renk={RENK.yesil} />
      </Kamera>
      <Panel a={1} taraf="sag" genislik={940} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(0, "American")} />
      <Baslik t={t} bas={K(0, "guideline")} bitis={tYeni} metin="URINE GOAL" x={1500} y={210} boyut={112} renk={RENK.lacivert} hiza="orta" />
      <div style={{ position: "absolute", left: 1500, top: 290, transform: `translate(-50%,0) scale(${sp1})`, opacity: sonuk(ap1) }}>
        <Hap metin="ADULTS WITH CALCIUM STONES" renk={RENK.altin} boyut={28} />
      </div>
      <VurguRozet t={t} bas={K(0, "2.5")} bitis={tYeni} vurgu="2.5 L" x={1500} y={400} genislik={460} boyut={130} renk={RENK.yesil} />
      <Not t={t} bas={K(0, "85")} bitis={tYeni} metin="about 85 ounces of urine a day" x={1500} y={620} hiza="orta" boyut={34} genislik={620} agirlik={800} />
      <div style={{ position: "absolute", left: 1500, top: 720, transform: `translate(-50%,0) scale(${sp2})`, opacity: sonuk(ap2) }}>
        <Hap metin="MOSTLY FROM WATER" renk={RENK.yesil} boyut={28} />
      </div>
      {/* 2. cümle */}
      <Baslik t={t} bas={K(1, "drink")} metin="DRINK MORE" x={1500} y={300} boyut={116} renk={RENK.koyuYesil} hiza="orta" />
      <Baslik t={t} bas={K(1, "drink") + 0.2} metin="THAN THAT" x={1500} y={430} boyut={116} renk={RENK.lacivert} hiza="orta" />
      <Not t={t} bas={K(1, "fluid")} metin="some fluid is lost in other ways" x={1500} y={560} hiza="orta" boyut={36} agirlik={700} />
    </>
  );
};

export default S39;
