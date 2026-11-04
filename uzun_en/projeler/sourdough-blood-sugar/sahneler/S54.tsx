// Sahne 54 — ipucu 2: içerik listesini oku
import React from "react";
import { BaslikBlok, BolumKarti, Etiket, Hap, Ikon, Kamera, Liste, Panel, RENK, ANTON, INTER, SP, VurguRozet, KaynakEtiketi,
  Baslik, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Zıplayarak gelen hap
const Pil: React.FC<{ t: number; bas: number; bitis?: number; metin: string; renk: string; x: number; y: number; boyut?: number }> = ({
  t, bas, bitis = 1e9, metin, renk, x, y, boyut = 30,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a }}><Hap metin={metin} renk={renk} boyut={boyut} /></div>;
};

// Numara rozeti (ipucu sırası)
const No: React.FC<{ t: number; bas: number; n: string; x: number; y: number; bitis?: number }> = ({ t, bas, n, x, y, bitis = 1e9 }) => {
  const [sc, al] = pop(t, bas, 0.6);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a, textAlign: "center" }}>
      <div style={{ width: 130, height: 130, borderRadius: "50%", background: RENK.altin, border: `5px solid ${RENK.kagitAcik}`,
        boxShadow: "0 10px 26px rgba(48,40,34,0.25)", display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: ANTON, fontSize: 96, color: "#fff", lineHeight: 1 }}>{n}</div>
      <div style={{ marginTop: 8, fontFamily: INTER, fontWeight: 800, fontSize: 24, letterSpacing: 4, color: RENK.lacivert }}>TIP</div>
    </div>
  );
};

const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/54" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 34, 1760])}>
        <Etiket t={t} bas={K(1, "front")} bitis={K(2, "Short") - 0.1} capa={[480, 700]} konum={[1200, 560]} metin="FRONT OF THE BAG" renk={RENK.mercan} />
      </Kamera>
      <No t={t} bas={0.0} n="2" x={1700} y={200} />
      <BaslikBlok t={t} bas={K(1, "ingredient")} satirlar={["READ THE", "INGREDIENT LIST"]} x={1000} y={150} boyut={72} />
      <Liste t={t} isaret="onay" boyut={34} aralik={86} x={1000} y={400} genislik={860} ogeler={[
        { bas: K(2, "Short"), metin: "SHORT LIST" },
        { bas: K(2, "whole"), metin: "WHOLE GRAIN NEAR THE TOP" },
      ]} />
      <Liste t={t} isaret="carpi" boyut={34} aralik={86} x={1000} y={572} genislik={860} ogeler={[
        { bas: K(2, "vinegar"), metin: "NO VINEGAR", renk: RENK.mercan },
        { bas: K(2, "sour"), metin: "NO SOUR FLAVORING", renk: RENK.mercan },
      ]} />
    </>
  );
};
export default S54;
