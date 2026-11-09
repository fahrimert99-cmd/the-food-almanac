// Sahne 6 — Fransız pazar tezgâhı; sağdaki boş kâğıtta iki vuruş: yağ/kalp paradoksu, sonra araştırmacılar.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const w = kameraYolu(t, s.sure, [0, 0, 1920], [0, 60, 1700]);
  const son1 = c[1].bas - 0.2;
  return (
    <>
      <Kamera gorsel="tam/06" pencere={w} sinirla={false}>
        <Etiket t={t} bas={K(0, "saturated")} bitis={son1} capa={[240, 700]} konum={[300, 520]} metin="CHEESE" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "fat,") + 0.3} bitis={son1} capa={[700, 860]} konum={[1050, 900]} metin="SAUSAGES" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "wine")} capa={[627, 690]} konum={[930, 430]} metin="RED WINE" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "fat,")} bitis={son1} metin="FAT, YET" x={1860} y={300} boyut={120} hiza="sag" renk={RENK.mercan} />
      <Baslik t={t} bas={K(0, "low")} bitis={son1} metin="HEALTHY HEARTS" x={1860} y={430} boyut={120} hiza="sag" renk={RENK.koyuYesil} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={K(1, "1992")} />
      <VurguRozet t={t} bas={K(1, "1992")} vurgu="1992" x={1520} y={160} genislik={340} />
      <Baslik t={t} bas={K(1, "Serge")} metin="SERGE RENAUD" x={1860} y={460} boyut={90} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "Michel")} metin="MICHEL DE LORGERIL" x={1860} y={560} boyut={90} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "wine")} metin="WINE: PART OF THE REASON?" x={1860} y={700} boyut={64} hiza="sag" renk={RENK.altin} />
    </>
  );
};

export default S06;
