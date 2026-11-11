// Sahne 9 — doymuş yağ → LDL; doymamış yağla takas LDL'yi düşürür.
import React from "react";
import { AdimAkisi, AltSis, Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDoy = K(1, "saturated"), tLdl = K(1, "LDL,"), tDuvar = K(1, "walls"), tTakas = K(2, "Swapping");
  return (
    <>
      <Kamera gorsel="tam/09" pencere={kameraYolu(t, s.sure, [0, 80, 1920], [110, 150, 1700])}>
        <Etiket t={t} bas={tDoy - 0.05} capa={[1500, 640]} konum={[1560, 880]} metin="SATURATED FAT" renk={RENK.altin} boyut={28} />
        <Etiket t={t} bas={tLdl - 0.05} capa={[760, 670]} konum={[640, 860]} metin="LDL PARTICLES" renk={RENK.mercan} boyut={28} />
        <Etiket t={t} bas={tDuvar - 0.05} capa={[620, 500]} konum={[760, 360]} metin="ARTERY WALLS" renk={RENK.koyuYesil} boyut={28} />
      </Kamera>
      <AltSis a={0.6} yukseklik={150} />
      <Baslik t={t} bas={K(0, "matter") - 0.1} bitis={tTakas - 0.1} metin="SATURATED FAT → LDL" x={960} y={170} boyut={110}
        renk={RENK.koyuYesil} hiza="orta" />
      <AdimAkisi t={t} x={960} y={170} boyut={38} numarali={false} adimlar={[
        { bas: tTakas + 0.3, metin: "SATURATED", renk: RENK.mercan },
        { bas: K(2, "unsaturated"), metin: "UNSATURATED FAT", renk: RENK.yesil },
        { bas: K(2, "lowers"), metin: "LOWER LDL", renk: RENK.koyuYesil },
      ]} />
    </>
  );
};

export default S09;
