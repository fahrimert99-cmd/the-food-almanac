// Sahne 23 — kaç çalışma: ham bal 5, yonca 2, akasya (robinia) 1 (kolesterol, glukoz değil); alt grup bulguları doğrulanmalı.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, INTER } from "../kutuphane";

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tRob = K(2, "robinia");
  const tAyri = K(3, "subgroup findings");
  const tOnay = K(3, "need confirming");
  const [sN, aN] = pop(t, K(2, "not glucose") - 0.1, 0.5);
  return (
    <>
      <Kamera gorsel="tam/23" pencere={kameraYolu(t, s.sure, [0, 0, 1900], [30, 20, 1840])}>
        <Etiket t={t} bas={K(0, "raw honey")} bitis={tAyri - 0.3} capa={[900, 660]} konum={[790, 450]} metin="RAW HONEY" renk={RENK.altin} boyut={26} />
        <Etiket t={t} bas={K(1, "clover")} bitis={tAyri - 0.3} capa={[1580, 520]} konum={[1720, 610]} metin="CLOVER" renk={RENK.koyuYesil} boyut={26} />
      </Kamera>
      <VurguRozet t={t} bas={0.05} vurgu="5" not="RAW HONEY TRIALS" x={330} y={50} genislik={400} boyut={80} renk={RENK.altin} />
      <VurguRozet t={t} bas={K(1, "two")} vurgu="2" not="CLOVER TRIALS" x={760} y={50} genislik={400} boyut={80} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={tRob} vurgu="1" not="ROBINIA TRIAL" x={1190} y={50} genislik={400} boyut={80} renk={RENK.mercan} />
      {aN > 0 && (
        <div style={{ position: "absolute", left: 1190, top: 240, transform: `translate(-50%, 0) scale(${sN})`, opacity: aN * Math.max(0, 1 - (t - (tAyri - 0.2)) / 0.4), whiteSpace: "nowrap",
          background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`, borderRadius: 999, padding: "6px 22px", fontFamily: INTER,
          fontWeight: 800, fontSize: 26, letterSpacing: 1.5, color: RENK.mercan }}>CHOLESTEROL, NOT GLUCOSE</div>
      )}
      <Baslik t={t} bas={tAyri} metin="SUBGROUP FINDINGS" x={930} y={330} boyut={34} renk={RENK.altin} hiza="orta" font="inter" agirlik={800} aralik={6} />
      <Baslik t={t} bas={tOnay} metin="NEED CONFIRMING" x={930} y={420} boyut={74} renk={RENK.lacivert} hiza="orta" />
    </>
  );
};

export default S23;
