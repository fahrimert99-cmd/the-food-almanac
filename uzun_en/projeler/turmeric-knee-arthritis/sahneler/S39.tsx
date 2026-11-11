// Sahne 39 — NCCIH: genelde güvenli; yaygın yan etkiler sağ panelde.
import React from "react";
import { AbsoluteFill, Baslik, Etiket, Kamera, KaynakEtiketi, Liste, RENK, SP, VurguRozet, einout, ilerle, kagit,
  kelimeZamani, pencereAra } from "../kutuphane";

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tp = c[1].bas - 0.5;
  const p = einout(ilerle(t, tp, 1.2));
  const z = ilerle(t, 0, s.sure);
  const pen = pencereAra([60 * z, 0, 1860 - 60 * z], [330, 30, 1590], p);
  const bit = c[1].bas - 0.3;
  const o = (f: string, i: number = 1) => K(1, f) - 0.05 * i;
  return (
    <>
      <Kamera gorsel="tam/39" pencere={pen} sinirla={false}>
        <Etiket t={t} bas={K(0, "ordinary turmeric")} bitis={K(0, "likely safe")} capa={[600, 520]} konum={[560, 330]} metin="ORDINARY TURMERIC" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.1} />
      <VurguRozet t={t} bas={K(0, "likely safe")} bitis={K(0, "up to")} vurgu="LIKELY SAFE" not="ordinary turmeric by mouth" x={340} y={150} genislik={500} boyut={84} />
      <VurguRozet t={t} bas={K(0, "up to")} bitis={bit} vurgu="2–3 MONTHS" not="up to, at recommended amounts" x={340} y={150} genislik={500} boyut={84} />
      {/* yan etkiler paneli */}
      <AbsoluteFill style={{ opacity: p, background: `linear-gradient(to right, ${kagit(0)} 0%, ${kagit(0)} 61%, ${kagit(0.96)} 69%, ${kagit(0.98)} 100%)` }} />
      <Baslik t={t} bas={c[1].bas} metin="COMMON" x={1350} y={200} boyut={76} renk={RENK.lacivert} />
      <Baslik t={t} bas={c[1].bas + 0.15} metin="SIDE EFFECTS" x={1350} y={285} boyut={76} renk={RENK.koyuYesil} />
      <Liste t={t} isaret="nokta" x={1330} y={400} aralik={100} boyut={34} genislik={540} ogeler={[
        { bas: K(1, "upset stomach"), metin: "UPSET STOMACH", renk: RENK.altin },
        { bas: K(1, "reflux"), metin: "REFLUX", renk: RENK.altin },
        { bas: K(1, "nausea"), metin: "NAUSEA", renk: RENK.altin },
        { bas: K(1, "loose"), metin: "LOOSE OR HARD STOOLS", renk: RENK.altin },
      ]} />
    </>
  );
};

export default S39;
