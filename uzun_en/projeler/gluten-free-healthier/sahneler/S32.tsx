// Sahne 32 — üç diyet: 16 g gluten / neredeyse hiç / kontrol proteini. Sağda başlık + hap sırası.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Pop animasyonlu hap (sol kenardan büyür)
const Pil: React.FC<{ t: number; bas: number; x: number; y: number; metin: string; renk: string; boyut?: number }> = ({ t, bas, x, y, metin, renk, boyut = 30 }) => {
  const [sc, al] = pop(t, bas, 0.55);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
      <Hap metin={metin} renk={renk} boyut={boyut} />
    </div>
  );
};

const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kam = kameraYolu(t, s.sure, [0, 20, 1900], [50, 60, 1780]);
  return (
    <>
      <Kamera gorsel="tam/32" pencere={kam}>
        <Etiket t={t} bas={K(0, "gluten a day")} bitis={K(0, "almost no") - 0.1} capa={[330, 540]} konum={[560, 190]} metin="WITH GLUTEN" renk={RENK.altin} />
      </Kamera>
      <Not t={t} bas={K(0, "three diets")} metin="THREE DIETS · A WEEK EACH" x={1330} y={130} boyut={34} agirlik={800} />
      <BaslikBlok t={t} bas={K(0, "16 grams")} satirlar={["16 G OF", "GLUTEN A DAY"]} x={1330} y={290} boyut={88} />
      <Pil t={t} bas={K(0, "almost no")} x={1330} y={560} metin="ALMOST NO GLUTEN" renk={RENK.yesil} />
      <Pil t={t} bas={K(0, "control diet")} x={1330} y={650} metin="CONTROL PROTEIN" renk={RENK.lacivert} />
      <Pil t={t} bas={K(1, "Nobody knew")} x={1330} y={760} metin="NOBODY KNEW WHICH" renk={RENK.altin} />
    </>
  );
};

export default S32;
