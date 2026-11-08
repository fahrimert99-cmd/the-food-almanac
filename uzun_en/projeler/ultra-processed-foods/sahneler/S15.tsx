// Sahne 15 — menüler beş ölçüte göre eşleştirildi; gönüllüler istedikleri kadar yedi.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const OLCUTLER = [
  { ifade: "calories", metin: "CALORIES" }, { ifade: "sugar", metin: "SUGAR" }, { ifade: "fat", metin: "FAT" },
  { ifade: "fiber", metin: "FIBER" }, { ifade: "sodium", metin: "SODIUM" },
];

const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const son0 = K(1, "and the volunteers") - 0.2;
  const [sa, aa] = pop(t, K(0, "as offered"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/15" pencere={kameraYolu(t, s.sure, [0, 120, 1920], [60, 170, 1800])}>
        <Etiket t={t} bas={K(1, "as much")} capa={[1325, 565]} konum={[1180, 330]} metin="MUCH OR LITTLE" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "match")} bitis={son0} metin="MATCHED MENUS" x={160} y={140} boyut={84} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 250, display: "flex", gap: 16, alignItems: "center" }}>
        {OLCUTLER.map((o) => {
          const [sc, al] = pop(t, K(0, o.ifade), 0.5);
          return (
            <div key={o.metin} style={{ transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: t > son0 ? 0 : al }}>
              <Hap metin={o.metin} renk={RENK.lacivert} boyut={32} />
            </div>
          );
        })}
      </div>
      <div style={{ position: "absolute", left: 160, top: 340, transform: `scale(${sa})`, transformOrigin: "0% 50%", opacity: t > son0 ? 0 : aa }}>
        <Hap metin="AS OFFERED" renk={RENK.altin} boyut={32} />
      </div>
      <Baslik t={t} bas={K(1, "they wanted")} metin="AS THEY WANTED" x={160} y={150} boyut={84} renk={RENK.lacivert} />
    </>
  );
};

export default S15;
