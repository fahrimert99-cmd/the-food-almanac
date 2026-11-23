// Sahne 22 — limit aşan örnekler çok az; dörtte biri kalıntısız.
import React from "react";
import { AbsoluteFill, BaslikBlok, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t54 = K(0, "54"), tOver = K(0, "went over"), tFour = K(1, "one in four");
  return (
    <AbsoluteFill>
      <Kamera gorsel="tam/22" pencere={kameraYolu(t, s.sure, [0, 60, 1760], [0, 0, 1920])}>
        {/* masanın ucundaki ayrı sepetler */}
        <Etiket t={t} bas={tOver} bitis={tFour} capa={[1115, 450]} konum={[1480, 440]} metin="OVER A LIMIT" renk={RENK.mercan} />
      </Kamera>
      <VurguRozet t={t} bas={t54 - 0.1} vurgu="54" not="SAMPLES OVER A LIMIT" x={1480} y={130} genislik={420} boyut={120} renk={RENK.mercan} />
      <BaslikBlok t={t} bas={tFour} satirlar={["1 IN 4", "NO RESIDUE"]} x={1290} y={470} boyut={100} renkler={[RENK.lacivert, RENK.yesil]} />
      {/* dört kareden biri dolu */}
      <div style={{ position: "absolute", left: 1290, top: 650, display: "flex", gap: 16 }}>
        {[0, 1, 2, 3].map((i) => {
          const [sc, al] = pop(t, tFour + 0.3 + i * 0.12, 0.45);
          return <div key={i} style={{ width: 90, height: 90, borderRadius: 14, transform: `scale(${sc})`, opacity: al,
            background: i === 0 ? RENK.yesil : "transparent", border: `5px solid ${i === 0 ? RENK.yesil : RENK.lacivert}`, boxSizing: "border-box" }} />;
        })}
      </div>
    </AbsoluteFill>
  );
};

export default S22;
