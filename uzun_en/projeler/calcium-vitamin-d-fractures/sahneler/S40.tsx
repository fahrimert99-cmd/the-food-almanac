// Sahne 40 — böbrek taşı uyarısı: masa üstünde kavanoz + steteskop, sağda başlık.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTas = K(0, "kidney"), tHap = K(1, "supplement"), tSor = K(2, "ask"), tOnce = K(2, "before"), tDok = K(2, "doctor");
  const [sc, al] = pop(t, tTas, 0.5);
  return (
    <>
      <Kamera gorsel="tam/40" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [60, 60, 1800])}>
        <Etiket t={t} bas={tHap} capa={[800, 330]} konum={[1500, 700]} metin="SUPPLEMENT PILLS" renk={RENK.mercan} />
        <Etiket t={t} bas={tDok} capa={[430, 540]} konum={[600, 880]} metin="YOUR DOCTOR" renk={RENK.koyuYesil} />
      </Kamera>
      <div style={{ position: "absolute", left: 1500, top: 190, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
        <Hap metin="KIDNEY STONES" renk={RENK.altin} boyut={34} />
      </div>
      <BaslikBlok t={t} bas={tSor} satirlar={["ASK FIRST", "IF STONES"]} x={1860} y={310} boyut={104} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Not t={t} bas={tOnce} metin="before adding calcium pills" x={1860} y={470} hiza="sag" genislik={520} boyut={36} />
    </>
  );
};

export default S40;
