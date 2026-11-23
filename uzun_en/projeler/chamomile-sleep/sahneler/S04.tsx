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

// Sahne 4 — botanik gravür: bitki solda, başlık sağda
const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kam = kameraYolu(t, s.sure, [0, 0, 1920], [30, 20, 1760]);
  return (
    <>
      <Kamera gorsel="tam/04" pencere={kam}>
        <Etiket t={t} bas={K(2, "flower heads")} capa={[815, 245]} konum={[1180, 250]} metin="FLOWER HEADS" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "daisy-like")} capa={[690, 700]} konum={[1230, 850]} metin="DAISY-LIKE HERB" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "Food")} metin={MARKA.ad.toUpperCase()} x={1010} y={420} boyut={30} font="inter" aralik={8} renk={RENK.altin} />
      <Baslik t={t} bas={K(1, "plant")} metin="THE FLOWER" x={1010} y={520} boyut={110} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "itself")} metin="BEHIND THE TEA" x={1010} y={645} boyut={110} renk={RENK.koyuYesil} />
    </>
  );
};
export default S04;
