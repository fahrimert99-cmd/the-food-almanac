// Sahne 55 — İPUCU 2: ılımlılık. Görselin sağ yarısı boş kâğıt; başlık + 11 G rozeti orada.
import React from "react";
import { ANTON, BaslikBlok, Etiket, IkonYol, INTER, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik;
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [0, 40, 1800]);
  const tMore = K(3, "more wasn't");
  const [sc, al] = pop(t, tMore, 0.55);
  const [rs, ra] = pop(t, K(2, "11 grams") - 0.1, 0.6);
  return (
    <>
      <Kamera gorsel="tam/55" pencere={p}>
        <Etiket t={t} bas={K(2, "soy protein")} capa={[540, 640]} konum={[1100, 905]} metin="SOY PROTEIN" renk={RENK.altin} />
      </Kamera>
      {/* görselin sağ kenarındaki sert kesik: kâğıt geçişiyle örtülür */}
      <div style={{ position: "absolute", left: 800, top: 0, bottom: 0, right: 0,
        background: `linear-gradient(to right, rgba(246,243,236,0) 0%, rgba(246,243,236,0.9) 12%, ${RENK.kagit} 24%, ${RENK.kagit} 100%)` }} />
      <BaslikBlok t={t} bas={K(1, "moderate")} satirlar={b?.satirlar ?? ["MODERATE", "IS ENOUGH"]} x={1110} y={140} boyut={100}
        renkler={[RENK.lacivert, RENK.koyuYesil]} adim={0.3} />
      <Not t={t} bas={K(2, "vanderbilt")} metin="VANDERBILT · SHANGHAI STUDY" x={1114} y={400} boyut={30} renk={RENK.gri} agirlik={800} />
      <div style={{ position: "absolute", left: 1500, top: 470, width: 640, transform: `translate(-50%, 0) scale(${rs})`, transformOrigin: "50% 0", opacity: ra,
        padding: "8px 24px 18px", textAlign: "center", background: "#FCF8EC", border: `4px solid ${RENK.altin}`, borderRadius: 26,
        boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }}>
        <div style={{ fontFamily: ANTON, fontSize: 130, lineHeight: 1.05, color: RENK.altin }}>{b?.vurgu ?? "11 G"}</div>
        <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 26, lineHeight: 1.25, color: RENK.lacivert }}>{b?.not}</div>
      </div>
      <div style={{ position: "absolute", left: 1200, top: 830, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al, display: "flex", alignItems: "center", gap: 14,
        background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`, borderRadius: 999, padding: "8px 26px 8px 10px", fontFamily: INTER,
        fontWeight: 800, fontSize: 28, letterSpacing: 1, color: RENK.murekkep, whiteSpace: "nowrap" }}>
        <span style={{ width: 40, height: 40, borderRadius: "50%", background: RENK.mercan, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IkonYol ad="carpi" boyut={22} renk="#fff" />
        </span>
        MORE: NO EXTRA BENEFIT
      </div>
    </>
  );
};

export default S55;
