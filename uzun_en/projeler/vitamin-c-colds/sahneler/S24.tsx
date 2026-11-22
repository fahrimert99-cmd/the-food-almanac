// Sahne 24 — 8 gram doz: az sayıda deneme, çocuk yok.
import React from "react";
import { ANTON, Baslik, Etiket, IkonYol, Kamera, Liste, RENK, SP, VurguRozet, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S24: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const pen = kameraYolu(t, s.sure, [0, 20, 1920], [40, 60, 1800]);
  const t8 = K(0, "8"), tIki = K(0, "two");
  const tBitis = c[1].bas - 0.2;
  const tFew = K(1, "few"), tNone = K(1, "none");
  const [sc, al] = pop(t, tNone + 0.1, 0.5);
  return (
    <>
      <Kamera gorsel="tam/24" pencere={pen}>
        <Etiket t={t} bas={t8} bitis={tBitis} capa={[450, 635]} konum={[330, 130]} metin="8 GRAM DOSE" renk={RENK.altin} />
      </Kamera>
      {/* 1. cümle: iki rozet */}
      <VurguRozet t={t} bas={t8} bitis={tBitis} vurgu="8 GRAMS" not="at the start of symptoms" x={1420} y={150} genislik={560} renk={RENK.altin} />
      <VurguRozet t={t} bas={tIki} bitis={tBitis} vurgu="2 TRIALS" not="of five-day supplementation" x={1420} y={470} genislik={560} renk={RENK.yesil} boyut={96} />
      {/* 2. cümle */}
      <Baslik t={t} bas={tFew} metin="FEW SUCH TRIALS" x={1050} y={250} boyut={104} renk={RENK.lacivert} />
      <div style={{ position: "absolute", left: 1050, top: 370, opacity: al, transform: `scale(${sc})`, transformOrigin: "0 50%", display: "flex", alignItems: "center", gap: 20 }}>
        <div style={{ width: 64, height: 64, borderRadius: "50%", background: RENK.mercan, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IkonYol ad="carpi" boyut={38} renk="#fff" kalinlik={7} />
        </div>
        <span style={{ fontFamily: ANTON, fontSize: 84, color: RENK.mercan, whiteSpace: "nowrap" }}>NONE WITH CHILDREN</span>
      </div>
      {/* 3. cümle: tekrar 8 gram */}
      <VurguRozet t={t} bas={K(2, "8")} vurgu="8 GRAMS" not="remember this" x={1420} y={600} genislik={560} renk={RENK.altin} />
    </>
  );
};

export default S24;
