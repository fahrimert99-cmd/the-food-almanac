// Sahne 60 — ilaç uyarısı ve kapanış: iki-üç fincan.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, Liste, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S60: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tVar = K(0, "warfarin,");
  const tNad = K(0, "nadolol");
  const tAto = K(0, "atorvastatin,");
  const tDoktor = K(0, "check");
  const tCogu = K(1, "most people");
  const tFincan = K(1, "couple of cups");
  const tLdl = K(1, "small bonus");
  const tSon = tCogu - 0.15;
  return (
    <>
      <Kamera gorsel="tam/60" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [200, 90, 1640])} />
      <Panel a={eout(ilerle(t, 0.1, 0.6))} taraf="sag" genislik={760} opak={0.97} />
      <Baslik t={t} bas={0.2} metin="TAKING MEDICINES?" x={1860} y={170} boyut={84} hiza="sag" renk={RENK.lacivert} bitis={tSon} />
      <Liste t={t} x={1250} y={290} aralik={100} boyut={42} isaret="nokta" genislik={560}
        ogeler={[
          { bas: tVar, metin: "WARFARIN", renk: RENK.altin, bitis: tSon },
          { bas: tNad, metin: "NADOLOL", renk: RENK.altin, bitis: tSon },
          { bas: tAto, metin: "ATORVASTATIN", renk: RENK.altin, bitis: tSon },
        ]} />
      <Ikon t={t} bas={tDoktor} ad="saat" x={1270} y={700} boyut={84} zemin={RENK.lacivert} bitis={tSon} />
      <Not t={t} bas={tDoktor + 0.1} metin="CHECK WITH YOUR DOCTOR OR PHARMACIST" x={1340} y={650} boyut={32} agirlik={800} genislik={520} bitis={tSon} />
      <Baslik t={t} bas={tCogu} metin="A COUPLE OF CUPS A DAY" x={1860} y={170} boyut={72} hiza="sag" renk={RENK.koyuYesil} />
      <Etiket t={t} bas={tFincan} capa={[840, 490]} konum={[560, 700]} metin="PLEASANT HABIT" renk={RENK.yesil} />
      <VurguRozet t={t} bas={tLdl} vurgu="SMALL BONUS" not="POSSIBLE · FOR LDL" x={1540} y={340} genislik={500} boyut={76} />
    </>
  );
};

export default S60;
