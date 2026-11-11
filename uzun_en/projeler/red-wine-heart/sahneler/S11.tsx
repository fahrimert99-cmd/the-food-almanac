// Sahne 11 — kim "içmeyen" grubunda: sağda boş kâğıt üstünde yazılar
import React from "react";
import { BaslikBlok, Etiket, INTER, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Kapsul: React.FC<{ t: number; bas: number; metin: string }> = ({ t, bas, metin }) => {
  const [sc, al] = pop(t, bas, 0.5);
  return (
    <div style={{ transform: `scale(${sc})`, opacity: al, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`,
      borderRadius: 999, padding: "8px 24px", fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 1.5, color: RENK.murekkep,
      boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>{metin}</div>
  );
};

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/11" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1820])} />
      <Not t={t} bas={K(0, "non-drinking")} metin="THE NON-DRINKING GROUP" x={1000} y={150} boyut={44} agirlik={800} renk={RENK.lacivert} />
      <Etiket t={t} bas={K(1, "never")} capa={[105, 560]} konum={[420, 430]} metin="NEVER DRANK" renk={RENK.yesil} />
      <Liste t={t} ogeler={[{ bas: K(2, "used to drink"), metin: "USED TO DRINK, THEN STOPPED", renk: RENK.mercan }]} x={1000} y={250}
        isaret="nokta" boyut={36} genislik={860} />
      <div style={{ position: "absolute", left: 1000, top: 380, display: "flex", gap: 18 }}>
        <Kapsul t={t} bas={K(2, "illness")} metin="ILLNESS" />
        <Kapsul t={t} bas={K(2, "medicines")} metin="NEW MEDICINES" />
        <Kapsul t={t} bas={K(2, "frailty")} metin="FRAILTY" />
      </div>
      <Etiket t={t} bas={K(2, "medicines") + 0.3} capa={[210, 900]} konum={[430, 720]} metin="MEDICINES" renk={RENK.mercan} />
      <BaslikBlok t={t} bas={K(2, "which") } satirlar={["QUIT", "FOR A REASON"]} x={1860} y={610} boyut={100} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
    </>
  );
};
export default S11;
