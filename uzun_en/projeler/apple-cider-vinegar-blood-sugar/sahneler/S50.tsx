// Sahne 50 — 4. ipucu: tabletlerden kaçın. Başlık sol üstte, tablet ve sıvı sirke etiketleri, iki kısa kart.
import React from "react";
import { BaslikBlok, Etiket, IkonYol, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Kart: React.FC<{ t: number; bas: number; metin: string; x: number; y: number; renk: string; ikon: "carpi" | "uyari" }> = ({
  t, bas, metin, x, y, renk, ikon,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
      display: "flex", alignItems: "center", gap: 14, background: "#FCF8EC", border: `3px solid ${renk}`, borderRadius: 999,
      padding: "8px 28px 8px 10px", boxShadow: "0 8px 22px rgba(48,40,34,0.16)", whiteSpace: "nowrap" }}>
      <span style={{ width: 44, height: 44, borderRadius: "50%", background: renk, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <IkonYol ad={ikon} boyut={26} renk="#fff" kalinlik={7} />
      </span>
      <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 32, letterSpacing: 1.5, color: RENK.lacivert }}>{metin}</span>
    </div>
  );
};

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      {/* pencere y<960: alttaki sahte yazı hiç görünmez */}
      <Kamera gorsel="tam/50" pencere={kameraYolu(t, s.sure, [110, 0, 1700], [200, 0, 1600])}>
        <Etiket t={t} bas={K(1, "tablets")} capa={[600, 770]} konum={[430, 640]} metin="TABLETS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "liquid")} capa={[1230, 720]} konum={[1020, 470]} metin="LIQUID VINEGAR" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={0.15} satirlar={s.meta.baslik?.satirlar ?? []} x={100} y={190} boyut={100} />
      <Kart t={t} bas={K(2, "no better")} metin="NO BETTER THAN WATER" x={100} y={410} renk={RENK.mercan} ikon="carpi" />
      <Kart t={t} bas={K(2, "quality")} metin="QUALITY VARIES" x={100} y={500} renk={RENK.altin} ikon="uyari" />
    </>
  );
};

export default S50;
