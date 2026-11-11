// Sahne 47 — alışkanlık: etiketi oku. Raf solda; sağda başlık ve Nutrition Facts kartı.
import React from "react";
import { ANTON, Baslik, Etiket, INTER, Kamera, kameraYolu, RENK, SP, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tLabel = K(1, "look"), tFort = K(2, "fortified"), tNut = K(2, "nutrition"), tB12 = K(2, "vitamin");
  const [sk, ak] = pop(t, tNut, 0.5);
  const pB = eout(ilerle(t, tB12, 0.5));
  return (
    <>
      <Kamera gorsel="tam/47" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 50, 1760])}>
        <Etiket t={t} bas={K(2, "breakfast")} bitis={tFort - 0.1} capa={[210, 560]} konum={[700, 500]} metin="BREAKFAST CEREALS" renk={RENK.altin} boyut={32} />
        <Etiket t={t} bas={tFort} capa={[210, 560]} konum={[700, 500]} metin="FORTIFIED" renk={RENK.koyuYesil} boyut={32} />
      </Kamera>
      <Baslik t={t} bas={0.1} bitis={tLabel - 0.1} metin="NOW THE HABITS" x={1000} y={200} boyut={64} renk={RENK.altin} />
      <Baslik t={t} bas={tLabel} metin={s.meta.baslik!.satirlar[0]} x={1000} y={200} boyut={120} renk={RENK.lacivert} />
      <Baslik t={t} bas={tLabel + 0.18} metin={s.meta.baslik!.satirlar[1]} x={1000} y={334} boyut={120} renk={RENK.koyuYesil} />
      {ak > 0 && (
        <div style={{ position: "absolute", left: 1000, top: 540, width: 640, transform: `scale(${sk})`, transformOrigin: "0% 0%", opacity: ak,
          background: "#FCF8EC", border: `5px solid ${RENK.lacivert}`, borderRadius: 8, padding: "14px 26px 22px",
          boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }}>
          <div style={{ fontFamily: ANTON, fontSize: 60, color: RENK.lacivert, borderBottom: `10px solid ${RENK.lacivert}`, paddingBottom: 6 }}>NUTRITION FACTS</div>
          <div style={{ marginTop: 18, padding: "10px 14px", borderRadius: 10, display: "flex", alignItems: "center", gap: 16,
            background: `rgba(184,134,43,${0.25 * pB})`, border: `3px solid rgba(184,134,43,${pB})`,
            fontFamily: INTER, fontWeight: 800, fontSize: 40, color: RENK.lacivert }}>
            <span style={{ width: 22, height: 22, borderRadius: "50%", background: RENK.altin, flex: "none" }} />
            VITAMIN B12
          </div>
        </div>
      )}
    </>
  );
};

export default S47;
