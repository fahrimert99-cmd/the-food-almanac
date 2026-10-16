// Sahne 6 — tansiyon nedir: sistolik / diyastolik, sağ panelde.
import React from "react";
import { Baslik, Etiket, Kamera, Not, Panel, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pPanel = eout(ilerle(t, 0.1, 0.7));
  const tIki = K(1, "two numbers");
  const tSis = K(2, "Systolic");
  const tDia = K(3, "Diastolic");
  return (
    <>
      <Kamera gorsel="tam/06" pencere={kameraYolu(t, s.sure, [300, 0, 1480], [330, 20, 1400])}>
        {/* alttaki asma kilit karalaması örtülür */}
        <div style={{ position: "absolute", left: 380, top: 700, width: 420, height: 300,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 60%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={K(0, "artery walls")} bitis={tSis - 0.2} capa={[1120, 90]} konum={[560, 120]} metin="ARTERY WALLS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "heart")} capa={[1000, 480]} konum={[560, 700]} metin="HEART" renk={RENK.mercan} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={760} opak={0.97} />
      <Baslik t={t} bas={K(0, "pressure")} metin="BLOOD PRESSURE" x={1860} y={230} boyut={62} hiza="sag" renk={RENK.altin} />
      <Not t={t} bas={tIki} metin="WRITTEN AS TWO NUMBERS" x={1860} y={290} hiza="sag" boyut={30} agirlik={800} />
      <Baslik t={t} bas={tSis} metin="SYSTOLIC" x={1860} y={440} boyut={92} hiza="sag" renk={RENK.mercan} />
      <Not t={t} bas={tSis + 0.5} metin="pressure when the heart beats" x={1860} y={500} hiza="sag" boyut={32} />
      <Baslik t={t} bas={tDia} metin="DIASTOLIC" x={1860} y={650} boyut={92} hiza="sag" renk={RENK.yesil} />
      <Not t={t} bas={tDia + 0.5} metin="pressure between beats" x={1860} y={710} hiza="sag" boyut={32} />
    </>
  );
};

export default S06;
