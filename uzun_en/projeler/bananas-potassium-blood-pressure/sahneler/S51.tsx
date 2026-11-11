// Sahne 51 — İpucu 2: bütün güne yay. Üç tabak etiketlenir, sonra NKF'nin potasyum açısından zengin listesi çipler olarak gelir.
import React from "react";
import { ANTON, Baslik, Etiket, Hap, Kamera, RENK, SP, INTER, eout, ilerle, kameraYolu, kelimeZamani, kagit, pop, sol } from "../kutuphane";

const LISTE = [
  ["beans", "BEANS"], ["lentils", "LENTILS"], ["potatoes", "POTATOES"], ["tomatoes", "TOMATOES"],
  ["yogurt", "YOGURT"], ["milk", "MILK"], ["oranges", "ORANGES"],
] as const;

const S51: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc1, al1] = pop(t, K(0, "Two"), 0.55);
  const tWhole = K(1, "whole day"), tNot = K(1, "not one");
  const tB = K(2, "Banana"), tS = K(2, "bean soup"), tP = K(2, "baked potato"), tY = K(2, "yogurt");
  const tN = K(3, "National");
  const bitisEt = tN - 0.15;
  const pBaslik = sol(t, tN - 0.1);
  const aHead = eout(ilerle(t, tN, 0.5));
  return (
    <>
      <Kamera gorsel="tam/51" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])}>
        {/* alttaki sahte imza kâğıt rengiyle örtülür */}
        <div style={{ position: "absolute", left: 640, top: 960, width: 700, height: 120,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 60%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={tB} bitis={bitisEt} capa={[330, 660]} konum={[330, 480]} metin="BANANA + OATMEAL" renk={RENK.altin} />
        <Etiket t={t} bas={tS} bitis={bitisEt} capa={[930, 690]} konum={[930, 480]} metin="BEAN SOUP" renk={RENK.mercan} />
        <Etiket t={t} bas={tP} bitis={bitisEt} capa={[1520, 720]} konum={[1450, 400]} metin="BAKED POTATO" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={tY} bitis={bitisEt} capa={[1570, 590]} konum={[1740, 500]} metin="YOGURT" renk={RENK.yesil} />
      </Kamera>
      <div style={{ opacity: pBaslik }}>
        <div style={{ position: "absolute", left: 100, top: 100, width: 104, height: 104, borderRadius: "50%", background: RENK.lacivert,
          color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 70,
          transform: `scale(${sc1})`, opacity: al1, border: `4px solid ${RENK.kagitAcik}`, boxShadow: "0 8px 22px rgba(48,40,34,0.2)" }}>2</div>
        <Baslik t={t} bas={tWhole} metin="THE WHOLE" x={240} y={120} boyut={84} renk={RENK.lacivert} />
        <Baslik t={t} bas={tWhole + 0.18} metin="DAY" x={240} y={216} boyut={84} renk={RENK.koyuYesil} />
        <Baslik t={t} bas={tNot} metin="NOT ONE BANANA" x={600} y={216} boyut={40} renk={RENK.mercan} font="inter" agirlik={800} aralik={2} />
      </div>
      <div style={{ position: "absolute", left: 0, right: 0, top: 130, textAlign: "center", opacity: aHead, fontFamily: INTER, fontWeight: 800,
        fontSize: 30, letterSpacing: 5, color: RENK.altin }}>POTASSIUM-RICH · NATIONAL KIDNEY FOUNDATION</div>
      <div style={{ position: "absolute", left: 0, right: 0, top: 210, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 22,
        padding: "0 220px" }}>
        {LISTE.map(([ifade, ad]) => {
          const [sc, al] = pop(t, K(3, ifade), 0.5);
          return (
            <div key={ad} style={{ transform: `scale(${sc})`, opacity: al }}>
              <Hap metin={ad} renk={RENK.yesil} boyut={34} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default S51;
