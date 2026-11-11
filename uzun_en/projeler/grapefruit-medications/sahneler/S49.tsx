// Sahne 49 — Furanokumarin: 61 narenciye türü (Dugrand-Judek 2015). Üstte etiketler, mandalina düşük risk.
import React from "react";
import { Etiket, Hap, Ikon, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Ekran koordinatında kısa başlık hapı (pop ile gelir)
const Serit: React.FC<{ t: number; bas: number; bitis?: number; metin: string; renk: string; x: number; y: number }> = ({ t, bas, bitis = 1e9, metin, renk, x, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a }}>
      <Hap metin={metin} renk={renk} boyut={30} />
    </div>
  );
};

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  // alt kenardaki sahte yazılar (y>930) kamera dışında kalır
  const pencere = kameraYolu(t, s.sure, [200, 30, 1500], [300, 60, 1400]);
  const tMand = K(1, "mandarins");
  return (
    <>
      <Kamera gorsel="tam/49" pencere={pencere}>
        <Etiket t={t} bas={K(1, "Pomelos")} bitis={tMand - 0.3} capa={[1035, 480]} konum={[1035, 215]} metin="POMELOS · CITRONS" renk={RENK.mercan} boyut={26} />
        <Etiket t={t} bas={tMand} capa={[590, 470]} konum={[560, 215]} metin="MANDARINS" renk={RENK.yesil} boyut={26} />
      </Kamera>
      <KaynakEtiketi t={t} metin="Dugrand-Judek et al. · PLoS ONE · 2015" />
      <VurguRozet t={t} bas={K(0, "61")} bitis={K(1, "Pomelos") - 0.2} vurgu="61" not="CITRUS SPECIES" x={1330} y={125} boyut={92} genislik={360} />
      <Serit t={t} bas={K(1, "furanocoumarins")} bitis={tMand - 0.2} metin="HIGH FURANOCOUMARINS" renk={RENK.mercan} x={1050} y={150} />
      <Serit t={t} bas={K(1, "practically")} bitis={K(2, "measured") - 0.2} metin="PRACTICALLY NONE" renk={RENK.yesil} x={1050} y={150} />
      <Serit t={t} bas={K(2, "measured")} bitis={K(2, "points") - 0.2} metin="COMPOUNDS, NOT INTERACTIONS" renk={RENK.altin} x={1050} y={150} />
      <Ikon t={t} bas={K(2, "lower")} ad="onay" x={760} y={150} boyut={84} />
      <Serit t={t} bas={K(2, "lower")} metin="LOWER RISK" renk={RENK.yesil} x={1050} y={150} />
    </>
  );
};

export default S49;
