// Sahne 56 — ipucu 4: kendini test et
import React from "react";
import { BaslikBlok, BolumKarti, Etiket, Hap, Ikon, Kamera, Liste, Panel, RENK, ANTON, INTER, SP, VurguRozet, KaynakEtiketi,
  Baslik, kagit, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

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

const S56: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tYari = K(2, "half");
  const tListe = K(3, "try");
  return (
    <>
      <Kamera gorsel="tam/56" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 60, 1740])}>
        {/* kablo ucundaki kusuru kâğıt yamayla gizle */}
        <div style={{ position: "absolute", left: 10, top: 165, width: 170, height: 130,
          background: `radial-gradient(ellipse at 50% 50%, #faf3d7 0%, #faf3d7 55%, rgba(250,243,215,0) 100%)` }} />
        <Etiket t={t} bas={K(3, "glucose")} capa={[240, 520]} konum={[600, 250]} metin="GLUCOSE METER" renk={RENK.lacivert} />
      </Kamera>
      <No t={t} bas={0.0} n="4" x={140} y={190} bitis={2.6} />
      <BaslikBlok t={t} bas={K(1, "response")} bitis={K(2, "In") + 0.9} satirlar={["TEST", "YOURSELF"]} x={1860} y={200} boyut={96} hiza="sag" />
      <KaynakEtiketi t={t} metin="WEIZMANN TRIAL" bas={K(2, "Weizmann")} bitis={tListe - 0.2} />
      <VurguRozet t={t} bas={tYari} vurgu="≈ HALF" not="DID BETTER ON EACH BREAD" x={1500} y={330} genislik={600} bitis={tListe - 0.2} />
      <Liste t={t} isaret="sayi" boyut={36} aralik={92} x={1120} y={400} genislik={860} ogeler={[
        { bas: K(3, "same"), metin: "SAME PORTION" },
        { bas: K(3, "two"), metin: "TWO BREADS" },
        { bas: K(3, "different"), metin: "DIFFERENT DAYS" },
        { bas: K(3, "compare"), metin: "COMPARE" },
      ]} />
    </>
  );
};
export default S56;
