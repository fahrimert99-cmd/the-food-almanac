// Sahne 26 — allicin ve alil sülfür bileşikleri (sol panel, geniş kamera).
import React from "react";
import { AltSis, Baslik, Etiket, Hap, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTog = K(0, "Together"), tAll = K(0, "allicin,"), tFam = K(0, "first of a family"), tAllyl = K(0, "allyl sulfur");
  const tRes = K(0, "researchers think");
  const pPanel = eout(ilerle(t, 0.1, 0.6));
  const hap = (bas: number, metin: string, renk: string, y: number) => {
    const [sc, al] = pop(t, bas, 0.5);
    return <div style={{ position: "absolute", left: 80, top: y, transformOrigin: "0 50%", transform: `scale(${sc})`, opacity: al }}><Hap metin={metin} renk={renk} boyut={32} /></div>;
  };
  return (
    <>
      <Kamera gorsel="tam/26" pencere={kameraYolu(t, s.sure, [330, 0, 1560], [400, 40, 1480])}>
        <Etiket t={t} bas={tTog} bitis={tAll + 1.2} capa={[1010, 600]} konum={[1330, 740]} metin="ALLIINASE + ALLIIN" renk={RENK.mercan} boyut={30} />
      </Kamera>
      <AltSis a={0.6} yukseklik={130} />
      <Panel a={pPanel} taraf="sol" genislik={900} />
      <Baslik t={t} bas={tAll} metin="ALLICIN" x={76} y={250} boyut={150} renk={RENK.koyuYesil} />
      {hap(tFam, "FIRST OF A FAMILY", RENK.altin, 380)}
      {hap(tAllyl, "ALLYL SULFUR COMPOUNDS", RENK.yesil, 470)}
      <Not t={t} bas={tRes} metin="Researchers think they drive much of garlic's activity." x={80} y={580} genislik={640} boyut={36} />
    </>
  );
};

export default S26;
