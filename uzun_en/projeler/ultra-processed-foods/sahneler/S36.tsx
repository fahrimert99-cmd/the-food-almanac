// Sahne 36 — gözlük ve fincan: katılımcıların ortalama yaşı, yön ama tahmin değil.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSayi = K(1, "French");
  const tSon = K(2, "So");
  const pZ = eout(ilerle(t, tSon - 0.1, 0.5));
  return (
    <>
      <Kamera gorsel="tam/36" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800])} />
      <Etiket t={t} bas={K(0, "older")} bitis={tSon - 0.2} capa={[610, 700]} konum={[360, 520]} metin="OLDER ADULTS" renk={RENK.altin} />
      <VurguRozet t={t} bas={K(1, "43")} vurgu="≈ 43" not="FRENCH PARTICIPANTS" x={640} y={90} genislik={420} boyut={100} bitis={tSon - 0.2} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(1, "31")} vurgu="≈ 31" not="NIH VOLUNTEERS" x={1160} y={90} genislik={420} boyut={100} bitis={tSon - 0.2} renk={RENK.altin} />
      {/* kapanış başlığı zemini */}
      <div style={{ position: "absolute", left: 410, top: 70, width: 1100, height: 290, borderRadius: 26, background: RENK.kagit, opacity: 0.94 * pZ }} />
      <Baslik t={t} bas={K(2, "direction") - 0.1} metin="A DIRECTION," x={960} y={150} boyut={100} hiza="orta" renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(2, "not")} metin="NOT A PREDICTION" x={960} y={265} boyut={100} hiza="orta" renk={RENK.lacivert} />
      <Etiket t={t} bas={tSayi + 0.2} bitis={tSon - 0.2} capa={[1020, 700]} konum={[1020, 440]} metin="AVERAGE AGE" renk={RENK.yesil} />
    </>
  );
};
export default S36;
