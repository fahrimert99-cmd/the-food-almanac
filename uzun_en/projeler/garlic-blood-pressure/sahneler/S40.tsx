// Sahne 40 — bölüm kartı: güvenlik ve kan sulandırıcılar.
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: bölüm sahnelerinden 4:3 kırpımlar (şişe rafı, kavanoz kapağı)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/42", kirp: [480, 100, 1480, 850] },
  { gorsel: "tam/39", kirp: [560, 20, 1160, 470] },
];

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bas = K(0, "blood thinners");
  const [sc, al] = pop(t, bas, 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 810, display: "flex", alignItems: "center", gap: 16,
        transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al, whiteSpace: "nowrap", background: RENK.kagitAcik,
        border: `3px solid ${RENK.mercan}`, borderRadius: 999, padding: "10px 28px 10px 14px", fontFamily: INTER,
        fontWeight: 800, fontSize: 28, letterSpacing: 2, color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        <span style={{ width: 20, height: 20, borderRadius: "50%", background: RENK.mercan }} />
        BLOOD THINNERS
      </div>
    </>
  );
};

export default S40;
