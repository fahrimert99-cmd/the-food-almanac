// Sahne 29 — Soğuk patates: toplam glukoz aynı, 30. dk'da %9, insülin %18 daha düşük.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/29" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 40, 1780])}>
        <Etiket t={t} bas={K(0, "glucose") - 0.1} capa={[1070, 490]} konum={[1150, 800]} metin="GLUCOSE" renk={RENK.altin} boyut={28} />
      </Kamera>
      <Baslik t={t} bas={0.3} metin={b.satirlar[0]} x={1850} y={190} boyut={104} renk={RENK.koyuYesil} hiza="sag" />
      <VurguRozet t={t} bas={K(0, "total")} vurgu="NO DIFFERENCE" not="total glucose, 2 hours" x={1570} y={280} genislik={560} boyut={72} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={K(1, "9")} vurgu="–9%" not="glucose at 30 minutes" x={1570} y={470} genislik={560} boyut={72} renk={RENK.altin} />
      <VurguRozet t={t} bas={K(2, "18")} vurgu="–18%" not="insulin response overall" x={1570} y={660} genislik={560} boyut={72} renk={RENK.yesil} />
    </>
  );
};

export default S29;
