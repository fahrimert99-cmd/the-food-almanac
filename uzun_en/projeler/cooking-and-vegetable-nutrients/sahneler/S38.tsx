// Sahne 38 — üç kase: bütün yaprak / doğranmış / sıvılaştırılmış; kandaki lutein fark etmedi.
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

const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFin = K(2, "lutein");
  return (
    <>
      <Kamera gorsel="tam/38" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 50, 1800])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={K(1, "1999") - 0.2} />
      <Baslik t={t} bas={K(0, "not")} bitis={1.95} metin="NOT CLEARLY" x={1100} y={140} boyut={84} renk={RENK.koyuYesil} hiza="orta" />
      <Pil t={t} bas={K(1, "three")} bitis={tFin - 0.1} x={820} y={110} metin="3 WEEKS" renk={RENK.lacivert} boyut={28} />
      <Etiket t={t} bas={K(1, "whole")} bitis={tFin - 0.1} capa={[300, 560]} konum={[250, 160]} metin="WHOLE LEAVES" renk={RENK.yesil} boyut={26} />
      <Etiket t={t} bas={K(1, "minced")} bitis={tFin - 0.1} capa={[960, 600]} konum={[1180, 250]} metin="MINCED" renk={RENK.koyuYesil} boyut={26} />
      <Etiket t={t} bas={K(1, "liquefied.")} bitis={tFin - 0.1} capa={[1500, 560]} konum={[1500, 250]} metin="LIQUEFIED" renk={RENK.altin} boyut={26} />
      <Baslik t={t} bas={tFin} metin="LUTEIN: NO DIFFERENCE" x={1130} y={150} boyut={76} renk={RENK.koyuYesil} hiza="orta" />
      <Ikon t={t} bas={tFin + 0.5} ad="onay" x={1130} y={235} boyut={64} />
    </>
  );
};
export default S38;
