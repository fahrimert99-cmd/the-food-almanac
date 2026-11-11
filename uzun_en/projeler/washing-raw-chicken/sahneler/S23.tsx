// Sahne 23 — "Read that again": yıkamamak marulu temiz tutmadı, lavabolar kirlendi. Sağ panelde başlık.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const w = kameraYolu(t, s.sure, [0, 0, 1920], [0, 40, 1780]);
  const tSkip = K(1, "Skipping"), tReg = K(2, "regardless"), tSink = K(2, "kitchen"), tLet = K(1, "lettuce");
  const b1 = tReg - 0.1;
  return (
    <>
      <Kamera gorsel="tam/23" pencere={w}>
        <Etiket t={t} bas={tLet} bitis={tSink - 0.2} capa={[230, 360]} konum={[560, 90]} metin="LETTUCE" renk={RENK.yesil} />
        <Etiket t={t} bas={K(2, "sinks")} capa={[960, 560]} konum={[860, 800]} metin="SINK" renk={RENK.mercan} />
      </Kamera>
      <Panel a={eout(ilerle(t, 0, 0.6))} genislik={900} />
      <BaslikBlok t={t} bas={tSkip} bitis={b1} satirlar={["SKIPPING", "THE RINSE"]} x={1190} y={250} boyut={92} renkler={[RENK.lacivert, RENK.lacivert]} />
      <Not t={t} bas={tLet} bitis={b1} x={1190} y={470} boyut={40} metin="DID NOT KEEP THE LETTUCE CLEAN" genislik={640} renk={RENK.koyuYesil} agirlik={800} />
      <Not t={t} bas={tReg} x={1190} y={190} boyut={30} metin="REGARDLESS OF WASHING" renk={RENK.altin} agirlik={800} />
      <BaslikBlok t={t} bas={tSink} satirlar={s.meta.baslik?.satirlar ?? []} x={1190} y={310} boyut={96} />
      <Not t={t} bas={tSink + 0.5} x={1190} y={540} boyut={34} genislik={640} metin={(s.meta.baslik?.not ?? "").toUpperCase()} renk={RENK.lacivert} />
    </>
  );
};
export default S23;
