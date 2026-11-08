// Sahne 17 — HDL +3 mg/dL; tek yüksek kesinlikli sonuç, diğerleri düşük kesinlik. Sağda panel, solda bal kavanozu.
import React from "react";
import { BaslikBlok, Etiket, IkonYol, INTER, Kamera, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Hap: React.FC<{ t: number; bas: number; metin: string; renk: string; y: number; ikon: "onay" | "uyari" }> = ({ t, bas, metin, renk, y, ikon }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 1440, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al, display: "flex",
      alignItems: "center", gap: 16, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `4px solid ${renk}`, borderRadius: 999,
      padding: "12px 34px 12px 14px", fontFamily: INTER, fontWeight: 800, fontSize: 38, letterSpacing: 2, color: RENK.lacivert,
      boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
      <span style={{ width: 56, height: 56, borderRadius: "50%", background: renk, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <IkonYol ad={ikon} boyut={34} renk="#fff" />
      </span>
      {metin}
    </div>
  );
};

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/17" pencere={kameraYolu(t, s.sure, [0, 60, 1800], [50, 100, 1700])}>
        <Etiket t={t} bas={K(0, "good cholesterol") - 0.2} capa={[190, 300]} konum={[330, 140]} metin="GOOD CHOLESTEROL" renk={RENK.mercan} boyut={26} />
      </Kamera>
      <Panel a={eout(ilerle(t, 0.2, 0.6))} taraf="sag" genislik={940} />
      <BaslikBlok t={t} bas={0.25} satirlar={["HDL"]} x={1840} y={290} boyut={150} hiza="sag" renkler={[RENK.lacivert]} />
      <BaslikBlok t={t} bas={K(0, "rose by")} satirlar={["+3 MG/DL"]} x={1840} y={450} boyut={112} hiza="sag" renkler={[RENK.koyuYesil]} />
      <Hap t={t} bas={K(0, "high certainty") - 0.2} metin="HIGH CERTAINTY" renk={RENK.yesil} y={660} ikon="onay" />
      <Hap t={t} bas={K(1, "low certainty") - 0.2} metin="OTHERS: LOW CERTAINTY" renk={RENK.altin} y={780} ikon="uyari" />
    </>
  );
};

export default S17;
