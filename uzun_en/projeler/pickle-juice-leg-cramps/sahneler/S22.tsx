// Sahne 22 — sinir refleksi: omurga-bacak sinirleri, bardak, "hipotez" rozeti.
import React from "react";
import { Etiket, Kamera, Not, Parcaciklar, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/22" pencere={kameraYolu(t, s.sure, [40, 20, 1840], [110, 60, 1700])}>
        <Etiket t={t} bas={K(0, "nervous system")} capa={[780, 470]} konum={[340, 330]} metin="NERVOUS SYSTEM" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={K(0, "juice")} bitis={K(1, "hypothesis")} capa={[1230, 240]} konum={[1640, 200]} metin="PICKLE JUICE" renk={RENK.altin} />
        <Parcaciklar t={t} bas={K(0, "sudden message")} kaynak={[1140, 300]} hedef={[780, 480]} adet={16} aralik={0.12} omur={1.4}
          kavis={-60} yayilma={60} hedefYayilma={80} tohum="s22" />
      </Kamera>
      <Not t={t} bas={K(0, "long before")} metin="BEFORE IT REACHES YOUR GUT" x={1500} y={390} boyut={34} agirlik={800} genislik={380} />
      <VurguRozet t={t} bas={K(1, "hypothesis")} vurgu="HYPOTHESIS" not="not a proven mechanism" x={1680} y={570}
        genislik={360} boyut={62} renk={RENK.mercan} />
    </>
  );
};

export default S22;
