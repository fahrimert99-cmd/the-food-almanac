// Sahne 61 — özet: 5 yıllık deneme (23/60 ve 12/60), solda iki rozet.
import React from "react";
import { Baslik, Etiket, INTER, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Hap: React.FC<{ t: number; bas: number; metin: string; x: number; y: number }> = ({ t, bas, metin, x, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al, whiteSpace: "nowrap",
      background: "#FCF8EC", border: `3px solid ${RENK.yesil}`, borderRadius: 999, padding: "8px 22px", fontFamily: INTER, fontWeight: 800,
      fontSize: 26, letterSpacing: 1.5, color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>{metin}</div>
  );
};

const S61: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/61" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [60, 90, 1760])}>
        <Etiket t={t} bas={K(0, "brought")} bitis={K(0, "against") - 0.2} capa={[1220, 770]} konum={[1500, 880]} metin="STONES RETURN" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "five-year")} bitis={K(0, "brought") - 0.2} metin="FIVE-YEAR TRIAL" x={960} y={90} boyut={96}
        renk={RENK.lacivert} hiza="orta" />
      <VurguRozet t={t} bas={K(0, "23")} vurgu="23 OF 60" not="LOW CALCIUM DIET" x={310} y={250} renk={RENK.mercan} genislik={440} boyut={92} />
      <VurguRozet t={t} bas={K(0, "12")} vurgu="12 OF 60" not="NORMAL CALCIUM" x={310} y={500} renk={RENK.yesil} genislik={440} boyut={92} />
      <Hap t={t} bas={K(0, "less")} metin="+ LESS SALT" x={90} y={760} />
      <Hap t={t} bas={K(0, "animal")} metin="+ LESS ANIMAL PROTEIN" x={90} y={830} />
    </>
  );
};

export default S61;
