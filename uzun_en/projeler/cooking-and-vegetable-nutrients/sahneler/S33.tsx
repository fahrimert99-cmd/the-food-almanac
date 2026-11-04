// Sahne 33 — salata + sos: yağsız / az yağlı / tam yağlı sos, 12 saat kan takibi.
import React from "react";
import { Baslik, BaslikBlok, CubukGrafik, Etiket, Hap, Ikon, INTER, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet,
  kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Hap rozeti: x = sol kenar (sag ise sağ kenar)
const Pil: React.FC<{ t: number; bas: number; x: number; y: number; metin: string; renk: string; boyut?: number; bitis?: number; sag?: boolean }> = ({
  t, bas, x, y, metin, renk, boyut = 28, bitis = 1e9, sag = false,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", top: y, ...(sag ? { right: 1920 - x } : { left: x }), opacity: a, transform: `scale(${sc})`, transformOrigin: sag ? "100% 50%" : "0% 50%" }}>
      <Hap metin={metin} renk={renk} boyut={boyut} />
    </div>
  );
};

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tYag = K(0, "fat");
  const tBrown = K(1, "brown");
  return (
    <>
      <Kamera gorsel="tam/33" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 17, 1860])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <Baslik t={t} bas={tYag} bitis={tBrown} metin="FAT MATTERS" x={64} y={230} boyut={96} renk={RENK.koyuYesil} />
      <Pil t={t} bas={K(1, "seven adults")} x={64} y={150} metin="7 ADULTS" renk={RENK.lacivert} boyut={26} />
      <Etiket t={t} bas={K(1, "salad")} capa={[820, 470]} konum={[860, 300]} metin="SAME SALAD" renk={RENK.yesil} boyut={26} />
      <Pil t={t} bas={K(1, "fat-free,")} x={64} y={226} metin="FAT-FREE" renk={RENK.altin} boyut={26} />
      <Pil t={t} bas={K(1, "reduced-fat")} x={64} y={302} metin="REDUCED-FAT" renk={RENK.yesil} boyut={26} />
      <Pil t={t} bas={K(1, "full-fat")} x={64} y={378} metin="FULL-FAT" renk={RENK.koyuYesil} boyut={26} />
      <VurguRozet t={t} bas={K(1, "12")} vurgu="12 H" not="carotenoids tracked in blood" x={1770} y={440} genislik={220} boyut={72} />
    </>
  );
};
export default S33;
