// Sahne 34 — A LITTLE FAT HELPS: üç sos kabı + sağda temsili (ILLUSTRATIVE) çubuklar.
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

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const t0 = K(0, "almost no"), t1 = K(1, "some fat"), t2 = K(1, "higher");
  return (
    <>
      <Kamera gorsel="tam/34" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840])} />
      <Etiket t={t} bas={K(0, "dressing,")} capa={[360, 640]} konum={[360, 250]} metin="DRESSING" renk={RENK.altin} boyut={26} />
      <BaslikBlok t={t} bas={K(0, "fat-free")} satirlar={b.satirlar} x={1330} y={190} boyut={86} />
      <Pil t={t} bas={t0} x={1330} y={400} metin="ILLUSTRATIVE" renk={RENK.altin} boyut={22} />
      <CubukGrafik t={t} bas={t0} x={1320} y={520} w={540} h={290} maks={10} aralik={0.45}
        cubuklar={[
          { etiket: "FAT-FREE", deger: 0.5, metin: "", renk: RENK.altin, bas: t0 },
          { etiket: "SOME FAT", deger: 5, metin: "", renk: RENK.yesil, bas: t1 },
          { etiket: "FULL-FAT", deger: 9, metin: "", renk: RENK.koyuYesil, bas: t2 },
        ]} />
      <Not t={t} bas={t0 + 0.8} metin="carotenoid absorption" x={1590} y={880} hiza="orta" boyut={28} renk={RENK.lacivert} />
    </>
  );
};
export default S34;
