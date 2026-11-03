// Sahne 38 — Lam et al. 2013: PPI kullanımı ve B12 eksikliği (+%65 olasılık).
import React from "react";
import { ANTON, Baslik, Etiket, INTER, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Stat: React.FC<{ t: number; bas: number; bitis: number; sayi: string; metin: string; y: number; renk: string }> = ({ t, bas, bitis, sayi, metin, y, renk }) => {
  const [sc, al] = pop(t, bas, 0.55);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 1170, top: y, width: 660, opacity: a, transform: `scale(${sc})`, transformOrigin: "0% 50%",
      background: RENK.kagitAcik, border: `3px solid ${RENK.murekkep}`, borderRadius: 20, padding: "10px 26px 16px", boxShadow: "0 12px 28px rgba(48,40,34,0.2)" }}>
      <div style={{ fontFamily: ANTON, fontSize: 92, lineHeight: 1.1, color: renk }}>{sayi}</div>
      <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 1.5, color: RENK.lacivert }}>{metin}</div>
    </div>
  );
};

const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tK = K(0, "kaiser"), tA = K(0, "25,956"), tB = K(0, "184,199"), tTwo = K(0, "two"), tProt = K(0, "proton");
  const tAcid = K(0, "acid"), tP = K(0, "65");
  const bit1 = tTwo - 0.1, bit2 = K(0, "went") - 0.1;
  const w = kameraYolu(t, s.sure, [20, 20, 1880], [90, 70, 1740]);
  return (
    <>
      <Kamera gorsel="tam/38" pencere={w} />
      <KaynakEtiketi t={t} bas={tK} metin={s.meta.etiket ?? ""} />
      <Baslik t={t} bas={tK} bitis={bit1} metin="KAISER PERMANENTE" x={1170} y={160} boyut={64} renk={RENK.lacivert} />
      <Stat t={t} bas={tA} bitis={bit1} sayi="25,956" metin="B12 DEFICIENCY" y={230} renk={RENK.mercan} />
      <Stat t={t} bas={tB} bitis={bit1} sayi="184,199" metin="COMPARISON PATIENTS" y={470} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tTwo} bitis={bit2} metin="2+ YEARS" x={1170} y={190} boyut={110} renk={RENK.lacivert} />
      <Not t={t} bas={tProt} bitis={bit2} metin="PROTON PUMP INHIBITORS" x={1170} y={280} boyut={36} genislik={700} agirlik={800} />
      <Etiket t={t} bas={tProt} bitis={bit2} capa={[540, 500]} konum={[1000, 780]} metin="PPI" renk={RENK.altin} boyut={26} />
      <Not t={t} bas={tAcid} bitis={bit2} metin="A COMMON ACID REDUCER" x={1170} y={340} boyut={30} genislik={700} renk={RENK.gri} />
      <VurguRozet t={t} bas={tP} vurgu="+65%" not="ODDS OF LOW B12" x={1500} y={330} genislik={460} boyut={150} renk={RENK.mercan} />
    </>
  );
};

export default S38;
