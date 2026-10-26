// Sahne 49 — defter: ilaçlar ve belirtileri yaz, kontrole götür.
import React from "react";
import { BaslikBlok, Baslik, Ikon, Kamera, Liste, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

// Defter sayfasına kalemle çizilmiş gibi çizgiler (görsel koordinatı)
const CIZGILER: { y: number; x1: number; ifade: string }[] = [
  { y: 537, x1: 830, ifade: "medicines" },
  { y: 571, x1: 780, ifade: "tingling" },
  { y: 606, x1: 860, ifade: "balance" },
  { y: 641, x1: 760, ifade: "memory" },
];

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tP = K(0, "write") - 0.3;
  const aP = eout(ilerle(t, tP, 0.7));
  const k1 = K(1, "Bring") - 0.15;
  const k2 = K(2, "helps") - 0.15;
  return (
    <>
      <Kamera gorsel="tam/49" pencere={kameraYolu(t, s.sure, [40, 22, 1840], [100, 50, 1700])}>
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          {CIZGILER.map((c, i) => {
            const p = eout(ilerle(t, K(0, c.ifade), 0.7));
            const L = c.x1 - 560;
            const d = `M560 ${c.y} ` + Array.from({ length: 9 }, (_, j) => `L${560 + (L * (j + 1)) / 9} ${c.y + (j % 2 ? 6 : -6)}`).join(" ");
            return <path key={i} d={d} fill="none" stroke={RENK.lacivert} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round"
              pathLength={1} strokeDasharray={1} strokeDashoffset={1 - p} opacity={0.8} />;
          })}
        </svg>
      </Kamera>
      <Panel a={aP} taraf="sag" genislik={760} />
      <Baslik t={t} bas={K(0, "write")} bitis={k1} metin="WRITE IT DOWN" x={1860} y={170} boyut={92} hiza="sag" renk={RENK.koyuYesil} />
      <Liste t={t} x={1260} y={260} aralik={104} boyut={40} isaret="nokta" genislik={600} ogeler={[
        { bas: K(0, "medicines"), bitis: k1, metin: "MEDICINES", renk: RENK.altin },
        { bas: K(0, "tingling"), bitis: k1, metin: "TINGLING", renk: RENK.altin },
        { bas: K(0, "balance"), bitis: k1, metin: "BALANCE TROUBLE", renk: RENK.altin },
        { bas: K(0, "memory"), bitis: k1, metin: "MEMORY CHANGES", renk: RENK.altin },
      ]} />
      <BaslikBlok t={t} bas={K(1, "Bring")} bitis={k2} satirlar={["BRING THE LIST", "TO YOUR NEXT", "CHECKUP"]} x={1860} y={250} boyut={84} hiza="sag" />
      <Liste t={t} x={1240} y={300} aralik={170} boyut={36} isaret="onay" genislik={620} ogeler={[
        { bas: K(2, "decide"), metin: "DOCTOR DECIDES IF A TEST MAKES SENSE" },
        { bas: K(2, "saves"), metin: "NO NEED TO REMEMBER EVERYTHING" },
      ]} />
      <Baslik t={t} bas={k2 + 0.1} metin="WHY IT HELPS" x={1860} y={170} boyut={92} hiza="sag" renk={RENK.koyuYesil} />
    </>
  );
};
export default S49;
