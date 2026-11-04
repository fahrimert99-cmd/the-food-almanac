// Sahne 39 — terazi: ıspanak ve takviye; lutein ≈ %50, beta-karoten %5–10.
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

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tB = K(1, "beta-carotene");
  return (
    <>
      <Kamera gorsel="tam/39" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 50, 1800])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <Etiket t={t} bas={K(0, "spinach")} capa={[330, 480]} konum={[330, 190]} metin="SPINACH" renk={RENK.yesil} boyut={26} />
      <Etiket t={t} bas={K(0, "supplement,")} capa={[1110, 760]} konum={[1110, 890]} metin="SUPPLEMENT" renk={RENK.altin} boyut={26} />
      <BaslikBlok t={t} bas={K(0, "lutein")} bitis={tB - 0.1} satirlar={b.satirlar} x={1610} y={220} boyut={110} hiza="orta" />
      <VurguRozet t={t} bas={K(0, "half")} bitis={tB - 0.1} vurgu={b.vurgu!} not={b.not} x={1610} y={310} genislik={500} boyut={110} />
      <Baslik t={t} bas={tB} metin="BETA-CAROTENE" x={1610} y={220} boyut={70} renk={RENK.lacivert} hiza="orta" />
      <VurguRozet t={t} bas={K(1, "5")} vurgu="5–10%" not="from spinach" x={1610} y={310} genislik={440} boyut={110} renk={RENK.mercan} />
      <Ikon t={t} bas={K(1, "rose")} ad="ok" x={1390} y={690} boyut={66} zemin={RENK.yesil} />
      <Pil t={t} bas={K(1, "rose")} x={1440} y={660} metin="BROKEN DOWN MORE" renk={RENK.yesil} boyut={24} />
    </>
  );
};
export default S39;
