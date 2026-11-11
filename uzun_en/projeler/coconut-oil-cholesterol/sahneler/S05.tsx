import React from "react";
import { Baslik, BaslikBlok, CubukGrafik, Etiket, IkonYol, INTER, Ikon, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet,
  eout, ilerle, kagit, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";


// sağa yaslı hap etiketi
const Pil: React.FC<{ t: number; bas: number; metin: string; x: number; y: number; renk: string; bitis?: number; ikon?: boolean }> = ({
  t, bas, metin, x, y, renk, bitis = 1e9, ikon,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", right: 1920 - x, top: y, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: a,
      display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap", background: "#FCF8EC", border: `3px solid ${renk}`,
      borderRadius: 999, padding: "10px 28px", fontFamily: INTER, fontWeight: 800, fontSize: 34, letterSpacing: 1.5,
      color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
      {ikon && <IkonYol ad="saat" boyut={36} renk={renk} />}
      {metin}
    </div>
  );
};

// Sahne 5 — tencerede katı blok; sağda başlık ve üç hap
const S05: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/05" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800])}>
        <Etiket t={t} bas={K(0, "Coconut")} bitis={K(1, "Solid") + 1} capa={[520, 440]} konum={[1000, 300]} metin="COCONUT OIL" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "solid")} satirlar={["SOLID", "FAT"]} x={1860} y={150} boyut={110} hiza="sag" />
      <Pil t={t} bas={K(0, "room")} ikon metin="ROOM TEMPERATURE" x={1860} y={400} renk={RENK.altin} />
      <Pil t={t} bas={K(1, "saturated")} metin="SATURATED FAT" x={1860} y={500} renk={RENK.mercan} />
      <Pil t={t} bas={K(1, "liquid")} metin="VS LIQUID OILS" x={1860} y={600} renk={RENK.yesil} />
    </>
  );
};
export default S05;
