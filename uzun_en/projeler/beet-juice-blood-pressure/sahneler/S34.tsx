// Sahne 34 — Kapil 2013: antiseptik gargara, oral nitrit üretimi yaklaşık %90 düştü.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Liste, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t19 = K(0, "19"), tIki = K(0, "twice"), tYedi = K(0, "seven");
  const tOral = K(1, "oral"), t90 = K(1, "ninety"), tPlazma = K(1, "plasma");
  const tGec = K(1, "Their") - 0.25;
  const pPanel = eout(ilerle(t, 0.3, 0.6));
  return (
    <>
      <Kamera gorsel="tam/34" pencere={kameraYolu(t, s.sure, [0, 40, 1760], [30, 60, 1660])}>
        <Etiket t={t} bas={tOral} capa={[640, 280]} konum={[960, 500]} metin="BACTERIA" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={K(0, "antiseptic") + 0.1} bitis={tGec} capa={[180, 560]} konum={[620, 560]} metin="MOUTHWASH" renk={RENK.mercan} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={1000} />
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} />}
      {/* cümle 0: katılımcılar ve süre */}
      <VurguRozet t={t} bas={t19} vurgu="19" not="HEALTHY YOUNG ADULTS" x={1440} y={180} genislik={440} bitis={tGec} />
      <Liste t={t} x={1130} y={430} isaret="nokta" boyut={38} aralik={84} genislik={700} ogeler={[
        { bas: tIki, metin: "TWICE A DAY", renk: RENK.altin, bitis: tGec },
        { bas: tYedi, metin: "FOR 7 DAYS", renk: RENK.altin, bitis: tGec },
      ]} />
      {/* cümle 1: sonuç */}
      <Baslik t={t} bas={t90} metin="–90%" x={1860} y={290} boyut={190} renk={RENK.mercan} hiza="sag" />
      <Baslik t={t} bas={t90 + 0.15} metin="ORAL NITRITE" x={1860} y={430} boyut={78} renk={RENK.lacivert} hiza="sag" />
      <VurguRozet t={t} bas={tPlazma + 0.2} vurgu="≈ ¼ LOWER" not="NITRITE IN PLASMA" x={1500} y={540} genislik={480} boyut={84} renk={RENK.koyuYesil} />
    </>
  );
};

export default S34;
