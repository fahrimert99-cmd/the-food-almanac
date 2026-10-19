// Sahne 50 — ipucu 1: günde en çok bir yumurta.
import React from "react";
import { Baslik, Etiket, INTER, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, ANTON, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Adım numarası rozeti (ekran koordinatı)
const AdimNo: React.FC<{ t: number; bas: number; n: number; x: number; y: number }> = ({ t, bas, n, x, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  return (
    <div style={{ position: "absolute", left: x - 44, top: y - 44, width: 88, height: 88, borderRadius: "50%", background: RENK.altin,
      color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 56,
      transform: `scale(${sc})`, opacity: al, border: `4px solid ${RENK.kagitAcik}`, boxShadow: "0 8px 22px rgba(48,40,34,0.22)" }}>{n}</div>
  );
};

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const cik = K(3, "check") - 0.3;
  const tCheck = K(3, "check");
  return (
    <>
      <Kamera gorsel="tam/50" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={K(1, "egg")} bitis={cik} capa={[490, 340]} konum={[850, 490]} metin="BOILED EGG" renk={RENK.altin} />
      </Kamera>
      <AdimNo t={t} bas={0.05} n={1} x={110} y={185} />
      <Not t={t} bas={K(1, "healthy adults,") - 0.3} bitis={cik} metin="FOR MOST HEALTHY ADULTS" x={760} y={130} boyut={42} agirlik={800} />
      <VurguRozet t={t} bas={K(1, "one")} bitis={cik} vurgu="UP TO 1 EGG" not="a day fits the evidence" x={1190} y={200} genislik={640} boyut={92} />
      <KaynakEtiketi t={t} bas={K(2, "Harvard") - 0.2} metin="HARVARD COHORTS · BMJ 2020" />
      <Baslik t={t} bas={tCheck} metin="CHECK YOUR" x={1860} y={230} boyut={96} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(3, "cholesterol")} metin="NUMBERS" x={1860} y={345} boyut={96} hiza="sag" renk={RENK.koyuYesil} />
    </>
  );
};

export default S50;
