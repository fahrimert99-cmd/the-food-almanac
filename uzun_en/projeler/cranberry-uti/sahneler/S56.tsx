// Sahne 56 — özet: az yarar gören gruplar ve tedavi olmadığı uyarısı.
import React from "react";
import { Etiket, IkonYol, INTER, ANTON, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Opak zeminli hap (karışık görselin üstünde okunur)
const Hap2: React.FC<{ t: number; bas: number; bitis?: number; metin: string; y: number }> = ({ t, bas, bitis = 1e9, metin, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", right: 50, top: y, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: a, display: "flex",
      alignItems: "center", gap: 14, background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`, borderRadius: 999,
      padding: "10px 28px 10px 14px", fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 1.5, color: RENK.lacivert,
      boxShadow: "0 8px 22px rgba(48,40,34,0.18)", whiteSpace: "nowrap" }}>
      <span style={{ width: 40, height: 40, borderRadius: "50%", background: RENK.mercan, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <IkonYol ad="carpi" boyut={22} renk="#fff" kalinlik={7} />
      </span>
      {metin}
    </div>
  );
};

const S56: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tAz = K(0, "little"), tYasli = K(0, "older adults"), tHamile = K(0, "pregnant"), tMesane = K(0, "bladders");
  const tDegil = K(1, "not a treatment");
  const bit = c[1].bas - 0.2;
  const aBaslik = eout(ilerle(t, tAz, 0.5)) * sol(t, bit);
  const aKart = eout(ilerle(t, tDegil, 0.5));
  return (
    <>
      <Kamera gorsel="tam/56" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 28, 1820])}>
        <Etiket t={t} bas={tYasli} bitis={bit} capa={[640, 640]} konum={[310, 880]} metin="OLDER ADULTS" renk={RENK.mercan} />
      </Kamera>
      {aBaslik > 0 && (
        <div style={{ position: "absolute", right: 50, top: 130, opacity: aBaslik, fontFamily: ANTON, fontSize: 64, color: RENK.mercan,
          background: RENK.kagitAcik, borderRadius: 16, padding: "4px 24px", boxShadow: "0 8px 22px rgba(48,40,34,0.18)" }}>LITTLE EFFECT</div>
      )}
      <Hap2 t={t} bas={tHamile} bitis={bit} metin="PREGNANT WOMEN" y={250} />
      <Hap2 t={t} bas={tMesane} bitis={bit} metin="BLADDER NOT EMPTYING FULLY" y={340} />
      {/* ikinci cümle: tedavi değildir */}
      {aKart > 0 && (
        <div style={{ position: "absolute", left: 60, top: 70, opacity: aKart, transform: `translateY(${(1 - aKart) * -14}px)`,
          background: RENK.kagitAcik, border: `3px solid ${RENK.lacivert}`, borderRadius: 22, padding: "12px 36px 16px",
          boxShadow: "0 10px 26px rgba(48,40,34,0.2)" }}>
          <div style={{ fontFamily: ANTON, fontSize: 78, lineHeight: 1.1, color: RENK.lacivert }}>NOT A TREATMENT</div>
          <div style={{ fontFamily: INTER, fontWeight: 700, fontSize: 30, color: RENK.mercan }}>for an infection you already have</div>
        </div>
      )}
    </>
  );
};

export default S56;
