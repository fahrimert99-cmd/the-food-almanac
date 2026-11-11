// Sahne 57 — büyük denemeler: D vitamini ve kalsiyum+D kırıkları azaltmadı.
import React from "react";
import { AbsoluteFill, BaslikBlok, Etiket, Hap, INTER, Kamera, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu,
  kelimeZamani, pop, sol } from "../kutuphane";

const S57: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tD = K(0, "vitamin D alone"), tKaf = K(0, "did not lower fractures"), tWhi = K(0, "Women's Health"),
    tCa = K(0, "calcium plus"), tYok = K(0, "did not significantly"), tBob = K(1, "Kidney stones");
  const aP = eout(ilerle(t, 0.0, 0.6));
  const [sb, ab] = pop(t, tBob, 0.5);
  return (
    <>
      <Kamera gorsel="tam/57" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])} />
      <Panel a={aP} taraf="sol" genislik={640} />
      {/* 1. vuruş: denemelerin kapsamı */}
      <BaslikBlok t={t} bas={0.15} satirlar={["LARGE TRIALS", "HEALTHY ADULTS"]} x={70} y={230} boyut={84} bitis={tKaf - 0.3} />
      {/* 2. vuruş: D vitamini tek başına */}
      <Etiket t={t} bas={tD} bitis={tCa - 0.1} capa={[1230, 360]} konum={[1230, 100]} metin="VITAMIN D ALONE" renk={RENK.altin} />
      <VurguRozet t={t} bas={tKaf} bitis={tWhi - 0.2} vurgu="NO DROP" not="in fractures" x={330} y={230} genislik={420} renk={RENK.mercan} />
      {/* 3. vuruş: WHI, kalsiyum + D */}
      <BaslikBlok t={t} bas={tWhi} satirlar={["WOMEN'S HEALTH", "INITIATIVE"]} x={70} y={190} boyut={76} />
      <Etiket t={t} bas={tCa} capa={[1230, 700]} konum={[1230, 100]} metin="CALCIUM + VITAMIN D" renk={RENK.altin} />
      <VurguRozet t={t} bas={tYok} vurgu="NO DROP" not="not significant" x={330} y={430} genislik={420} renk={RENK.mercan} />
      {/* 4. vuruş: böbrek taşları */}
      <div style={{ position: "absolute", left: 1520, top: 850, transform: `translate(-50%, 0) scale(${sb})`, opacity: ab }}>
        <Hap metin="KIDNEY STONES: MORE COMMON" renk={RENK.mercan} boyut={30} />
      </div>
    </>
  );
};

export default S57;
