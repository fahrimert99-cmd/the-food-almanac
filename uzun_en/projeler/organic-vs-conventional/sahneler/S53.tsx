// Sahne 53 — Güvenlik notu: ilaç kutusu, diyet çipleri, "ASK YOUR DOCTOR"
import React from "react";
import { BaslikBlok, Etiket, INTER, Kamera, Not, Baslik, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tNote = K(0, "One"), tMed = K(1, "medicines"), tDiet = K(1, "special"), tPot = K(1, "potassium"), tVit = K(1, "vitamin");
  const tSame = K(1, "same"), tAsk = K(2, "Ask"), tPh = K(2, "pharmacist");
  const chip = (bas: number, m: string, y: number, renk: string) => {
    const [sc, al] = pop(t, bas, 0.5);
    const a = al * (t < tAsk - 0.1 ? 1 : Math.max(0, 1 - (t - (tAsk - 0.1)) / 0.4));
    if (a <= 0) return null;
    return (
      <div style={{ position: "absolute", left: 1500, top: y, transform: `translateX(-50%) scale(${sc})`, opacity: a, background: renk, color: "#fff",
        borderRadius: 999, padding: "10px 30px", fontFamily: INTER, fontWeight: 800, fontSize: 32, letterSpacing: 2, whiteSpace: "nowrap" }}>{m}</div>
    );
  };
  return (
    <>
      <Kamera gorsel="tam/53" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 0, 1780])}>
        <Etiket t={t} bas={tMed} bitis={tAsk} capa={[787, 627]} konum={[1000, 770]} metin="MEDICINES" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={tNote} bitis={tAsk} metin="SAFETY NOTE" x={1200} y={120} boyut={36} renk={RENK.altin} font="inter" agirlik={800} aralik={8} />
      {chip(tDiet, "SPECIAL DIET", 230, RENK.lacivert)}
      {chip(tPot, "POTASSIUM", 310, RENK.koyuYesil)}
      {chip(tVit, "VITAMIN K", 390, RENK.koyuYesil)}
      <VurguRozet t={t} bas={tSame} bitis={tAsk - 0.1} vurgu="SAME RULES" not="ORGANIC OR NOT" x={1580} y={500} genislik={500} boyut={92} renk={RENK.mercan} />
      <BaslikBlok t={t} bas={tAsk} satirlar={["ASK YOUR", "DOCTOR"]} x={1190} y={250} boyut={120} />
      <Not t={t} bas={tPh} metin="or pharmacist, about your own plan" x={1190} y={520} boyut={36} genislik={640} />
    </>
  );
};

export default S53;
