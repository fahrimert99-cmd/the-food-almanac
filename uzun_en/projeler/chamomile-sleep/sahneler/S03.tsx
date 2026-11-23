import React from "react";
import { Baslik, Etiket, Ikon, INTER, Kamera, KaynakEtiketi, MARKA, Not, RENK, SP, VurguRozet, eout, ilerle, kagit,
  kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Senkron hap (renkli noktalı)
const Pil: React.FC<{ t: number; bas: number; bitis?: number; metin: string; renk: string; x: number; y: number; boyut?: number }> = ({
  t, bas, bitis = 1e9, metin, renk, x, y, boyut = 30,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * (1 - eout(ilerle(t, bitis, 0.4)));
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: a, display: "flex",
      alignItems: "center", gap: 14, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999,
      padding: "10px 28px 10px 20px", fontFamily: INTER, fontWeight: 800, fontSize: boyut, letterSpacing: 1.5, color: RENK.murekkep,
      boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
      <span style={{ width: 20, height: 20, borderRadius: "50%", background: renk, flex: "none" }} />{metin}
    </div>
  );
};

// Sahne 3 — yatak başı: fincan ve söz verilen iki cevap
const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kam = kameraYolu(t, s.sure, [0, 0, 1920], [90, 40, 1700]);
  return (
    <>
      <Kamera gorsel="tam/03" pencere={kam}>
        <Etiket t={t} bas={K(0, "bedtime cup")} capa={[560, 760]} konum={[280, 500]} metin="BEDTIME CUP" renk={RENK.altin} />
      </Kamera>
      <Pil t={t} bas={K(0, "realistically")} metin="WHAT IT CAN DO" renk={RENK.yesil} x={56} y={120} />
      <Pil t={t} bas={K(0, "who should")} metin="WHO SHOULD SKIP IT" renk={RENK.mercan} x={56} y={230} />
    </>
  );
};
export default S03;
