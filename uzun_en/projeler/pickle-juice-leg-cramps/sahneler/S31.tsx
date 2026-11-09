// Sahne 31 — tuz uyarısı: kavanozun besin etiketindeki sodyuma bak.
import React from "react";
import { ANTON, BaslikBlok, Etiket, INTER, Kamera, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const aEt = eout(ilerle(t, K(2, "Nutrition"), 0.5));
  return (
    <>
      <Kamera gorsel="tam/31" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 30, 1860])}>
        {/* kavanoz etiketindeki anlamsız yazıyı örten boş etiket yaması */}
        <div style={{ position: "absolute", left: 292, top: 402, width: 418, height: 336, background: "#F3EFE6", borderRadius: 6,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8 }}>
          <div style={{ opacity: aEt, fontFamily: ANTON, fontSize: 44, color: RENK.lacivert, lineHeight: 1 }}>NUTRITION FACTS</div>
          <div style={{ opacity: aEt, width: 300, height: 5, background: RENK.lacivert }} />
          <div style={{ opacity: aEt, fontFamily: INTER, fontWeight: 800, fontSize: 30, color: RENK.mercan }}>SODIUM</div>
        </div>
        <Etiket t={t} bas={K(1, "Pickle")} bitis={K(1, "many")} capa={[870, 740]} konum={[1300, 640]} metin="PICKLE JUICE" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "salty")} capa={[213, 600]} konum={[130, 420]} metin="SALT" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={K(2, "Check")} satirlar={b.satirlar} x={1860} y={250} boyut={110} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={K(2, "sodium")} metin={b.not!.toUpperCase()} x={1860} y={440} hiza="sag" boyut={34} agirlik={800} genislik={560} />
    </>
  );
};

export default S31;
