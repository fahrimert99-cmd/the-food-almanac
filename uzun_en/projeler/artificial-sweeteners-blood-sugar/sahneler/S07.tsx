// Sahne 7 — nerede bulunur; sonra dil–kan karşılaştırması (görsel soluk zeminde).
import React from "react";
import { AbsoluteFill, Baslik, Etiket, Ikon, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOrtu = K(1, "your") - 0.2;
  const pOrtu = eout(ilerle(t, tOrtu, 0.6));
  const cikis = tOrtu;
  const tGl = K(2, "glucose");
  return (
    <>
      <Kamera gorsel="tam/07" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780])}>
        {/* sakız ambalajındaki anlamsız yazı örtülür */}
        <div style={{ position: "absolute", left: 262, top: 775, width: 220, height: 90, borderRadius: 30, background: "#DC9672",
          transform: "rotate(13deg)" }} />
        <Etiket t={t} bas={K(0, "diet")} bitis={cikis} capa={[500, 330]} konum={[250, 140]} metin="DIET SODA" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "sugar-free")} bitis={cikis} capa={[330, 830]} konum={[300, 930]} metin="SUGAR-FREE GUM" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "yogurts")} bitis={cikis} capa={[920, 700]} konum={[800, 880]} metin="YOGURT" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "packets")} bitis={cikis} capa={[1400, 680]} konum={[1560, 880]} metin="PACKETS" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "coffee")} bitis={cikis} capa={[1100, 420]} konum={[1500, 190]} metin="COFFEE POT" renk={RENK.lacivert} />
      </Kamera>
      <AbsoluteFill style={{ backgroundColor: RENK.kagit, opacity: 0.93 * pOrtu }} />
      {pOrtu > 0 && (
        <>
          <Baslik t={t} bas={K(1, "tongue")} metin="YOUR TONGUE" x={480} y={330} boyut={92} hiza="orta" renk={RENK.lacivert} />
          <Baslik t={t} bas={K(1, "sugar.")} metin="SAYS SUGAR" x={480} y={450} boyut={92} hiza="orta" renk={RENK.altin} />
          <Ikon t={t} bas={K(1, "sugar.") + 0.3} ad="onay" x={480} y={640} boyut={130} zemin={RENK.altin} />
          <div style={{ position: "absolute", left: 958, top: 280, width: 4, height: 460, background: RENK.lacivert, opacity: 0.25 * eout(ilerle(t, tOrtu + 0.4, 0.5)) }} />
          <Baslik t={t} bas={K(2, "they")} metin="NO GLUCOSE" x={1440} y={330} boyut={92} hiza="orta" renk={RENK.mercan} />
          <Baslik t={t} bas={tGl + 0.1} metin="IN YOUR BLOOD" x={1440} y={450} boyut={92} hiza="orta" renk={RENK.lacivert} />
          <Ikon t={t} bas={tGl + 0.5} ad="carpi" x={1440} y={640} boyut={130} zemin={RENK.mercan} />
        </>
      )}
    </>
  );
};

export default S07;
