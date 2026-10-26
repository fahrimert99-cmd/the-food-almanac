// Sahne 42 — metformin denemesi: sinir muayenesi, 13 vaka, "ipucu" uyarısı.
import React from "react";
import { BaslikBlok, Etiket, Kamera, kameraYolu, KaynakEtiketi, Not, RENK, SP, VurguRozet, kelimeZamani } from "../kutuphane";

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tSon = c[1].bas - 0.1;
  return (
    <>
      {/* pencere sol üst ve sağ alt köşelerdeki sahte yazıları ve imzayı dışarıda bırakır */}
      <Kamera gorsel="tam/42" pencere={kameraYolu(t, s.sure, [60, 60, 1500], [100, 100, 1440])}>
        <Etiket t={t} bas={K(0, "nerve")} bitis={tSon} capa={[1100, 700]} konum={[1180, 380]} metin="NERVE EXAM" renk={RENK.koyuYesil} boyut={32} />
      </Kamera>
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} bas={0.2} />}
      <Not t={t} bas={K(0, "more")} bitis={tSon} metin="MORE NEUROPATHY" x={1120} y={160} boyut={56} agirlik={800} />
      <Not t={t} bas={K(0, "low")} bitis={tSon} metin="LOW B12 · YEAR NINE" x={1120} y={240} boyut={34} renk={RENK.gri} />
      <VurguRozet t={t} bas={K(1, "13")} vurgu="13 CASES" x={1480} y={330} genislik={400} boyut={88} renk={RENK.altin} />
      <BaslikBlok t={t} bas={K(1, "hint")} satirlar={["A HINT,", "NOT A FIRM FINDING"]} x={1120} y={170} boyut={64}
        renkler={[RENK.lacivert, RENK.mercan]} />
    </>
  );
};

export default S42;
