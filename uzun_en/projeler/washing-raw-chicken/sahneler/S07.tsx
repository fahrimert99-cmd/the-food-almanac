import React from "react";
import { AbsoluteFill, Baslik, BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Liste, MARKA, Not, Panel, RENK, SP, VurguRozet,
  eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Sahne 7 — 25 pakette 1 Salmonella
const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tR = K(1, "one in");
  return (
    <>
      <Kamera gorsel="tam/07" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1780])}>
        <Etiket t={t} bas={K(0, "raw chicken")} bitis={c[1].bas} capa={[350, 820]} konum={[640, 920]} metin="RAW CHICKEN" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "germs")} bitis={c[1].bas} capa={[1100, 560]} konum={[1560, 700]} metin="GERMS" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(1, "CDC")} />
      <VurguRozet t={t} bas={tR} vurgu={(s.meta.baslik?.vurgu ?? "1 IN 25")} not="PACKAGES OF GROCERY STORE CHICKEN ARE CONTAMINATED" x={1580} y={210} genislik={560} boyut={140} renk={RENK.mercan} />
      <Baslik t={t} bas={K(1, "Salmonella")} metin={"SALMONELLA"} x={1580} y={640} boyut={92} hiza="orta" renk={RENK.lacivert} />
    </>
  );
};
export default S07;
