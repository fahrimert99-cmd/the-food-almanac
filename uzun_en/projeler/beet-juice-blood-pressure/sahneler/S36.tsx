// Sahne 36 — Bondonno 2015: çapraz geçişli çalışma, 3 gün gargara sonrası sistolik +2.3.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Liste, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t15 = K(0, "15"), tYas = K(0, "average"), tCapraz = K(0, "crossover");
  const tGarg = K(1, "antibacterial"), tTuk = K(1, "salivary"), t23 = K(1, "2.3"), tSu = K(1, "water.");
  const tGec = K(1, "After") - 0.25;
  const pPanel = eout(ilerle(t, 0.3, 0.6));
  return (
    <>
      <Kamera gorsel="tam/36" pencere={kameraYolu(t, s.sure, [0, 40, 1800], [40, 60, 1700])}>
        <Etiket t={t} bas={tGarg} capa={[690, 650]} konum={[790, 900]} metin="MOUTHWASH" renk={RENK.mercan} />
        <Etiket t={t} bas={tSu} capa={[350, 700]} konum={[330, 900]} metin="WATER" renk={RENK.lacivert} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={960} />
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} />}
      {/* cümle 0: katılımcılar */}
      <Baslik t={t} bas={tCapraz} metin="CROSSOVER TRIAL" x={1430} y={170} boyut={74} renk={RENK.lacivert} hiza="orta" bitis={tGec} />
      <VurguRozet t={t} bas={t15 - 0.1} vurgu="15" not="ADULTS WITH TREATED HIGH BLOOD PRESSURE" x={1430} y={300} genislik={640} renk={RENK.altin} bitis={tGec} />
      <Not t={t} bas={tYas} metin="AVERAGE AGE 65" x={1430} y={540} hiza="orta" boyut={40} agirlik={800} bitis={tGec} />
      {/* cümle 1: sonuç */}
      <Liste t={t} x={1030} y={190} isaret="nokta" boyut={36} genislik={800} ogeler={[
        { bas: tTuk, metin: "SALIVARY NITRITE: LOWER", renk: RENK.altin },
      ]} />
      <Baslik t={t} bas={t23} metin="+2.3" x={1860} y={370} boyut={210} renk={RENK.mercan} hiza="sag" />
      <Baslik t={t} bas={t23 + 0.15} metin="SYSTOLIC POINTS" x={1860} y={600} boyut={72} renk={RENK.lacivert} hiza="sag" />
      <Not t={t} bas={tSu - 0.6} metin="HIGHER THAN AFTER WATER" x={1860} y={710} hiza="sag" boyut={38} agirlik={800} />
    </>
  );
};

export default S36;
