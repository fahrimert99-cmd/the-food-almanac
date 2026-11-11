// Sahne 32 — Kim 2018: yaşlılarda 8 haftada fark yok.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kagit, kameraYolu,
  kelimeZamani, pop, sol } from "../kutuphane";

// Açılan hap: x,y = merkez
const Pil: React.FC<{ t: number; bas: number; metin: string; x: number; y: number; renk: string; bitis?: number; boyut?: number }> = ({
  t, bas, metin, x, y, renk, bitis = 1e9, boyut = 30,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a }}>
      <Hap metin={metin} renk={renk} boyut={boyut} />
    </div>
  );
};
const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tRozet = K(1, "no difference");
  return (
    <>
      <Kamera gorsel="tam/32" pencere={kameraYolu(t, s.sure, [0, 0, 1860], [100, 60, 1700])}>
        <Etiket t={t} bas={K(1, "older")} bitis={tRozet - 0.1} capa={[1710, 500]} konum={[1290, 330]} metin="OLDER ADULTS" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(1, "In an")} />
      <Baslik t={t} bas={K(0, "those")} bitis={K(1, "In an") - 0.05} metin="YOUNG ADULTS" x={90} y={200} boyut={100} renk={RENK.lacivert} />
      <Pil t={t} bas={K(1, "eight-week")} bitis={tRozet - 0.1} metin="8 WEEKS · 14 OLDER ADULTS" x={520} y={230} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={tRozet} vurgu="NO DIFFERENCE" x={420} y={150} genislik={620} boyut={84} renk={RENK.koyuYesil} />
      <Pil t={t} bas={K(1, "muscle")} metin="MUSCLE MASS" x={300} y={400} renk={RENK.yesil} />
      <Pil t={t} bas={K(1, "strength")} metin="STRENGTH" x={250} y={480} renk={RENK.yesil} />
      <Pil t={t} bas={K(1, "building")} metin="MUSCLE BUILDING" x={345} y={560} renk={RENK.yesil} />
      <Pil t={t} bas={K(1, "even")} metin="EVEN SPREAD" x={800} y={470} renk={RENK.koyuYesil} />
      <Pil t={t} bas={K(1, "mostly")} metin="MOSTLY DINNER" x={1200} y={470} renk={RENK.mercan} />
    </>
  );
};
export default S32;
