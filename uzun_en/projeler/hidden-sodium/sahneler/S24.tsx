// Sahne 24 — sıralama iki şeyi yansıtır; terazide sandviç ve cips etiketleri.
import React from "react";
import { Etiket, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Kart: React.FC<{ t: number; bas: number; bitis: number; y: number; satir: string[]; renk: string }> = ({ t, bas, bitis, y, satir, renk }) => {
  const [sc, al] = pop(t, bas, 0.55);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 1560, top: y, width: 310, transform: `scale(${sc})`, transformOrigin: "50% 50%", opacity: a,
      background: RENK.kagitAcik, border: `4px solid ${renk}`, borderRadius: 24, padding: "16px 18px", textAlign: "center",
      boxShadow: "0 10px 26px rgba(48,40,34,0.18)", fontFamily: INTER, fontWeight: 800, fontSize: 34, lineHeight: 1.25, letterSpacing: 1.5,
      color: RENK.lacivert }}>
      {satir.map((x) => <div key={x}>{x}</div>)}
    </div>
  );
};

const S24: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tMuch = K(0, "how much sodium"), tOften = K(0, "how often"), tSand = K(1, "sandwich"), tBag = K(1, "bag of chips");
  const bit = K(1, "That's why") - 0.2;
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [50, 28, 1820]);
  const [sp_, ap] = pop(t, tOften - 0.1, 0.4);
  return (
    <>
      <Kamera gorsel="tam/24" pencere={pen}>
        <Etiket t={t} bas={tSand} capa={[420, 480]} konum={[230, 250]} metin="SANDWICH · 5.7%" renk={RENK.altin} boyut={26} />
        <Etiket t={t} bas={tBag} capa={[1400, 480]} konum={[1660, 300]} metin="BAG OF CHIPS" renk={RENK.mercan} boyut={26} />
      </Kamera>
      <Kart t={t} bas={tMuch} bitis={bit} y={250} satir={["HOW MUCH", "SODIUM"]} renk={RENK.altin} />
      <div style={{ position: "absolute", left: 1560, width: 310, top: 400, textAlign: "center", transform: `scale(${sp_})`, opacity: ap * sol(t, bit),
        fontFamily: INTER, fontWeight: 800, fontSize: 52, color: RENK.lacivert }}>+</div>
      <Kart t={t} bas={tOften} bitis={bit} y={480} satir={["HOW OFTEN", "EATEN"]} renk={RENK.lacivert} />
    </>
  );
};

export default S24;
