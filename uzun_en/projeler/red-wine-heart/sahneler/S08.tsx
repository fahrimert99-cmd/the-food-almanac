// Sahne 8 — ülkeler, insanlar değil: harita + kadeh, solda panel başlık
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tUlke = K(1, "countries");
  const pPanel = eout(ilerle(t, tUlke - 0.3, 0.7));
  return (
    <>
      <Kamera gorsel="tam/08" pencere={kameraYolu(t, s.sure, [40, 20, 1840], [110, 50, 1720])} />
      <Panel a={pPanel} taraf="sol" genislik={900} />
      <Etiket t={t} bas={K(0, "daily glass")} capa={[1370, 520]} konum={[1640, 160]} metin="DAILY GLASS" renk={RENK.mercan} />
      <BaslikBlok t={t} bas={tUlke} satirlar={["COUNTRIES,", "NOT PEOPLE"]} x={80} y={330} boyut={112} renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={K(1, "one person's")} metin="ONE PERSON'S GLASS?" x={84} y={600} boyut={44} agirlik={800} renk={RENK.mercan} />
    </>
  );
};
export default S08;
