import React from "react";
import { AbsoluteFill, Baslik, BaslikBlok, Etiket, INTER, Kamera, KaynakEtiketi, MARKA, Not, Panel, RENK, SP, VurguRozet, eout,
  ilerle, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

// Sahne 6 — karaciğer ve yeşil yaprak parçacıkları; sağda etiketler, sonra başlık
const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bitisEt = K(2, "less") - 0.15;
  const [b1, b2] = s.meta.baslik?.satirlar ?? ["VITAMIN K", "BUILDS CLOTTERS"];
  return (
    <>
      <Kamera gorsel="tam/06" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 20, 1840])}>
        <Etiket t={t} bas={K(0, "vitamin")} bitis={bitisEt} capa={[853, 213]} konum={[1330, 190]} metin="VITAMIN K" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "liver")} bitis={bitisEt} capa={[1000, 380]} konum={[1400, 400]} metin="LIVER" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "proteins")} bitis={bitisEt} capa={[853, 660]} konum={[1400, 640]} metin="CLOTTING PROTEINS" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(2, "less")} metin={b1} x={1180} y={300} boyut={100} renk={RENK.yesil} />
      <Baslik t={t} bas={K(2, "less") + 0.2} metin={b2} x={1180} y={410} boyut={100} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(2, "fewer")} metin="Less vitamin K, fewer clotting proteins" x={1180} y={540} boyut={40} agirlik={800} genislik={640} />
    </>
  );
};

export default S06;
