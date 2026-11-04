// Sahne 40 — tabak: çiğ salata ve pişmiş ıspanak; "pişirmek lutein'i açar" fikri bu çalışmayla desteklenmiyor.
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

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tRaw = K(0, "raw");
  return (
    <>
      <Kamera gorsel="tam/40" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 50, 1760])} />
      <Pil t={t} bas={K(0, "cooking")} bitis={K(0, "isn't") + 0.2} x={64} y={140} metin="COOKING UNLOCKS LUTEIN?" renk={RENK.altin} boyut={26} />
      <BaslikBlok t={t} bas={K(0, "isn't")} bitis={tRaw - 1.2} satirlar={["NOT", "SUPPORTED"]} x={1860} y={200} boyut={90} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Etiket t={t} bas={tRaw} bitis={K(1, "breaking") + 0.6} capa={[700, 480]} konum={[240, 600]} metin="RAW LEAVES" renk={RENK.yesil} boyut={26} />
      <Etiket t={t} bas={K(0, "cooked.")} bitis={K(1, "breaking") + 0.6} capa={[1200, 600]} konum={[1660, 640]} metin="COOKED" renk={RENK.mercan} boyut={26} />
      <BaslikBlok t={t} bas={K(1, "didn't")} satirlar={["NO RISE", "IN LUTEIN"]} x={1860} y={200} boyut={90} hiza="sag" />
      <Ikon t={t} bas={K(1, "reassuring")} ad="onay" x={1520} y={600} boyut={64} />
      <Pil t={t} bas={K(1, "reassuring")} sag x={1860} y={650} metin="REASSURING IF RAW" renk={RENK.yesil} boyut={24} />
    </>
  );
};
export default S40;
