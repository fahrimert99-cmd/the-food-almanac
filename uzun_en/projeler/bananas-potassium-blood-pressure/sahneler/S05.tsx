// Sahne 5 — bir muzda 422 mg potasyum: tartı kadranı 118 g, 358 mg/100 g, sonuç rozeti.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, VurguRozet, ANTON, INTER, eout, ilerle, kameraYolu, kelimeZamani, kagit } from "../kutuphane";

const S05: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t118 = K(0, "118"), tUsda = K(0, "United"), t358 = K(0, "358"), t422 = K(1, "422"), tOne = K(1, "That");
  const aDial = eout(ilerle(t, t118, 0.5));
  const aKadran = eout(ilerle(t, 0.2, 0.5));
  return (
    <>
      <Kamera gorsel="tam/05" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [30, 50, 1820])}>
        {/* kadran: bozuk rakamları kapatan yama + 118 G */}
        <div style={{ position: "absolute", left: 387 - 168, top: 660 - 168, width: 336, height: 336, borderRadius: "50%", opacity: aKadran,
          background: `radial-gradient(circle, #FBF8F1 0%, #F3EEDF 70%, ${kagit(0.95)} 100%)`, border: `5px solid ${RENK.lacivert}`,
          boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div style={{ fontFamily: ANTON, fontSize: 104, lineHeight: 1, color: RENK.lacivert, opacity: aDial }}>118</div>
          <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 34, letterSpacing: 4, color: RENK.altin, opacity: aDial }}>GRAMS</div>
        </div>
        <Etiket t={t} bas={K(0, "banana")} bitis={t358} capa={[800, 790]} konum={[1180, 700]} metin="MEDIUM BANANA" renk={RENK.altin} />
      </Kamera>
      <div style={{ position: "absolute", right: 60, top: 110, opacity: eout(ilerle(t, tUsda, 0.5)), display: "flex", alignItems: "center", gap: 14,
        background: RENK.lacivert, borderRadius: 999, padding: "12px 28px 12px 20px", color: "#fff", fontFamily: INTER, fontWeight: 800, fontSize: 26 }}>
        <span style={{ width: 14, height: 14, borderRadius: "50%", background: RENK.altin }} />{s.meta.etiket}
      </div>
      <Baslik t={t} bas={t358} bitis={tOne - 0.1} metin="358 MG" x={1860} y={250} boyut={130} renk={RENK.altin} hiza="sag" />
      <Not t={t} bas={t358 + 0.4} bitis={tOne - 0.1} metin="potassium per 100 grams" x={1860} y={340} hiza="sag" boyut={36} />
      <Baslik t={t} bas={tOne} metin="ONE BANANA" x={1860} y={250} boyut={110} renk={RENK.lacivert} hiza="sag" />
      <VurguRozet t={t} bas={t422} vurgu="422" not={s.meta.baslik?.not} x={1560} y={350} genislik={480} boyut={130} />
    </>
  );
};

export default S05;
