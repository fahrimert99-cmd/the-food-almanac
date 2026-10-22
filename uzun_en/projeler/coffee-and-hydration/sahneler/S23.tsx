// Sahne 23 — 4 saatlik idrar toplama ve içecek hidrasyon indeksi.
import React from "react";
import { AdimAkisi, BaslikBlok, Etiket, Kamera, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tIdrar = K(0, "urine");
  const tDort = K(0, "four");
  const tBaslik = K(1, "beverage");
  const tSu = K(1, "how much water");
  const tIki = K(1, "two hours");
  const pPanel = eout(ilerle(t, tBaslik - 0.3, 0.6));
  return (
    <>
      <Kamera gorsel="tam/23" pencere={kameraYolu(t, s.sure, [0, 40, 1860], [50, 90, 1740])}>
        {/* kadrandaki küçük sahte yazıyı kapat */}
        <div style={{ position: "absolute", left: 340, top: 462, width: 80, height: 34, borderRadius: "50%",
          background: "radial-gradient(ellipse at center, #EADFC0 0%, #EADFC0 55%, rgba(234,223,192,0) 100%)" }} />
        <Etiket t={t} bas={tIdrar} bitis={5.4} capa={[830, 560]} konum={[1010, 250]} metin="URINE COLLECTED" renk={RENK.altin} />
        <Etiket t={t} bas={tDort} bitis={5.4} capa={[385, 545]} konum={[500, 160]} metin="4 HOURS" renk={RENK.mercan} />
        <Etiket t={t} bas={tIki} bitis={1e9} capa={[385, 545]} konum={[500, 160]} metin="AFTER 2 HOURS" renk={RENK.yesil} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={860} />
      <BaslikBlok t={t} bas={tBaslik} satirlar={s.meta.baslik!.satirlar} x={1860} y={300} boyut={92} hiza="sag" />
      <AdimAkisi t={t} x={1470} y={560} boyut={30} numarali={false}
        adimlar={[{ bas: tSu, metin: "WATER KEPT", renk: RENK.yesil }, { bas: K(1, "compared"), metin: "VS PLAIN WATER", renk: RENK.altin }]} />
    </>
  );
};

export default S23;
