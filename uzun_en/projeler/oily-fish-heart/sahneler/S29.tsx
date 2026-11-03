// Sahne 29 — trigliserid + 180–500 mg/dL aralığı (sağ panelde)
import React from "react";
import { Baslik, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tP = K(1, "people") - 0.4, tGec = c[1].bas - 0.1;
  const aPanel = eout(ilerle(t, tP, 0.6));
  const dolu = eout(ilerle(t, K(1, "180"), 1.0));
  const [sB, aB] = pop(t, K(1, "180"), 0.6);
  return (
    <>
      <Kamera gorsel="tam/29" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1810])} />
      <Baslik t={t} bas={K(0, "Triglycerides")} metin="TRIGLYCERIDES" x={80} y={100} boyut={96} renk={RENK.koyuYesil} bitis={tGec} />
      <Not t={t} bas={K(0, "fat")} metin="A FAT IN YOUR BLOOD" x={84} y={170} boyut={32} agirlik={800} renk={RENK.lacivert} bitis={tGec} />
      <Panel a={aPanel} taraf="sag" genislik={820} opak={0.97} />
      <Not t={t} bas={K(1, "enrolled")} metin="ENROLLED WHEN LEVELS WERE" x={1500} y={300} boyut={32} agirlik={800} hiza="orta" renk={RENK.lacivert} />
      <div style={{ position: "absolute", left: 1500, top: 370, transform: `translate(-50%,0) scale(${sB})`, opacity: aB,
        fontFamily: "Anton, sans-serif", fontSize: 150, lineHeight: 1.1, color: RENK.altin, whiteSpace: "nowrap" }}>180–500</div>
      <div style={{ position: "absolute", left: 1160, top: 570, width: 680, height: 14, borderRadius: 7, background: "rgba(48,40,34,0.12)" }}>
        <div style={{ width: `${dolu * 100}%`, height: "100%", borderRadius: 7, background: RENK.altin }} />
      </div>
      <Not t={t} bas={K(1, "milligrams")} metin="MG/DL" x={1500} y={610} boyut={44} agirlik={800} hiza="orta" renk={RENK.lacivert} />
    </>
  );
};

export default S29;
