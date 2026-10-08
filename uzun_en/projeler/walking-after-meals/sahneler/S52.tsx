// Sahne 52 — küçük çalışmalarda yemek sonrası kısa yürüyüşler kan şekerini düşürdü.
import React from "react";
import { Baslik, Etiket, Kamera, Liste, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S52: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTrial = K(0, "small trials"), tFew = K(0, "a few minutes"), tLow = K(0, "lowered blood sugar");
  const tOne = K(0, "one trial"), tBeat = K(0, "they beat"), tRand = K(0, "random time");
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [120, 60, 1700]);
  return (
    <>
      <Kamera gorsel="tam/52" pencere={p}>
        {/* alttaki imza kalıntısı kâğıt rengiyle örtülür */}
        <div style={{ position: "absolute", left: 600, top: 1030, width: 800, height: 50,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 85%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={K(0, "after eating")} bitis={tOne - 0.2} capa={[1280, 520]} konum={[1500, 330]} metin="AFTER EATING" renk={RENK.lacivert} />
      </Kamera>
      <Panel a={eout(ilerle(t, tTrial - 0.3, 0.6))} taraf="sol" genislik={880} />
      <Baslik t={t} bas={tTrial} metin="SMALL TRIALS" x={90} y={200} boyut={110} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={tFew} bitis={tLow - 0.2} vurgu="A FEW – 15 MIN" not="walks after eating" x={400} y={310}
        genislik={620} boyut={92} />
      <Baslik t={t} bas={tLow} metin="LOWER" x={90} y={400} boyut={100} renk={RENK.lacivert} />
      <Baslik t={t} bas={tLow + 0.15} metin="BLOOD SUGAR" x={90} y={510} boyut={100} renk={RENK.koyuYesil} />
      <Not t={t} bas={tLow + 0.4} metin="after meals" x={94} y={590} boyut={36} renk={RENK.gri} />
      <Not t={t} bas={tOne} metin="IN ONE TRIAL" x={94} y={690} boyut={30} renk={RENK.altin} agirlik={800} />
      <Liste t={t} isaret="nokta" boyut={34} x={90} y={745} aralik={80} genislik={760} ogeler={[
        { bas: tBeat, metin: "WALK AFTER EATING", renk: RENK.yesil },
        { bas: tRand, metin: "SAME WALK, RANDOM TIME", renk: RENK.altin },
      ]} />
    </>
  );
};

export default S52;
