// Sahne 13 — 2011 analizi: 14 çalışma, ≈1.100 yetişkin, –2.2 mg/dL.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const m = s.meta;
  return (
    <>
      <Kamera gorsel="tam/13" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [40, 70, 1840])}>
        {/* görselin sağ kenarındaki dikiş ve kesik lamba: kâğıt rengi geçişle örtülü */}
        <div style={{ position: "absolute", left: 1080, top: 0, width: 840, height: 1080,
          background: `linear-gradient(to right, ${kagit(0)} 0%, ${kagit(1)} 26%, ${kagit(1)} 100%)` }} />
        <Etiket t={t} bas={K(0, "2011,")} bitis={K(0, "pointed")} capa={[300, 640]} konum={[330, 400]} metin="2011 ANALYSIS" renk={RENK.altin} boyut={28} />
      </Kamera>
      <Baslik t={t} bas={K(0, "14")} metin={m.baslik!.satirlar[0]} x={1860} y={230} boyut={104} renk={RENK.koyuYesil} hiza="sag" />
      <Not t={t} bas={K(0, "1,100")} metin="ABOUT 1,100 ADULTS" x={1860} y={322} hiza="sag" boyut={34} agirlik={800} />
      <VurguRozet t={t} bas={K(1, "2.2")} vurgu={m.baslik!.vurgu!} not={m.baslik!.not} x={1640} y={470} genislik={400} renk={RENK.yesil} />
      {m.etiket && <KaynakEtiketi t={t} metin={m.etiket} />}
    </>
  );
};

export default S13;
