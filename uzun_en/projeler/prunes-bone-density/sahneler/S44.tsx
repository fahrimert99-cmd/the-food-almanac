// Sahne 44 — kimler çalışmada yoktu: üst bantta kapsanan ve eksik gruplar.
import React from "react";
import { INTER, Kamera, KaynakEtiketi, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Hp: React.FC<{ t: number; bas: number; bitis?: number; metin: string; renk: string; x: number; y: number; ikon: "onay" | "soru" | "carpi" }> = ({
  t, bas, bitis = 1e9, metin, renk, x, y, ikon,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, opacity: a, transform: `scale(${sc})`, transformOrigin: "0 50%", display: "flex",
      alignItems: "center", gap: 14, background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999, padding: "8px 28px 8px 10px",
      fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.murekkep, whiteSpace: "nowrap",
      boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
      <span style={{ width: 44, height: 44, borderRadius: "50%", background: renk, display: "flex", alignItems: "center", justifyContent: "center",
        color: "#fff", fontSize: 28 }}>{ikon === "onay" ? "✓" : ikon === "carpi" ? "✕" : "?"}</span>
      {metin}
    </div>
  );
};

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pBand = eout(ilerle(t, K(1, "A 2017") - 0.3, 0.6));
  const tCan = K(1, "cannot");
  return (
    <>
      <Kamera gorsel="tam/44" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [110, 70, 1700])} />
      <div style={{ position: "absolute", left: 0, right: 0, top: 0, height: 330, opacity: eout(ilerle(t, 0.1, 0.6)),
        background: `linear-gradient(to bottom, ${kagit(0.92)} 0%, ${kagit(0.85)} 55%, ${kagit(0)} 100%)` }} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(1, "A 2017")} />
      <Hp t={t} bas={K(0, "postmenopausal")} metin="POSTMENOPAUSAL WOMEN" renk={RENK.yesil} ikon="onay" x={120} y={150} />
      <Hp t={t} bas={K(1, "men")} metin="MEN" renk={RENK.mercan} ikon="soru" x={760} y={150} />
      <Hp t={t} bas={K(1, "diverse")} metin="DIVERSE GROUPS" renk={RENK.mercan} ikon="soru" x={1000} y={150} />
      <Hp t={t} bas={K(1, "lacking,")} bitis={tCan - 0.1} metin="RESEARCH LACKING" renk={RENK.mercan} ikon="carpi" x={120} y={245} />
      <Hp t={t} bas={tCan} metin="CAN'T SAY IT CARRIES OVER" renk={RENK.altin} ikon="soru" x={120} y={245} />
    </>
  );
};

export default S44;
