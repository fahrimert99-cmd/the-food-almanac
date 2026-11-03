// Sahne 63 — kapanış uyarısı: tarçın ilacın yerini tutmaz.
import React from "react";
import { AltSis, Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S63: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const cikis = c[1].bas - 0.25;
  return (
    <>
      <Kamera gorsel="tam/63" pencere={kameraYolu(t, s.sure, [10, 0, 1900], [90, 50, 1740])}>
        {/* hap kutusu kapağındaki anlamsız işaretler örtülür */}
        <div style={{ position: "absolute", left: 1050, top: 395, width: 310, height: 150,
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, #EEE5AE 0%, #EEE5AE 60%, rgba(238,229,174,0) 100%)" }} />
        <Etiket t={t} bas={K(1, "flavor")} capa={[580, 520]} konum={[250, 400]} metin="FLAVOR" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "doctor")} capa={[990, 850]} konum={[600, 905]} metin="DOCTOR" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(1, "supplements")} capa={[1190, 460]} konum={[1520, 300]} metin="SUPPLEMENTS" renk={RENK.mercan} />
      </Kamera>
      <AltSis a={0.5} />
      <Baslik t={t} bas={K(0, "never a substitute")} bitis={cikis} metin="NOT A SUBSTITUTE" x={1830} y={190} boyut={84} hiza="sag" renk={RENK.mercan} />
      <Baslik t={t} bas={K(0, "diabetes medication")} bitis={cikis} metin="FOR MEDICATION" x={1830} y={290} boyut={84} hiza="sag" renk={RENK.lacivert} />
    </>
  );
};

export default S63;
