// Sahne 57 — karaciğer ve böbrekler; yaşlılarda riskler.
import React from "react";
import { Baslik, Etiket, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Hap: React.FC<{ t: number; bas: number; metin: string; x: number; y: number }> = ({ t, bas, metin, x, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al, whiteSpace: "nowrap",
      background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`, borderRadius: 999, padding: "9px 28px", fontFamily: INTER,
      fontWeight: 800, fontSize: 32, letterSpacing: 2, color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>{metin}</div>
  );
};

const S57: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTemiz = K(0, "cleaning");
  const tYas = K(1, "older adults");
  const tKatil = K(1, "kidney failure");
  return (
    <>
      <Kamera gorsel="tam/57" pencere={kameraYolu(t, s.sure, [40, 20, 1840], [130, 60, 1680])}>
        <Etiket t={t} bas={K(0, "liver")} bitis={tTemiz - 0.05} capa={[860, 330]} konum={[860, 95]} metin="LIVER" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "kidneys")} bitis={tTemiz - 0.05} capa={[1500, 430]} konum={[1500, 130]} metin="KIDNEYS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "kidneys") + 0.1} bitis={tTemiz - 0.05} capa={[330, 440]} konum={[330, 130]} metin="KIDNEYS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "juice-only")} bitis={tKatil - 0.1} capa={[980, 640]} konum={[1330, 900]} metin="JUICE-ONLY PLANS" renk={RENK.yesil} />
        <Etiket t={t} bas={tKatil} capa={[1480, 640]} konum={[1520, 880]} metin="KIDNEY FAILURE CASES" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={tTemiz} bitis={tYas - 0.1} metin="ALREADY DOING THE CLEANING" x={960} y={100} boyut={72} renk={RENK.koyuYesil} hiza="orta" />
      <Baslik t={t} bas={tYas} bitis={tKatil - 0.1} metin="OLDER ADULTS" x={960} y={100} boyut={80} renk={RENK.lacivert} hiza="orta" />
      <Hap t={t} bas={K(1, "blood sugar")} metin="BLOOD SUGAR" x={330} y={880} />
      <Hap t={t} bas={K(1, "potassium")} metin="POTASSIUM" x={640} y={880} />
      <Hap t={t} bas={K(1, "oxalate")} metin="OXALATE" x={1230} y={880} />
    </>
  );
};

export default S57;
