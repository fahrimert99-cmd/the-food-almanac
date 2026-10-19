// Sahne 51 — ipucu 2: yumurtanın yanındakiler.
import React from "react";
import { ANTON, Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Adım numarası rozeti (ekran koordinatı)
const AdimNo: React.FC<{ t: number; bas: number; n: number; x: number; y: number }> = ({ t, bas, n, x, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  return (
    <div style={{ position: "absolute", left: x - 44, top: y - 44, width: 88, height: 88, borderRadius: "50%", background: RENK.altin,
      color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 56,
      transform: `scale(${sc})`, opacity: al, border: `4px solid ${RENK.kagitAcik}`, boxShadow: "0 8px 22px rgba(48,40,34,0.22)" }}>{n}</div>
  );
};

const S51: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const cikEtiket = K(3, "saturated") - 0.3;
  const cikRozet = K(4, "The") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/51" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820])}>
        <Etiket t={t} bas={K(1, "eggs")} bitis={cikEtiket} capa={[1333, 560]} konum={[1420, 880]} metin="EGGS" renk={RENK.altin} />
        <Etiket t={t} bas={K(3, "bacon")} bitis={cikEtiket} capa={[267, 520]} konum={[190, 250]} metin="BACON" renk={RENK.mercan} />
        <Etiket t={t} bas={K(3, "sausage")} bitis={cikEtiket} capa={[470, 520]} konum={[480, 215]} metin="SAUSAGE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(3, "butter")} bitis={cikEtiket} capa={[633, 523]} konum={[960, 330]} metin="BUTTER" renk={RENK.mercan} />
        <Etiket t={t} bas={K(3, "white")} bitis={cikEtiket} capa={[600, 640]} konum={[520, 880]} metin="WHITE TOAST" renk={RENK.mercan} />
      </Kamera>
      <AdimNo t={t} bas={0.05} n={2} x={110} y={185} />
      <Baslik t={t} bas={K(1, "Look")} bitis={K(2, "This") + 1.5} metin="WHAT SITS" x={960} y={80} boyut={90} hiza="orta" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "next")} bitis={K(2, "This") + 1.5} metin="NEXT TO IT" x={960} y={180} boyut={90} hiza="orta" renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(3, "saturated")} bitis={cikRozet} vurgu="SATURATED FAT" not="from the sides" x={520} y={90} genislik={560} boyut={70} renk={RENK.mercan} />
      <KaynakEtiketi t={t} bas={K(4, "American")} metin="AHA ADVISORY · 2020" />
      <Baslik t={t} bas={K(4, "whole")} metin="THE WHOLE PATTERN" x={960} y={95} boyut={84} hiza="orta" renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(4, "not")} metin="NOT ONE FOOD" x={960} y={190} boyut={84} hiza="orta" renk={RENK.mercan} />
    </>
  );
};

export default S51;
