// Sahne 7 — büyük partiler: solda tencere ve kızartma tepsisi, sağda başlık, sayaçlı rozet ve uyarı hapı.
import React from "react";
import { BaslikBlok, Etiket, IkonYol, INTER, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sayac } from "../kutuphane";

const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const w = kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1740]);
  const t9 = K(1, "900,000");
  const sayi = Number(sayac(t, t9, 900000, 1.4)).toLocaleString("en-US");
  const [sc, al] = pop(t, K(1, "unsafe"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/07" pencere={w}>
        <Etiket t={t} bas={K(0, "batches")} bitis={K(1, "large") - 0.2} capa={[300, 520]} konum={[330, 210]} metin="BIG STOCKPOT" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "large")} capa={[300, 560]} konum={[330, 210]} metin="LARGE BATCH" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "cooked")} capa={[880, 500]} konum={[930, 220]} metin="ROASTING PAN" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(1, "cdc")} />
      <BaslikBlok t={t} bas={K(0, "big")} satirlar={["BIG BATCHES"]} x={1250} y={190} boyut={100} renkler={[RENK.lacivert]} />
      <VurguRozet t={t} bas={t9} vurgu={sayi} not="illnesses a year in the US" x={1540} y={330} genislik={560} />
      <div style={{ position: "absolute", left: 1260, top: 600, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al, display: "flex",
        alignItems: "center", gap: 12, background: RENK.mercan, color: "#fff", borderRadius: 999, padding: "12px 28px 12px 16px",
        fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1 }}>
        <IkonYol ad="uyari" boyut={34} renk="#fff" />UNSAFE TEMPERATURES
      </div>
    </>
  );
};

export default S07;
