// Sahne 18 — "mütevazı değişiklik": klinik olarak önemsiz; büyük manşetler nereden geldi? Sol boş kâğıtta metin.
import React from "react";
import { BaslikBlok, Baslik, Etiket, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTriv = K(1, "clinically trivial");
  const tBas = K(2, "big headlines");
  return (
    <>
      <Kamera gorsel="tam/18" pencere={kameraYolu(t, s.sure, [0, 80, 1800], [60, 130, 1680])}>
        {/* sağ üstteki el kâğıt rengiyle örtülür */}
        <div style={{ position: "absolute", left: 1040, top: -80, width: 860, height: 560,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, rgba(251,247,221,1) 0%, rgba(251,247,221,1) 86%, rgba(251,247,221,0) 100%)` }} />
        <Etiket t={t} bas={0.9} bitis={6.2} capa={[1020, 650]} konum={[1400, 450]} metin="HONEY" renk={RENK.altin} boyut={26} />
      </Kamera>
      <BaslikBlok t={t} bas={0.1} bitis={tTriv - 0.1} satirlar={["MODEST", "CHANGE"]} x={80} y={250} boyut={112} />
      <BaslikBlok t={t} bas={tTriv} bitis={tBas - 0.15} satirlar={["CLINICALLY", "TRIVIAL"]} x={80} y={250} boyut={104}
        renkler={[RENK.lacivert, RENK.altin]} />
      <Ikon t={t} bas={tBas} ad="soru" x={1350} y={350} zemin={RENK.altin} boyut={96} />
      <Baslik t={t} bas={tBas + 0.15} metin="BIG HEADLINES?" x={1430} y={350} boyut={72} renk={RENK.lacivert} />
    </>
  );
};

export default S18;
