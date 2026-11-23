// Sahne 55 — geç başlamak fayda yok; kısa süreli ağır stres istisnası (kabaca yarıya).
import React from "react";
import { Baslik, Etiket, Hap, INTER, Kamera, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tIst = K(1, "exception"), tSon = K(1, "soldiers,") ;
  const panel = eout(ilerle(t, 0.1, 0.5)) * (1 - eout(ilerle(t, 8.4, 0.5)));
  const [sc, al] = pop(t, K(1, "soldiers,") + 0.25, 0.5);
  return (
    <>
      <Kamera gorsel="tam/55" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 50, 1760])} />
      <Panel a={panel} taraf="sol" genislik={860} />
      <Baslik t={t} bas={K(0, "no")} bitis={tIst - 0.2} metin="NO CONSISTENT" x={70} y={300} boyut={104} renk={RENK.mercan} />
      <Baslik t={t} bas={K(0, "benefit.")} bitis={tIst - 0.2} metin="BENEFIT" x={70} y={410} boyut={104} renk={RENK.mercan} />
      <Not t={t} bas={0.6} bitis={tIst - 0.2} metin="Starting after symptoms began" x={74} y={500} boyut={34} />
      <Baslik t={t} bas={tIst} bitis={8.4} metin="THE EXCEPTION" x={70} y={300} boyut={104} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(1, "brief,")} bitis={8.4} metin="BRIEF, HEAVY" x={70} y={410} boyut={76} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "physical")} bitis={8.4} metin="PHYSICAL STRESS" x={70} y={490} boyut={76} renk={RENK.lacivert} />
      <Etiket t={t} bas={K(1, "marathon")} capa={[690, 840]} konum={[400, 920]} metin="MARATHON RUNNERS" renk={RENK.altin} />
      <Etiket t={t} bas={K(1, "skiers")} capa={[1440, 300]} konum={[1050, 130]} metin="SKIERS" renk={RENK.altin} />
      <div style={{ position: "absolute", left: 300, top: 700, transform: `translate(-50%,0) scale(${sc})`, opacity: al }}>
        <Hap metin="SOLDIERS" renk={RENK.altin} />
      </div>
      <VurguRozet t={t} bas={K(1, "roughly")} vurgu="≈ HALF" not="FEWER COLDS" x={300} y={150} genislik={380} renk={RENK.koyuYesil} />
    </>
  );
};

export default S55;
