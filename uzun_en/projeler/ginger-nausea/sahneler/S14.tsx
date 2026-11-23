// Sahne 14 — bulantı düştü ama kusma/ilaç kullanımı belirsiz: sağda iki durumlu karşılaştırma, tepside gerçek nesne etiketi.
import React from "react";
import { Baslik, Etiket, Hap, IkonYol, INTER, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Madde: React.FC<{ t: number; bas: number; y: number; renk: string; ikon: "onay" | "soru" | "uyari"; metin: string }> = ({ t, bas, y, renk, ikon, metin }) => {
  const [sc, al] = pop(t, bas, 0.5);
  return (
    <div style={{ position: "absolute", left: 1160, top: y, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al, display: "flex", alignItems: "center", gap: 14,
      background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999, padding: "8px 28px 8px 10px", whiteSpace: "nowrap", boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
      <span style={{ width: 40, height: 40, borderRadius: "50%", background: renk, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <IkonYol ad={ikon} boyut={26} renk="#fff" kalinlik={7} />
      </span>
      <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 1.5, color: RENK.murekkep }}>{metin}</span>
    </div>
  );
};

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOda = K(0, "recovery room");
  const tZen = K(0, "ginger showed");
  const tKus = K(0, "less vomiting");
  const tIlac = K(0, "anti-nausea");
  const tDaha = K(1, "better trials");
  return (
    <>
      <Kamera gorsel="tam/14" pencere={kameraYolu(t, s.sure, [0, 60, 1920], [40, 100, 1800])}>
        <Etiket t={t} bas={tZen} bitis={tIlac} capa={[680, 590]} konum={[960, 740]} metin="GINGER" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={0.25} metin="NAUSEA: LOWER" x={1160} y={200} boyut={84} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tKus - 0.1} metin="VOMITING: UNCLEAR" x={1160} y={310} boyut={84} renk={RENK.mercan} />
      <Madde t={t} bas={tOda} y={400} renk={RENK.altin} ikon="uyari" metin="EXCEPT: RECOVERY ROOM" />
      <Madde t={t} bas={K(0, "no significant")} y={490} renk={RENK.mercan} ikon="soru" metin="NO SIGNIFICANT LINK" />
      <Madde t={t} bas={tIlac} y={580} renk={RENK.mercan} ikon="soru" metin="ANTI-NAUSEA DRUG USE" />
      <Madde t={t} bas={tDaha} y={720} renk={RENK.lacivert} ikon="onay" metin="AUTHORS: BETTER TRIALS" />
    </>
  );
};
export default S14;
