// Sahne 17 — denemeler birbirine tam uymadı: 10 mg/dL ortalamadır, söz değil. Boy boy kavanozlar.
import React from "react";
import { Baslik, BaslikBlok, Etiket, IkonYol, INTER, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Hap: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string; ikon?: "carpi" | "uyari" }> = ({
  t, bas, bitis = 1e9, x, y, metin, renk, ikon,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * (t > bitis ? Math.max(0, 1 - (t - bitis) / 0.4) : 1);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(0,-50%) scale(${sc})`, transformOrigin: "0% 50%", opacity: a,
      display: "flex", alignItems: "center", gap: 14, background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999,
      padding: "8px 28px 8px 12px", boxShadow: "0 8px 20px rgba(48,40,34,0.14)", whiteSpace: "nowrap" }}>
      {ikon && (
        <span style={{ width: 40, height: 40, borderRadius: "50%", background: renk, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IkonYol ad={ikon} boyut={24} renk="#fff" kalinlik={7} />
        </span>
      )}
      <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 1.5, color: RENK.lacivert }}>{metin}</span>
    </div>
  );
};

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAgree = K(0, "agree"), tSmall = K(1, "small changes"), tLarge = K(1, "larger ones"), tTen = K(1, "ten milligrams"),
    tAvg = K(1, "average,"), tNot = K(1, "not a promise");
  return (
    <>
      <Kamera gorsel="tam/17" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [80, 120, 1760])}>
        <Etiket t={t} bas={tSmall} bitis={tTen - 0.3} capa={[1070, 780]} konum={[1070, 560]} metin="SMALL CHANGES" renk={RENK.yesil} boyut={26} />
        <Etiket t={t} bas={tLarge} bitis={tTen - 0.3} capa={[270, 560]} konum={[420, 340]} metin="LARGER CHANGES" renk={RENK.mercan} boyut={26} />
      </Kamera>
      <Hap t={t} bas={tAgree} bitis={tTen - 0.3} x={160} y={170} metin="TRIALS DISAGREED" renk={RENK.altin} ikon="uyari" />
      <VurguRozet t={t} bas={tTen} vurgu="10 mg/dL" not="an average" x={480} y={110} genislik={480} boyut={80} renk={RENK.altin} />
      <BaslikBlok t={t} bas={tAvg} satirlar={s.meta.baslik?.satirlar ?? []} x={1180} y={210} boyut={110} />
      <Hap t={t} bas={tNot} x={1180} y={500} metin="NOT A PROMISE" renk={RENK.mercan} ikon="carpi" />
    </>
  );
};

export default S17;
