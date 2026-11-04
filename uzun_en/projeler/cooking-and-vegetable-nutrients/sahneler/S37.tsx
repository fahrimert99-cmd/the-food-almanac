// Sahne 37 — ıspanak, mercek, gözlük: lutein ve göz sağlığı sorusu.
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

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/37" pencere={kameraYolu(t, s.sure, [20, 20, 1880], [110, 90, 1700])} />
      <Etiket t={t} bas={K(0, "spinach")} capa={[1000, 330]} konum={[800, 130]} metin="SPINACH" renk={RENK.yesil} boyut={28} />
      <Pil t={t} bas={K(0, "lutein,")} x={1200} y={130} metin="LUTEIN · YELLOW PIGMENT" renk={RENK.altin} boyut={26} />
      <Etiket t={t} bas={K(0, "eye")} capa={[1500, 800]} konum={[1560, 890]} metin="EYE HEALTH" renk={RENK.lacivert} boyut={26} />
      <Pil t={t} bas={K(0, "over")} x={1200} y={210} metin="OVER 60" renk={RENK.lacivert} boyut={26} />
      <Ikon t={t} bas={K(0, "cooking")} ad="soru" x={1250} y={340} boyut={76} zemin={RENK.altin} />
      <Pil t={t} bas={K(0, "cooking")} x={1310} y={310} metin="DOES COOKING HELP?" renk={RENK.mercan} boyut={26} />
    </>
  );
};
export default S37;
