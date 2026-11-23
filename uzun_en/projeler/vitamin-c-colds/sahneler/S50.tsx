// Sahne 50 — madde 3: mütevazı kazanç, –%8, günde 2.000 mg altı.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, ANTON } from "../kutuphane";

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sn, an] = pop(t, 0.05, 0.5);
  return (
    <>
      <Kamera gorsel="tam/50" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1760])}>
        <Etiket t={t} bas={K(1, "daily supplement")} capa={[960, 570]} konum={[640, 880]} metin="DAILY SUPPLEMENT" renk={RENK.lacivert} />
      </Kamera>
      <div style={{ position: "absolute", left: 80, top: 70, width: 100, height: 100, borderRadius: "50%", background: RENK.altin,
        color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 64,
        opacity: an, transform: `scale(${sn})`, boxShadow: "0 8px 22px rgba(48,40,34,0.2)" }}>3</div>
      <Baslik t={t} bas={K(1, "modest gain")} bitis={K(1, "stay under") - 0.1} metin="MODEST GAIN" x={210} y={125} boyut={96} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(1, "eight percent")} vurgu="–8%" not="shorter colds" x={340} y={225} genislik={380} renk={RENK.yesil} />
      <VurguRozet t={t} bas={K(1, "2,000")} vurgu="<2,000 MG" not="a day, food + supplements" x={880} y={60} genislik={540} boyut={84} renk={RENK.mercan} />
    </>
  );
};

export default S50;
