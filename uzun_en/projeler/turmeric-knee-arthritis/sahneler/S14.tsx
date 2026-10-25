// Sahne 14 — mide şikâyetleri: %11 ve %18; bırakanlar 7 ve 1.
import React from "react";
import { BaslikBlok, CubukGrafik, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, sol } from "../kutuphane";

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/14" pencere={kameraYolu(t, s.sure, [0, 0, 1860], [60, 40, 1740])} />
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} bas={0.3} />}
      <BaslikBlok t={t} bas={K(0, "stomach")} satirlar={["FEWER", "STOMACH ISSUES"]} x={1860} y={190} boyut={96} hiza="sag" />
      {/* 2. cümle: iki çubuk */}
      <div style={{ opacity: sol(t, 9.6) }}>
        <Not t={t} bas={K(1, "abdominal")} metin="ABDOMINAL PAIN OR BLOATING" x={1530} y={430} hiza="orta" genislik={620} boyut={28} agirlik={800} />
        <CubukGrafik t={t} bas={K(1, "11")} x={1250} y={560} w={560} h={300} maks={20}
          cubuklar={[
            { etiket: "TURMERIC", deger: 11, metin: "11%", renk: RENK.altin, bas: K(1, "11") },
            { etiket: "IBUPROFEN", deger: 18, metin: "18%", renk: RENK.lacivert, bas: K(1, "18") },
          ]} />
      </div>
      {/* 3. cümle: yan etki nedeniyle bırakanlar */}
      <Not t={t} bas={K(2, "dropped")} metin="DROPPED OUT OVER SIDE EFFECTS" x={1550} y={440} hiza="orta" genislik={620} boyut={30} agirlik={800} />
      <VurguRozet t={t} bas={K(2, "seven")} vurgu="7" not="IBUPROFEN" x={1390} y={510} genislik={260} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={K(2, "one")} vurgu="1" not="TURMERIC" x={1700} y={510} genislik={260} renk={RENK.altin} />
    </>
  );
};

export default S14;
