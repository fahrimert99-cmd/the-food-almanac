// Sahne 20 — üçüncü deneme: 101 yetişkin, kurkumin 500 mg günde iki kez, 8 hafta.
import React from "react";
import { Etiket, KaynakEtiketi, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/20" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1840])}>
        <Etiket t={t} bas={K(0, "curcumin")} capa={[900, 320]} konum={[1040, 95]} metin="CURCUMIN" renk={RENK.altin} boyut={28} />
        <Etiket t={t} bas={K(0, "milligrams")} capa={[620, 560]} konum={[640, 905]} metin="500 MG TWICE A DAY" renk={RENK.altin} boyut={28} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <VurguRozet t={t} bas={K(0, "101")} vurgu="101" not="adults, knee osteoarthritis" x={310} y={140} genislik={470} boyut={90} />
      <VurguRozet t={t} bas={K(0, "eight")} vurgu="8 WEEKS" x={1690} y={120} genislik={300} boyut={64} renk={RENK.koyuYesil} />
    </>
  );
};

export default S20;
