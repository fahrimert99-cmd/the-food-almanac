// Sahne 46 — İpucu 2: gerçekten taze olunca taze al. Sepet görseli, sağdaki boş kâğıtta etiketler + meta başlığı.
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

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFarm = K(1, "farm stand"), tGarden = K(1, "garden"), tWithin = K(1, "within"), tBest = K(2, "Just-picked");
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800]);
  const [sc, al] = pop(t, tWithin, 0.5);
  return (
    <>
      <Kamera gorsel="tam/46" pencere={p}>
        <Etiket t={t} bas={tFarm} bitis={tBest - 0.2} capa={[610, 760]} konum={[1050, 700]} metin="FARM STAND" renk={RENK.yesil} />
        <Etiket t={t} bas={tGarden} bitis={tBest - 0.2} capa={[850, 920]} konum={[1560, 800]} metin="YOUR OWN GARDEN" renk={RENK.yesil} />
      </Kamera>
      <div style={{ position: "absolute", left: 1280, top: 550, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al, display: "flex",
        alignItems: "center", gap: 14, background: RENK.kagitAcik, border: `3px solid ${RENK.lacivert}`, borderRadius: 999,
        padding: "10px 28px 10px 16px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: RENK.murekkep,
        boxShadow: "0 8px 22px rgba(48,40,34,0.2)", whiteSpace: "nowrap" }}>
        <IkonYol ad="saat" boyut={36} renk={RENK.lacivert} kalinlik={5} />EAT WITHIN A DAY OR TWO
      </div>
      <Baslik t={t} bas={tBest} metin={s.meta.baslik!.satirlar[0]} x={1280} y={260} boyut={130} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={tBest + 0.18} metin={s.meta.baslik!.satirlar[1]} x={1280} y={410} boyut={130} renk={RENK.koyuYesil} hiza="orta" />
      <IpucuHap t={t} no={2} />
    </>
  );
};

export default S46;
