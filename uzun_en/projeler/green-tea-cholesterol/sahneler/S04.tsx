// Sahne 4 — kanal tanıtımı ve fincanın içi: sol boşlukta marka, sonra fincan etiketi.
import React from "react";
import { Baslik, Etiket, Kamera, MARKA, RENK, SP, ikiSatir, kameraYolu, kelimeZamani } from "../kutuphane";

const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const satir = ikiSatir(MARKA.ad.toUpperCase(), 10);
  const tFinc = K(1, "in the cup");
  return (
    <>
      <Kamera gorsel="tam/04" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 60, 1740])}>
        <Etiket t={t} bas={tFinc} capa={[1100, 700]} konum={[1560, 380]} metin="WHAT'S IN THE CUP?" renk={RENK.yesil} />
      </Kamera>
      {satir.map((m, i) => (
        <Baslik key={i} t={t} bas={K(0, "Food") - 0.45 + i * 0.2} metin={m} x={70} y={330 + i * 110} boyut={96}
          renk={i === satir.length - 1 ? RENK.koyuYesil : RENK.lacivert} />
      ))}
    </>
  );
};

export default S04;
