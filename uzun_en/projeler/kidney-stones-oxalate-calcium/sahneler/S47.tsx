// Sahne 47 — Farklı taşlar: ürik asit → bitki ağırlıklı; sistin ve struvit → daha çok sıvı + başka tedavi.
import React from "react";
import { BaslikBlok, Etiket, Hap, IkonYol, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Sağ sütundaki kart: üstte taş türü hapları, altında anlatımdaki sonuç
const Kart: React.FC<{ t: number; y: number; h: number; basliklar: { bas: number; metin: string }[]; sonBas: number; sonuc: string; renk: string }> = ({
  t, y, h, basliklar, sonBas, sonuc, renk,
}) => {
  const [sk, ak] = pop(t, basliklar[0].bas - 0.1, 0.5);
  const [ss, as] = pop(t, sonBas, 0.5);
  if (ak <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 1230, top: y, width: 630, height: h, opacity: ak, transform: `scale(${sk})`, transformOrigin: "50% 0%",
      background: "#FCF8EC", border: `4px solid ${renk}`, borderRadius: 26, boxShadow: "0 10px 26px rgba(48,40,34,0.18)", padding: "20px 24px" }}>
      <div style={{ display: "flex", gap: 14 }}>
        {basliklar.map((b) => {
          const [bs, ba] = pop(t, b.bas, 0.45);
          return <div key={b.metin} style={{ transform: `scale(${bs})`, opacity: ba, transformOrigin: "0% 50%" }}><Hap metin={b.metin} renk={renk} boyut={28} /></div>;
        })}
      </div>
      <div style={{ marginTop: 18, display: "flex", alignItems: "center", gap: 16, opacity: as, transform: `scale(${ss})`, transformOrigin: "0% 50%" }}>
        <IkonYol ad="ok" boyut={46} renk={renk} kalinlik={8} />
        <div style={{ fontFamily: "Anton, sans-serif", fontSize: 44, lineHeight: 1.12, color: RENK.lacivert, letterSpacing: 1 }}>{sonuc}</div>
      </div>
    </div>
  );
};

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/47" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 20, 1860])} sinirla={false}>
        <Etiket t={t} bas={K(0, "plant-centered")} capa={[800, 330]} konum={[1070, 330]} metin="PLANTS" renk={RENK.yesil} boyut={26} />
        <Etiket t={t} bas={K(0, "higher fluid")} capa={[935, 650]} konum={[1060, 470]} metin="WATER" renk={RENK.yesil} boyut={26} />
      </Kamera>
      <BaslikBlok t={t} bas={0.1} satirlar={b.satirlar} x={1240} y={190} boyut={110} renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Kart t={t} y={440} h={200} basliklar={[{ bas: K(0, "Uric"), metin: "URIC ACID" }]} sonBas={K(0, "plant-centered")}
        sonuc="PLANT-CENTERED EATING" renk={RENK.altin} />
      <Kart t={t} y={690} h={240} basliklar={[{ bas: K(0, "cystine"), metin: "CYSTINE" }, { bas: K(0, "struvite"), metin: "STRUVITE" }]}
        sonBas={K(0, "higher fluid")} sonuc="HIGHER FLUID + OTHER TREATMENT" renk={RENK.koyuYesil} />
    </>
  );
};

export default S47;
