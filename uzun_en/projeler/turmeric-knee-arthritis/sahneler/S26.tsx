// Sahne 26 — ibuprofen/diklofenak ile karşılaştırma: fark küçük ve anlamlı değil; yan etkiler plaseboyu aşmadı.
import React from "react";
import { Baslik, Etiket, IkonYol, INTER, Kamera, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Hapcik: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string; ikon?: "onay" | "carpi" }> = ({
  t, bas, bitis = 1e9, x, y, metin, renk, ikon,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a, display: "flex",
      alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999,
      padding: ikon ? "8px 26px 8px 10px" : "10px 26px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5,
      color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
      {ikon && (
        <span style={{ width: 44, height: 44, borderRadius: "50%", background: renk, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IkonYol ad={ikon} boyut={28} renk="#fff" />
        </span>
      )}
      {metin}
    </div>
  );
};

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tGec = 10.0;
  return (
    <>
      <Kamera gorsel="tam/26" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 50, 1800])}>
        <Etiket t={t} bas={K(0, "Against")} bitis={6.6} capa={[740, 480]} konum={[400, 250]} metin="TURMERIC" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "ibuprofen")} bitis={tGec} capa={[1280, 440]} konum={[1640, 330]} metin="IBUPROFEN" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(0, "diclofenac")} bitis={tGec} capa={[1340, 600]} konum={[1640, 470]} metin="DICLOFENAC" renk={RENK.lacivert} />
      </Kamera>
      <VurguRozet t={t} bas={K(0, "small")} bitis={tGec} vurgu="SMALL" not="pooled difference" x={300} y={100} genislik={400} boyut={84} />
      <Hapcik t={t} bas={K(0, "not")} bitis={tGec} x={1010} y={100} metin="NOT STATISTICALLY SIGNIFICANT" renk={RENK.mercan} />
      <Baslik t={t} bas={K(1, "side") - 0.15} metin="SIDE EFFECTS" x={700} y={120} boyut={84} hiza="orta" renk={RENK.koyuYesil} />
      <Hapcik t={t} bas={K(1, "no")} x={700} y={235} metin="NO MORE THAN PLACEBO" renk={RENK.yesil} ikon="onay" />
    </>
  );
};

export default S26;
