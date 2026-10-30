// Sahne 45 — mütevazı fark; ilaç yerine geçmez. Sağ sütunda rozet ve başlıklar.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tPr = K(1, "Prunes");
  const tIl = K(1, "bone treatment");
  return (
    <>
      <Kamera gorsel="tam/45" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1790])}>
        <Etiket t={t} bas={tPr} bitis={tIl - 0.1} capa={[400, 440]} konum={[400, 160]} metin="PRUNES" renk={RENK.mercan} />
        <Etiket t={t} bas={tIl} capa={[760, 420]} konum={[760, 130]} metin="PRESCRIBED TREATMENT" renk={RENK.lacivert} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "real but")} satirlar={[b.satirlar[0]]} x={1360} y={190} boyut={110} renkler={[RENK.lacivert]} />
      <VurguRozet t={t} bas={K(0, "0.8")} vurgu={b.vurgu ?? ""} not={b.not} x={1610} y={290} genislik={460} boyut={120} />
      <BaslikBlok t={t} bas={K(1, "should not")} satirlar={[b.satirlar[1]]} x={1450} y={650} boyut={96} renkler={[RENK.mercan]} />
    </>
  );
};

export default S45;
