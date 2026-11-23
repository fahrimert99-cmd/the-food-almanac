// Sahne 25 — haftalık denemeler yılların etkisini söylemez.
import React from "react";
import { ANTON, Etiket, IkonYol, INTER, Kamera, RENK, SP, ilerle, eout, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Kart: React.FC<{ t: number; bas: number; bitis?: number; metin: string; renk: string; ikon: "soru" | "ok"; }> = ({ t, bas, bitis = 1e9, metin, renk, ikon }) => {
  const [sc, al] = pop(t, bas, 0.55);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 960, top: 836, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a, display: "flex", alignItems: "center", gap: 24,
      background: RENK.kagitAcik, border: `4px solid ${renk}`, borderRadius: 24, padding: "14px 36px 14px 20px", boxShadow: "0 10px 26px rgba(48,40,34,0.22)", whiteSpace: "nowrap" }}>
      <div style={{ width: 66, height: 66, borderRadius: "50%", background: renk, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <IkonYol ad={ikon} boyut={40} renk="#fff" kalinlik={7} />
      </div>
      <span style={{ fontFamily: ANTON, fontSize: 68, color: renk }}>{metin}</span>
    </div>
  );
};

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800]);
  const tYears = K(1, "years");
  const tSwe = K(2, "Swedish");
  return (
    <>
      <Kamera gorsel="tam/25" pencere={pen}>
        <Etiket t={t} bas={K(0, "no adverse")} bitis={c[1].bas - 0.1} capa={[1020, 573]} konum={[780, 130]} metin="NO ADVERSE EFFECTS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "weeks")} bitis={tSwe - 0.2} capa={[1445, 400]} konum={[1640, 150]} metin="TRIALS LAST WEEKS" renk={RENK.altin} />
      </Kamera>
      <Kart t={t} bas={tYears} bitis={tSwe - 0.1} metin="YEARS OF HIGH DOSES?" renk={RENK.mercan} ikon="soru" />
      <Kart t={t} bas={tSwe} metin="SWEDISH DATA NEXT" renk={RENK.lacivert} ikon="ok" />
    </>
  );
};

export default S25;
