// Sahne 58 — Kapanış kartı (görselsiz): kanal adı, "EVIDENCE OVER HYPE", abone ol çağrısı ("subscribe" ile),
// eğitim amaçlı uyarısı ("education only" ile, okunaklı kart), sağda videodan üç küçük görsel kartı.
// Kart sonda solmaz; videonun kâğıda solması Tam kompozisyonunda otomatik.
import React from "react";
import { AbsoluteFill, Baslik, GorselKart, INTER, MARKA, RENK, SP, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

// videodan kusursuz 4:3 kırpımlar: açılış tabağı, kapanış tabağı, salata kâsesi
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/01", kirp: [440, 110, 1400, 830] },
  { gorsel: "tam/57", kirp: [420, 120, 1700, 1080] },
  { gorsel: "tam/45", kirp: [200, 330, 1080, 990] },
];
const X0 = 140;

const S58: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const k = s.meta.kart ?? { ust: MARKA.filigran, baslik: "Evidence over hype", alt: "For education only · not medical advice" };
  const tAbone = K(0, "subscribe"), tKanal = K(0, MARKA.ad), tBilim = K(0, "food science"), tAcik = K(0, "explained");
  const tEgitim = K(1, "for education"), tTibbi = K(1, "medical advice"), tGorusuruz = K(2, "See you");
  const kayma = ilerle(t, 0, s.sure + 1);
  const p = eout(ilerle(t, 0.05, 0.5));
  const pl = eout(ilerle(t, 0.3, 0.8));
  // kanal adı söylenince hafif nabız
  const nabiz = Math.sin(Math.PI * ilerle(t, tKanal, 0.6));
  const [sa, aa] = pop(t, tAbone - 0.05, 0.55);
  const halka = ilerle(t, tAbone + 0.15, 1.0);
  const aB = eout(ilerle(t, tBilim - 0.1, 0.5)), aA = eout(ilerle(t, tAcik - 0.1, 0.5));
  const [su, au] = pop(t, tEgitim - 0.05, 0.55);
  const pAlti = eout(ilerle(t, tTibbi, 0.6));
  const [ust, alt] = k.alt.split("·").map((x) => x.trim());
  const satir = ikiSatirBaslik(k.baslik);
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 80% 70% at 35% 50%, #FBF8F1 0%, ${RENK.kagit} 60%, #EFE9DC 100%)` }}>
      {/* sağ: görsel kartları yelpaze */}
      {GORSELLER.map((g, i) => (
        <GorselKart key={i} t={t} bas={0.45 + i * 0.22} gorsel={g.gorsel} kirp={g.kirp} x={1458 + (i - 1) * 172 + kayma * 12}
          y={505 + Math.abs(i - 1) * 48 - kayma * 8} w={356} h={267} aci={-8 + 8 * i} />
      ))}
      <Baslik t={t} bas={tGorusuruz - 0.05} metin="SEE YOU IN THE NEXT ONE" x={1468} y={800} boyut={28} renk={RENK.altin} hiza="orta"
        font="inter" aralik={5} />

      {/* sol: kanal adı + başlık */}
      <div style={{ position: "absolute", left: X0, top: 196, opacity: p, transform: `translateY(${(1 - p) * 14}px) scale(${1 + 0.05 * nabiz})`,
        transformOrigin: "0 50%", fontFamily: INTER, fontWeight: 800, fontSize: 36, letterSpacing: 10, color: RENK.altin }}>{k.ust}</div>
      <div style={{ position: "absolute", left: X0, top: 254, height: 6, width: 220 * pl + 120 * nabiz, background: RENK.altin }} />
      {satir.map((m, i) => (
        <Baslik key={m} t={t} bas={0.35 + i * 0.16} metin={m} x={X0} y={362 + i * 160} boyut={148}
          renk={i === satir.length - 1 ? RENK.koyuYesil : RENK.lacivert} />
      ))}

      {/* abone ol */}
      <div style={{ position: "absolute", left: X0, top: 632, display: "flex", alignItems: "center", gap: 30 }}>
        <div style={{ position: "relative", transform: `scale(${sa})`, transformOrigin: "50% 50%", opacity: aa }}>
          {halka > 0 && halka < 1 && (
            <div style={{ position: "absolute", inset: 0, borderRadius: 999, border: `4px solid ${RENK.altin}`,
              transform: `scale(${1 + 0.22 * halka}, ${1 + 0.6 * halka})`, opacity: 1 - halka }} />
          )}
          <div style={{ display: "flex", alignItems: "center", gap: 16, background: RENK.lacivert, color: "#fff", borderRadius: 999,
            padding: "12px 36px 12px 12px", fontFamily: INTER, fontWeight: 800, fontSize: 32, letterSpacing: 3, whiteSpace: "nowrap",
            boxShadow: "0 10px 24px rgba(48,40,34,0.22)" }}>
            <span style={{ width: 54, height: 54, borderRadius: "50%", background: RENK.altin, display: "flex", alignItems: "center",
              justifyContent: "center" }}>
              <svg width={24} height={24} viewBox="0 0 24 24"><polygon points="7,4 21,12 7,20" fill="#fff" /></svg>
            </span>
            SUBSCRIBE
          </div>
        </div>
        <div style={{ fontFamily: INTER, fontWeight: 500, fontSize: 33, lineHeight: 1.3, color: RENK.lacivert, whiteSpace: "nowrap" }}>
          <div style={{ opacity: aB, transform: `translateY(${(1 - aB) * 10}px)` }}>for more <b style={{ fontWeight: 800 }}>food science</b>,</div>
          <div style={{ opacity: aA, transform: `translateY(${(1 - aA) * 10}px)` }}>explained calmly and honestly.</div>
        </div>
      </div>

      {/* uyarı kartı */}
      <div style={{ position: "absolute", left: X0, top: 788, transform: `scale(${su})`, transformOrigin: "0 50%", opacity: au,
        display: "flex", alignItems: "center", gap: 20, background: "#FCF8EC", border: `3px solid ${RENK.lacivert}`, borderRadius: 22,
        padding: "16px 34px 16px 18px", boxShadow: "0 10px 24px rgba(48,40,34,0.14)", whiteSpace: "nowrap" }}>
        <span style={{ width: 50, height: 50, borderRadius: "50%", background: RENK.lacivert, color: "#fff", display: "flex", alignItems: "center",
          justifyContent: "center", fontFamily: INTER, fontWeight: 800, fontSize: 32 }}>i</span>
        <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 36, color: RENK.lacivert }}>{ust}</span>
        <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 36, color: RENK.altin }}>·</span>
        <span style={{ position: "relative", fontFamily: INTER, fontWeight: 800, fontSize: 36, color: RENK.lacivert }}>
          {alt}
          <span style={{ position: "absolute", left: 0, bottom: -4, height: 5, borderRadius: 3, width: `${100 * pAlti}%`, background: RENK.altin }} />
        </span>
      </div>
    </AbsoluteFill>
  );
};

// "Evidence over hype" -> ["EVIDENCE", "OVER HYPE"]
const ikiSatirBaslik = (m: string) => {
  const u = m.toUpperCase(), i = u.indexOf(" ");
  return i < 0 ? [u] : [u.slice(0, i), u.slice(i + 1)];
};

export default S58;
