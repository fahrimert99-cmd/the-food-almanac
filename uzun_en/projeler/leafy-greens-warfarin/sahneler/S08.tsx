import React from "react";
import { AbsoluteFill, Baslik, BaslikBlok, Etiket, INTER, Kamera, KaynakEtiketi, MARKA, Not, Panel, RENK, SP, VurguRozet, eout,
  ilerle, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

// Sahne 8 — laboratuvar masası; sağda INR başlığı, sonra 2–3 rozeti
const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bitisEt = K(1, "in") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/08" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1840])}>
        <Etiket t={t} bas={K(0, "test")} bitis={bitisEt} capa={[507, 440]} konum={[480, 150]} metin="BLOOD TEST" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "how")} bitis={bitisEt} capa={[853, 453]} konum={[1330, 560]} metin="TIME TO CLOT" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "INR,")} metin={s.meta.baslik?.satirlar[0] ?? "THE INR"} x={1200} y={250} boyut={180} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(1, "large")} metin="THE LARGE ARISTOTLE TRIAL" x={1200} y={470} boyut={34} font="inter" renk={RENK.lacivert} />
      <VurguRozet t={t} bas={K(1, "between")} vurgu={s.meta.baslik?.vurgu ?? "2–3"} not={s.meta.baslik?.not} x={1520} y={560}
        genislik={460} boyut={130} />
    </>
  );
};

export default S08;
