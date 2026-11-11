// Sahne 28 — Neden 4: kimler çalışılıyor. Düşük doz ve başlangıç A1C vurguları.
import React from "react";
import { AbsoluteFill, AltSis, Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDoz = K(1, "1,200 milligrams"), tA1c = K(2, "8 percent");
  return (
    <AbsoluteFill>
      <Kamera gorsel="tam/28" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780])}>
        <Etiket t={t} bas={K(1, "lower-dose")} bitis={tDoz + 2.2} capa={[800, 480]} konum={[700, 320]} metin="LOWER DOSE" renk={RENK.yesil} />
      </Kamera>
      <AltSis a={0.5} />
      <Baslik t={t} bas={K(0, "who gets")} metin="WHO GETS STUDIED" x={110} y={170} boyut={92} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={tDoz} bitis={tA1c - 0.1} vurgu="≤ 1,200 MG" not="a day · lower-dose groups" x={250} y={330} genislik={420} boyut={64} renk={RENK.yesil} />
      <VurguRozet t={t} bas={tA1c} vurgu="A1C ≈ 8%" not="at the start · bigger effects" x={250} y={330} genislik={420} boyut={64} renk={RENK.altin} />
    </AbsoluteFill>
  );
};

export default S28;
