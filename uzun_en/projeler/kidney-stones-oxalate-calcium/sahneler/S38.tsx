// Sahne 38 — 1996 su denemesi: 12/99 vs 27/100 (5 yıl). Sol görsel, sağda başlık + çubuklar.
import React from "react";
import { Baslik, CubukGrafik, Etiket, Hap, Kamera, KaynakEtiketi, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [30, 20, 1860]);
  const tOn = K(0, "randomly") - 0.2;  // grup açıklamaları çubuklardan önce kalkar
  const [sp1, ap1] = pop(t, K(0, "199"), 0.5);
  const [sp2, ap2] = pop(t, K(0, "drink"), 0.5);
  const [sp3, ap3] = pop(t, K(0, "usual"), 0.5);
  const kapat = K(1, "Over") - 0.15;
  const gec = (a: number) => a * Math.max(0, Math.min(1, (kapat + 0.4 - t) / 0.4));
  return (
    <>
      <Kamera gorsel="tam/38" pencere={pen}>
        <Etiket t={t} bas={K(0, "first")} capa={[840, 720]} konum={[960, 890]} metin="FIRST CALCIUM STONE" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "water")} capa={[420, 420]} konum={[860, 230]} metin="MORE WATER" renk={RENK.yesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(0, "1996")} />
      <Baslik t={t} bas={K(0, "trial,") + 0.1} metin="MORE WATER" x={1500} y={230} boyut={112} renk={RENK.koyuYesil} hiza="orta" />
      <div style={{ position: "absolute", left: 1500, top: 310, transform: `translate(-50%,0) scale(${sp1})`, opacity: ap1 }}>
        <Hap metin="199 PEOPLE" renk={RENK.lacivert} boyut={30} />
      </div>
      {/* rastgele iki grup */}
      <div style={{ position: "absolute", left: 1500, top: 420, transform: `translate(-50%,0) scale(${sp2})`, opacity: gec(ap2) }}>
        <Hap metin="DRINK MORE WATER" renk={RENK.yesil} boyut={30} />
      </div>
      <div style={{ position: "absolute", left: 1500, top: 500, transform: `translate(-50%,0) scale(${sp3})`, opacity: gec(ap3) }}>
        <Hap metin="USUAL CARE" renk={RENK.gri} boyut={30} />
      </div>
      <Not t={t} bas={K(1, "years,")} metin="STONES RETURNED OVER FIVE YEARS" x={1500} y={400} hiza="orta" boyut={28} agirlik={800} renk={RENK.lacivert} />
      <CubukGrafik t={t} bas={K(1, "12") - 0.05} x={1180} y={570} w={640} h={250} maks={34}
        cubuklar={[
          { etiket: "HIGH WATER", deger: 12.1, metin: "12 / 99", renk: RENK.yesil, bas: K(1, "12") - 0.05 },
          { etiket: "USUAL CARE", deger: 27, metin: "27 / 100", renk: RENK.mercan, bas: K(1, "27") - 0.05 },
        ]} />
    </>
  );
};

export default S38;
