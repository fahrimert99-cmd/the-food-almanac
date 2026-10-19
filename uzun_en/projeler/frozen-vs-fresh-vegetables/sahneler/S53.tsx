// Sahne 53 — Taze mi donmuş mu: iki yarım, orta sütunda başlık, sonda beta-karoten kartı.
import React from "react";
import { Baslik, Etiket, Kamera, Not, Ortu, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";
import { ANTON, INTER } from "../kutuphane";

const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const c = s.cumleler;
  const tB = K(2, "Beta-carotene");
  const pO = eout(ilerle(t, tB - 0.3, 0.6)) * 0.94;
  const pK = eout(ilerle(t, tB, 0.6));
  const tF = c[1].bas - 0.15;
  return (
    <>
      <Kamera gorsel="tam/53" pencere={kameraYolu(t, s.sure, [40, 0, 1840], [110, 0, 1700])}>
        <Etiket t={t} bas={K(0, "picked")} bitis={tB - 0.3} capa={[470, 330]} konum={[360, 150]} metin="JUST PICKED" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "travelled")} bitis={tB - 0.3} capa={[1420, 640]} konum={[1680, 330]} metin="TRAVELLED" renk={RENK.altin} />
      </Kamera>
      {/* orta sütun: iki başlık sırayla */}
      <Baslik t={t} bas={K(0, "Fresh")} bitis={tF} metin="FRESH" x={1010} y={190} boyut={80} hiza="orta" renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(0, "wins")} bitis={tF} metin="WINS" x={1010} y={282} boyut={80} hiza="orta" renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(1, "Frozen")} bitis={tB - 0.3} metin="FROZEN" x={1010} y={190} boyut={80} hiza="orta" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "win")} bitis={tB - 0.3} metin="CAN WIN" x={1010} y={282} boyut={80} hiza="orta" renk={RENK.lacivert} />
      <Ortu a={pO} />
      <div style={{ position: "absolute", left: 0, right: 0, top: 330, textAlign: "center", opacity: pK,
        transform: `translateY(${(1 - pK) * 16}px)` }}>
        <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 8, color: RENK.altin }}>ONE NUTRIENT</div>
        <div style={{ height: 6, width: 220, background: RENK.altin, margin: "14px auto 10px" }} />
        <div style={{ fontFamily: ANTON, fontSize: 150, lineHeight: 1.15, color: RENK.koyuYesil }}>BETA-CAROTENE</div>
      </div>
      <Not t={t} bas={K(2, "some")} metin="SOME FROZEN VEGETABLES FELL BEHIND" x={960} y={640} hiza="orta" boyut={42} />
    </>
  );
};

export default S53;
