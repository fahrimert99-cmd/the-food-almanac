// Sahne 40 — yine de kaçınmak için sebep değil; güvenlik önemli.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, Not, Panel, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tRice = K(0, "rice,"), tCool = K(1, "cooling"), tBonus = K(1, "harmless"), tSafe = K(1, "safely"), tMat = K(2, "safety");
  const pPanel = eout(ilerle(t, tCool - 0.3, 0.8));
  return (
    <>
      <Kamera gorsel="tam/40" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1800])}>
        <Etiket t={t} bas={tRice} bitis={tCool - 0.2} capa={[790, 520]} konum={[170, 520]} metin="RICE" renk={RENK.altin} />
        {/* alttaki sahte harf kâğıtla örtülür */}
        <div style={{ position: "absolute", left: 880, top: 1030, width: 180, height: 80,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 60%, ${kagit(0)} 100%)` }} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={700} />
      <Baslik t={t} bas={tBonus} metin="HARMLESS" x={1860} y={300} boyut={104} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={tBonus + 0.2} metin="BONUS" x={1860} y={418} boyut={104} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={tSafe - 0.2} metin="IF DONE SAFELY" x={1860} y={520} hiza="sag" boyut={38} agirlik={800} />
      <Ikon t={t} bas={tMat} ad="uyari" x={1790} y={720} boyut={120} zemin={RENK.altin} />
      <Baslik t={t} bas={tMat + 0.15} metin="SAFETY MATTERS" x={1860} y={850} boyut={72} hiza="sag" renk={RENK.mercan} />
    </>
  );
};

export default S40;
