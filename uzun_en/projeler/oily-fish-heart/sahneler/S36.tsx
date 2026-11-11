// Sahne 36 — gözlemsel çalışmalar: bağ ≠ neden; masadaki yemek ve ayakkabılarla "diğer farklar".
import React from "react";
import { Baslik, Etiket, IkonYol, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pencere = kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800]);
  const [sk, ak] = pop(t, K(0, "observational"), 0.55);
  const [sa, aa] = pop(t, K(1, "adjust"), 0.55);
  return (
    <>
      <Kamera gorsel="tam/36" pencere={pencere}>
        <Etiket t={t} bas={K(1, "exercise") - 0.1} capa={[1620, 820]} konum={[1380, 900]} metin="HOW THEY EXERCISE" renk={RENK.altin} boyut={26} />
        <Etiket t={t} bas={K(1, "what else") - 0.1} capa={[1110, 400]} konum={[1330, 210]} metin="WHAT ELSE THEY EAT" renk={RENK.mercan} boyut={26} />
      </Kamera>
      {/* kart: duvarın açık bölgesinde başlık */}
      {ak > 0 && (
        <div style={{ position: "absolute", left: 470, top: 80, width: 560, height: 190, opacity: ak, transform: `scale(${sk})`, transformOrigin: "0% 0%",
          background: RENK.kagitAcik, border: `3px solid ${RENK.lacivert}`, borderRadius: 22, boxShadow: "0 12px 28px rgba(48,40,34,0.2)" }}>
          <div style={{ padding: "14px 26px 0", fontFamily: INTER, fontWeight: 800, fontSize: 24, letterSpacing: 4, color: RENK.altin }}>OBSERVATIONAL STUDIES</div>
        </div>
      )}
      <Baslik t={t} bas={K(0, "a link") - 0.1} metin="A LINK," x={500} y={170} boyut={64} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "not a cause") - 0.05} metin="NOT A CAUSE" x={500} y={238} boyut={64} renk={RENK.mercan} />
      {aa > 0 && (
        <div style={{ position: "absolute", left: 140, top: 880, transform: `scale(${sa})`, transformOrigin: "0% 50%", opacity: aa,
          display: "flex", alignItems: "center", gap: 12, background: RENK.kagitAcik, border: `3px solid ${RENK.yesil}`, borderRadius: 999,
          padding: "10px 26px 10px 12px", fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 1.5, color: RENK.lacivert,
          whiteSpace: "nowrap", boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
          <span style={{ width: 36, height: 36, borderRadius: "50%", background: RENK.yesil, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <IkonYol ad="onay" boyut={22} renk="#fff" kalinlik={7} /></span>
          RESEARCHERS TRY TO ADJUST
        </div>
      )}
    </>
  );
};

export default S36;
