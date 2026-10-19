// Sahne 21 — Çoğu karşılaştırmada fark yok; fark varsa dondurulmuş daha sık önde
import React from "react";
import { BaslikBlok, Kamera, KaynakEtiketi, RENK, SP, ANTON, INTER, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const t2 = K(1, "frozen");
  const [sc, al] = pop(t, t2, 0.6);
  return (
    <>
      <Kamera gorsel="tam/21" pencere={kameraYolu(t, s.sure, [20, 20, 1840], [110, 60, 1700])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <BaslikBlok t={t} bas={0.1} satirlar={b.satirlar} x={1860} y={170} boyut={100} hiza="sag" renkler={[RENK.altin, RENK.koyuYesil]} />
      {al > 0 && (
        <div style={{ position: "absolute", left: 70, top: 118, transformOrigin: "0 0", transform: `scale(${sc})`, opacity: al, display: "flex", alignItems: "center", gap: 20,
          background: RENK.kagitAcik, border: `4px solid ${RENK.yesil}`, borderRadius: 999, padding: "12px 38px", boxShadow: "0 10px 26px rgba(48,40,34,0.2)", whiteSpace: "nowrap" }}>
          <span style={{ fontFamily: ANTON, fontSize: 56, color: RENK.yesil, letterSpacing: 1 }}>FROZEN</span>
          <span style={{ fontFamily: ANTON, fontSize: 56, color: RENK.altin }}>›</span>
          <span style={{ fontFamily: ANTON, fontSize: 56, color: RENK.lacivert, letterSpacing: 1 }}>FRESH-STORED</span>
          <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 28, color: RENK.gri }}>MORE OFTEN</span>
        </div>
      )}
    </>
  );
};

export default S21;
