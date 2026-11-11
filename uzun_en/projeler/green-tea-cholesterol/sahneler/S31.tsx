// Sahne 31 — Ohsaki çalışması (gözlemsel; yalnızca ilişki).
import React from "react";
import { Baslik, Etiket, Hap, Ikon, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Pill: React.FC<{ t: number; bas: number; bitis?: number; metin: string; renk: string; y: number }> = ({ t, bas, bitis = 1e9, metin, renk, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", right: 60, top: y, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: a }}>
      <Hap metin={metin} renk={renk} boyut={32} />
    </div>
  );
};

const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const m = s.meta, b = m.baslik!;
  const tYil = K(2, "seven") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/31" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])} />
      {m.etiket && <KaynakEtiketi t={t} metin={m.etiket} bas={0.2} />}
      <Pill t={t} bas={K(0, "population")} bitis={K(1, "Ohsaki")} metin="POPULATION STUDIES" renk={RENK.altin} y={130} />
      <div style={{ position: "absolute", inset: 0 }}>
        <Etiket t={t} bas={K(1, "Japan,")} bitis={K(1, "Ohsaki")} capa={[560, 230]} konum={[1000, 130]} metin="JAPAN" renk={RENK.yesil} />
      </div>
      <Baslik t={t} bas={K(1, "Ohsaki")} metin={b.satirlar[0]} x={1860} y={230} boyut={100} hiza="sag" renk={RENK.lacivert} />
      <VurguRozet t={t} bas={K(1, "40,000")} bitis={tYil - 0.1} vurgu={b.vurgu!} not={b.not} x={1520} y={310} boyut={104} genislik={600} />
      <Pill t={t} bas={K(1, "aged")} bitis={tYil - 0.1} metin="AGES 40–79" renk={RENK.lacivert} y={600} />
      <Ikon t={t} bas={tYil} bitis={K(2, "women") + 0.3} ad="saat" zemin={RENK.lacivert} x={1510} y={348} boyut={72} />
      <Pill t={t} bas={tYil} metin="7 YEARS" renk={RENK.lacivert} y={320} />
      <Pill t={t} bas={K(2, "five")} metin="WOMEN · 5+ CUPS A DAY" renk={RENK.yesil} y={430} />
      <VurguRozet t={t} bas={K(2, "31")} vurgu="–31%" not="CARDIOVASCULAR DEATH RISK" x={1560} y={520} boyut={104} genislik={560} renk={RENK.yesil} />
      <Pill t={t} bas={K(2, "than")} metin="VS WOMEN · <1 CUP" renk={RENK.gri} y={790} />
    </>
  );
};

export default S31;
