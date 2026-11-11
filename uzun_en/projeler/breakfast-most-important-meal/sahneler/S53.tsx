// Sahne 53 — Fikir 2: tip 2 diyabette öğle yemeğine dikkat; ölçüm cihazı ve not defteri.
import React from "react";
import { ANTON, BaslikBlok, Etiket, IkonYol, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Hap: React.FC<{ t: number; bas: number; metin: string; y: number; renk: string; ikon?: "uyari" | "onay" }> = ({ t, bas, metin, y, renk, ikon }) => {
  const [sc, al] = pop(t, bas, 0.5);
  return (
    <div style={{ position: "absolute", right: 60, top: y, opacity: al, transform: `scale(${sc})`, transformOrigin: "100% 50%", display: "flex",
      alignItems: "center", gap: 12, background: "#FCF8EC", border: `3px solid ${renk}`, borderRadius: 999, padding: "10px 28px 10px 16px",
      fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 1.5, color: RENK.lacivert, whiteSpace: "nowrap",
      boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
      {ikon && <IkonYol ad={ikon} boyut={34} renk={renk} />}
      {metin}
    </div>
  );
};

const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, 0.05, 0.5);
  return (
    <>
      <Kamera gorsel="tam/53" pencere={kameraYolu(t, s.sure, [0, 40, 1700], [30, 70, 1560])}>
        <Etiket t={t} bas={K(3, "blood sugar")} capa={[690, 350]} konum={[980, 300]} metin="BLOOD SUGAR METER" renk={RENK.mercan} />
        <Etiket t={t} bas={K(3, "compare")} capa={[640, 740]} konum={[960, 800]} metin="NOTEBOOK" renk={RENK.altin} />
      </Kamera>
      <div style={{ position: "absolute", left: 60, top: 100, width: 110, height: 110, borderRadius: "50%", background: RENK.lacivert,
        color: "#fff", opacity: al, transform: `scale(${sc})`, display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: ANTON, fontSize: 68, border: `5px solid ${RENK.altin}` }}>2</div>
      <BaslikBlok t={t} bas={K(1, "pay")} satirlar={["WATCH", "LUNCH"]} x={1860} y={230} boyut={110} hiza="sag" />
      <Hap t={t} bas={K(1, "type")} metin="TYPE 2 DIABETES" y={500} renk={RENK.koyuYesil} />
      <Hap t={t} bas={K(2, "Prediabetes")} metin="PREDIABETES: NOT TESTED" y={590} renk={RENK.altin} ikon="uyari" />
      <Hap t={t} bas={K(3, "share")} metin="SHARE WITH YOUR CARE TEAM" y={680} renk={RENK.yesil} ikon="onay" />
    </>
  );
};
export default S53;
