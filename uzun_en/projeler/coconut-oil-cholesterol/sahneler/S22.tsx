// Sahne 22 — Khaw 2018: üç yağ, katılımcılar (ort. yaş 60, üçte ikisi kadın, 91 tamamladı).
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Pop animasyonlu hap (kütüphane Hap'ı statik)
const PHap: React.FC<{ t: number; bas: number; metin: string; renk: string; boyut?: number; pos: React.CSSProperties }> = ({ t, bas, metin, renk, boyut = 28, pos }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return <div style={{ position: "absolute", ...pos, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: al }}><Hap metin={metin} renk={renk} boyut={boyut} /></div>;
};

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCoco = K(0, "coconut oil"), tOlive = K(0, "olive oil"), tButter = K(0, "butter"), tAge = K(1, "average age"),
    tWomen = K(1, "two-thirds"), t91 = K(2, "Ninety-one");
  const tAltEtiket = tAge - 0.2;
  return (
    <>
      <Kamera gorsel="tam/22" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 70, 1740])}>
        <Etiket t={t} bas={tCoco} bitis={tAltEtiket} capa={[540, 850]} konum={[860, 560]} metin="COCONUT OIL" renk={RENK.altin} boyut={26} />
        <Etiket t={t} bas={tOlive} bitis={tAltEtiket} capa={[330, 520]} konum={[330, 190]} metin="OLIVE OIL" renk={RENK.yesil} boyut={26} />
        <Etiket t={t} bas={tButter} bitis={tAltEtiket} capa={[880, 820]} konum={[1130, 620]} metin="UNSALTED BUTTER" renk={RENK.mercan} boyut={26} />
      </Kamera>
      <BaslikBlok t={t} bas={tAge} satirlar={s.meta.baslik?.satirlar ?? []} x={1860} y={230} boyut={104} hiza="sag" />
      <PHap t={t} bas={tWomen} metin="TWO-THIRDS WOMEN" renk={RENK.altin} boyut={30} pos={{ right: 60, top: 440 }} />
      <VurguRozet t={t} bas={t91} vurgu="91" not="finished the trial" x={1630} y={560} genislik={400} boyut={92} renk={RENK.koyuYesil} />
    </>
  );
};

export default S22;
