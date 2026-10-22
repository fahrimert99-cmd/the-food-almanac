// Sahne 51 — alışkanlık 2: paketi kontrol et. Solda görsel, sağda başlık ve kontrol listesi.
import React from "react";
import { ANTON, BaslikBlok, Etiket, Ikon, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S51: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "two"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/51" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1780])}>
        <Etiket t={t} bas={K(3, "sugar")} capa={[700, 450]} konum={[1360, 300]} metin="SUGAR PER SERVING" renk={RENK.mercan} />
      </Kamera>
      <div style={{ position: "absolute", left: 1240, top: 150, width: 100, height: 100, borderRadius: "50%", background: RENK.altin,
        color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 70,
        transform: `scale(${sc})`, opacity: al, border: `4px solid ${RENK.kagitAcik}` }}>2</div>
      <BaslikBlok t={t} bas={K(1, "check")} bitis={4.4} satirlar={["CHECK THE", "PACKAGE"]} x={1860} y={340} boyut={100} hiza="sag" />
      <Liste t={t} x={1250} y={440} aralik={90} boyut={32} isaret="nokta" genislik={620} ogeler={[
        { bas: K(3, "live"), metin: "LIVE AND ACTIVE CULTURES", renk: RENK.koyuYesil },
        { bas: K(4, "date"), metin: "THE DATE", renk: RENK.altin },
      ]} />
      <Ikon t={t} bas={K(4, "date") + 0.2} ad="saat" x={1700} y={622} boyut={80} zemin={RENK.altin} />
    </>
  );
};

export default S51;
