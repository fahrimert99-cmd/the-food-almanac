// Sahne 28 — Dört saat sonra aynı ekmekli öğle yemeği; yanıt yaklaşık %38 daha düz.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tB = s.cumleler[1].bas;
  return (
    <>
      <Kamera gorsel="tam/28" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800])}>
        {/* saat kadranındaki bozuk yazıyı kâğıt rengi yamayla gizle */}
        <div style={{ position: "absolute", left: 520, top: 205, width: 120, height: 48, borderRadius: "50%",
          background: `radial-gradient(ellipse, #EEE7D2 50%, rgba(238,231,210,0) 100%)` }} />
      </Kamera>
      <Etiket t={t} bas={K(0, "hours")} bitis={3.6} capa={[800, 300]} konum={[1080, 300]} metin="FOUR HOURS LATER" renk={RENK.altin} boyut={32} />
      <Etiket t={t} bas={K(0, "same")} bitis={tB + 0.4} capa={[700, 790]} konum={[1050, 640]} metin="SAME BREAD LUNCH" renk={RENK.mercan} boyut={32} />
      <Etiket t={t} bas={K(1, "lentil")} capa={[1000, 830]} konum={[1050, 640]} metin="LENTIL BREAKFAST" renk={RENK.yesil} boyut={32} />
      <BaslikBlok t={t} bas={K(1, "blood")} satirlar={b.satirlar} x={1860} y={200} boyut={96} hiza="sag" />
      <VurguRozet t={t} bas={K(1, "38")} vurgu={b.vurgu!} not={b.not} x={1560} y={440} genislik={420} />
    </>
  );
};

export default S28;
