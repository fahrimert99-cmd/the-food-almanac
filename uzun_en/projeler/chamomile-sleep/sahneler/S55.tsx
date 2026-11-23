// Sahne 55 — özet: küçük denemelerde uykuyu kendi değerlendirmeleri.
import React from "react";
import { Baslik, Etiket, INTER, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Sağ üstteki boş kâğıtta sonuç hapı (sağa hizalı)
const Sonuc: React.FC<{ t: number; bas: number; y: number; metin: string; ad: "onay" | "carpi"; renk: string }> = ({ t, bas, y, metin, ad, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", right: 60, top: y, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: al,
      display: "flex", alignItems: "center", gap: 14, background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999,
      padding: "10px 26px 10px 12px", fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 1.5, color: RENK.murekkep,
      boxShadow: "0 8px 22px rgba(48,40,34,0.16)", whiteSpace: "nowrap" }}>
      <span style={{ width: 44, height: 44, borderRadius: "50%", background: renk, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ color: "#fff", fontSize: 28 }}>{ad === "onay" ? "✓" : "✕"}</span>
      </span>
      {metin}
    </div>
  );
};

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const w = kameraYolu(t, s.sure, [0, 0, 1920], [60, 34, 1800]);
  const tBaslik = K(0, "sleep quality") - 0.4;
  return (
    <>
      <Kamera gorsel="tam/55" pencere={w}>
        <Etiket t={t} bas={K(0, "chamomile")} bitis={K(1, "But")} capa={[780, 830]} konum={[300, 830]} metin="CHAMOMILE" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "drinking tea")} capa={[1150, 600]} konum={[1580, 470]} metin="TEA" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={tBaslik} metin="SLEEP" x={60} y={190} boyut={120} renk={RENK.lacivert} />
      <Baslik t={t} bas={tBaslik + 0.16} metin="QUALITY" x={60} y={305} boyut={120} renk={RENK.koyuYesil} />
      <Not t={t} bas={tBaslik + 0.5} metin="self-rated, in small trials" x={64} y={390} boyut={30} genislik={420} />
      <Sonuc t={t} bas={K(0, "older adults")} y={150} metin="OLDER ADULTS · EXTRACT" ad="onay" renk={RENK.yesil} />
      <Sonuc t={t} bas={K(0, "new mothers")} y={240} metin="NEW MOTHERS · TEA" ad="onay" renk={RENK.yesil} />
      <Sonuc t={t} bas={K(1, "no clear")} y={330} metin="INSOMNIA · NO CLEAR DIFFERENCE" ad="carpi" renk={RENK.mercan} />
    </>
  );
};

export default S55;
