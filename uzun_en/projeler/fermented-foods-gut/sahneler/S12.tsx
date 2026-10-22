// Sahne 12 — ABD'de gönüllü mühür: üretimde en az 100 milyon kültür/gram; sayım tüketim günü değil.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const m = s.meta.baslik!;
  const tUS = K(0, "United States,");
  const tFab = K(0, "when the yogurt");
  const tMan = K(1, "count");
  const tNot = K(1, "not");
  const [sc, al] = pop(t, tUS, 0.5);
  return (
    <>
      <Kamera gorsel="tam/12" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [60, 80, 1780])}>
        <Etiket t={t} bas={tMan} bitis={tNot - 0.1} capa={[880, 700]} konum={[1100, 810]} metin="AT MANUFACTURE" renk={RENK.altin} />
        <Etiket t={t} bas={tNot} capa={[760, 470]} konum={[1000, 230]} metin="NOT WHEN EATEN" renk={RENK.mercan} boyut={26} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(0, "seal")} />
      <div style={{ position: "absolute", right: 70, top: 150, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: al }}>
        <Hap metin="UNITED STATES" renk={RENK.lacivert} boyut={30} />
      </div>
      <VurguRozet t={t} bas={K(0, "100")} vurgu={m.vurgu ?? "100M"} not={m.not} x={1580} y={270} genislik={500} boyut={110} />
      <BaslikBlok t={t} bas={tFab} satirlar={m.satirlar} x={1860} y={640} boyut={96} hiza="sag" />
    </>
  );
};

export default S12;
