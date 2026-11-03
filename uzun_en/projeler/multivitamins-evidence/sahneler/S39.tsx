// Sahne 39 — metformin ve B12: DPPOS sayıları.
import React from "react";
import { Etiket, Kamera, KaynakEtiketi, RENK, SP, Baslik, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bitisB = K(1, "In") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/39" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [70, 60, 1780])}>
        <Etiket t={t} bas={K(0, "Metformin")} bitis={bitisB} capa={[770, 610]} konum={[330, 420]} metin="TABLET BOTTLE" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "lower")} bitis={bitisB} metin="LOWER B12" x={70} y={250} boyut={104} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(0, "Metformin")} bitis={bitisB} metin="METFORMIN" x={74} y={150} boyut={60} renk={RENK.lacivert} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={K(1, "Diabetes")} />
      <Baslik t={t} bas={K(1, "Diabetes")} metin="DPP FOLLOW-UP · ~5 YEARS" x={70} y={170} boyut={34} renk={RENK.altin} font="inter" aralik={3}
        style={{ opacity: 1 }} />
      <VurguRozet t={t} bas={K(1, "4.3")} vurgu="4.3%" not="LOW B12 · METFORMIN" x={1600} y={160} renk={RENK.mercan} genislik={380} boyut={96} />
      <VurguRozet t={t} bas={K(1, "2.3")} vurgu="2.3%" not="LOW B12 · PLACEBO" x={1600} y={390} renk={RENK.yesil} genislik={380} boyut={96} />
    </>
  );
};

export default S39;
