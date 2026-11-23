// Sahne 13 — üçüncü filtre yok: asıl soru iki organ daha iyi çalışıyor mu
import React from "react";
import { Baslik, Etiket, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tThird = K(0, "third filter"), tQ = K(1, "real question"), tOrg = K(1, "two organs"), tBet = K(1, "work better"), tRes = K(2, "researchers");
  const [sc, al] = pop(t, tRes, 0.5);
  return (
    <>
      <Kamera gorsel="tam/13" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1780])} />
      <Etiket t={t} bas={tThird} bitis={tQ} capa={[720, 470]} konum={[720, 250]} metin="NO THIRD FILTER" renk={RENK.mercan} boyut={32} />
      {/* soru bandı: dağınık arka planın üstünde kâğıt zemin */}
      <div style={{ position: "absolute", left: 960, top: 90, transform: "translateX(-50%)", width: 880, height: 130, background: "rgba(246,243,236,0.9)",
        borderRadius: 24, opacity: al >= 0 && t >= tQ ? 1 : 0 }} />
      <Baslik t={t} bas={tQ} metin="DO THEY WORK" x={960} y={125} boyut={64} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={tBet} metin="BETTER?" x={960} y={188} boyut={64} renk={RENK.koyuYesil} hiza="orta" />
      <Etiket t={t} bas={tOrg} capa={[520, 660]} konum={[330, 880]} metin="LIVER" renk={RENK.altin} />
      <Etiket t={t} bas={tOrg + 0.25} capa={[1500, 740]} konum={[1600, 890]} metin="KIDNEYS" renk={RENK.altin} />
      <div style={{ position: "absolute", left: 960, top: 880, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al, background: RENK.lacivert,
        color: "#fff", borderRadius: 999, padding: "10px 34px", fontFamily: INTER, fontWeight: 800, fontSize: 34, letterSpacing: 3, whiteSpace: "nowrap" }}>
        RESEARCHERS TESTED IT
      </div>
    </>
  );
};

export default S13;
