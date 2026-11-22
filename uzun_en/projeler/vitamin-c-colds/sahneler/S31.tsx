// Sahne 31 — Cochrane sonucu: yoğun efor; yetişkin+çocuk havuzlanmış, 60+ ayrı sorulamaz.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tVit = K(0, "vitamin C"), tBrief = K(0, "brief,");
  const tAd = K(1, "adults"), tCh = K(1, "children,"), tSo = K(1, "so");
  return (
    <>
      <Kamera gorsel="tam/31" pencere={kameraYolu(t, s.sure, [60, 100, 1700], [110, 125, 1600])}>
        {/* sol: yetişkin / çocuk figürleri */}
        <Etiket t={t} bas={tAd} bitis={tSo} capa={[390, 520]} konum={[215, 330]} metin="ADULTS" renk={RENK.altin} />
        <Etiket t={t} bas={tCh} bitis={tSo} capa={[620, 830]} konum={[215, 820]} metin="CHILDREN" renk={RENK.yesil} />
        <Etiket t={t} bas={tVit} bitis={tBrief - 0.1} capa={[960, 340]} konum={[1250, 175]} metin="VITAMIN C" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "Cochrane")} bitis={tVit - 0.1} metin="COCHRANE CONCLUSION" x={960} y={115} boyut={72}
        renk={RENK.koyuYesil} hiza="orta" />
      <Baslik t={t} bas={tBrief} bitis={c[1].bas - 0.1} metin="BRIEF, SEVERE EXERTION" x={960} y={115} boyut={72}
        renk={RENK.lacivert} hiza="orta" />
      <VurguRozet t={t} bas={K(1, "over 60")} vurgu="OVER 60" not="CAN'T SAY MUCH" x={1640} y={250} genislik={380} boyut={84} />
    </>
  );
};

export default S31;
