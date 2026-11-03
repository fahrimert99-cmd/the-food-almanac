// Sahne 39 — VITAL 2023 analizi: temkinli sonuç. Kitaplar + büyüteç; sağda başlık, sayı rozeti ve çekinceli hap etiketler.
import React from "react";
import { Baslik, Etiket, INTER, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Hap: React.FC<{ t: number; bas: number; metin: string; x: number; y: number; renk: string }> = ({ t, bas, metin, x, y, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al, background: RENK.kagitAcik,
      border: `3px solid ${renk}`, borderRadius: 999, padding: "9px 22px", fontFamily: INTER, fontWeight: 800, fontSize: 24, letterSpacing: 1.5,
      color: RENK.lacivert, whiteSpace: "nowrap", boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>{metin}</div>
  );
};

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pencere = kameraYolu(t, s.sure, [0, 0, 1920], [50, 20, 1820]);
  return (
    <>
      <Kamera gorsel="tam/39" pencere={pencere}>
        <Etiket t={t} bas={K(0, "VITAL") - 0.1} capa={[350, 340]} konum={[520, 160]} metin="VITAL COHORT" renk={RENK.altin} boyut={28} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      <Baslik t={t} bas={K(0, "caution")} metin="THE HONEST" x={1100} y={175} boyut={96} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "caution") + 0.18} metin="PART" x={1100} y={275} boyut={96} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(1, "25,435") - 0.1} vurgu="25,435" not="people in the cohort" x={1700} y={560} boyut={76} genislik={340} renk={RENK.altin} />
      <Hap t={t} bas={K(1, "one and a half") - 0.1} metin="≥ 1.5 SERVINGS A WEEK" x={1490} y={800} renk={RENK.lacivert} />
      <Hap t={t} bas={K(1, "did not")} metin="NO CLEAR DIFFERENCE" x={1060} y={395} renk={RENK.mercan} />
      <Hap t={t} bas={K(1, "benefit")} metin="BENEFIT NOT RULED OUT" x={1470} y={395} renk={RENK.yesil} />
    </>
  );
};

export default S39;
