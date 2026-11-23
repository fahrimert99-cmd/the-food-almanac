// Sahne 35 — dozlar farklı: bir fincan suyu ≈80–125 mg, çalışma dozlarının altında; kanıt yok.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tCik = c[2].bas - 0.1;
  return (
    <>
      <Kamera gorsel="tam/35" pencere={kameraYolu(t, s.sure, [30, 10, 1860], [90, 50, 1740])}>
        <Etiket t={t} bas={K(1, "juice")} bitis={tCik} capa={[740, 440]} konum={[330, 150]} metin="CUP OF JUICE" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "doses")} bitis={tCik} capa={[1175, 700]} konum={[1560, 870]} metin="DOSES IN THE REVIEW" renk={RENK.lacivert} />
      </Kamera>
      <VurguRozet t={t} bas={K(1, "80 to 125")} bitis={tCik} vurgu="80–125 MG" not="PER CUP OF JUICE" x={1560} y={150} genislik={440} boyut={84} />
      <Baslik t={t} bas={K(2, "doesn't")} bitis={c[3].bas - 0.1} metin="DOESN'T PROVE IT FAILS" x={960} y={85} boyut={64} hiza="orta" renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(3, "evidence")} metin="THE EVIDENCE ISN'T THERE" x={960} y={85} boyut={64} hiza="orta" renk={RENK.lacivert} />
    </>
  );
};

export default S35;
