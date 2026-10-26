// Sahne 34 — saat farkı korumaz: 72 saat, hap ve greyfurt arasında boşluk.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Ikon, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const son0 = K(1, "Either") - 0.15;
  const tAra = K(1, "few hours");
  const tCarpi = K(1, "doesn't");
  const tCit = K(2, "As");
  const [sh, ah] = pop(t, tAra, 0.5);
  const aHap = ah * sol(t, tCit - 0.1);
  return (
    <>
      <Kamera gorsel="tam/34" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1800])}>
        <Etiket t={t} bas={K(1, "pill")} bitis={tCit - 0.1} capa={[258, 740]} konum={[470, 470]} metin="PILL" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "grapefruit")} bitis={tCit - 0.1} capa={[1330, 690]} konum={[1500, 440]} metin="GRAPEFRUIT" renk={RENK.mercan} />
      </Kamera>
      {/* 1. vuruş: 72 saat */}
      <Baslik t={t} bas={K(0, "Some")} bitis={son0} metin="SOME SOURCES DESCRIBE" x={960} y={110} boyut={34} renk={RENK.altin}
        font="inter" aralik={5} hiza="orta" />
      <BaslikBlok t={t} bas={K(0, "up to")} bitis={son0} satirlar={["UP TO", "72 HOURS"]} x={960} y={230} boyut={140} hiza="orta"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Ikon t={t} bas={K(0, "72")} bitis={son0} ad="saat" x={1370} y={380} zemin={RENK.lacivert} />
      {/* 2. vuruş: aradaki saatler korumaz */}
      {aHap > 0 && (
        <div style={{ position: "absolute", left: 780, top: 600, transform: `translate(-50%, -50%) scale(${sh})`, opacity: aHap }}>
          <Hap metin="A FEW HOURS APART" renk={RENK.altin} boyut={30} />
        </div>
      )}
      <Ikon t={t} bas={tCarpi} bitis={tCit - 0.1} ad="carpi" x={780} y={740} zemin={RENK.mercan} />
      {/* 3. vuruş: derlemeden alıntı */}
      <Baslik t={t} bas={tCit} metin="AS THAT REVIEW PUT IT" x={960} y={95} boyut={34} renk={RENK.altin} font="inter" aralik={5} hiza="orta" />
      <Baslik t={t} bas={K(2, "separating")} metin="SEPARATING THE TWO" x={960} y={190} boyut={96} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={K(2, "does not")} metin="DOES NOT PREVENT" x={960} y={298} boyut={96} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={K(2, "interference")} metin="INTERFERENCE" x={960} y={406} boyut={96} renk={RENK.mercan} hiza="orta" />
    </>
  );
};

export default S34;
