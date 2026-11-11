// Sahne 56 — Önce sor: kan sulandırıcı, diyabet, böbrek hastalığı.
import React from "react";
import { BaslikBlok, Baslik, Etiket, Ikon, Kamera, Liste, RENK, SP, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S56: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAsk = K(0, "ask");
  return (
    <>
      <Kamera gorsel="tam/56" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 22, 1840])}>
        {/* görselin sağ kenarındaki soluk dikey iz örtülür */}
        <div style={{ position: "absolute", left: 1170, top: -100, width: 900, height: 1300,
          background: `linear-gradient(to right, ${kagit(0)} 0%, ${kagit(1)} 10%)` }} />
        <Etiket t={t} bas={K(0, "prunes")} capa={[480, 420]} konum={[480, 190]} metin="DAILY HABIT" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={0.2} metin="ASK FIRST" x={1860} y={230} boyut={104} hiza="sag" renk={RENK.koyuYesil} />
      <Liste t={t} x={1280} y={340} aralik={84} boyut={36} isaret="nokta" genislik={580} ogeler={[
        { bas: K(0, "blood thinner"), metin: "BLOOD THINNER", renk: RENK.altin },
        { bas: K(0, "diabetes"), metin: "DIABETES", renk: RENK.altin },
        { bas: K(0, "kidney"), metin: "KIDNEY DISEASE", renk: RENK.altin },
      ]} />
      <Ikon t={t} bas={tAsk} ad="soru" x={1340} y={690} boyut={80} zemin={RENK.yesil} />
      <BaslikBlok t={t} bas={tAsk} satirlar={["ASK YOUR DOCTOR", "OR PHARMACIST"]} x={1860} y={680} boyut={56} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
    </>
  );
};

export default S56;
