// Sahne 31 — serbest B12 mideden asit beklemeden geçer: parçacık akışı + etiketler.
import React from "react";
import { BaslikBlok, Etiket, INTER, Kamera, Not, Parcaciklar, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tF = K(0, "free form");
  const [sc, al] = pop(t, tF, 0.5);
  return (
    <>
      <Kamera gorsel="tam/31" pencere={kameraYolu(t, s.sure, [0, 120, 1800], [40, 150, 1700])}>
        <Etiket t={t} bas={K(0, "fortified")} bitis={tF - 0.1} capa={[320, 640]} konum={[520, 440]}
          metin="FORTIFIED CEREAL" renk={RENK.altin} />
      </Kamera>
      <Parcaciklar t={t} bas={tF} kaynak={[600, 700]} hedef={[1650, 720]} adet={40} aralik={0.13} omur={2.4} kavis={-90} boyut={10} renk={RENK.altin}
        yayilma={120} hedefYayilma={120} tohum="b12" />
      <div style={{ position: "absolute", left: 1200, top: 520, transform: `translate(-50%, 0) scale(${sc})`, opacity: al,
        background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`, borderRadius: 999, padding: "8px 26px", fontFamily: INTER,
        fontWeight: 800, fontSize: 28, letterSpacing: 2, color: RENK.lacivert, whiteSpace: "nowrap" }}>FREE FORM B12</div>
      <Not t={t} bas={K(1, "tied")} metin="NOT TIED TO FOOD PROTEIN" x={1200} y={830} hiza="orta" boyut={42} genislik={900} agirlik={800} />
      <BaslikBlok t={t} bas={K(1, "stomach")} satirlar={b.satirlar} x={1860} y={190} boyut={104} hiza="sag" />
    </>
  );
};

export default S31;
