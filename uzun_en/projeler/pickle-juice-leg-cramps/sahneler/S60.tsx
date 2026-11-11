// Sahne 60 — özet: turşu suyu çalışması ve sınırı.
import React from "react";
import { Etiket, IkonYol, INTER, Kamera, RENK, SP, VurguRozet, ANTON, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Kart: React.FC<{ t: number; bas: number; satirlar: string[]; not: string; renk: string; y: number; ikon: "soru" | "onay" | "uyari" }> = ({ t, bas, satirlar, not, renk, y, ikon }) => {
  const [sc, al] = pop(t, bas, 0.55);
  return (
    <div style={{ position: "absolute", left: 60, top: y, width: 400, transform: `scale(${sc})`, transformOrigin: "0 0", opacity: al,
      background: "#FCF8EC", border: `4px solid ${renk}`, borderRadius: 24, padding: "14px 22px 16px", boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <IkonYol ad={ikon} boyut={46} renk={renk} />
        <div style={{ fontFamily: ANTON, fontSize: 56, lineHeight: 1.05, color: renk }}>{satirlar.join(" ")}</div>
      </div>
      <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 24, color: RENK.lacivert, marginTop: 4 }}>{not}</div>
    </div>
  );
};

const S60: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kam = kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820]);
  return (
    <>
      <Kamera gorsel="tam/60" pencere={kam}>
        <Etiket t={t} bas={K(0, "lab study")} bitis={4.6} capa={[1260, 780]} konum={[1600, 440]} metin="LAB STUDY" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "pickle juice")} bitis={6.9} capa={[660, 420]} konum={[250, 300]} metin="PICKLE JUICE" renk={RENK.yesil} />
      </Kamera>
      <VurguRozet t={t} bas={K(0, "49")} vurgu="≈ –49 s" not="vs. water, lab study" x={1620} y={130} genislik={380} boyut={96} />
      <Kart t={t} bas={K(1, "young men")} satirlar={["YOUNG MEN"]} not="the lab volunteers" renk={RENK.altin} y={150} ikon="uyari" />
      <Kart t={t} bas={K(1, "night cramps")} satirlar={["OLDER ADULTS"]} not="night cramps: not tested" renk={RENK.mercan} y={370} ikon="soru" />
    </>
  );
};

export default S60;
