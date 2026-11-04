// Sahne 42 — spor: Bacillus cereus hücresi (solda) ve pirinç kasesi (sağda).
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBas = K(1, "tough");
  const [sc, al] = pop(t, K(0, "soil"), 0.5);
  const a = al * sol(t, tBas - 0.2, 0.3);
  return (
    <>
      <Kamera gorsel="tam/42" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [50, 50, 1780])}>
        <Etiket t={t} bas={K(0, "Bacillus")} capa={[690, 700]} konum={[560, 918]} metin="BACILLUS CEREUS" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "spores")} capa={[585, 500]} konum={[720, 110]} metin="SPORE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "cooking")} capa={[1480, 700]} konum={[1560, 870]} metin="COOKED RICE" renk={RENK.yesil} />
      </Kamera>
      {a > 0 && (
        <div style={{ position: "absolute", left: 1000, top: 150, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: a }}>
          <Hap metin="FOUND IN SOIL & MANY FOODS" renk={RENK.altin} boyut={30} />
        </div>
      )}
      <BaslikBlok t={t} bas={tBas} satirlar={["SURVIVES", "COOKING"]} x={1860} y={140} boyut={88} hiza="sag" />
      <Not t={t} bas={tBas + 0.5} metin="Bacillus cereus spores" x={1860} y={300} hiza="sag" boyut={32} genislik={600} />
    </>
  );
};

export default S42;
