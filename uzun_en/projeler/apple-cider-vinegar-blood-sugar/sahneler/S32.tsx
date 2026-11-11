// Sahne 32 — küçük, kısa denemeler: makarna (tek öğün) üzerinde etiket, sağ boş kâğıtta başlık.
import React from "react";
import { AltSis, BaslikBlok, Etiket, IkonYol, INTER, Kamera, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSmall = K(0, "small,"), tFew = K(0, "few dozen"), tSingle = K(1, "single meal"), tMonths = K(1, "months of");
  const [sc, al] = pop(t, tMonths, 0.5);
  return (
    <>
      <Kamera gorsel="tam/32" pencere={kameraYolu(t, s.sure, [20, 30, 1880], [90, 60, 1740])}>
        <Etiket t={t} bas={tSingle} capa={[560, 800]} konum={[930, 600]} metin="SINGLE MEAL" renk={RENK.altin} boyut={30} />
      </Kamera>
      <AltSis a={0.7} yukseklik={150} />
      <BaslikBlok t={t} bas={tSmall} satirlar={["SMALL."]} x={1860} y={190} boyut={130} hiza="sag" renkler={[RENK.lacivert]} />
      <BaslikBlok t={t} bas={tSingle} satirlar={["SHORT."]} x={1860} y={330} boyut={130} hiza="sag" renkler={[RENK.koyuYesil]} />
      <Not t={t} bas={tFew} metin="A few dozen people or fewer" x={1860} y={430} hiza="sag" boyut={36} genislik={700} />
      <div style={{ position: "absolute", right: 60, top: 490, display: "flex", alignItems: "center", gap: 16, opacity: al,
        transform: `scale(${sc})`, transformOrigin: "100% 50%", background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`,
        borderRadius: 999, padding: "8px 28px 8px 10px", boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
        <span style={{ width: 44, height: 44, borderRadius: "50%", background: RENK.mercan, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IkonYol ad="carpi" boyut={26} renk="#fff" kalinlik={7} />
        </span>
        <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.lacivert }}>NOT MONTHS OF EVERYDAY LIFE</span>
      </div>
    </>
  );
};

export default S32;
