// Sahne 40 — PUSH denemesi 2026: idrar hacmi hafif arttı, taş olayları benzer (%19 vs %20).
import React from "react";
import { Baslik, Etiket, Hap, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840]);
  const kapat = K(1, "Urine") - 0.15;
  const sonuk = (a: number) => a * Math.max(0, Math.min(1, (kapat + 0.4 - t) / 0.4));
  const [sp1, ap1] = pop(t, K(0, "caution:"), 0.5);
  const [sp2, ap2] = pop(t, K(0, "coaching"), 0.5);
  const [sp3, ap3] = pop(t, K(1, "volume"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/40" pencere={pen}>
        <Etiket t={t} bas={K(0, "smart")} capa={[700, 420]} konum={[250, 560]} metin="SMART BOTTLE" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(0, "caution:")} />
      <div style={{ position: "absolute", left: 1450, top: 130, transform: `translate(-50%,0) scale(${sp1})`, opacity: sonuk(ap1) }}>
        <Hap metin="A FAIR CAUTION" renk={RENK.altin} boyut={28} />
      </div>
      <Baslik t={t} bas={K(0, "PUSH")} bitis={kapat} metin="2026 PUSH TRIAL" x={1450} y={250} boyut={96} renk={RENK.lacivert} hiza="orta" />
      <VurguRozet t={t} bas={K(0, "1,658")} bitis={kapat} vurgu="1,658" not="people with stones" x={1450} y={330} genislik={400} boyut={110} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 1450, top: 560, transform: `translate(-50%,0) scale(${sp2})`, opacity: sonuk(ap2) }}>
        <Hap metin="COACHING + SMART BOTTLE" renk={RENK.yesil} boyut={26} />
      </div>
      {/* 2. cümle */}
      <div style={{ position: "absolute", left: 1450, top: 150, transform: `translate(-50%,0) scale(${sp3})`, opacity: ap3 }}>
        <Hap metin="URINE VOLUME: MODEST RISE" renk={RENK.yesil} boyut={28} />
      </div>
      <Baslik t={t} bas={K(1, "similar,")} metin="STONE EVENTS: SIMILAR" x={1450} y={290} boyut={80} renk={RENK.lacivert} hiza="orta" />
      <VurguRozet t={t} bas={K(1, "19")} vurgu="19%" x={1290} y={380} genislik={270} boyut={110} renk={RENK.yesil} />
      <Baslik t={t} bas={K(1, "versus")} metin="VS" x={1450} y={455} boyut={44} renk={RENK.gri} hiza="orta" />
      <VurguRozet t={t} bas={K(1, "20")} vurgu="20%" x={1610} y={380} genislik={270} boyut={110} renk={RENK.mercan} />
    </>
  );
};

export default S40;
