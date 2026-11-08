// Sahne 30 — yedi gönüllü: umut verici ipucu, söz değil.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tYedi = K(0, "Seven"), tKucuk = K(0, "small"), tIpucu = K(0, "promising"), tSoz = K(0, "not a promise");
  const tOtesi = K(1, "beyond"), tPratik = K(2, "practical");
  return (
    <>
      <Kamera gorsel="tam/30" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 15, 1860])}>
        <Etiket t={t} bas={tOtesi} bitis={tPratik - 0.3} capa={[640, 590]} konum={[330, 480]} metin="BEYOND THE MEAL" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={tPratik} capa={[1500, 690]} konum={[1560, 470]} metin="PRACTICAL PART" renk={RENK.altin} />
      </Kamera>
      <VurguRozet t={t} bas={tYedi} bitis={tIpucu - 0.2} vurgu="7" not="HEALTHY VOLUNTEERS" x={1560} y={130} genislik={400} />
      <Not t={t} bas={tKucuk} bitis={tIpucu - 0.2} metin="A VERY SMALL STUDY" x={1560} y={360} boyut={34} hiza="orta" agirlik={800} />
      <BaslikBlok t={t} bas={tIpucu} bitis={tOtesi - 0.3} satirlar={["PROMISING CLUE,", "NOT A PROMISE"]} x={1290} y={190} boyut={84}
        renkler={[RENK.koyuYesil, RENK.mercan]} adim={tSoz - tIpucu} />
    </>
  );
};

export default S30;
