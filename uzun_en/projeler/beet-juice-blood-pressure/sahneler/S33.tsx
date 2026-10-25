// Sahne 33 — ağız bakterileri nitratı nitrite çevirir; antibakteriyel gargara bunu azaltır.
import React from "react";
import { AdimAkisi, BaslikBlok, Etiket, Ikon, Kamera, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBakteri = K(0, "Bacteria"), tNitrat = K(0, "nitrate"), tNitrit = K(0, "nitrite.");
  const tGarg = K(1, "Antibacterial"), tSoru = K(2, "pathway?");
  const pPanel = eout(ilerle(t, 0.2, 0.6));
  return (
    <>
      <Kamera gorsel="tam/33" pencere={kameraYolu(t, s.sure, [0, 40, 1800], [50, 70, 1680])}>
        <Etiket t={t} bas={tGarg + 0.2} bitis={tSoru - 0.2} capa={[300, 430]} konum={[700, 215]} metin="MOUTHWASH" renk={RENK.mercan} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={1000} />
      {/* nitrat -> nitrit akışı (cümle 0) */}
      <AdimAkisi t={t} x={1360} y={300} boyut={36} numarali={false} adimlar={[
        { bas: tNitrat, metin: "NITRATE", renk: RENK.altin },
        { bas: tNitrit, metin: "NITRITE", renk: RENK.yesil },
      ]} />
      <BaslikBlok t={t} bas={tBakteri} satirlar={["MOUTH", "BACTERIA"]} x={1860} y={520} boyut={96} hiza="sag" bitis={tGarg - 0.1}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      {/* gargara başlığı (cümle 1) */}
      <BaslikBlok t={t} bas={tGarg} satirlar={["MOUTHWASH", "VS BACTERIA"]} x={1860} y={520} boyut={96} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Ikon t={t} bas={tSoru} ad="soru" x={1560} y={820} boyut={110} zemin={RENK.altin} />
    </>
  );
};

export default S33;
