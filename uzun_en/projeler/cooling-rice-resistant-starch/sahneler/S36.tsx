// Sahne 36 — çalışmaların profili: küçük, genç/orta yaş, sağlıklı, tek öğün; sonra ≤45.
import React from "react";
import { Baslik, Kamera, Liste, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tPT = K(1, "pasta and potato"), t45 = K(1, "45"), son = tPT - 0.25;
  return (
    <>
      <Kamera gorsel="tam/36" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])} />
      <Liste t={t} x={1000} y={105} aralik={68} boyut={34} isaret="onay" genislik={820} ogeler={[
        { bas: K(0, "small trials"), metin: "SMALL TRIALS", bitis: son },
        { bas: K(0, "young or"), metin: "YOUNG OR MIDDLE-AGED", bitis: son },
        { bas: K(0, "mostly healthy"), metin: "MOSTLY HEALTHY", bitis: son },
        { bas: K(0, "single test meal"), metin: "ONE TEST MEAL EACH", bitis: son },
      ]} />
      <Baslik t={t} bas={tPT} metin="PASTA + POTATO TRIALS" x={1000} y={170} boyut={64} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={t45} vurgu="≤ 45" not="YEARS OLD" x={1500} y={215} renk={RENK.altin} />
    </>
  );
};

export default S36;
