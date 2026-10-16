// Sahne 33 — DASH-Sodium çalışması (Sacks 2001): DASH + düşük sodyum, sistolik –11.5.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const aP = eout(ilerle(t, 0.2, 0.6));
  return (
    <>
      {/* pencere sağ üstteki bıçak üzerindeki sahte yazıyı dışarıda bırakır */}
      <Kamera gorsel="tam/33" pencere={kameraYolu(t, s.sure, [60, 110, 1440], [110, 150, 1340])}>
        <Etiket t={t} bas={K(1, "DASH eating")} capa={[640, 470]} konum={[420, 260]} metin="DASH EATING PATTERN" renk={RENK.yesil} boyut={26} />
      </Kamera>
      <Panel a={aP} taraf="sag" genislik={720} />
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} />}
      <BaslikBlok t={t} bas={K(0, "DASH-Sodium")} satirlar={b.satirlar} x={1860} y={250} boyut={92} hiza="sag" />
      <Not t={t} bas={K(0, "412")} metin="412 ADULTS · CONTROLLED DIETS" x={1860} y={440} hiza="sag" boyut={30} agirlik={800} renk={RENK.altin} />
      <VurguRozet t={t} bas={K(1, "11.5")} vurgu={b.vurgu ?? ""} not={b.not} x={1590} y={540} genislik={460} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(1, "compared")} metin="vs. a typical high-sodium diet" x={1860} y={800} hiza="sag" boyut={34} />
    </>
  );
};
export default S33;
