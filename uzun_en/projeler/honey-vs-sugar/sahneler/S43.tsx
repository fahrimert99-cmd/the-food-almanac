// Sahne 43 — market rafı: FDA kuralı (tek içerikli balda eklenmiş şeker gramı şart değil, % günlük değer şart).
import React from "react";
import { ANTON, Etiket, INTER, Kamera, KaynakEtiketi, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, IkonYol } from "../kutuphane";

const Satir: React.FC<{ t: number; bas: number; ad: string; durum: string; onay: boolean; y: number }> = ({ t, bas, ad, durum, onay, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  const renk = onay ? RENK.yesil : RENK.mercan;
  return (
    <div style={{ position: "absolute", left: 40, right: 40, top: y, opacity: al, transform: `scale(${0.9 + 0.1 * sc})`, transformOrigin: "0 50%",
      borderTop: `3px solid ${RENK.lacivert}`, paddingTop: 18 }}>
      <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 32, letterSpacing: 1, color: RENK.lacivert }}>{ad}</div>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 10 }}>
        <div style={{ width: 52, height: 52, borderRadius: "50%", background: renk, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IkonYol ad={onay ? "onay" : "carpi"} boyut={32} renk="#fff" />
        </div>
        <span style={{ fontFamily: ANTON, fontSize: 54, color: renk, letterSpacing: 1 }}>{durum}</span>
      </div>
    </div>
  );
};

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tKart = K(1, "FDA");
  const pKart = eout(ilerle(t, tKart - 0.1, 0.6));
  const [sj, aj] = pop(t, K(1, "look for that"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/43" pencere={kameraYolu(t, s.sure, [30, 20, 1860], [100, 60, 1720])}>
        <Etiket t={t} bas={K(0, "pure honey")} bitis={K(1, "FDA") - 0.1} capa={[1467, 700]} konum={[1467, 905]} metin="PURE HONEY" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "look for that") + 0.2} capa={[1467, 700]} konum={[1467, 905]} metin="THE JAR" renk={RENK.yesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(0, "On the shelf")} />
      {/* etiket şeması kartı (raf üstünde opak; sol alttaki sahte yazılı kutuyu da örter) */}
      <div style={{ position: "absolute", left: 70, top: 200, width: 700, height: 650, opacity: pKart, transform: `translateY(${(1 - pKart) * 20}px)`,
        background: RENK.kagitAcik, border: `4px solid ${RENK.lacivert}`, borderRadius: 22, boxShadow: "0 16px 40px rgba(48,40,34,0.28)" }}>
        <div style={{ padding: "26px 40px 0", fontFamily: ANTON, fontSize: 62, lineHeight: 1.05, color: RENK.lacivert }}>FDA LABEL RULES</div>
        <div style={{ padding: "6px 40px 0", fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 3, color: RENK.altin,
          opacity: eout(ilerle(t, K(1, "single-ingredient"), 0.5)) }}>SINGLE-INGREDIENT HONEY</div>
        <Satir t={t} bas={K(1, "grams line")} ad="ADDED SUGARS (GRAMS)" durum="NOT REQUIRED" onay={false} y={190} />
        <Satir t={t} bas={K(1, "percent daily value")} ad="% DAILY VALUE" durum="STILL REQUIRED" onay y={380} />
      </div>
      {aj > 0 && (
        <div style={{ position: "absolute", left: 110, top: 745, transform: `scale(${sj})`, transformOrigin: "0 50%", opacity: aj, background: RENK.yesil,
          color: "#fff", borderRadius: 999, padding: "12px 30px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 2 }}>LOOK FOR IT ON THE JAR</div>
      )}
    </>
  );
};

export default S43;
