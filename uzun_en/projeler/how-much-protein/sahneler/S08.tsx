// Sahne 8 — Health ABC çalışması: soru başlığı, kaynak, 2.066 kişi, 70–79 yaş.
import React from "react";
import { Baslik, Hap, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Pop ile gelen hap (ekran koordinatı, x,y = orta)
const PopHap: React.FC<{ t: number; bas: number; x: number; y: number; metin: string; renk: string; boyut?: number; bitis?: number }> = ({
  t, bas, x, y, metin, renk, boyut = 28, bitis = 1e9,
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

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAbc = K(1, "Health ABC");
  return (
    <>
      <Kamera gorsel="tam/08" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])} />
      {/* 1. cümle: soru başlığı, sonra çalışma adı */}
      <Baslik t={t} bas={K(0, "protein") - 0.2} bitis={tAbc - 0.15} metin="HOW MUCH PROTEIN?" x={960} y={175} boyut={112}
        hiza="orta" renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tAbc} bitis={K(1, "2,066") - 0.2} metin="HEALTH ABC STUDY" x={960} y={175} boyut={112}
        hiza="orta" renk={RENK.lacivert} />
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} bas={tAbc + 0.1} />}
      <VurguRozet t={t} bas={K(1, "2,066")} vurgu="2,066" not="MEN AND WOMEN" x={600} y={110} genislik={400} />
      <VurguRozet t={t} bas={K(1, "70")} vurgu="70–79" not="YEARS OLD" x={1320} y={110} genislik={400} renk={RENK.koyuYesil} />
      <PopHap t={t} bas={K(1, "United")} x={960} y={195} metin="UNITED STATES" renk={RENK.altin} />
    </>
  );
};

export default S08;
