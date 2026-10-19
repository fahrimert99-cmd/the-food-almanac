// Sahne 43 — dondurulmuş sebze zaten haşlanmış: kısa buhar / mikrodalga. Cam kap + brokoli, 3 vuruş.
import React from "react";
import { AbsoluteFill, ANTON, Baslik, Etiket, Hap, IkonYol, INTER, Kamera, Parcaciklar, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Sol üstte ipucu numarası hapı
const IpucuHap: React.FC<{ t: number; no: number }> = ({ t, no }) => {
  const [sc, al] = pop(t, 0.05, 0.5);
  return (
    <div style={{ position: "absolute", left: 56, top: 48, opacity: al, transform: `scale(${sc})`, transformOrigin: "0% 50%", display: "flex",
      alignItems: "center", gap: 14, background: RENK.lacivert, borderRadius: 999, padding: "10px 26px 10px 18px", color: "#fff",
      fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 3 }}>
      <span style={{ width: 14, height: 14, borderRadius: "50%", background: RENK.altin }} />TIP {no}
    </div>
  );
};

// Belirli anda beliren sabit hap
const PopHap: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string; boyut?: number }> = ({
  t, bas, bitis = 1e9, x, y, metin, renk, boyut = 28,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a }}>
      <Hap metin={metin} renk={renk} boyut={boyut} />
    </div>
  );
};

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBlans = K(0, "blanching"), tNeed = K(0, "no need"), tSteam = K(1, "steam"), tWater = K(1, "little water");
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800]);
  return (
    <>
      <Kamera gorsel="tam/43" pencere={p}>
        {/* sağ alttaki imza kâğıt rengiyle örtülür */}
        <div style={{ position: "absolute", left: 1560, top: 930, width: 320, height: 150,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 55%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={tBlans} bitis={tSteam - 0.2} capa={[830, 520]} konum={[420, 230]} metin="ALREADY BLANCHED" renk={RENK.yesil} />
        <Etiket t={t} bas={tSteam} capa={[260, 560]} konum={[440, 840]} metin="SHORT STEAM OR MICROWAVE" renk={RENK.yesil} boyut={26} />
        <Etiket t={t} bas={tWater} capa={[1150, 410]} konum={[1330, 120]} metin="LITTLE WATER" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={tNeed} bitis={tSteam - 0.2} metin="NO LONG COOKING" x={60} y={110} boyut={84} renk={RENK.koyuYesil} />
    </>
  );
};

export default S43;
