// Sahne 55 — lavabo ve çevresi: temizle ve dezenfekte et
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const c = s.cumleler;
  const cik = c[2].bas - 0.1;
  return (
    <>
      <Kamera gorsel="tam/55" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 40, 1760])}>
        <Etiket t={t} bas={K(1, "sanitize")} bitis={cik} capa={[1230, 330]} konum={[1560, 190]} metin="SANITIZER" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "sink")} bitis={cik} capa={[520, 720]} konum={[330, 910]} metin="THE SINK" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(1, "never")} bitis={cik} capa={[1480, 640]} konum={[1560, 900]} metin="NEVER RINSED" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(1, "Clean")} metin="CLEAN +" x={70} y={190} boyut={96} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "sanitize")} metin="SANITIZE" x={70} y={300} boyut={96} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(2, "sinks")} vurgu="EITHER WAY" not="Sinks contaminated · NC State study" x={1580} y={120} genislik={560} boyut={84} renk={RENK.mercan} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={K(2, "NC")} />
    </>
  );
};
export default S55;
