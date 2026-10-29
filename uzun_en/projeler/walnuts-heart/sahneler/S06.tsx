// Sahne 6 — çoklu doymamış yağ ve ALA: ceviz kasesi, sağda ALA başlığı ve 2.5 g rozeti
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  return (
    <>
      <Kamera gorsel="tam/06" pencere={kameraYolu(t, s.sure, [60, 30, 1800], [170, 80, 1600])}>
        <Etiket t={t} bas={K(0, "polyunsaturated")} bitis={c[1].bas - 0.1} capa={[760, 520]} konum={[420, 230]} metin="POLYUNSATURATED FAT" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "ALA,")} bitis={K(2, "One") - 0.1} capa={[1180, 230]} konum={[1330, 150]} metin="OMEGA-3" renk={RENK.yesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={0.3} />
      <Baslik t={t} bas={K(1, "ALA,")} metin="ALA" x={1620} y={330} boyut={150} renk={RENK.koyuYesil} hiza="orta" />
      <Not t={t} bas={K(1, "alpha-linolenic")} metin="ALPHA-LINOLENIC ACID" x={1620} y={430} hiza="orta" genislik={520} boyut={28} agirlik={800} />
      <Not t={t} bas={K(1, "omega-3")} metin="AN OMEGA-3 FAT" x={1620} y={480} hiza="orta" genislik={520} boyut={28} renk={RENK.yesil} agirlik={800} />
      <VurguRozet t={t} bas={K(2, "2.5")} vurgu="2.5 G" not="ALA IN ONE OUNCE" x={1665} y={590} genislik={340} renk={RENK.altin} />
    </>
  );
};

export default S06;
