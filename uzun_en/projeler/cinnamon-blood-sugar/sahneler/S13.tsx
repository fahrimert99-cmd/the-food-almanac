// Sahne 13 — Kısa tanımlar: açlık glukozu ve A1C. Görsel solda, tanım kartları sağ boşlukta.
import React from "react";
import { ANTON, BaslikBlok, Etiket, Hap, IkonYol, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Kart: React.FC<{ t: number; bas: number; y: number; renk: string; ad: string; not: string; ikon: "saat" | "soru" }> = ({ t, bas, y, renk, ad, not, ikon }) => {
  const p = eout(ilerle(t, bas, 0.55));
  if (p <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 1010, top: y, width: 830, opacity: p, transform: `translateX(${(1 - p) * 40}px)`,
      display: "flex", alignItems: "center", gap: 26, background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 26,
      padding: "22px 28px", boxShadow: "0 10px 26px rgba(48,40,34,0.14)" }}>
      <span style={{ width: 84, height: 84, flex: "none", borderRadius: "50%", background: renk, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <IkonYol ad={ikon} boyut={52} renk="#fff" />
      </span>
      <div>
        <div style={{ fontFamily: ANTON, fontSize: 62, lineHeight: 1.1, color: renk }}>{ad}</div>
        <div style={{ fontFamily: INTER, fontWeight: 600, fontSize: 30, lineHeight: 1.3, color: RENK.lacivert }}>{not}</div>
      </div>
    </div>
  );
};

const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFast = K(1, "Fasting glucose"), tUnit = K(1, "milligrams per deciliter");
  const tA1c = K(2, "A1C"), tAvg = K(2, "roughly three months"), tLong = K(2, "long-term control");
  const [su, au] = pop(t, tUnit, 0.5);
  const [sl, al] = pop(t, tLong, 0.5);
  return (
    <>
      <Kamera gorsel="tam/13" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 40, 1700])}>
        <Etiket t={t} bas={tFast + 0.1} capa={[827, 690]} konum={[680, 850]} metin="GLUCOSE METER" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={0.05} satirlar={s.meta.baslik?.satirlar ?? []} x={1010} y={130} boyut={92} renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Kart t={t} bas={tFast} y={400} renk={RENK.altin} ad="FASTING GLUCOSE" ikon="saat" not="After several hours without eating" />
      <div style={{ position: "absolute", left: 1010 + 560, top: 407, transform: `scale(${su})`, opacity: au, background: RENK.lacivert, color: "#fff",
        borderRadius: 999, padding: "6px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 2 }}>MG/DL</div>
      <Kart t={t} bas={tA1c} y={640} renk={RENK.koyuYesil} ad="A1C" ikon="soru" not="Average over roughly three months" />
      <div style={{ position: "absolute", left: 1010, top: 850, transform: `scale(${sl})`, transformOrigin: "0 50%", opacity: al }}>
        <Hap metin="LONG-TERM CONTROL" renk={RENK.koyuYesil} />
      </div>
    </>
  );
};
export default S13;
