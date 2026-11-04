// Sahne 51 — fırın tezgâhı: fırıncıya sor
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

const S51: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSoru = K(2, "fair");
  return (
    <>
      <Kamera gorsel="tam/51" pencere={kameraYolu(t, s.sure, [100, 40, 1720], [0, 0, 1920])}>
        <Etiket t={t} bas={K(0, "baker")} bitis={tSoru - 0.3} capa={[1040, 660]} konum={[1330, 570]} metin="ASK THE BAKER" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "dough")} capa={[330, 700]} konum={[480, 575]} metin="HOW LONG TO FERMENT?" renk={RENK.mercan} boyut={26} />
        <Etiket t={t} bas={K(1, "starter")} capa={[820, 760]} konum={[760, 650]} metin="A STARTER?" renk={RENK.yesil} boyut={26} />
      </Kamera>
      <Ikon t={t} bas={tSoru} ad="soru" x={1330} y={575} zemin={RENK.lacivert} />
    </>
  );
};
export default S51;
