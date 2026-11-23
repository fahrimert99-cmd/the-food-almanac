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

// Sahne 5 — çay tepsisi: yüzyıllık kullanım, kanıt değil
const S05: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kam = kameraYolu(t, s.sure, [0, 0, 1920], [110, 60, 1700]);
  const gec = K(1, "Traditional") - 0.15;
  return (
    <>
      <Kamera gorsel="tam/05" pencere={kam}>
        <Etiket t={t} bas={K(0, "calming drink")} bitis={gec} capa={[1300, 470]} konum={[1680, 330]} metin="CALMING DRINK" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "centuries")} bitis={gec} metin="FOR CENTURIES" x={60} y={150} boyut={72} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "Traditional")} bitis={K(1, "sleep") - 0.1} metin="TRADITIONAL USE" x={1860} y={150} boyut={72} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "proof")} bitis={K(1, "sleep") - 0.1} metin="ISN'T PROOF" x={1860} y={245} boyut={72} hiza="sag" renk={RENK.mercan} />
      <Baslik t={t} bas={K(1, "put it")} metin="PUT TO THE TEST" x={1860} y={150} boyut={72} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "sleep")} metin="IN SLEEP TRIALS" x={1860} y={245} boyut={72} hiza="sag" renk={RENK.koyuYesil} />
    </>
  );
};
export default S05;
