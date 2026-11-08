import React from "react";
import { Baslik, BaslikBlok, BolumKarti, CubukGrafik, Etiket, Ikon, Kamera, KaynakEtiketi, Not, RENK, VurguRozet, kagit, kameraYolu, kelimeZamani } from "../kutuphane";
import type { SP } from "../kutuphane";

// S33: kaprilik+kaprik %12, laurik 42 g, doymuş yağ 82 g
const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tL = K(1, "Lauric");
  return (
    <>
      <Kamera gorsel="tam/33" pencere={kameraYolu(t, s.sure, [20, 40, 1880], [70, 80, 1780])}>
        <Etiket t={t} bas={K(0, "fats")} capa={[540, 700]} konum={[760, 330]} metin="COCONUT OIL" renk={RENK.koyuYesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(0, "USDA")} />
      <Baslik t={t} bas={K(0, "only")} bitis={tL - 0.2} metin="ONLY" x={1220} y={200} boyut={96} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={K(0, "12")} bitis={tL - 0.2} vurgu="12%" not="caprylic and capric acid in coconut oil" x={1400} y={270} genislik={560} />
      <CubukGrafik t={t} bas={K(1, "42")} x={1060} y={230} w={760} h={480} maks={100} birimEtiketi="grams per 100 g of coconut oil"
        cubuklar={[
          { etiket: "LAURIC", deger: 42, metin: "42 g", renk: RENK.altin, bas: K(1, "42") - 0.1 },
          { etiket: "SATURATED", deger: 82, metin: "82 g", renk: RENK.mercan, bas: K(1, "saturated") - 0.1 },
        ] as any} />
    </>
  );
};
export default S33;
