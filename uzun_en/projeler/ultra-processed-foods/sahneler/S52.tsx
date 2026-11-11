// Sahne 52 — Hazır gıdaların yeri: zorlanma nedenleri + diyetisyen.
import React from "react";
import { Baslik, Etiket, Hap, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const NEDEN = [["CHEWING", "chewing"], ["COOKING", "cooking"], ["SHOPPING", "shopping"], ["LOW APPETITE", "appetite"]];

const S52: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tHelp = K(1, "packaged"), tDiet = K(2, "registered");
  return (
    <>
      <Kamera gorsel="tam/52" pencere={kameraYolu(t, s.sure, [0, 100, 1900], [60, 190, 1700])}>
        <Etiket t={t} bas={K(1, "enough") - 0.1} bitis={tDiet - 0.1} capa={[390, 700]} konum={[760, 540]} metin="EAT ENOUGH" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={0.05} metin="CONVENIENCE" x={1040} y={190} boyut={100} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "genuinely")} metin="HAS A PLACE" x={1040} y={310} boyut={100} renk={RENK.koyuYesil} />
      {NEDEN.map(([m, f], i) => {
        const [sc, al] = pop(t, K(1, f) - 0.05, 0.5);
        const gizle = t < tDiet - 0.1 ? 1 : 0;
        return (
          <div key={m} style={{ position: "absolute", left: 1040, top: 440 + i * 80, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al * gizle }}>
            <Hap metin={m} renk={RENK.altin} boyut={32} />
          </div>
        );
      })}
      <Not t={t} bas={tHelp} bitis={tDiet - 0.1} metin="PACKAGED FOODS CAN HELP" x={1040} y={790} boyut={34} renk={RENK.koyuYesil} agirlik={800} />
      <Ikon t={t} bas={tDiet} ad="onay" x={1100} y={500} boyut={84} />
      <div style={{ position: "absolute", left: 1180, top: 462, opacity: t >= tDiet ? 1 : 0 }}>
        {t >= tDiet && <Hap metin="REGISTERED DIETITIAN" renk={RENK.yesil} boyut={36} />}
      </div>
      <Not t={t} bas={K(2, "choose") - 0.1} metin="CAN HELP YOU CHOOSE WELL" x={1100} y={590} boyut={38} renk={RENK.lacivert} agirlik={700} />
    </>
  );
};

export default S52;
