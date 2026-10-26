// Sahne 36 — Yardımcı olur ama kusursuz değil: gastritli düzenli tüketicilerde bile %30 düşük; kan testi.
import React from "react";
import { Baslik, Etiket, IkonYol, INTER, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pencere = kameraYolu(t, s.sure, [0, 40, 1760], [60, 70, 1640]);
  const t3 = K(2, "So") - 0.1;
  const [sc, al] = pop(t, K(2, "blood test"), 0.55);
  return (
    <>
      <Kamera gorsel="tam/36" pencere={pencere}>
        <Etiket t={t} bas={K(1, "atrophic")} bitis={t3} capa={[330, 760]} konum={[800, 520]} metin="STILL LOW" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={0.1} bitis={K(1, "Even") + 0.2} metin="HELPS," x={1000} y={200} boyut={120} renk={RENK.lacivert} />
      <Baslik t={t} bas={0.45} bitis={K(1, "Even") + 0.2} metin="NOT PERFECT" x={1000} y={330} boyut={120} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(1, "regular")} bitis={t3} metin="REGULAR FORTIFIED-FOOD EATERS" x={1000} y={170} boyut={28} agirlik={800} renk={RENK.altin} />
      <Not t={t} bas={K(1, "atrophic")} bitis={t3} metin="WITH ATROPHIC GASTRITIS" x={1000} y={215} boyut={28} agirlik={800} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={K(1, "30")} bitis={t3} vurgu="30%" not="WERE LOW IN B12" x={1250} y={290} renk={RENK.mercan} genislik={420} />
      <div style={{ position: "absolute", left: 1290, top: 560, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al, whiteSpace: "nowrap",
        display: "flex", alignItems: "center", gap: 18, background: RENK.kagitAcik, border: `4px solid ${RENK.yesil}`, borderRadius: 999,
        padding: "14px 40px 14px 16px", boxShadow: "0 10px 26px rgba(48,40,34,0.2)" }}>
        <span style={{ width: 62, height: 62, borderRadius: "50%", background: RENK.yesil, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IkonYol ad="onay" boyut={40} renk="#fff" kalinlik={7} />
        </span>
        <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 36, letterSpacing: 2, color: RENK.koyuYesil }}>A BLOOD TEST SHOWS WHERE YOU STAND</span>
      </div>
    </>
  );
};

export default S36;
