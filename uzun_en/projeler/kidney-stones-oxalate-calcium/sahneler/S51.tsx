// Sahne 51 — kalsiyum hapları: tiazid, sodyum, eczacıya danış.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S51: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tPills = K(0, "pills"), tThi = K(1, "thiazide"), tLim = K(1, "limit sodium"), tKeep = K(1, "keep calcium"), tAsk = K(2, "ask your doctor");
  const tEnd = tAsk - 0.15;
  const adim = ["starting", "changing", "stopping"];
  return (
    <>
      <Kamera gorsel="tam/51" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 30, 1830])}>
        <Etiket t={t} bas={tPills} bitis={tThi} capa={[560, 590]} konum={[640, 230]} metin="CALCIUM PILLS" renk={RENK.altin} boyut={28} />
      </Kamera>
      <Not t={t} bas={tThi} bitis={tEnd} metin="THIAZIDE WATER PILL" x={1230} y={190} boyut={36} agirlik={800} renk={RENK.lacivert} />
      <Liste t={t} isaret="onay" x={1230} y={270} aralik={96} boyut={34} genislik={640}
        ogeler={[{ bas: tLim, metin: "LIMIT SODIUM", bitis: tEnd }, { bas: tKeep, metin: "KEEP CALCIUM NORMAL", bitis: tEnd }]} />
      <BaslikBlok t={t} bas={tAsk} satirlar={["ASK YOUR", "PHARMACIST"]} x={1230} y={250} boyut={100} />
      {adim.map((a, i) => {
        const [sc, al] = pop(t, K(2, a), 0.45);
        if (al <= 0) return null;
        return <div key={a} style={{ position: "absolute", left: 1230, top: 500 + i * 84, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
          <Hap metin={a.toUpperCase()} renk={RENK.koyuYesil} boyut={30} /></div>;
      })}
    </>
  );
};
export default S51;
