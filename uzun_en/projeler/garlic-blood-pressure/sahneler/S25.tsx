// Sahne 25 — ezince enzim ve bileşik buluşur (görsel 25 üretilemedi; tam/26 kullanıldı).
import React from "react";
import { AltSis, BaslikBlok, Etiket, Hap, Kamera, Panel, Parcaciklar, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tWhole = K(0, "whole"), tSmell = K(1, "smell"), tCrush = K(1, "crush"), tCell = K(1, "breaks cells");
  const tEnz = K(1, "alliinase"), tAl = K(1, "alliin.");
  const pPanel = eout(ilerle(t, tCrush - 0.2, 0.6));
  const kutu = (bas: number, metin: string, renk: string, y: number, boyut = 34) => {
    const [sc, al] = pop(t, bas, 0.5);
    return <div style={{ position: "absolute", left: 1470, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}><Hap metin={metin} renk={renk} boyut={boyut} /></div>;
  };
  const [sp, ap] = pop(t, tAl + 0.3, 0.4);
  return (
    <>
      <Kamera gorsel="tam/26" pencere={kameraYolu(t, s.sure, [180, 130, 1320], [240, 170, 1250])}>
        <Etiket t={t} bas={tWhole} bitis={tCrush} capa={[640, 560]} konum={[470, 250]} metin="WHOLE CLOVE" renk={RENK.yesil} boyut={30} />
        <Parcaciklar t={t} bas={tSmell} kaynak={[740, 540]} hedef={[760, 330]} boyut={9} yayilma={260} hedefYayilma={260} adet={26} aralik={0.14} omur={1.9} kavis={-120} tohum="aroma" />
      </Kamera>
      <AltSis a={0.6} yukseklik={130} />
      <Panel a={pPanel} taraf="sag" genislik={860} />
      <BaslikBlok t={t} bas={tCrush} satirlar={s.meta.baslik!.satirlar} x={1860} y={190} boyut={100} hiza="sag" />
      {kutu(tCell, "CELLS BREAK OPEN", RENK.altin, 500, 30)}
      {kutu(tEnz, "ALLIINASE (ENZYME)", RENK.mercan, 620)}
      <div style={{ position: "absolute", left: 1470, top: 705, transform: `translate(-50%, -50%) scale(${sp})`, opacity: ap, fontFamily: "Anton", fontSize: 56, color: RENK.altin }}>+</div>
      {kutu(tAl, "ALLIIN", RENK.yesil, 790)}
    </>
  );
};

export default S25;
