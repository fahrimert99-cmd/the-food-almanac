// Sahne 50 — tam tahıl unu: somun + un çuvalı
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

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tListe = K(2, "whole");
  return (
    <>
      <Kamera gorsel="tam/50" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [120, 70, 1700])}>
        <Etiket t={t} bas={K(1, "whole wheat")} bitis={tListe - 0.2} capa={[1230, 470]} konum={[1660, 470]} metin="WHOLE WHEAT" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "check")} satirlar={["WHOLE GRAIN", "FIRST"]} x={60} y={100} boyut={84} />
      <VurguRozet t={t} bas={K(1, "strongest")} vurgu="STRONGEST" not="POOLED RESULTS" x={1700} y={520} genislik={340} boyut={64} bitis={tListe - 0.2} />
      <div style={{ position: "absolute", left: 1400, top: 120, width: 480, height: 190, borderRadius: 22, background: RENK.kagitAcik,
        border: `3px solid ${RENK.murekkep}`, boxShadow: "0 10px 26px rgba(48,40,34,0.2)", opacity: eout(ilerle(t, tListe - 0.1, 0.4)) }} />
      <Liste t={t} isaret="onay" boyut={28} aralik={82} x={1425} y={140} genislik={450} ogeler={[
        { bas: K(2, "whole wheat"), metin: "WHOLE GRAIN FLOUR" },
        { bas: K(2, "not"), metin: "JUST WHEAT FLOUR", renk: RENK.mercan },
      ]} />
    </>
  );
};
export default S50;
