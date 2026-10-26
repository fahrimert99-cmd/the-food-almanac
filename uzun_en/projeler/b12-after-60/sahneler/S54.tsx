// Sahne 54 — güçlendirilmiş gıda ve takviye daha kolay emilir; NIH 50 üstü.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Pil: React.FC<{ t: number; bas: number; metin: string; renk: string; y: number; boyut?: number }> = ({ t, bas, metin, renk, y, boyut = 34 }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", right: 60, top: y, opacity: al, transform: `scale(${sc})`, transformOrigin: "100% 50%" }}>
      <Hap metin={metin} renk={renk} boyut={boyut} />
    </div>
  );
};

const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/54" pencere={kameraYolu(t, s.sure, [40, 22, 1840], [110, 58, 1700])}>
        <Etiket t={t} bas={K(0, "fortified")} capa={[1000, 560]} konum={[1420, 190]} metin="FORTIFIED FOODS" renk={RENK.yesil} />
      </Kamera>
      <Pil t={t} bas={K(0, "supplements")} metin="+ SUPPLEMENTS" renk={RENK.altin} y={250} />
      <BaslikBlok t={t} bas={K(0, "easier")} satirlar={["EASIER", "TO ABSORB"]} x={1860} y={370} boyut={88} hiza="sag" />
      <Pil t={t} bas={K(0, "National")} metin="NIH ADVICE" renk={RENK.altin} y={520} boyut={30} />
      <VurguRozet t={t} bas={K(0, "50")} vurgu="50+" not="GET MOST B12 THIS WAY" x={1715} y={610} genislik={310} boyut={96} />
    </>
  );
};
export default S54;
