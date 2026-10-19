// Sahne 24 — deney düzeneği: raf üstünde brokoli, kâse, tencere, süzgeç, poşet.
import React from "react";
import { AltSis, Baslik, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const yama = (x: number, y: number, w: number, h: number) => (
  <div style={{ position: "absolute", left: x, top: y, width: w, height: h,
    background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 60%, ${kagit(0)} 100%)` }} />
);

const S24: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFridge = K(0, "fridge"), tFroze = K(0, "froze"), tCooked = K(0, "cooked"), tVitC = K(1, "vitamin"), tSulf = K(1, "sulforaphane"), tPlant = K(1, "a plant");
  const bit0 = K(1, "measured") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/24" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [90, 60, 1740])}>
        {/* alt imza kalıntıları kâğıt yamayla örtülür */}
        {yama(60, 845, 360, 110)}
        {yama(1280, 845, 600, 110)}
      </Kamera>
      <AltSis a={0.4} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <Etiket t={t} bas={tFridge} bitis={bit0} capa={[330, 520]} konum={[300, 290]} metin="FRIDGE" renk={RENK.mercan} />
      <Etiket t={t} bas={tFroze} bitis={bit0} capa={[1590, 500]} konum={[1590, 290]} metin="FROZEN" renk={RENK.yesil} />
      <Etiket t={t} bas={tCooked} bitis={bit0} capa={[1060, 560]} konum={[1000, 300]} metin="5 COOKING WAYS" renk={RENK.altin} />
      <Baslik t={t} bas={tVitC} metin="VITAMIN C" x={960} y={200} boyut={96} renk={RENK.koyuYesil} hiza="orta" />
      <Baslik t={t} bas={tSulf} metin="SULFORAPHANE" x={960} y={320} boyut={96} renk={RENK.lacivert} hiza="orta" />
      <Not t={t} bas={tPlant} metin="a plant compound found in broccoli" x={960} y={420} hiza="orta" boyut={36} agirlik={800} />
    </>
  );
};

export default S24;
