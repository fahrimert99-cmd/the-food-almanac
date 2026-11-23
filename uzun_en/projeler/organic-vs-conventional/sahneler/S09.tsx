// Sahne 9 — 237 çalışma: kitap yığını, sağda panel ve rozetler.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t237 = K(0, "237"), t17 = K(1, "Seventeen"), t223 = K(2, "223");
  const pPanel = eout(ilerle(t, t237 - 0.3, 0.6));
  return (
    <>
      <Kamera gorsel="tam/09" pencere={kameraYolu(t, s.sure, [20, 10, 1860], [90, 50, 1720])}>
        <Etiket t={t} bas={K(0, "pooled")} bitis={t237 + 0.3} capa={[480, 290]} konum={[480, 130]} metin="POOLED" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "nutrients")} capa={[1130, 590]} konum={[1010, 430]} metin="NUTRIENTS" renk={RENK.yesil} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={600} />
      <BaslikBlok t={t} bas={t237} satirlar={["237", "STUDIES"]} x={1860} y={230} boyut={118} hiza="sag" />
      <VurguRozet t={t} bas={t17} vurgu="17" not="FOLLOWED PEOPLE" x={1660} y={455} genislik={360} boyut={96} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={t223} vurgu="223" not="MEASURED FOOD" x={1660} y={675} genislik={360} boyut={96} renk={RENK.altin} />
      <Not t={t} bas={t17 + 0.4} metin="DIETS: ORGANIC OR CONVENTIONAL" x={1860} y={885} hiza="sag" boyut={26} bitis={t223 - 0.1} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
    </>
  );
};

export default S09;
