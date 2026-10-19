// Sahne 50 — "Keep it in context": tabak + sarımsak, tuz ve DASH vurgusu.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(2, "salt"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/50" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 22, 1840])}>
        {/* 3. vuruş: DASH düzeni sebzelere işaret eder */}
        <Etiket t={t} bas={K(2, "DASH")} capa={[760, 330]} konum={[1000, 150]} metin="DASH PATTERN" renk={RENK.yesil} />
        {/* 4. vuruş: sarımsak */}
        <Etiket t={t} bas={K(2, "alongside")} capa={[1280, 700]} konum={[1620, 800]} metin="ALONGSIDE GARLIC" renk={RENK.altin} />
      </Kamera>
      {/* 1. vuruş: başlık, sağ üstteki boş kâğıtta */}
      <BaslikBlok t={t} bas={K(1, "Keep")} satirlar={["KEEP IT IN", "CONTEXT"]} x={1500} y={260} boyut={108} hiza="orta" />
      {/* 2. vuruş: tuzu azaltmak */}
      {al > 0 && (
        <div style={{ position: "absolute", left: 1500, top: 470, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
          <Hap metin="CUT SALT" renk={RENK.mercan} boyut={34} />
        </div>
      )}
    </>
  );
};

export default S50;
