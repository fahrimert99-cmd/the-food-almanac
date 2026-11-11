// Sahne 57 — kural 4: gün boyu su (sol yarı görsel, sağ yarı kâğıt).
import React from "react";
import { ANTON, Etiket, Kamera, Not, Panel, RENK, SP, BaslikBlok, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const SayiRozeti: React.FC<{ t: number; bas: number; n: string; x: number; y: number }> = ({ t, bas, n, x, y }) => {
  const [sc, al] = pop(t, bas, 0.6);
  return (
    <div style={{ position: "absolute", left: x - 65, top: y - 65, width: 130, height: 130, borderRadius: "50%", background: RENK.altin,
      border: `6px solid #FCF8EC`, boxShadow: "0 10px 26px rgba(48,40,34,0.22)", display: "flex", alignItems: "center",
      justifyContent: "center", fontFamily: ANTON, fontSize: 92, color: "#fff", transform: `scale(${sc})`, opacity: al }}>{n}</div>
  );
};

const S57: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pPanel = eout(ilerle(t, 0.2, 0.6));
  return (
    <>
      <Kamera gorsel="tam/57" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [0, 150, 1700])}>
        <Etiket t={t} bas={K(1, "through the day")} bitis={4.6} capa={[810, 200]} konum={[1330, 250]} metin="THROUGH THE DAY" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "plain")} capa={[770, 700]} konum={[1330, 560]} metin="MOSTLY PLAIN WATER" renk={RENK.yesil} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={1100} />
      <SayiRozeti t={t} bas={0.05} n="4" x={1790} y={200} />
      <BaslikBlok t={t} bas={K(1, "Spread")} satirlar={["SIP ALL DAY"]} x={1860} y={400} boyut={130} hiza="sag" renkler={[RENK.koyuYesil]} />
      <Not t={t} bas={K(1, "ask")} metin="Ask your doctor what daily target fits your health." x={1860} y={700} hiza="sag" genislik={640} boyut={38} />
    </>
  );
};

export default S57;
