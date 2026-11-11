// Sahne 38 — ADA: su önce. Sürahi + bardak; sağda başlık ve iki karşılaştırma maddesi.
import React from "react";
import { BaslikBlok, Kamera, KaynakEtiketi, Liste, Not, RENK, SP, kameraYolu, kelimeZamani, sol } from "../kutuphane";

const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const bit0 = K(1, "water") - 0.15;
  const tSu = K(1, "water");
  return (
    <>
      <Kamera gorsel="tam/38" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 34, 1800])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      <div style={{ opacity: sol(t, bit0) }}>
        <BaslikBlok t={t} bas={K(0, "middle")} satirlar={["MIDDLE", "PATH"]} x={1300} y={300} boyut={120} renkler={[RENK.lacivert, RENK.altin]} />
      </div>
      <BaslikBlok t={t} bas={tSu} satirlar={["WATER", "FIRST"]} x={1300} y={230} boyut={130} renkler={[RENK.koyuYesil, RENK.koyuYesil]} />
      <Not t={t} bas={tSu + 0.3} metin="in the 2025 Standards of Care" x={1304} y={520} boyut={30} renk={RENK.gri} />
      <Liste t={t} x={1300} y={600} isaret="nokta" boyut={34} aralik={84} genislik={580}
        ogeler={[
          { bas: K(1, "sugary"), metin: "OVER SUGARY DRINKS", renk: RENK.mercan },
          { bas: K(1, "artificially"), metin: "OVER SWEETENED DRINKS", renk: RENK.altin },
        ]} />
    </>
  );
};

export default S38;
