// Sahne 48 — Madde 4: ilaçlarınızı kontrol edin. Üst boş kâğıt alanında başlık, sonra durum hapları.
import React from "react";
import { ANTON, Baslik, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const KOSUL = [
  { ifade: "high blood", metin: "HIGH BLOOD PRESSURE", x: 140, y: 190 },
  { ifade: "atrial", metin: "ATRIAL FIBRILLATION", x: 700, y: 190 },
  { ifade: "heart failure", metin: "HEART FAILURE", x: 140, y: 290 },
  { ifade: "liver", metin: "LIVER DISEASE", x: 560, y: 290 },
];

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCheck = K(1, "Check your medicines"), tDrugs = K(2, "drugs"), tAlc = K(2, "alcohol,"), tPharm = K(2, "pharmacist");
  const tBitir = K(3, "Mention") - 0.1;
  const [sc, al] = pop(t, 0.05, 0.5);
  return (
    <>
      <Kamera gorsel="tam/48" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={tDrugs} bitis={tPharm - 0.2} capa={[1030, 640]} konum={[1030, 470]} metin="MEDICINES" renk={RENK.altin} />
        <Etiket t={t} bas={tAlc} bitis={tPharm - 0.2} capa={[535, 520]} konum={[535, 380]} metin="ALCOHOL" renk={RENK.mercan} />
        <Etiket t={t} bas={tPharm} bitis={tBitir} capa={[1400, 560]} konum={[1180, 380]} metin="PHARMACIST" renk={RENK.koyuYesil} />
      </Kamera>
      <div style={{ position: "absolute", left: 140, top: 62, width: 84, height: 84, borderRadius: "50%", background: RENK.altin, color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 52, transform: `scale(${sc})`, opacity: al }}>4</div>
      <Baslik t={t} bas={tCheck} bitis={tBitir} metin="CHECK YOUR MEDICINES" x={260} y={104} boyut={96} hiza="sol" renk={RENK.lacivert} />
      {KOSUL.map((k, i) => {
        const [h, a] = pop(t, K(3, k.ifade), 0.5);
        return (
          <div key={i} style={{ position: "absolute", left: k.x, top: k.y, transform: `scale(${h})`, transformOrigin: "0 50%", opacity: a * sol(t, 1e9) }}>
            <Hap metin={k.metin} renk={RENK.lacivert} boyut={36} />
          </div>
        );
      })}
    </>
  );
};
export default S48;
