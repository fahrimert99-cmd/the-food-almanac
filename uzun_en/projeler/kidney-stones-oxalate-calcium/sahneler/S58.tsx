// Sahne 58 — kural 5: tuz ve şekerli içecekler; etiket okuma.
import React from "react";
import { ANTON, BaslikBlok, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const SayiRozeti: React.FC<{ t: number; bas: number; n: string; x: number; y: number }> = ({ t, bas, n, x, y }) => {
  const [sc, al] = pop(t, bas, 0.6);
  return (
    <div style={{ position: "absolute", left: x - 65, top: y - 65, width: 130, height: 130, borderRadius: "50%", background: RENK.altin,
      border: `6px solid #FCF8EC`, boxShadow: "0 10px 26px rgba(48,40,34,0.22)", display: "flex", alignItems: "center",
      justifyContent: "center", fontFamily: ANTON, fontSize: 92, color: "#fff", transform: `scale(${sc})`, opacity: al }}>{n}</div>
  );
};

const S58: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bitisEt = K(2, "sodium") - 0.25;
  return (
    <>
      <Kamera gorsel="tam/58" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [120, 70, 1700])}>
        <Etiket t={t} bas={K(2, "soups,")} bitis={bitisEt} capa={[390, 470]} konum={[390, 330]} metin="SOUPS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "deli")} bitis={bitisEt} capa={[900, 440]} konum={[860, 330]} metin="DELI MEATS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "frozen")} bitis={bitisEt} capa={[1480, 400]} konum={[1560, 150]} metin="FROZEN MEALS" renk={RENK.mercan} />
      </Kamera>
      <SayiRozeti t={t} bas={0.05} n="5" x={150} y={150} />
      <BaslikBlok t={t} bas={K(1, "Go")} bitis={3.5} satirlar={["GO EASY ON", "SALT + SUGARY DRINKS"]} x={250} y={125} boyut={84}
        renkler={[RENK.lacivert, RENK.mercan]} />
      <BaslikBlok t={t} bas={K(2, "sodium")} satirlar={["WHERE SODIUM", "OFTEN HIDES"]} x={250} y={125} boyut={84}
        renkler={[RENK.lacivert, RENK.mercan]} />
    </>
  );
};

export default S58;
