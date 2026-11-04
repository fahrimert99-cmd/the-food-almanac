// Sahne 31 — 2023 derlemesi: 36 RCT, 982 kişi, tip 2 diyabet / prediyabet, direnç nişastası genel.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Pil: React.FC<{ t: number; bas: number; x: number; y: number; metin: string; renk: string }> = ({ t, bas, x, y, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
      <Hap metin={metin} renk={renk} boyut={30} />
    </div>
  );
};

const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/31" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1780])}>
        <Etiket t={t} bas={K(1, "review") - 0.1} capa={[600, 400]} konum={[1000, 130]} metin="2023 REVIEW" renk={RENK.altin} boyut={28} />
        <Etiket t={t} bas={K(1, "resistant") - 0.1} capa={[1160, 650]} konum={[1160, 400]} metin="RESISTANT STARCH" renk={RENK.yesil} boyut={26} />
      </Kamera>
      <Baslik t={t} bas={0.3} bitis={2.5} metin="PEOPLE WITH" x={1860} y={190} boyut={96} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={0.5} bitis={2.5} metin="DIABETES?" x={1860} y={300} boyut={96} renk={RENK.koyuYesil} hiza="sag" />
      <KaynakEtiketi t={t} bas={2.2} metin={s.meta.etiket ?? ""} />
      <VurguRozet t={t} bas={K(1, "36")} vurgu="36" not="RANDOMIZED TRIALS" x={740} y={330} genislik={400} />
      <VurguRozet t={t} bas={K(1, "982")} vurgu="982" not="PEOPLE" x={740} y={570} genislik={400} renk={RENK.koyuYesil} />
      <Pil t={t} bas={K(1, "type")} x={1640} y={190} metin="TYPE 2 DIABETES" renk={RENK.mercan} />
      <Pil t={t} bas={K(1, "prediabetes,")} x={1640} y={270} metin="OR PREDIABETES" renk={RENK.altin} />
    </>
  );
};

export default S31;
