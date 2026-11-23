// Sahne 50 — İpucu 3: içindekileri kontrol et.
import React from "react";
import { Baslik, Etiket, IkonYol, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tIng = K(1, "ingredients"), tCham = K(2, "chamomile,"), tHerb = K(2, "other herbs");
  const tAll = K(2, "allergies"), tMed = K(2, "medicines");
  const kam = kameraYolu(t, s.sure, [0, 0, 1920], [120, 60, 1700]);
  const pill = (b: number, m: string, renk: string, y: number) => {
    const [sc, al] = pop(t, b, 0.5);
    if (al <= 0) return null;
    return (
      <div style={{ position: "absolute", right: 80, top: y, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 14, background: RENK.kagitAcik, border: `4px solid ${renk}`, borderRadius: 999,
        padding: "10px 30px 10px 12px", boxShadow: "0 8px 22px rgba(48,40,34,0.16)", whiteSpace: "nowrap" }}>
        <span style={{ width: 46, height: 46, borderRadius: "50%", background: renk, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IkonYol ad="uyari" boyut={30} renk="#fff" kalinlik={5} /></span>
        <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 34, letterSpacing: 2, color: RENK.lacivert }}>{m}</span>
      </div>
    );
  };
  return (
    <>
      <Kamera gorsel="tam/50" pencere={kam} />
      <Baslik t={t} bas={0.0} metin="3" x={130} y={200} boyut={200} renk={RENK.altin} />
      <Baslik t={t} bas={tIng - 0.5} bitis={tHerb - 0.3} metin="CHECK THE" x={1840} y={170} boyut={84} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={tIng - 0.3} bitis={tHerb - 0.3} metin="INGREDIENTS" x={1840} y={265} boyut={84} hiza="sag" renk={RENK.koyuYesil} />
      <Etiket t={t} bas={tCham} bitis={tAll - 0.3} capa={[713, 722]} konum={[300, 420]} metin="CHAMOMILE" renk={RENK.koyuYesil} />
      <Etiket t={t} bas={tHerb} bitis={tAll - 0.3} capa={[1240, 760]} konum={[1560, 600]} metin="OTHER HERBS?" renk={RENK.altin} />
      {pill(tAll, "ALLERGIES", RENK.mercan, 230)}
      {pill(tMed, "MEDICINES", RENK.altin, 350)}
    </>
  );
};
export default S50;
