// Sahne 4 — kanal tanıtımı: alt solda kâğıt kart (marka, sonra konu) + dal üstünde etiket.
import React from "react";
import { ANTON, Etiket, INTER, Kamera, MARKA, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, sol } from "../kutuphane";

const Kart: React.FC<{ t: number; bas: number; bitis?: number; ust?: string; metin: string; renk: string }> = ({ t, bas, bitis = 1e9, ust, metin, renk }) => {
  const a = eout(ilerle(t, bas, 0.5)) * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 80, top: 790, opacity: a, transform: `translateY(${(1 - a) * 16}px)`, background: "#FCF8EC",
      border: `4px solid ${renk}`, borderRadius: 26, padding: "14px 36px 20px", boxShadow: "0 10px 26px rgba(48,40,34,0.22)" }}>
      {ust && <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 6, color: RENK.altin }}>{ust}</div>}
      <div style={{ fontFamily: ANTON, fontSize: 84, lineHeight: 1.1, color: renk, whiteSpace: "nowrap" }}>{metin}</div>
    </div>
  );
};

const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const k1 = K(1, "Let's");
  return (
    <>
      <Kamera gorsel="tam/04" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1810])}>
        <Etiket t={t} bas={K(1, "where")} capa={[1560, 150]} konum={[1180, 70]} metin="ORANGES" renk={RENK.altin} />
      </Kamera>
      <Kart t={t} bas={K(0, "This")} bitis={k1 - 0.15} ust="WELCOME TO" metin={MARKA.filigran} renk={RENK.koyuYesil} />
      <Kart t={t} bas={K(1, "what")} metin="WHAT VITAMIN C IS" renk={RENK.lacivert} />
    </>
  );
};

export default S04;
