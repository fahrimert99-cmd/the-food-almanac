// Sahne 5 — 1 dakikalık onaylı demodan uyarlandı.
import React from "react";
import { AbsoluteFill, AltSis, ANTON, Baslik, Etiket, GorselKart, Img, INTER, Kamera, MARKA, RENK, SP, einout, eout, ilerle, kagit,
  kelimeZamani, kis, pop, random, staticFile } from "../kutuphane";

// --- 5. Başlık kartı ---------------------------------------------------------------
const S05: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const z = ilerle(t, 0, s.sure + 1);
  const p = eout(ilerle(t, 0.05, 0.5));
  const pl = eout(ilerle(t, 0.25, 0.8));
  const pa = eout(ilerle(t, 0.9, 0.6));
  const [sb, ab] = pop(t, K(1, "what actually happens"), 0.55);
  return (
    <>
      <Kamera gorsel="tam/kapak" pencere={[0 + 70 * z, 0 + 40 * z, 1920 - 140 * z]} />
      <AbsoluteFill style={{ background: `radial-gradient(ellipse 62% 58% at 50% 50%, ${kagit(0.95)} 0%, ${kagit(0.9)} 55%, ${kagit(0.62)} 100%)` }} />
      <div style={{ position: "absolute", left: 0, right: 0, top: 330, textAlign: "center", opacity: p,
        fontFamily: INTER, fontWeight: 800, fontSize: 38, letterSpacing: 10, color: RENK.altin }}>{MARKA.filigran}</div>
      <div style={{ position: "absolute", left: 960 - 120 * pl, width: 240 * pl, top: 392, height: 6, background: RENK.altin }} />
      <Baslik t={t} bas={0.35} metin="THE FOOD ORDER EFFECT" x={960} y={520} boyut={150} renk={RENK.koyuYesil} hiza="orta" />
      <div style={{ position: "absolute", left: 0, right: 0, top: 618, textAlign: "center", opacity: pa,
        fontFamily: INTER, fontWeight: 500, fontSize: 46, color: RENK.lacivert }}>{s.meta.kart?.alt ?? "What eating order does to your blood sugar"}</div>
      <div style={{ position: "absolute", left: 960, top: 790, transform: `translate(-50%, -50%) scale(${sb})`, opacity: ab,
        display: "flex", alignItems: "center", gap: 16, background: RENK.lacivert, color: "#fff", borderRadius: 999,
        padding: "12px 30px 12px 14px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 3, whiteSpace: "nowrap" }}>
        <span style={{ background: RENK.altin, borderRadius: 999, padding: "4px 14px", fontSize: 22 }}>PART 1</span>
        WHAT A BLOOD SUGAR SPIKE IS
      </div>
    </>
  );
};

export default S05;
