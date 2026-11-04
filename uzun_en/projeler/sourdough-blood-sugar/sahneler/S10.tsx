// Sahne 10 — prediabetes / tip 2 diyabet: yükseliş daha büyük; biraz daha az yükselten ekmek fikri.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S10: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const bitis1 = c[1].bas - 0.2;
  const [sc, al] = pop(t, K(1, "appealing"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/10" pencere={kameraYolu(t, s.sure, [0, 40, 1800], [260, 120, 1640])}>
        {/* cihazdaki küçük bozuk yazılar */}
        <div style={{ position: "absolute", left: 1270, top: 765, width: 110, height: 40,
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, #3F6F85 0%, #3F6F85 60%, rgba(63,111,133,0) 100%)" }} />
        <div style={{ position: "absolute", left: 1335, top: 590, width: 60, height: 36,
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, #3F6F85 0%, #3F6F85 60%, rgba(63,111,133,0) 100%)" }} />
        <Etiket t={t} bas={K(1, "bread")} capa={[700, 520]} konum={[980, 270]} metin="SOURDOUGH SLICES" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "blood")} capa={[1500, 330]} konum={[1130, 190]} metin="BLOOD SUGAR" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "prediabetes")} bitis={bitis1} satirlar={["PREDIABETES", "TYPE 2 DIABETES"]} x={60} y={170} boyut={72}
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Not t={t} bas={K(0, "bigger")} bitis={bitis1} x={64} y={330} metin="Bigger rise · lasts longer" boyut={36} />
      <div style={{ position: "absolute", left: 64, top: 160, transform: `scale(${sc})`, transformOrigin: "0 0", opacity: al }}>
        <Hap metin="A LITTLE LESS RISE" renk={RENK.yesil} boyut={34} />
      </div>
    </>
  );
};

export default S10;
