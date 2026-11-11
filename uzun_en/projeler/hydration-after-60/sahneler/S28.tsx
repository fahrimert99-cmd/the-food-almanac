// Sahne 28 — %80 içeceklerden; kadınlar ≈ 9, erkekler ≈ 12 bardak (anlatımdaki basit aritmetik).
import React from "react";
import { Hap, Kamera, Etiket, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740]);
  const [sc, al] = pop(t, K(1, "typical"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/28" pencere={p}>
        <Etiket t={t} bas={K(0, "drinks.")} bitis={K(1, "simple")} capa={[1000, 640]} konum={[560, 330]} metin="DRINKS" renk={RENK.lacivert} />
      </Kamera>
      <VurguRozet t={t} bas={K(0, "80 percent")} vurgu="80%" not="FROM DRINKS" x={330} y={110} renk={RENK.koyuYesil} genislik={400} />
      <VurguRozet t={t} bas={K(1, "9")} vurgu="≈ 9" not="CUPS · WOMEN" x={1620} y={90} boyut={84} renk={RENK.yesil} genislik={340} />
      <VurguRozet t={t} bas={K(1, "12")} vurgu="≈ 12" not="CUPS · MEN" x={1620} y={270} boyut={84} renk={RENK.koyuYesil} genislik={340} />
      <div style={{ position: "absolute", left: 1620, top: 460, transform: `translate(-50%, 0) scale(${sc})`, opacity: al }}>
        <Hap metin="TYPICAL AMOUNT OF FOOD" renk={RENK.altin} boyut={24} />
      </div>
    </>
  );
};

export default S28;
