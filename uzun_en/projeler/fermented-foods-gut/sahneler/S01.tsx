// Sahne 1 — yoğurt + kefir; sağ panelde 10 hafta / 19 protein.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, Panel, RENK, SP, VurguRozet, einout, eout, ilerle, kameraYolu,
  kelimeZamani } from "../kutuphane";

const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const cikis = c[1].bas - 0.2;
  const pPanel = einout(ilerle(t, c[1].bas - 0.3, 0.9));
  return (
    <>
      <Kamera gorsel="tam/01" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1800])}>
        <Etiket t={t} bas={K(0, "yogurt")} bitis={cikis} capa={[470, 580]} konum={[1250, 600]} metin="YOGURT" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "kefir")} bitis={cikis} capa={[740, 330]} konum={[1250, 330]} metin="KEFIR" renk={RENK.yesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(0, "Stanford")} />
      <Panel a={pPanel} taraf="sag" genislik={820} />
      <Not t={t} bas={K(1, "36")} metin="36 HEALTHY ADULTS" x={1860} y={170} hiza="sag" boyut={36} renk={RENK.altin} agirlik={800} />
      <BaslikBlok t={t} bas={K(1, "ten weeks")} adim={1.4} satirlar={["10 WEEKS", "FERMENTED FOODS"]} x={1860} y={290} boyut={92} hiza="sag" />
      <Not t={t} bas={K(1, "microbiome")} metin="↑ GUT MICROBIOME DIVERSITY" x={1860} y={470} hiza="sag" boyut={36} renk={RENK.koyuYesil} agirlik={800} />
      <VurguRozet t={t} bas={K(1, "19")} vurgu="19" not="inflammatory proteins went down" x={1570} y={590} genislik={520} />
    </>
  );
};

export default S01;
