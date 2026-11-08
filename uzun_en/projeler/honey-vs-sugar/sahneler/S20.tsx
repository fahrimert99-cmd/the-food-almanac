// Sahne 20 — ham bal / tek çiçekli bal tanımı. Sol boş kâğıtta başlıklar; sağda kavanoz ve çiçek.
import React from "react";
import { Baslik, BaslikBlok, Etiket, INTER, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Hap: React.FC<{ t: number; bas: number; metin: string; ek?: string; y: number; renk: string }> = ({ t, bas, metin, ek, y, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 80, top: y, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al, display: "flex",
      alignItems: "center", gap: 14, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999,
      padding: "8px 26px 8px 16px", fontFamily: INTER, fontWeight: 800, fontSize: 34, letterSpacing: 2, color: RENK.lacivert,
      boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
      <span style={{ width: 20, height: 20, borderRadius: "50%", background: renk }} />
      {metin}
      {ek && <span style={{ fontSize: 24, color: renk, borderLeft: `3px solid ${renk}`, paddingLeft: 14 }}>{ek}</span>}
    </div>
  );
};

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t2 = K(1, "single-flower");
  return (
    <>
      <Kamera gorsel="tam/20" pencere={kameraYolu(t, s.sure, [0, 40, 1800], [60, 90, 1700])}>
        <Etiket t={t} bas={K(0, "raw honey") + 0.1} bitis={2.7} capa={[1240, 700]} konum={[700, 470]} metin="RAW HONEY" renk={RENK.altin} boyut={26} />
        <Etiket t={t} bas={K(1, "blossom")} capa={[1555, 830]} konum={[1590, 690]} metin="ONE BLOSSOM" renk={RENK.koyuYesil} boyut={26} />
      </Kamera>
      <BaslikBlok t={t} bas={0.1} bitis={2.7} satirlar={["RAW", "HONEY"]} x={80} y={210} boyut={120} />
      <Not t={t} bas={K(0, "processed") - 0.4} bitis={2.7} metin="NOT PROCESSED" x={84} y={460} boyut={44} agirlik={800} renk={RENK.altin} />
      <BaslikBlok t={t} bas={t2} satirlar={["SINGLE-FLOWER", "HONEY"]} x={80} y={200} boyut={100} />
      <Not t={t} bas={K(1, "one kind")} metin="ONE KIND OF BLOSSOM" x={84} y={430} boyut={34} agirlik={700} />
      <Hap t={t} bas={K(1, "clover")} metin="CLOVER" y={540} renk={RENK.yesil} />
      <Hap t={t} bas={K(1, "robinia")} metin="ROBINIA" y={625} renk={RENK.koyuYesil} ek={t >= K(1, "acacia") - 0.1 ? "ACACIA" : undefined} />
    </>
  );
};

export default S20;
