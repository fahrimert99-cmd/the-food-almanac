// Sahne 50 — İpucu 1: potasyumu önce yiyecekten al. Sepet görseli; etiketler, başlık ve sağ üstte WHO kartı.
import React from "react";
import { ANTON, Etiket, IkonYol, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol, Baslik } from "../kutuphane";

const Satir: React.FC<{ t: number; bas: number; metin: string; renk: string; ikon?: boolean; y: number; bitis?: number }> = ({ t, bas, metin, renk, ikon, y, bitis = 1e9 }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 1340, top: y, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: a,
      display: "flex", alignItems: "center", gap: 14, whiteSpace: "nowrap", fontFamily: INTER, fontWeight: 800, fontSize: 25,
      letterSpacing: 1, color: RENK.lacivert }}>
      <span style={{ width: 38, height: 38, borderRadius: "50%", background: renk, flex: "none", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {ikon && <IkonYol ad="onay" boyut={24} renk="#fff" kalinlik={7} />}
      </span>
      {metin}
    </div>
  );
};

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOne = K(0, "One"), tPot = K(1, "potassium"), tFood = K(1, "food");
  const tWho = K(2, "World Health"), tBmj = K(2, "BMJ"), tKid = K(2, "without kidney"), tInc = K(2, "increase");
  const [sc1, al1] = pop(t, tOne, 0.55);
  const pKart = eout(ilerle(t, tWho, 0.5));
  const bitisEt = tWho - 0.1;
  return (
    <>
      <Kamera gorsel="tam/50" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])}>
        <Etiket t={t} bas={tFood} bitis={bitisEt} capa={[800, 440]} konum={[1000, 160]} metin="BANANAS" renk={RENK.altin} />
        <Etiket t={t} bas={tFood + 0.3} bitis={bitisEt} capa={[420, 735]} konum={[300, 900]} metin="BEANS" renk={RENK.yesil} />
        <Etiket t={t} bas={tFood + 0.6} bitis={bitisEt} capa={[1640, 740]} konum={[1650, 880]} metin="POTATOES" renk={RENK.yesil} />
      </Kamera>
      <div style={{ position: "absolute", left: 100, top: 100, width: 104, height: 104, borderRadius: "50%", background: RENK.lacivert,
        color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 70,
        transform: `scale(${sc1})`, opacity: al1, border: `4px solid ${RENK.kagitAcik}`, boxShadow: "0 8px 22px rgba(48,40,34,0.2)" }}>1</div>
      <Baslik t={t} bas={tPot} metin="POTASSIUM" x={240} y={120} boyut={84} renk={RENK.lacivert} />
      <Baslik t={t} bas={tFood} metin="FROM FOOD FIRST" x={240} y={216} boyut={84} renk={RENK.koyuYesil} />
      {pKart > 0 && (
        <div style={{ position: "absolute", left: 1305, top: 140, width: 575, height: 330, opacity: pKart, background: "#FCF8EC",
          border: `3px solid ${RENK.lacivert}`, borderRadius: 24, boxShadow: "0 12px 30px rgba(48,40,34,0.2)" }} />
      )}
      <Satir t={t} bas={tWho} metin="WHO GUIDELINE" renk={RENK.lacivert} y={170} />
      <Satir t={t} bas={tBmj} metin="BASED ON BMJ REVIEW" renk={RENK.altin} y={250} />
      <Satir t={t} bas={tKid} metin="ADULTS, NO KIDNEY PROBLEMS" renk={RENK.yesil} ikon y={330} />
      <Satir t={t} bas={tInc} metin="MORE POTASSIUM FROM FOOD" renk={RENK.koyuYesil} ikon y={410} />
    </>
  );
};

export default S50;
