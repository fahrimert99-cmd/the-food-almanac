// Sahne 44 — hiperkalemi ve kalp ritmi; muz solda, kalp sağda. Plakaların altındaki sahte yazılar yamayla örtülü.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, KaynakEtiketi, RENK, SP, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Yama: React.FC<{ x: number; y: number; w: number; h: number }> = ({ x, y, w, h }) => (
  <div style={{ position: "absolute", left: x - w / 2, top: y - h / 2, width: w, height: h,
    background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 60%, ${kagit(0)} 100%)` }} />
);

const Sek: React.FC<{ t: number; bas: number; bitis: number; metin: string; renk: string; top: number }> = ({ t, bas, bitis, metin, renk, top }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const c = Math.max(0, Math.min(1, 1 - (t - bitis) / 0.4));
  if (al <= 0 || c <= 0) return null;
  return <div style={{ position: "absolute", left: 140, top, opacity: al * c, transform: `scale(${sc})`, transformOrigin: "0 50%" }}>
    <Hap metin={metin} renk={renk} boyut={34} />
  </div>;
};

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tHiper = K(0, "hyperkalemia"), tKalp = K(0, "heart rhythms"), tNKF = K(1, "kidney disease"), tLimit = K(1, "limit"), tMuz = K(1, "bananas");
  const bit0 = K(1, "National") - 0.1, bit1 = tLimit - 0.15;
  return (
    <>
      <Kamera gorsel="tam/44" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 20, 1820])}>
        <Yama x={460} y={900} w={600} h={130} />
        <Yama x={1420} y={895} w={460} h={130} />
        <Yama x={1890} y={955} w={90} h={60} />
        <Etiket t={t} bas={tKalp} capa={[1500, 450]} konum={[1690, 700]} metin="HEART RHYTHMS" renk={RENK.mercan} boyut={26} />
        <Etiket t={t} bas={tMuz} capa={[230, 560]} konum={[500, 400]} metin="BANANAS" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={tHiper} bitis={bit0} metin="SEVERE HYPERKALEMIA" x={140} y={215} boyut={64} renk={RENK.mercan} />
      <Sek t={t} bas={tNKF} bitis={bit1} metin="KIDNEY DISEASE" renk={RENK.lacivert} top={150} />
      <Sek t={t} bas={tLimit} bitis={1e9} metin="LIMIT HIGH POTASSIUM FOODS" renk={RENK.altin} top={150} />
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} />}
    </>
  );
};

export default S44;
