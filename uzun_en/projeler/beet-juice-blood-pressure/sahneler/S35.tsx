// Sahne 35 — gargara sonrası tansiyon yükselişi; kontrolsüz çalışma, kanıt değil ipucu.
import React from "react";
import { Baslik, Etiket, Kamera, Liste, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTansiyon = K(0, "blood"), tYarim = K(0, "half"), tSaat = K(0, "hours.");
  const tPlasebo = K(1, "placebo"), tRand = K(1, "randomization,"), tIpucu = K(1, "clue");
  const tGec = K(1, "This") - 0.2;
  return (
    <>
      <Kamera gorsel="tam/35" pencere={kameraYolu(t, s.sure, [0, 60, 1800], [60, 90, 1700])}>
        <Etiket t={t} bas={tTansiyon} bitis={tGec} capa={[640, 770]} konum={[560, 540]} metin="BLOOD PRESSURE" renk={RENK.mercan} />
      </Kamera>
      {/* cümle 0: yükseliş */}
      <VurguRozet t={t} bas={tYarim - 0.3} vurgu="≈ +2.5" not="POINTS OVER 24 HOURS" x={560} y={110} genislik={520} renk={RENK.mercan} bitis={tGec} />
      {/* cümle 1: sınırlılıklar */}
      <Liste t={t} x={560} y={100} isaret="carpi" boyut={38} aralik={84} genislik={760} ogeler={[
        { bas: tPlasebo - 0.2, metin: "NO PLACEBO GROUP", renk: RENK.mercan },
        { bas: tRand - 0.3, metin: "NO RANDOMIZATION", renk: RENK.mercan },
      ]} />
      <Baslik t={t} bas={tIpucu - 0.1} metin="A CLUE, NOT PROOF" x={800} y={340} boyut={100} renk={RENK.koyuYesil} hiza="orta" />
    </>
  );
};

export default S35;
