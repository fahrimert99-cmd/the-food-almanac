// Sahne 13 — koşu bandı laboratuvarı: sağda başlık, %3 rozeti, tartı etiketi.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "mildly"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/13" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800])}>
        <Etiket t={t} bas={K(1, "body")} capa={[330, 790]} konum={[300, 620]} metin="BODY WEIGHT" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "healthy")} satirlar={["HEALTHY", "YOUNG MEN"]} x={1330} y={190} boyut={110} />
      <div style={{ position: "absolute", left: 1330, top: 420, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
        <Hap metin="MILDLY DEHYDRATED" renk={RENK.mercan} boyut={32} />
      </div>
      <VurguRozet t={t} bas={K(1, "3")} vurgu="3%" not="body weight lost to mild dehydration" x={1560} y={540} genislik={480} />
    </>
  );
};

export default S13;
