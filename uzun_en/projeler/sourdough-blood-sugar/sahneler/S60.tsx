// Sahne 60 — karışık sonuçlar: etki mütevazı, kişiden kişiye değişir.
import React from "react";
import { Etiket, Kamera, RENK, SP, VurguRozet, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S60: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const k2 = K(1, "modest");
  return (
    <>
      <Kamera gorsel="tam/60" pencere={kameraYolu(t, s.sure, [20, 10, 1880], [80, 50, 1760])}>
        {/* alttaki sahte sayı kâğıt rengiyle örtülür */}
        <div style={{ position: "absolute", left: 930, top: 965, width: 130, height: 60,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, rgb(253,253,226) 0%, rgb(253,253,226) 55%, rgba(253,253,226,0) 100%)` }} />
        <Etiket t={t} bas={K(0, "no average")} bitis={K(0, "higher") - 0.3} capa={[440, 380]} konum={[440, 110]} metin="NO AVERAGE DIFFERENCE" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "higher response")} bitis={k2 - 0.2} capa={[1400, 440]} konum={[1400, 150]} metin="HIGHER RESPONSE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "varies from")} capa={[993, 800]} konum={[960, 900]} metin="VARIES BY PERSON" renk={RENK.yesil} />
      </Kamera>
      <VurguRozet t={t} bas={k2} vurgu="MODEST" not="THE EFFECT LOOKS SMALL" x={960} y={50} genislik={520} boyut={92} />
    </>
  );
};

export default S60;
