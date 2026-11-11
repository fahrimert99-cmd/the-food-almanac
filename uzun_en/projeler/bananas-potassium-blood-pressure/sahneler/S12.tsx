// Sahne 12 — tahterevalli: sodyum ağır uç, potasyum dengeler.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTilt = K(1, "tilts"), tLevel = K(2, "level");
  const pL = eout(ilerle(t, tLevel, 0.8));
  const [sc, al] = pop(t, tLevel + 0.5, 0.5);
  return (
    <>
      <Kamera gorsel="tam/12" pencere={kameraYolu(t, s.sure, [0, 90, 1920], [70, 120, 1780])}>
        <Etiket t={t} bas={K(0, "sodium")} capa={[400, 470]} konum={[420, 190]} metin="SODIUM" renk={RENK.lacivert} bitis={tTilt} />
        <Etiket t={t} bas={K(0, "potassium")} capa={[1440, 350]} konum={[1440, 190]} metin="POTASSIUM" renk={RENK.altin} bitis={tTilt} />
        {/* dengelenince kesikli düz çizgi */}
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          <line x1={300} x2={300 + 1360 * pL} y1={507} y2={507} stroke={RENK.koyuYesil} strokeWidth={5} strokeDasharray="16 12" opacity={0.9} />
        </svg>
        <div style={{ position: "absolute", left: 960, top: 360, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
          <Hap metin="LEVELLED OUT" renk={RENK.yesil} boyut={34} />
        </div>
      </Kamera>
      <Baslik t={t} bas={tTilt} bitis={tLevel - 0.1} metin="A LOT OF SODIUM" x={140} y={125} boyut={84} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(2, "Plenty")} metin="PLENTY OF" x={1150} y={125} boyut={76} hiza="orta" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(2, "potassium") } metin="POTASSIUM" x={1150} y={211} boyut={76} hiza="orta" renk={RENK.koyuYesil} />
    </>
  );
};

export default S12;
