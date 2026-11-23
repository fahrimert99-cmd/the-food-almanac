// Sahne 28 — 2024 şemsiye derleme: 15 meta-analiz, düşük kalite.
import React from "react";
import { Baslik, BaslikBlok, Etiket, KaynakEtiketi, Kamera, Not, RENK, SP, INTER, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Hap: React.FC<{ t: number; bas: number; metin: string; renk: string; y: number }> = ({ t, bas, metin, renk, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", right: 60, top: y, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: al,
      background: renk, color: "#fff", borderRadius: 999, padding: "12px 34px", fontFamily: INTER, fontWeight: 800, fontSize: 40,
      letterSpacing: 2, boxShadow: "0 8px 22px rgba(48,40,34,0.2)" }}>{metin}</div>
  );
};

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), m = s.meta;
  const t15 = K(0, "15"), tMeta = K(0, "meta-analyses"), tVer = K(1, "verdict"), tMet = K(1, "methodological"), tLow = K(1, "low"), tCrit = K(1, "critically");
  return (
    <>
      <Kamera gorsel="tam/28" pencere={kameraYolu(t, s.sure, [0, 40, 1800], [40, 60, 1720])}>
        <Etiket t={t} bas={tMeta} capa={[560, 190]} konum={[1020, 190]} metin="META-ANALYSES" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "ginger")} bitis={tVer} capa={[900, 740]} konum={[1180, 850]} metin="GINGER" renk={RENK.koyuYesil} />
      </Kamera>
      {m.etiket && <KaynakEtiketi t={t} metin={m.etiket} bas={K(0, "2024")} />}
      <BaslikBlok t={t} bas={t15} bitis={tVer - 0.2} satirlar={["15 REVIEWS"]} x={1860} y={400} boyut={140} hiza="sag" renkler={[RENK.koyuYesil]} />
      <Baslik t={t} bas={tVer} metin="THE VERDICT" x={1860} y={330} boyut={110} renk={RENK.lacivert} hiza="sag" />
      <Not t={t} bas={tMet} metin="methodological quality" x={1860} y={430} hiza="sag" genislik={700} boyut={38} />
      <Hap t={t} bas={tLow} metin="LOW" renk={RENK.altin} y={520} />
      <Hap t={t} bas={tCrit} metin="CRITICALLY LOW" renk={RENK.mercan} y={620} />
    </>
  );
};

export default S28;
