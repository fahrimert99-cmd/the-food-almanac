// Sahne 43 — bir fincandaki kafein miktarı değişir (FDA aralıkları).
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const pen = kameraYolu(t, s.sure, [0, 20, 1920], [50, 50, 1800]);
  return (
    <>
      <Kamera gorsel="tam/43" pencere={pen}>
        {/* kaşığın sapındaki sahte kazıma harfleri kâğıt rengiyle örtülür */}
        <div style={{ position: "absolute", left: 1045, top: 815, width: 330, height: 80, transform: "rotate(35deg)",
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 82%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={K(1, "regular brewed")} capa={[560, 560]} konum={[985, 470]} metin="BREWED COFFEE" renk={RENK.altin} boyut={24} />
        <Etiket t={t} bas={K(1, "decaf")} capa={[1360, 560]} konum={[1700, 320]} metin="DECAF" renk={RENK.yesil} boyut={24} />
      </Kamera>
      <Baslik t={t} bas={K(0, "amount")} bitis={c[1].bas - 0.1} metin="THE AMOUNT VARIES" x={1150} y={120} boyut={96} hiza="orta" renk={RENK.lacivert} />
      <VurguRozet t={t} bas={K(1, "113")} vurgu="113–247 MG" not="12-OZ BREWED COFFEE" x={960} y={60} genislik={400} boyut={92} renk={RENK.altin} />
      <VurguRozet t={t} bas={K(1, "2 to 15")} vurgu="2–15 MG" not="8-OZ DECAF" x={1400} y={90} genislik={340} boyut={92} renk={RENK.yesil} />
    </>
  );
};

export default S43;
