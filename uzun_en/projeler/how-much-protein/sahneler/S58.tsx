// Sahne 58 — danışma masası: böbrek hastalığı istisnası ve "önce sorun".
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, Panel, RENK, SP, Baslik, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S58: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pPanel = 1;  // defter kusuru ilk karede de örtülü
  const tAsk = K(1, "ask") - 0.1;
  return (
    <>
      {/* defterin kusurlu kapağı: sol kenar kırpılır, kalan kısım panelle örtülür */}
      <Kamera gorsel="tam/58" pencere={kameraYolu(t, s.sure, [580, 40, 1340], [600, 60, 1300])}>
        <Etiket t={t} bas={K(1, "doctor")} capa={[1290, 560]} konum={[1620, 520]} metin="YOUR DOCTOR" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "dietitian")} capa={[1340, 260]} konum={[1560, 440]} metin="DIETITIAN" renk={RENK.yesil} />
      </Kamera>
      <Panel a={pPanel} taraf="sol" genislik={760} />
      <BaslikBlok t={t} bas={K(0, "advanced")} bitis={tAsk} satirlar={["ADVANCED", "KIDNEY", "DISEASE"]} x={70} y={300} boyut={84}
        renkler={[RENK.lacivert, RENK.lacivert, RENK.mercan]} />
      <Not t={t} bas={K(0, "target")} bitis={tAsk} metin="The target may be lower" x={74} y={640} boyut={34} genislik={480} />
      <BaslikBlok t={t} bas={K(1, "ask")} satirlar={["ASK", "FIRST"]} x={70} y={360} boyut={110}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={K(1, "doctor")} metin="Your doctor or a registered dietitian" x={74} y={650} boyut={34} genislik={480} />
    </>
  );
};

export default S58;
