// Sahne 55 — ipucu 3: porsiyon ve dengeli tabak
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

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tYumurta = K(3, "eggs,");
  return (
    <>
      <Kamera gorsel="tam/55" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])}>
        <Etiket t={t} bas={K(2, "still")} bitis={K(3, "slice") - 0.1} capa={[640, 720]} konum={[270, 790]} metin="STILL BREAD" renk={RENK.altin} />
        <Etiket t={t} bas={K(3, "slice")} capa={[640, 720]} konum={[270, 790]} metin="A SLICE OR TWO" renk={RENK.altin} boyut={26} />
        <Etiket t={t} bas={tYumurta} capa={[850, 440]} konum={[200, 480]} metin="EGGS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(3, "vegetables")} capa={[1250, 330]} konum={[1620, 300]} metin="VEGETABLES" renk={RENK.yesil} />
      </Kamera>
      <No t={t} bas={0.0} n="3" x={150} y={190} bitis={5} />
      <Pil t={t} bas={K(3, "beans")} metin="OR BEANS" renk={RENK.yesil} x={1700} y={440} />
      <BaslikBlok t={t} bas={K(3, "balanced")} satirlar={["BALANCED", "PLATE"]} x={1860} y={610} boyut={70} hiza="sag" />
    </>
  );
};
export default S55;
