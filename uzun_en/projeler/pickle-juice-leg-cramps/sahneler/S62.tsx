// Sahne 62 — özet: ilaçlar, kinin, tuz, tıbbi kontrol.
import React from "react";
import { BaslikBlok, Etiket, Hap, IkonYol, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Madde: React.FC<{ t: number; bas: number; y: number; metin: string; renk: string; ikon: "onay" | "carpi" | "uyari" }> = ({ t, bas, y, metin, renk, ikon }) => {
  const [sc, al] = pop(t, bas, 0.5);
  return (
    <div style={{ position: "absolute", left: 1330, top: y, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al, display: "flex", alignItems: "center", gap: 18,
      background: "#FCF8EC", border: `3px solid ${renk}`, borderRadius: 999, padding: "10px 28px 10px 12px", boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
      <div style={{ width: 54, height: 54, borderRadius: "50%", background: renk, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <IkonYol ad={ikon} boyut={32} renk="#fff" />
      </div>
      <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 1.5, color: RENK.murekkep, whiteSpace: "nowrap" }}>{metin}</span>
    </div>
  );
};

const S62: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kam = kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1840]);
  return (
    <>
      <Kamera gorsel="tam/62" pencere={kam}>
        <Etiket t={t} bas={K(0, "medicines")} bitis={6.9} capa={[740, 480]} konum={[330, 430]} metin="MEDICINES" renk={RENK.altin} />
      </Kamera>
      <Madde t={t} bas={K(0, "Check")} y={250} metin="CHECK MEDICINES" renk={RENK.yesil} ikon="onay" />
      <Madde t={t} bas={K(0, "avoid")} y={350} metin="AVOID QUININE" renk={RENK.mercan} ikon="carpi" />
      <Madde t={t} bas={K(0, "go easy")} y={450} metin="GO EASY ON SALT" renk={RENK.altin} ikon="uyari" />
      <BaslikBlok t={t} bas={K(1, "keeps coming back")} satirlar={["RECURRING", "CRAMPS"]} x={70} y={140} boyut={92} />
      <div style={{ position: "absolute", left: 70, top: 345 }}>
        <PillMedical t={t} bas={K(1, "medical check")} />
      </div>
    </>
  );
};

const PillMedical: React.FC<{ t: number; bas: number }> = ({ t, bas }) => {
  const [sc, al] = pop(t, bas, 0.5);
  return (
    <div style={{ transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
      <Hap metin="MEDICAL CHECK" renk={RENK.yesil} boyut={32} />
    </div>
  );
};

export default S62;
