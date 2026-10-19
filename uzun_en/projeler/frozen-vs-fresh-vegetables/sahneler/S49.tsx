// Sahne 49 — İpucu 5: etiketi oku. Çanta üzerinde "etiket" kartı (sade dondurulmuş: sos/tereyağı/tuz yok) + meta başlığı + çeşitlilik rozeti.
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

import { Liste, Not, VurguRozet } from "../kutuphane";

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tRead = K(1, "Read"), tPlain = K(2, "Plain"), tWithout = K(2, "without"), tSauce = K(2, "sauce"), tButter = K(2, "butter"),
    tSalt = K(2, "salt"), tChoice = K(2, "choice"), tMix = K(3, "mix"), tVar = K(3, "variety");
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820]);
  const aKart = eout(ilerle(t, tWithout, 0.5));
  return (
    <>
      <Kamera gorsel="tam/49" pencere={p}>
        <Etiket t={t} bas={tPlain} bitis={tChoice - 0.1} capa={[1400, 640]} konum={[1560, 470]} metin="PLAIN FROZEN" renk={RENK.yesil} />
        <PopHap t={t} bas={tChoice} bitis={tMix - 0.15} x={1560} y={470} metin="CHOICE IN YOUR HANDS" renk={RENK.yesil} boyut={24} />
        <PopHap t={t} bas={tMix} x={1560} y={470} metin="MIX THINGS UP" renk={RENK.altin} />
      </Kamera>
      {/* çantanın üzerinde etiket kartı */}
      <div style={{ position: "absolute", left: 215, top: 370, width: 520, height: 420, opacity: aKart, borderRadius: 18,
        background: RENK.kagitAcik, border: `3px solid ${RENK.lacivert}`, boxShadow: "0 12px 30px rgba(48,40,34,0.22)",
        transform: `translateY(${(1 - aKart) * 16}px)` }} />
      <Not t={t} bas={tWithout} metin="WITHOUT ADDED:" x={250} y={395} boyut={30} renk={RENK.gri} agirlik={800} />
      <Liste t={t} isaret="carpi" x={250} y={480} aralik={100} boyut={42} genislik={450} ogeler={[
        { bas: tSauce, metin: "SAUCE", renk: RENK.mercan },
        { bas: tButter, metin: "BUTTER", renk: RENK.mercan },
        { bas: tSalt, metin: "SALT", renk: RENK.mercan },
      ]} />
      <Baslik t={t} bas={tRead} bitis={tMix - 0.3} metin={s.meta.baslik!.satirlar[0]} x={1340} y={200} boyut={120} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={tRead + 0.18} bitis={tMix - 0.3} metin={s.meta.baslik!.satirlar[1]} x={1340} y={330} boyut={120} renk={RENK.koyuYesil} hiza="orta" />
      <VurguRozet t={t} bas={tVar} vurgu="VARIETY" not="matters more than any single winner" x={1340} y={140} genislik={640} boyut={100} renk={RENK.koyuYesil} />
      <IpucuHap t={t} no={5} />
    </>
  );
};

export default S49;
