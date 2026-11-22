// Sahne 46 — karaciğer dostu beslenme: tam tahıl, meyve, doymamış yağ; şekerli içecek/meyve suyu dışarıda.
import React from "react";
import { Etiket, Hap, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTakas = K(0, "swapping"), tDoy = K(0, "saturated"), tDoymamis = K(0, "unsaturated");
  const tSuyu = K(0, "juices,"), tFruk = K(0, "especially");
  const [sc, al] = pop(t, tTakas + 0.2, 0.55);
  const bit = tDoymamis + 1.3;
  return (
    <>
      <Kamera gorsel="tam/46" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1810])}>
        <Etiket t={t} bas={K(0, "fruits,")} capa={[1120, 440]} konum={[1020, 215]} metin="FRUITS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "whole")} capa={[820, 790]} konum={[1080, 900]} metin="WHOLE GRAINS" renk={RENK.altin} />
        <Etiket t={t} bas={tDoymamis} capa={[420, 700]} konum={[470, 880]} metin="UNSATURATED FATS" renk={RENK.yesil} />
        <Etiket t={t} bas={tSuyu} capa={[1500, 720]} konum={[1560, 890]} metin="SUGARY JUICES" renk={RENK.mercan} />
      </Kamera>
      {/* 3. vuruş: doymuş/trans yağ -> doymamış yağ takası */}
      <div style={{ position: "absolute", left: 700, top: 70, display: "flex", alignItems: "center", gap: 16,
        transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al * (t < bit ? 1 : 0) }}>
        <Hap metin="SATURATED + TRANS" renk={RENK.mercan} boyut={26} />
        <span style={{ fontSize: 40, color: RENK.lacivert, fontWeight: 800 }}>→</span>
        <Hap metin="UNSATURATED" renk={RENK.yesil} boyut={26} />
      </div>
      <Not t={t} bas={tFruk} metin="ESPECIALLY FRUCTOSE" x={1880} y={140} hiza="sag" boyut={34} agirlik={800} renk={RENK.mercan} />
    </>
  );
};
export default S46;
