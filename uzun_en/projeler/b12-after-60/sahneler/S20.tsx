// Sahne 20 — DPP denemesi: metformin / plasebo, ~9 yıl devam. Duvar takvimlerindeki sahte yazılar kâğıt yamayla örtülü,
// yamaların üstüne sayı rozetleri gelir.
import React from "react";
import { Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const yama = (x: number, y: number, w: number, h: number): React.CSSProperties => ({
  position: "absolute", left: x, top: y, width: w, height: h,
  background: "#FAF0D5", boxShadow: "0 0 36px 28px #FAF0D5",
});

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/20" pencere={kameraYolu(t, s.sure, [0, 10, 1920], [80, 60, 1760])}>
        <div style={yama(50, 120, 520, 420)} />
        <div style={yama(1370, 160, 480, 400)} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      <VurguRozet t={t} bas={K(0, "2,150")} bitis={9.0} vurgu="~2,150" not="ADULTS" x={300} y={170} genislik={420} />
      <Not t={t} bas={K(0, "high risk")} bitis={9.0} metin="HIGH RISK FOR DIABETES" x={300} y={400} boyut={30} hiza="orta" agirlik={800} />
      <Not t={t} bas={K(0, "randomly")} bitis={8.8} metin="RANDOMLY ASSIGNED" x={960} y={70} boyut={34} hiza="orta" agirlik={800} renk={RENK.altin} />
      <Etiket t={t} bas={K(0, "metformin")} capa={[740, 480]} konum={[740, 170]} metin="METFORMIN" renk={RENK.mercan} />
      <Etiket t={t} bas={K(0, "placebo")} capa={[1190, 480]} konum={[1190, 170]} metin="PLACEBO" renk={RENK.lacivert} />
      <VurguRozet t={t} bas={K(1, "nine")} vurgu="~9 YEARS" not="MORE ON METFORMIN" x={1620} y={200} genislik={430} />
    </>
  );
};

export default S20;
