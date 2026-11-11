// Sahne 6 — büyük/küçük şişe; sağ panelde yüksek doz örnekleri ve başlık.
import React from "react";
import { BaslikBlok, Baslik, Etiket, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pPanel = eout(ilerle(t, K(0, "single") - 0.4, 0.7));
  return (
    <>
      <Kamera gorsel="tam/06" pencere={kameraYolu(t, s.sure, [0, 20, 1700], [30, 30, 1600])}>
        <Etiket t={t} bas={K(0, "high-dose")} bitis={K(1, "Those")} capa={[385, 880]} konum={[215, 590]} metin="HIGH-DOSE PILL" renk={RENK.altin} boyut={26} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={700} />
      <Not t={t} bas={K(0, "single")} metin="SINGLE HIGH-DOSE PILLS" x={1860} y={500} hiza="sag" boyut={34} agirlik={800} renk={RENK.altin} />
      <Baslik t={t} bas={K(0, "vitamin")} metin="VITAMIN E" x={1860} y={610} boyut={74} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "beta")} metin="BETA CAROTENE" x={1860} y={705} boyut={74} hiza="sag" renk={RENK.koyuYesil} />
      <BaslikBlok t={t} bas={K(1, "mega-dose")} satirlar={["MEGA-DOSE", "IS DIFFERENT"]} x={1860} y={190} boyut={88} hiza="sag" renkler={[RENK.mercan, RENK.lacivert]} />
      <Not t={t} bas={K(1, "separate")} metin="A SEPARATE STORY" x={1860} y={380} hiza="sag" boyut={40} agirlik={800} renk={RENK.lacivert} />
      <Not t={t} bas={K(1, "come")} metin="WE'LL COME BACK TO THEM" x={1860} y={800} hiza="sag" boyut={34} agirlik={700} renk={RENK.altin} />
    </>
  );
};

export default S06;
