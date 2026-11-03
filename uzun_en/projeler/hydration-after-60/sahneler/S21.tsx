// Sahne 21 — 12 saat susuzluk sonrası idrar osmolalitesi yaşla düştü.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1840]);
  const tOk = K(0, "fell");
  const ok = eout(ilerle(t, tOk, 0.9));
  const [s1, a1] = pop(t, tOk, 0.5);
  const [s2, a2] = pop(t, tOk + 0.8, 0.5);
  return (
    <>
      <Kamera gorsel="tam/21" pencere={p}>
        <Etiket t={t} bas={K(0, "osmolality")} bitis={tOk - 0.1} capa={[500, 400]} konum={[560, 120]} metin="URINE OSMOLALITY" renk={RENK.altin} />
      </Kamera>
      <Panel a={eout(ilerle(t, K(0, "12"), 0.6))} taraf="sag" genislik={600} />
      <VurguRozet t={t} bas={K(0, "12")} vurgu="12 HOURS" not="WITHOUT FLUIDS" x={1650} y={130} genislik={420} />
      {/* yaşla birlikte düşüş oku (üst boş alan) */}
      <div style={{ position: "absolute", left: 180, top: 95, transform: `scale(${s1})`, opacity: a1, transformOrigin: "0 50%" }}>
        <Hap metin="WITH AGE" renk={RENK.mercan} boyut={28} />
      </div>
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <line x1={460} y1={100} x2={460 + 420 * ok} y2={100 + 50 * ok} stroke={RENK.lacivert} strokeWidth={7} strokeLinecap="round" />
        {ok > 0.9 && <polygon points="884,152 856,134 850,162" fill={RENK.lacivert} />}
      </svg>
      <div style={{ position: "absolute", left: 900, top: 150, transform: `translate(0, -50%) scale(${s2})`, opacity: a2, transformOrigin: "0 50%" }}>
        <Hap metin="LESS CONCENTRATED" renk={RENK.altin} boyut={28} />
      </div>
      <BaslikBlok t={t} bas={K(1, "older")} satirlar={["OLDER", "WEAKER URINE", "CONCENTRATION"]} x={1420} y={450} boyut={68} />
    </>
  );
};

export default S21;
