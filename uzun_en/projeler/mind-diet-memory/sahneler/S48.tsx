// Sahne 48 — "daha az" listesi (kızartma, fast food, tereyağı, kırmızı et) + hamur işi etiketi; yön, yasak değil.
import React from "react";
import { BaslikBlok, Baslik, Etiket, IkonYol, INTER, Kamera, Liste, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Hap2: React.FC<{ t: number; bas: number; bitis: number; y: number; metin: string; renk: string; ad: "onay" | "carpi" }> = ({ t, bas, bitis, y, metin, renk, ad }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", right: 70, top: y, opacity: a, transform: `scale(${sc})`, transformOrigin: "100% 50%", display: "flex",
      alignItems: "center", gap: 16, background: "#FCF8EC", border: `4px solid ${renk}`, borderRadius: 999, padding: "10px 32px 10px 12px",
      boxShadow: "0 10px 26px rgba(48,40,34,0.18)", fontFamily: INTER, fontWeight: 800, fontSize: 44, letterSpacing: 2, color: RENK.lacivert }}>
      <span style={{ width: 62, height: 62, borderRadius: "50%", background: renk, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
        <IkonYol ad={ad} boyut={36} renk="#fff" />
      </span>
      {metin}
    </div>
  );
};

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFried = K(0, "fried"), tPast = K(0, "pastries"), tButter = K(0, "butter"), tRed = K(0, "red meat");
  const tDir = K(1, "direction"), tBan = K(1, "not"), tNo = K(2, "no single");
  return (
    <>
      <Kamera gorsel="tam/48" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800])}>
        <Etiket t={t} bas={tPast} bitis={tDir - 0.3} capa={[1450, 720]} konum={[1640, 580]} metin="PASTRIES" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "favors") - 0.1} bitis={tDir - 0.3} metin="LESS OF:" x={1330} y={110} boyut={70} renk={RENK.mercan} />
      <Liste t={t} isaret="nokta" boyut={34} aralik={74} x={1330} y={180} genislik={560}
        ogeler={[{ bas: tFried, metin: "FRIED & FAST FOOD", renk: RENK.mercan, bitis: tDir - 0.3 },
          { bas: tButter, metin: "BUTTER", renk: RENK.mercan, bitis: tDir - 0.3 },
          { bas: tRed, metin: "RED MEAT", renk: RENK.mercan, bitis: tDir - 0.3 }]} />
      <Hap2 t={t} bas={tDir} bitis={tNo - 0.2} y={260} metin="A DIRECTION" renk={RENK.yesil} ad="onay" />
      <Hap2 t={t} bas={tBan + 0.1} bitis={tNo - 0.2} y={380} metin="NOT A BAN" renk={RENK.mercan} ad="carpi" />
      <BaslikBlok t={t} bas={tNo} satirlar={["NO SINGLE FOOD", "MAKES OR BREAKS", "YOUR MEMORY"]} x={1860} y={110} boyut={62} hiza="sag" adim={0.3} />
    </>
  );
};

export default S48;
