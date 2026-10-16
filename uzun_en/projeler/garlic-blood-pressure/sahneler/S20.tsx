// Sahne 20 — başlangıç 140+: sol panel (flaskın sahte yazısını da örter), sağda sarımsak ve şişe etiketleri.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const pPanel = 1;
  return (
    <>
      <Kamera gorsel="tam/20" pencere={kameraYolu(t, s.sure, [520, 200, 1400], [560, 230, 1330])}>
        <Etiket t={t} bas={K(0, "garlic")} capa={[1500, 560]} konum={[1670, 350]} metin="GARLIC GROUP" renk={RENK.yesil} boyut={26} />
        <Etiket t={t} bas={K(0, "placebo")} capa={[1350, 850]} konum={[1700, 720]} metin="PLACEBO GROUP" renk={RENK.altin} boyut={26} />
      </Kamera>
      <Panel a={pPanel} taraf="sol" genislik={800} opak={1} />
      <BaslikBlok t={t} bas={K(0, "started") + 0.1} satirlar={b.satirlar} x={70} y={260} boyut={100} />
      <VurguRozet t={t} bas={K(0, "ten") - 0.1} vurgu={b.vurgu!} not={b.not} x={400} y={500} genislik={600} boyut={150} />
      <Baslik t={t} bas={K(1, "below")} metin="BELOW 140" x={70} y={810} boyut={64} renk={RENK.gri} />
      <Not t={t} bas={K(1, "clear")} metin="NO CLEAR DIFFERENCE" x={74} y={870} boyut={36} agirlik={800} genislik={700} />
    </>
  );
};

export default S20;
