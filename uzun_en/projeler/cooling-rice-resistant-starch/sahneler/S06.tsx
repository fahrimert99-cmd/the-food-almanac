// Sahne 6 — pişen nişasta şişer ve gevşer; enzimler kolay ulaşır. Sağ alt boş alanda sıralı notlar.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, Parcaciklar, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tEnz = K(1, "easy"), tSicak = K(1, "hot,"), tKan = K(1, "blood");
  const [sc, al] = pop(t, tEnz, 0.5);
  const aE = al * sol(t, tKan - 0.1);
  return (
    <>
      <Kamera gorsel="tam/06" sinirla={false} pencere={kameraYolu(t, s.sure, [0, -75, 1920], [50, -35, 1810])}>
        <Etiket t={t} bas={K(0, "grains")} bitis={c[1].bas - 0.1} capa={[800, 560]} konum={[210, 500]} metin="RICE GRAINS" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "swell")} bitis={tEnz - 0.1} capa={[1480, 350]} konum={[1580, 640]} metin="STARCH GRANULES" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={tSicak} capa={[960, 600]} konum={[285, 800]} metin="HOT, FRESH RICE" renk={RENK.mercan} />
        <Parcaciklar t={t} bas={tKan} kaynak={[900, 520]} hedef={[1560, 780]} adet={16} aralik={0.1} kavis={-160} tohum="s06" />
      </Kamera>
      <Baslik t={t} bas={K(0, "cooked") - 0.1} metin="COOKED" x={70} y={190} boyut={104} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "swell") - 0.1} metin="SWELLS" x={70} y={300} boyut={104} renk={RENK.koyuYesil} />
      {aE > 0 && (
        <div style={{ position: "absolute", left: 1600, top: 650, transform: `translate(-50%, -50%) scale(${sc})`, opacity: aE }}>
          <Hap metin="EASY FOR ENZYMES" renk={RENK.koyuYesil} boyut={32} />
        </div>
      )}
      <Baslik t={t} bas={K(1, "raise") - 0.1} metin="RAISES BLOOD SUGAR" x={1860} y={830} boyut={70} hiza="sag" renk={RENK.mercan} />
    </>
  );
};

export default S06;
