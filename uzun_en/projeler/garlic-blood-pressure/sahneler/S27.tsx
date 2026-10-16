// Sahne 27 — ısı ve alliinaz (sıçan çalışması); sağ panelde adım adım özet.
import React from "react";
import { AltSis, BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const m = s.meta;
  const tHeat = K(0, "Heat"), tRat = K(1, "rat study"), tMw = K(1, "microwave"), tOven = K(1, "45 minutes");
  const tWipe = K(1, "wiped out"), tCancer = K(1, "cancer-related"), tLoss = K(2, "loss matched");
  const pPanel = eout(ilerle(t, 0.1, 0.6));
  const hap = (bas: number, metin: string, renk: string, y: number, boyut = 34) => {
    const [sc, al] = pop(t, bas, 0.5);
    return <div style={{ position: "absolute", right: 80, top: y, transformOrigin: "100% 50%", transform: `scale(${sc})`, opacity: al }}><Hap metin={metin} renk={renk} boyut={boyut} /></div>;
  };
  return (
    <>
      <Kamera gorsel="tam/27" pencere={kameraYolu(t, s.sure, [0, 40, 1400], [50, 70, 1330])}>
        <Etiket t={t} bas={tMw - 0.2} bitis={tOven} capa={[120, 520]} konum={[470, 250]} metin="MICROWAVE" renk={RENK.mercan} boyut={30} />
      </Kamera>
      <AltSis a={0.6} yukseklik={130} />
      <Panel a={pPanel} taraf="sag" genislik={800} />
      {m.etiket && <KaynakEtiketi t={t} metin={m.etiket} />}
      <BaslikBlok t={t} bas={tHeat} satirlar={m.baslik!.satirlar} x={1860} y={210} boyut={88} hiza="sag" />
      <Not t={t} bas={tRat} metin={m.baslik!.not!} x={1860} y={360} hiza="sag" boyut={30} genislik={640} />
      {hap(tMw, "60 SEC · MICROWAVE", RENK.mercan, 460)}
      {hap(tOven, "45 MIN · OVEN", RENK.altin, 550)}
      {hap(tWipe, "PROTECTIVE EFFECT LOST", RENK.lacivert, 660)}
      <Not t={t} bas={tCancer} metin="in a cancer-related test" x={1840} y={740} hiza="sag" boyut={28} genislik={600} />
      {hap(tLoss, "SAME LOSS OF ALLIINASE", RENK.yesil, 820)}
    </>
  );
};

export default S27;
