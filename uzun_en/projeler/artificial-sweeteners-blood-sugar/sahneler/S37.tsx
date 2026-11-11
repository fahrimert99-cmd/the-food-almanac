// Sahne 37 — WHO tavsiyesinin kapsamı: kapalı kapı = dışarıda kalanlar. Üstte etiketler, sonra eritritol.
import React from "react";
import { Baslik, Etiket, INTER, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const bit0 = c[1].bas - 0.1;
  const [sc, al] = pop(t, K(2, "Keep that"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/37" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820])}>
        {/* 1. cümle: kapalı kapı = tavsiye bu kişileri kapsamıyor */}
        <Etiket t={t} bas={K(0, "does not")} bitis={bit0} capa={[800, 500]} konum={[960, 190]} metin="DOES NOT APPLY" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "people who")} bitis={bit0} capa={[610, 400]} konum={[420, 150]} metin="PEOPLE WITH DIABETES" renk={RENK.lacivert} />
      </Kamera>
      {/* 2. cümle: eritritol dışarıda kaldı */}
      <Not t={t} bas={K(1, "sugar alcohols")} metin="SUGAR ALCOHOLS" x={100} y={70} boyut={30} renk={RENK.altin} agirlik={800} />
      <Baslik t={t} bas={K(1, "erythritol")} metin="ERYTHRITOL" x={96} y={190} boyut={120} renk={RENK.mercan} />
      <Not t={t} bas={K(1, "sugar alcohols") + 0.4} metin="left out of the guideline" x={100} y={262} boyut={34} renk={RENK.lacivert} />
      {/* 3. cümle */}
      <div style={{ position: "absolute", left: 100, top: 330, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al, whiteSpace: "nowrap",
        background: RENK.lacivert, color: "#fff", borderRadius: 999, padding: "10px 28px", fontFamily: INTER, fontWeight: 800, fontSize: 28,
        letterSpacing: 3 }}>KEEP THAT IN MIND</div>
    </>
  );
};

export default S37;
