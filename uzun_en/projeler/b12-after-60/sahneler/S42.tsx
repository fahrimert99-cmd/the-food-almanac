// Sahne 42 — metformin çalışması: nöropati ipucu, yalnızca 13 vaka.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Hg: React.FC<{ t: number; bas: number; metin: string; renk: string; x: number; y: number; boyut?: number; bitis?: number }> = ({
  t, bas, metin, renk, x, y, boyut = 34, bitis = 1e9,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * (t > bitis ? Math.max(0, 1 - (t - bitis) / 0.4) : 1);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", right: 1920 - x, top: y, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: a }}>
      <Hap metin={metin} renk={renk} boyut={boyut} />
    </div>
  );
};

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tExam = K(0, "nerve exam");
  const tNeuro = K(0, "neuropathy");
  const tLow = K(0, "low B12");
  const tYear = K(0, "year nine");
  const t13 = K(1, "13");
  const tHint = K(1, "hint");
  const tFirm = K(1, "firm finding");
  const son = t13 - 0.25;
  return (
    <>
      {/* pencere sol-üst yazıyı, sağ-üst yazıyı ve sağ-alttaki imzayı dışarıda bırakır */}
      <Kamera gorsel="tam/42" pencere={kameraYolu(t, s.sure, [0, 50, 1600], [40, 80, 1560])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <Etiket t={t} bas={tExam} capa={[1000, 640]} konum={[1100, 420]} metin="NERVE EXAM" renk={RENK.koyuYesil} />
      <BaslikBlok t={t} bas={tNeuro} satirlar={["MORE", "NEUROPATHY"]} x={1860} y={190} boyut={96} hiza="sag" bitis={son} />
      <Hg t={t} bas={tLow} metin="LOW B12" renk={RENK.mercan} x={1860} y={400} bitis={son} />
      <Hg t={t} bas={tYear} metin="YEAR NINE" renk={RENK.altin} x={1860} y={480} bitis={son} />
      <VurguRozet t={t} bas={t13} vurgu="13 CASES" x={1620} y={170} genislik={420} boyut={92} />
      <Hg t={t} bas={tHint} metin="A HINT" renk={RENK.altin} x={1860} y={420} />
      <Hg t={t} bas={tFirm} metin="NOT A FIRM FINDING" renk={RENK.mercan} x={1860} y={500} />
    </>
  );
};

export default S42;
