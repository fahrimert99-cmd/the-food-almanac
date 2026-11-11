// Sahne 14 — mide şikâyetleri: %11 / %18 çubukları, ardından bırakanlar 7 / 1.
import React from "react";
import { Baslik, CubukGrafik, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, sol } from "../kutuphane";

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const gec = sol(t, 9.8, 0.3);
  return (
    <>
      <Kamera gorsel="tam/14" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840])} />
      <Baslik t={t} bas={0.2} metin="FEWER" x={1860} y={150} boyut={100} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={0.38} metin="STOMACH ISSUES" x={1860} y={262} boyut={100} renk={RENK.koyuYesil} hiza="sag" />
      <div style={{ opacity: gec }}>
        <Not t={t} bas={K(1, "abdominal")} metin="ABDOMINAL PAIN OR BLOATING" x={1060} y={440} boyut={30} agirlik={800} />
        <CubukGrafik t={t} bas={K(1, "11") - 0.05} x={1060} y={580} w={760} h={250}
          cubuklar={[
            { etiket: "TURMERIC", deger: 11, metin: "11%", renk: RENK.yesil, bas: K(1, "11") - 0.05 },
            { etiket: "IBUPROFEN", deger: 18, metin: "18%", renk: RENK.mercan, bas: K(1, "18") - 0.05 },
          ]} />
      </div>
      <Not t={t} bas={K(2, "dropped")} metin="DROPPED OUT OVER SIDE EFFECTS" x={1460} y={440} hiza="orta" boyut={30} agirlik={800} genislik={640} />
      <VurguRozet t={t} bas={K(2, "seven")} vurgu="7" not="ON IBUPROFEN" x={1290} y={520} genislik={340} renk={RENK.mercan} />
      <VurguRozet t={t} bas={K(2, "one")} vurgu="1" not="ON TURMERIC" x={1650} y={520} genislik={340} renk={RENK.yesil} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
    </>
  );
};

export default S14;
