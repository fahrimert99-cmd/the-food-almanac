// Sahne 54 — kapanış mesajı: sade yulaf, düzenli, doktor tavsiyesiyle; küçük günlük alışkanlık; keyfini çıkar.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, Not, RENK, SP, VurguRozet, INTER, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Pil: React.FC<{ t: number; bas: number; bitis?: number; metin: string; y: number; renk: string }> = ({ t, bas, bitis = 1e9, metin, y, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", right: 60, top: y, opacity: a, transform: `scale(${sc})`, transformOrigin: "100% 50%",
      display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${renk}`,
      borderRadius: 999, padding: "10px 28px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 2,
      color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.2)" }}>
      <span style={{ width: 16, height: 16, borderRadius: "50%", background: renk }} />{metin}
    </div>
  );
};

const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const c1 = K(1, "A") - 0.15, c2 = K(2, "If") - 0.15;
  return (
    <>
      <Kamera gorsel="tam/54" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 32, 1800])}>
        <Etiket t={t} bas={K(0, "Plain")} bitis={c1} capa={[920, 530]} konum={[240, 380]} metin="PLAIN OATS" renk={RENK.altin} />
      </Kamera>
      {/* cümle 0: düzenli + doktor tavsiyesi */}
      <Pil t={t} bas={K(0, "regularly")} bitis={c1} y={640} metin="EATEN REGULARLY" renk={RENK.yesil} />
      <Pil t={t} bas={K(0, "alongside")} bitis={c1} y={740} metin="WITH DOCTOR'S ADVICE" renk={RENK.altin} />
      {/* cümle 1: küçük günlük alışkanlık, gerçek ama mütevazı kanıt */}
      <Baslik t={t} bas={K(1, "small")} bitis={c2} metin="SMALL" x={70} y={300} boyut={80} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "daily")} bitis={c2} metin="DAILY" x={70} y={392} boyut={80} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "habit")} bitis={c2} metin="HABIT" x={70} y={484} boyut={80} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(1, "real,")} bitis={c2} vurgu="REAL" not="IF MODEST, EVIDENCE" x={1680} y={560} genislik={400} boyut={88} renk={RENK.yesil} />
      {/* cümle 2: keyfini çıkar */}
      <Baslik t={t} bas={K(2, "enjoy")} metin="ENJOY" x={70} y={300} boyut={80} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(2, "enjoy") + 0.2} metin="OATS" x={70} y={392} boyut={80} renk={RENK.koyuYesil} />
      <Ikon t={t} bas={K(2, "good")} ad="onay" x={1500} y={690} boyut={84} zemin={RENK.yesil} />
      <Not t={t} bas={K(2, "reason")} metin="GOOD REASON" x={1556} y={662} boyut={40} agirlik={800} />
    </>
  );
};

export default S54;
