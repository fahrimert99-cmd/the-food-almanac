// Sahne 21 — tansiyon ilaçları: sağ sütunda başlık ve ilaç adları, solda görsel.
import React from "react";
import { Baslik, BaslikBlok, Etiket, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Hap biçimli küçük etiket (pop ile gelir). x,y = sol-orta (hiza sol) ya da orta.
const Chip: React.FC<{ t: number; bas: number; metin: string; x: number; y: number; renk: string; boyut?: number; orta?: boolean; bitis?: number }> = ({
  t, bas, metin, x, y, renk, boyut = 30, orta, bitis = 1e9,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(${orta ? "-50%" : "0"}, -50%) scale(${sc})`, transformOrigin: orta ? "50% 50%" : "0% 50%",
      opacity: a, display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${renk}`,
      borderRadius: 999, padding: "9px 24px 9px 16px", fontFamily: INTER, fontWeight: 800, fontSize: boyut, letterSpacing: 1.5,
      color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
      <span style={{ width: boyut * 0.65, height: boyut * 0.65, borderRadius: "50%", background: renk, flex: "none" }} />
      {metin}
    </div>
  );
};


const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tAile = K(2, "belongs");
  const pB = eout(ilerle(t, tAile, 0.6));
  return (
    <>
      <Kamera gorsel="tam/21" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1800])}>
        <Etiket t={t} bas={K(0, "blockers")} capa={[670, 700]} konum={[1130, 470]} metin="CALCIUM-CHANNEL BLOCKERS" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "blood")} satirlar={b.satirlar} x={1840} y={170} boyut={104} hiza="sag" renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Chip t={t} bas={K(1, "nifedipine,")} metin="NIFEDIPINE" x={1180} y={650} renk={RENK.mercan} boyut={38} />
      <Baslik t={t} bas={K(1, "Procardia")} metin="SOLD AS PROCARDIA" x={1220} y={725} boyut={32} renk={RENK.lacivert} font="inter" agirlik={800} />
      <Baslik t={t} bas={K(1, "Adalat")} metin="AND ADALAT CC" x={1220} y={768} boyut={32} renk={RENK.lacivert} font="inter" agirlik={800} />
      <Chip t={t} bas={K(2, "Felodipine,")} metin="FELODIPINE" x={1180} y={860} renk={RENK.yesil} boyut={38} />
      <Baslik t={t} bas={K(2, "first")} metin="FROM THE FIRST STUDY" x={1220} y={928} boyut={30} renk={RENK.lacivert} font="inter" agirlik={800} />
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <path d={`M 1730 ${650 + (860 - 650) * (1 - pB)} L 1730 860`} stroke={RENK.altin} strokeWidth={6} strokeDasharray="12 9" fill="none" opacity={pB} />
      </svg>
      <Chip t={t} bas={K(2, "same")} metin="SAME FAMILY" x={1730} y={795} renk={RENK.altin} boyut={26} orta />
    </>
  );
};

export default S21;
