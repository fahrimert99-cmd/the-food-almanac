// Sahne 34 — Attaluri 2011: erik kurusu ve psyllium, çapraz (crossover) tasarım.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Sağ boşlukta senkron çip
const Cip: React.FC<{ t: number; bas: number; y: number; metin: string; renk: string }> = ({ t, bas, y, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 1440, top: y, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
      <Hap metin={metin} renk={renk} boyut={28} />
    </div>
  );
};

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik ?? { satirlar: [] as string[], not: "" };
  const t50 = K(1, "50 grams");
  return (
    <>
      <Kamera gorsel="tam/34" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [20, 100, 1780])}>
        <Etiket t={t} bas={K(0, "prunes")} bitis={5.2} capa={[420, 560]} konum={[420, 250]} metin="PRUNES" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "psyllium")} bitis={5.2} capa={[960, 540]} konum={[960, 120]} metin="PSYLLIUM" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "fiber")} bitis={5.2} capa={[1110, 790]} konum={[1150, 900]} metin="FIBER POWDER" renk={RENK.yesil} />
        <Etiket t={t} bas={t50} capa={[300, 470]} konum={[330, 230]} metin="50 G, TWICE A DAY" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.1} />
      <BaslikBlok t={t} bas={K(0, "compared")} satirlar={b.satirlar} x={1440} y={210} boyut={92} adim={0.2} />
      <VurguRozet t={t} bas={K(1, "40")} vurgu="40" not="adults, chronic constipation" x={1650} y={400} genislik={420} />
      <Cip t={t} bas={K(1, "three weeks")} y={640} metin="3 WEEKS PRUNES" renk={RENK.mercan} />
      <Cip t={t} bas={K(1, "psyllium")} y={720} metin="3 WEEKS PSYLLIUM" renk={RENK.altin} />
      <Cip t={t} bas={K(1, "random")} y={800} metin="RANDOM ORDER" renk={RENK.lacivert} />
    </>
  );
};

export default S34;
