// Sahne 45 — İpucu 1: dondurulmuşu güvenilir varsayılan yap. Çekmece görseli, üst bant başlık + 2 etiket.
import React from "react";
import { AbsoluteFill, ANTON, Baslik, Etiket, Hap, IkonYol, INTER, Kamera, Parcaciklar, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Sol üstte ipucu numarası hapı
const IpucuHap: React.FC<{ t: number; no: number }> = ({ t, no }) => {
  const [sc, al] = pop(t, 0.05, 0.5);
  return (
    <div style={{ position: "absolute", left: 56, top: 48, opacity: al, transform: `scale(${sc})`, transformOrigin: "0% 50%", display: "flex",
      alignItems: "center", gap: 14, background: RENK.lacivert, borderRadius: 999, padding: "10px 26px 10px 18px", color: "#fff",
      fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 3 }}>
      <span style={{ width: 14, height: 14, borderRadius: "50%", background: RENK.altin }} />TIP {no}
    </div>
  );
};

// Belirli anda beliren sabit hap
const PopHap: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string; boyut?: number }> = ({
  t, bas, bitis = 1e9, x, y, metin, renk, boyut = 28,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a }}>
      <Hap metin={metin} renk={renk} boyut={boyut} />
    </div>
  );
};

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tRel = K(1, "reliable"), tNot = K(1, "not a"), tFridge = K(2, "fridge"), tMatch = K(2, "match"), tVit = K(2, "vitamin");
  const bitisBant = K(2, "If") - 0.1;
  const aBant = eout(ilerle(t, tRel - 0.2, 0.5)) * sol(t, bitisBant);
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1820]);
  return (
    <>
      <Kamera gorsel="tam/45" pencere={p} />
      {/* üst bant: başlık için zemin */}
      <div style={{ position: "absolute", left: 0, right: 0, top: 0, height: 290, opacity: aBant,
        background: `linear-gradient(to bottom, ${kagit(0.94)} 0%, ${kagit(0.94)} 78%, ${kagit(0)} 100%)` }} />
      <Baslik t={t} bas={tRel} bitis={bitisBant} metin="RELIABLE DEFAULT" x={960} y={115} boyut={90} renk={RENK.koyuYesil} hiza="orta" />
      <Baslik t={t} bas={tNot} bitis={bitisBant} metin="NOT A COMPROMISE" x={960} y={215} boyut={72} renk={RENK.lacivert} hiza="orta" />
      <PopHap t={t} bas={tFridge} bitis={tMatch - 0.15} x={960} y={800} metin="FEW DAYS IN THE FRIDGE" renk={RENK.mercan} />
      <PopHap t={t} bas={tMatch} x={1130} y={800} metin="MAY MATCH OR BEAT" renk={RENK.yesil} />
      <PopHap t={t} bas={tVit} x={640} y={800} metin="VITAMIN C" renk={RENK.altin} />
      <IpucuHap t={t} no={1} />
    </>
  );
};

export default S45;
