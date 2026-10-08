// Sahne 2 — randomize çalışma: yürüyüş ayakkabıları ve tabak, üstte boş kâğıt.
import React from "react";
import { BaslikBlok, Etiket, INTER, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, ilerle, eout, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Hapcik: React.FC<{ t: number; bas: number; x: number; y: number; metin: string; renk: string; sag?: boolean }> = ({ t, bas, x, y, metin, renk, sag }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", [sag ? "right" : "left"]: sag ? 1920 - x : x, top: y, transform: `scale(${sc})`,
      transformOrigin: sag ? "100% 50%" : "0% 50%", opacity: al, display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap",
      background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999, padding: "10px 26px 10px 18px",
      fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 1.5, color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
      <span style={{ width: 20, height: 20, borderRadius: "50%", background: renk }} />{metin}
    </div>
  );
};

const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/02" pencere={kameraYolu(t, s.sure, [0, 120, 1920], [60, 190, 1780])}>
        <Etiket t={t} bas={K(0, "short")} capa={[330, 850]} konum={[420, 640]} metin="SHORT WALKS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "each")} capa={[1100, 900]} konum={[1130, 600]} metin="AFTER EACH MEAL" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <Hapcik t={t} bas={K(0, "41")} x={140} y={140} metin="41 ADULTS · TYPE 2 DIABETES" renk={RENK.lacivert} />
      <BaslikBlok t={t} bas={K(0, "short")} satirlar={["AFTER-MEAL", "WALKS"]} x={140} y={290} boyut={100} />
      <VurguRozet t={t} bas={K(0, "12")} vurgu="–12%" not="blood sugar after meals" x={1440} y={170} genislik={520} boyut={130} renk={RENK.yesil} />
      <Hapcik t={t} bas={K(0, "compared")} x={1680} y={440} metin="VS. ONE 30 MIN WALK" renk={RENK.mercan} sag />
    </>
  );
};

export default S02;
