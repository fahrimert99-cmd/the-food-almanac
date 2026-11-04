// Sahne 46 — çiğ sebze kötü değil
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, ilerle, eout, sol, kameraYolu, kelimeZamani, kagit } from "../kutuphane";

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kutu = (bas: number, bitis: number) => (
    <div style={{ position: "absolute", left: 1330, top: 100, width: 550, height: 270, borderRadius: 24, background: kagit(0.92),
      opacity: eout(ilerle(t, bas, 0.5)) * sol(t, bitis) }} />
  );
  return (
    <>
      <Kamera gorsel="tam/46" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 50, 1780])} />
      <Etiket t={t} bas={K(0, "raw")} bitis={8.2} capa={[600, 430]} konum={[960, 150]} metin="RAW VEGETABLES" renk={RENK.yesil} boyut={28} />
      <Baslik t={t} bas={K(0, "bad")} bitis={4.5} metin="NOT A BAD CHOICE" x={70} y={110} boyut={80} renk={RENK.lacivert} />
      {kutu(K(1, "NIH"), 8.2)}
      <Not t={t} bas={K(1, "NIH")} bitis={8.2} metin="THE NIH:" x={1860} y={125} hiza="sag" boyut={32} agirlik={800} renk={RENK.altin} />
      <Baslik t={t} bas={K(1, "vitamin")} bitis={8.2} metin="VITAMIN C" x={1860} y={205} boyut={88} renk={RENK.koyuYesil} hiza="sag" />
      <Not t={t} bas={K(1, "usually")} bitis={8.2} metin="OFTEN EATEN RAW" x={1860} y={290} hiza="sag" boyut={32} agirlik={800} />
      {kutu(K(2, "raw"), 1e9)}
      <Baslik t={t} bas={K(2, "raw")} metin="RAW + COOKED" x={1860} y={150} boyut={84} renk={RENK.lacivert} hiza="sag" />
      <Not t={t} bas={K(2, "evidence")} metin="FITS THE EVIDENCE WELL" x={1860} y={250} hiza="sag" boyut={30} agirlik={800} />
      <Etiket t={t} bas={K(2, "raw")} capa={[600, 430]} konum={[960, 150]} metin="RAW" renk={RENK.yesil} boyut={28} />
      <Etiket t={t} bas={K(2, "cooked")} capa={[1560, 520]} konum={[1700, 450]} metin="COOKED" renk={RENK.mercan} boyut={28} />
    </>
  );
};
export default S46;
