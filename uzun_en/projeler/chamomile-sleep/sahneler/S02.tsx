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

// Sahne 2 — terazi: aynı bitki, aynı süre, zıt sonuç
const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kam = kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820]);
  return (
    <>
      <Kamera gorsel="tam/02" pencere={kam}>
        <Etiket t={t} bas={K(0, "Same herb")} capa={[510, 600]} konum={[210, 420]} metin="SAME HERB" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "four weeks")} capa={[1440, 770]} konum={[1640, 890]} metin="SAME FOUR WEEKS" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(2, "Opposite")} bitis={K(3, "What") - 0.1} metin="OPPOSITE RESULTS" x={1860} y={130} boyut={66} hiza="sag" renk={RENK.mercan} />
      <Ikon t={t} bas={K(3, "What")} ad="soru" x={110} y={160} boyut={84} zemin={RENK.lacivert} />
      <Baslik t={t} bas={K(3, "explains")} metin="WHAT EXPLAINS THAT?" x={180} y={160} boyut={66} renk={RENK.lacivert} />
    </>
  );
};
export default S02;
