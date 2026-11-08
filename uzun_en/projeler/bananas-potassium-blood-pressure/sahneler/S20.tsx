// Sahne 20 — yüksek tansiyonda düşüş, normal tansiyonda belirgin değişim yok.
import React from "react";
import { BaslikBlok, Hap, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik ?? { satirlar: [], not: "" };
  const tDrop = K(1, "drop"), tThree = K(2, "three trials"), tNo = K(2, "no clear change");
  const [sc, al] = pop(t, tThree, 0.5);
  return (
    <>
      <Kamera gorsel="tam/20" pencere={kameraYolu(t, s.sure, [140, 70, 1700], [220, 100, 1560])} />
      <BaslikBlok t={t} bas={tDrop} satirlar={b.satirlar} x={1010} y={190} boyut={104} renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <div style={{ position: "absolute", left: 1010, top: 395, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
        <Hap metin="NORMAL BP · 3 TRIALS" renk={RENK.altin} boyut={26} />
      </div>
      <Not t={t} bas={tNo} metin="No clear change" x={1016} y={462} boyut={34} renk={RENK.lacivert} agirlik={800} />
    </>
  );
};

export default S20;
