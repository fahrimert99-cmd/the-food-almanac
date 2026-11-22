// Sahne 20 — şiddet, belirti ölçeklerinden gelir: nasıl hissettiklerini ölçer, korunmayı değil.
import React from "react";
import { Baslik, Etiket, IkonYol, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Hap: React.FC<{ t: number; bas: number; y: number; metin: string; renk: string; ikon: "onay" | "carpi" }> = ({ t, bas, y, metin, renk, ikon }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 100, top: y, transform: `translate(0,-50%) scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
      display: "flex", alignItems: "center", gap: 14, background: RENK.kagitAcik, border: `4px solid ${renk}`, borderRadius: 999,
      padding: "8px 32px 8px 10px", boxShadow: "0 8px 22px rgba(48,40,34,0.16)", whiteSpace: "nowrap" }}>
      <span style={{ width: 52, height: 52, borderRadius: "50%", background: renk, display: "flex", alignItems: "center", justifyContent: "center" }}><IkonYol ad={ikon} boyut={32} renk="#fff" /></span>
      <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 34, letterSpacing: 2, color: RENK.lacivert }}>{metin}</span>
    </div>
  );
};

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tScale = K(0, "symptom scales"), tFelt = K(0, "how people felt"), tNot = K(0, "not whether");
  const tWel = K(1, "welcome"), tProt = K(1, "same as protected");
  return (
    <>
      <Kamera gorsel="tam/20" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])} />
      <Etiket t={t} bas={tScale} bitis={tFelt - 0.1} capa={[640, 570]} konum={[560, 340]} metin="SYMPTOM SCALE" renk={RENK.altin} />
      <Baslik t={t} bas={tFelt} metin="HOW PEOPLE FELT" x={100} y={170} boyut={104} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tNot} metin="not whether they caught the virus" x={106} y={270} boyut={42} renk={RENK.lacivert} font="inter" agirlik={700} />
      <Hap t={t} bas={tWel} y={760} metin="MILDER: WELCOME" renk={RENK.yesil} ikon="onay" />
      <Hap t={t} bas={tProt} y={860} metin="NOT THE SAME AS PROTECTED" renk={RENK.mercan} ikon="carpi" />
    </>
  );
};

export default S20;
