// Sahne 28 — Patates denemesi: 30 kadın, 250 g; haşlanmış sıcak vs fırınlanıp 5 gün soğutulmuş.
import React from "react";
import { Etiket, Hap, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Pil: React.FC<{ t: number; bas: number; x: number; y: number; metin: string; renk: string }> = ({ t, bas, x, y, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
      <Hap metin={metin} renk={renk} boyut={28} />
    </div>
  );
};

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/28" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1780])}>
        <Etiket t={t} bas={K(2, "boiled") - 0.1} capa={[540, 560]} konum={[420, 800]} metin="BOILED · HOT" renk={RENK.mercan} boyut={26} />
        <Etiket t={t} bas={K(3, "baked,") - 0.1} capa={[1470, 760]} konum={[1580, 520]} metin="BAKED · COLD" renk={RENK.altin} boyut={26} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <VurguRozet t={t} bas={K(0, "30")} bitis={6.4} vurgu="30" not="WOMEN" x={1560} y={160} genislik={400} />
      <Not t={t} bas={K(0, "overweight")} bitis={6.4} metin="OVERWEIGHT OR OBESITY" x={1560} y={390} hiza="orta" boyut={30} agirlik={800} />
      <VurguRozet t={t} bas={K(1, "250")} bitis={10.5} vurgu="250 G" not="≈ 9 OUNCES" x={1560} y={160} genislik={440} renk={RENK.koyuYesil} />
      <Pil t={t} bas={K(3, "five")} x={1580} y={400} metin="5 DAYS CHILLED" renk={RENK.lacivert} />
    </>
  );
};

export default S28;
