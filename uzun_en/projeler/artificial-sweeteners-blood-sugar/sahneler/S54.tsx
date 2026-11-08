// Sahne 54 — Nokta 4: eritritol etiketi; kalp hastalığı / pıhtılaşma durumu.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// belirli anda beliren, kendi konumunda duran hap
const Pop: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string; boyut?: number; sag?: boolean }> = ({
  t, bas, bitis = 1e9, x, y, metin, renk, boyut = 30, sag = false,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(${sag ? "-100%" : "-50%"}, -50%) scale(${sc})`,
      transformOrigin: sag ? "100% 50%" : "50% 50%", opacity: a }}>
      <Hap metin={metin} renk={renk} boyut={boyut} />
    </div>
  );
};

const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tHeart = K(1, "heart"), tClot = K(1, "clotting"), tRead = K(1, "read"), tEry = K(1, "erythritol,");
  const tSF = K(1, "sugar-free"), tLC = K(1, "low-carb"), tAsk = K(2, "Ask");
  return (
    <>
      <Kamera gorsel="tam/54" pencere={kameraYolu(t, s.sure, [0, 10, 1900], [100, 60, 1720])}>
        <Etiket t={t} bas={tEry} capa={[1400, 640]} konum={[1560, 440]} metin="ERYTHRITOL" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={0} metin="POINT 4" x={1860} y={110} boyut={34} renk={RENK.altin} hiza="sag" font="inter" agirlik={800} aralik={6} />
      {/* kalp / pıhtılaşma */}
      <Pop t={t} bas={tHeart} bitis={tRead - 0.1} x={1860} y={200} metin="HEART DISEASE" renk={RENK.mercan} sag />
      <Pop t={t} bas={tClot} bitis={tRead - 0.1} x={1860} y={285} metin="CLOTTING CONDITION" renk={RENK.mercan} sag />
      {/* etiketi oku */}
      <BaslikBlok t={t} bas={tRead} bitis={tAsk - 0.15} satirlar={["READ THE", "INGREDIENT LIST"]} x={1860} y={200} boyut={84} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Pop t={t} bas={tSF} x={290} y={190} metin="SUGAR-FREE" renk={RENK.altin} />
      <Pop t={t} bas={tLC} x={290} y={275} metin="LOW-CARB" renk={RENK.altin} />
      {/* doktora sor */}
      <BaslikBlok t={t} bas={tAsk} satirlar={["ASK YOUR DOCTOR", "OR PHARMACIST"]} x={1860} y={200} boyut={84} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Ikon t={t} bas={K(2, "whether")} ad="soru" x={1130} y={250} zemin={RENK.altin} />
    </>
  );
};
export default S54;
