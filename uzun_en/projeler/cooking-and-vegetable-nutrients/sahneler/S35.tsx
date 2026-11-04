// Sahne 35 — zeytinyağı + domates sosu: 2015 çalışması.
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

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/35" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [70, 80, 1780])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={K(1, "2015") - 0.2} />
      <Pil t={t} bas={K(0, "canola")} bitis={K(1, "for") } x={700} y={130} metin="CANOLA OIL · 2004 TRIAL" renk={RENK.altin} boyut={28} />
      <Etiket t={t} bas={K(1, "olive")} capa={[330, 600]} konum={[170, 440]} metin="OLIVE OIL" renk={RENK.altin} boyut={26} />
      <Etiket t={t} bas={K(1, "tomato")} capa={[800, 480]} konum={[1000, 300]} metin="TOMATO SAUCE" renk={RENK.mercan} boyut={26} />
      <Pil t={t} bas={K(1, "longer")} x={660} y={110} metin="LONGER SIMMERING" renk={RENK.mercan} boyut={26} />
      <Pil t={t} bas={K(1, "added")} x={660} y={186} metin="+ EXTRA VIRGIN OLIVE OIL" renk={RENK.altin} boyut={26} />
      <Ikon t={t} bas={K(1, "increased")} ad="onay" x={1330} y={150} boyut={76} />
      <Pil t={t} bas={K(1, "increased")} x={1385} y={118} metin="CAROTENOIDS UP" renk={RENK.yesil} boyut={28} />
    </>
  );
};
export default S35;
