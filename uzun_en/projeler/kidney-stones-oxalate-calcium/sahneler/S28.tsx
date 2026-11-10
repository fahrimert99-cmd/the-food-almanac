// Sahne 28 — Liebman & Chai 1997 laboratuvar çalışması
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAlone = K(1, "alone");
  return (
    <>
      <Kamera gorsel="tam/28" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 40, 1740])} />
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} />}
      <Baslik t={t} bas={K(0, "1997")} bitis={3.3} metin="1997 LAB STUDY" x={140} y={190} boyut={90} renk={RENK.koyuYesil} />
      <Etiket t={t} bas={K(1, "measured")} bitis={K(1, "alone")} capa={[975, 330]} konum={[1150, 120]} metin="MEASURED DOSE" renk={RENK.altin} />
      <Etiket t={t} bas={K(1, "labeled")} bitis={tAlone} capa={[547, 560]} konum={[470, 250]} metin="LABELED TRACER" renk={RENK.lacivert} />
      <Etiket t={t} bas={tAlone} capa={[1050, 660]} konum={[1000, 800]} metin="OXALATE ALONE" renk={RENK.mercan} />
      <Etiket t={t} bas={K(1, "300")} capa={[1400, 500]} konum={[1520, 850]} metin="+ 300 MG CALCIUM" renk={RENK.yesil} />
    </>
  );
};
export default S28;
