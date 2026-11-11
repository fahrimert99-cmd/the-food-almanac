// Sahne 9 — 2003 çalışması: üç kase = 1/3/6 g; sonra sağ panelde sonuç (açlık glukozu, plasebo).
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBaslik = K(0, "2003");
  const t60 = K(0, "60"), t1 = K(0, "one,"), t3 = K(0, "three"), t6 = K(0, "six"), t40 = K(0, "forty");
  const tSonuc = K(1, "Fasting"), tYuzde = K(1, "18"), tPlasebo = K(1, "placebo");
  const gec = tSonuc - 0.15;
  const pPanel = eout(ilerle(t, tSonuc - 0.2, 0.7));
  return (
    <>
      <Kamera gorsel="tam/09" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 60, 1760])}>
        <Etiket t={t} bas={t1} capa={[393, 600]} konum={[393, 850]} metin="1 G" renk={RENK.altin} />
        <Etiket t={t} bas={t3} capa={[773, 640]} konum={[773, 850]} metin="3 G" renk={RENK.altin} />
        <Etiket t={t} bas={t6} capa={[1040, 450]} konum={[1260, 330]} metin="6 G DAILY" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.1} />
      <BaslikBlok t={t} bas={tBaslik} satirlar={["THE 2003", "TRIAL"]} x={100} y={200} boyut={96}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <VurguRozet t={t} bas={t60} bitis={gec} vurgu="60" not="ADULTS · TYPE 2 DIABETES" x={1650} y={150} genislik={420} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={t40} bitis={gec} vurgu="40" not="DAYS" x={1650} y={430} genislik={420} renk={RENK.altin} />
      <Panel a={pPanel} taraf="sag" genislik={900} opak={0.95} />
      <BaslikBlok t={t} bas={tSonuc} satirlar={["FASTING", "GLUCOSE"]} x={1860} y={200} boyut={84} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <VurguRozet t={t} bas={tYuzde} vurgu="–18 TO –29%" not="IN THE CINNAMON GROUPS" x={1550} y={430} genislik={580} boyut={88} renk={RENK.yesil} />
      <VurguRozet t={t} bas={tPlasebo} vurgu="NO CHANGE" not="PLACEBO GROUPS · NOT SIGNIFICANT" x={1550} y={690} genislik={580} boyut={70} renk={RENK.gri} />
    </>
  );
};

export default S09;
