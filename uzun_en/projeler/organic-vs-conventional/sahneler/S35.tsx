// Sahne 35 — basitleştirilmiş skor: tabak solda, sağda iki sonuç satırı + kırılgan alt grup notu.
import React from "react";
import { BaslikBlok, Etiket, Hap, IkonYol, INTER, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Satir: React.FC<{ t: number; bas: number; y: number; ad: string; ok: boolean }> = ({ t, bas, y, ad, ok }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const r = ok ? RENK.yesil : RENK.mercan;
  return (
    <div style={{ position: "absolute", left: 1190, top: y, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al,
      display: "flex", alignItems: "center", gap: 20 }}>
      <div style={{ width: 62, height: 62, borderRadius: "50%", background: r, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <IkonYol ad={ok ? "onay" : "carpi"} boyut={36} renk="#fff" />
      </div>
      <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 38, letterSpacing: 1, color: RENK.lacivert, whiteSpace: "nowrap" }}>{ad}</div>
    </div>
  );
};

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tF = K(1, "fragile");
  const [sc, al] = pop(t, tF, 0.5);
  return (
    <>
      <Kamera gorsel="tam/35" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1800])} />
      <Etiket t={t} bas={K(0, "plant foods")} capa={[560, 560]} konum={[880, 800]} metin="PLANT FOODS ONLY" renk={RENK.yesil} boyut={26} />
      <BaslikBlok t={t} bas={K(0, "simplified")} satirlar={["PLANTS OR", "THE LABEL?"]} x={1190} y={440} boyut={92} />
      <Satir t={t} bas={K(0, "held")} y={640} ad="OVERALL RESULT" ok />
      <Satir t={t} bas={K(0, "no longer")} y={730} ad="BREAST CANCER LINK" ok={false} />
      <Not t={t} bas={K(0, "no longer")} metin="NO LONGER SIGNIFICANT" x={1272} y={780} boyut={28} renk={RENK.mercan} agirlik={700} />
      <div style={{ position: "absolute", left: 1190, top: 880, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
        <Hap metin="FRAGILE SUBGROUP FINDING" renk={RENK.altin} boyut={28} />
      </div>
    </>
  );
};
export default S35;
