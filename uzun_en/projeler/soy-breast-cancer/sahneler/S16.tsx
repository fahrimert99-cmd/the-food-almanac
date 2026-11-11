// Sahne 16 — Shanghai çalışması: sol panelde çalışma adı ve yürütücü, sağda 5,042 rozeti.
import React from "react";
import { Baslik, Kamera, KaynakEtiketi, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/16" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1800])} />
      <Panel a={eout(ilerle(t, 0.1, 0.7))} taraf="sol" genislik={900} />
      <Baslik t={t} bas={K(0, "shanghai")} metin="SHANGHAI" x={80} y={300} boyut={84} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "breast")} metin="BREAST CANCER" x={80} y={392} boyut={84} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "survival")} metin="SURVIVAL STUDY" x={80} y={484} boyut={84} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "xiao-ou")} metin="LED BY XIAO-OU SHU" x={84} y={580} boyut={34} agirlik={800} />
      <Not t={t} bas={K(0, "vanderbilt")} metin="VANDERBILT UNIVERSITY" x={84} y={630} boyut={34} renk={RENK.altin} agirlik={800} />
      <VurguRozet t={t} bas={K(1, "5,042")} vurgu="5,042" not="WOMEN IN CHINA" x={1560} y={140} renk={RENK.koyuYesil} genislik={380} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bitis={K(0, "shanghai")} />
    </>
  );
};
export default S16;
