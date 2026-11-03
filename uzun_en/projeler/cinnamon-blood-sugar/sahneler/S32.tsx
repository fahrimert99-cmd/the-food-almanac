// Sahne 32 — Kumarin: kasya vs Seylan, karaciğer notu.
import React from "react";
import { AbsoluteFill, BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <AbsoluteFill>
      <Kamera gorsel="tam/32" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1780])}>
        <Etiket t={t} bas={K(0, "Cassia")} bitis={K(2, "In")} capa={[333, 520]} konum={[520, 110]} metin="CASSIA" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "Ceylon")} bitis={K(2, "In")} capa={[560, 720]} konum={[1010, 870]} metin="CEYLON: A TRACE" renk={RENK.yesil} />
        <Etiket t={t} bas={K(2, "liver")} capa={[240, 910]} konum={[560, 880]} metin="LIVER" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "coumarin")} satirlar={b.satirlar} x={1260} y={250} boyut={120} renkler={[RENK.mercan]} />
      <Not t={t} bas={K(0, "coumarin") + 0.3} x={1260} y={330} genislik={540} boyut={32} metin={b.not ?? ""} />
      <Not t={t} bas={K(2, "In")} x={1260} y={470} genislik={540} boyut={34}
        metin="In large amounts over a long time, it can affect the liver in sensitive people." />
    </AbsoluteFill>
  );
};

export default S32;
