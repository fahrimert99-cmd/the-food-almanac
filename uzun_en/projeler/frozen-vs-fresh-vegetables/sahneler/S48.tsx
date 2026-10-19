// Sahne 48 — İpucu 4: kısa ve hafif pişir. Tencere görseli; başlık + mikrodalga/buhar + uzun kaynatma + pişirme suyu, 5 vuruş.
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

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCook = K(1, "Cook"), tSteam = K(2, "steam"), tWater = K(2, "little water"), tBoil = K(2, "boiling"), tIf = K(2, "if"),
    tCW = K(2, "cooking water"), tVit = K(2, "vitamins");
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840]);
  return (
    <>
      <Kamera gorsel="tam/48" pencere={p}>
        {/* sağ alttaki imza kâğıt rengiyle örtülür */}
        <div style={{ position: "absolute", left: 1480, top: 940, width: 300, height: 140,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 55%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={tSteam} capa={[300, 740]} konum={[270, 430]} metin="STEAM OR MICROWAVE" renk={RENK.yesil} boyut={24} />
        <Etiket t={t} bas={tBoil} bitis={tIf - 0.15} capa={[960, 700]} konum={[960, 800]} metin="LONG BOIL" renk={RENK.mercan} />
        <Etiket t={t} bas={tIf} bitis={tCW - 0.1} capa={[850, 480]} konum={[620, 250]} metin="IF YOU DO BOIL" renk={RENK.altin} />
        <Etiket t={t} bas={tCW} capa={[1000, 500]} konum={[620, 250]} metin="USE COOKING WATER" renk={RENK.altin} />
        <Parcaciklar t={t} bas={tVit} kaynak={[900, 500]} hedef={[1000, 410]} adet={14} aralik={0.12} yayilma={260} kavis={-60} hedefYayilma={200} tohum="v48" />
      </Kamera>
      <Baslik t={t} bas={tCook} bitis={tSteam - 0.2} metin="COOK GENTLY" x={60} y={180} boyut={90} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tCook + 0.4} bitis={tSteam - 0.2} metin="AND BRIEFLY" x={60} y={280} boyut={90} renk={RENK.lacivert} />
      <PopHap t={t} bas={tWater} x={270} y={500} metin="+ A LITTLE WATER" renk={RENK.altin} boyut={24} />
      <PopHap t={t} bas={tVit} x={1560} y={780} metin="VITAMINS END UP THERE" renk={RENK.yesil} boyut={24} />
      <IpucuHap t={t} no={4} />
    </>
  );
};

export default S48;
