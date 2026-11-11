// Sahne 59 — kural 6: taş türünü bil.
import React from "react";
import { ANTON, BaslikBlok, Etiket, Hap, Kamera, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const SayiRozeti: React.FC<{ t: number; bas: number; n: string; x: number; y: number }> = ({ t, bas, n, x, y }) => {
  const [sc, al] = pop(t, bas, 0.6);
  return (
    <div style={{ position: "absolute", left: x - 65, top: y - 65, width: 130, height: 130, borderRadius: "50%", background: RENK.altin,
      border: `6px solid #FCF8EC`, boxShadow: "0 10px 26px rgba(48,40,34,0.22)", display: "flex", alignItems: "center",
      justifyContent: "center", fontFamily: ANTON, fontSize: 92, color: "#fff", transform: `scale(${sc})`, opacity: al }}>{n}</div>
  );
};

const S59: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tUrin = K(1, "urine");
  const [sc, al] = pop(t, tUrin, 0.5);
  const a = al * sol(t, K(2, "That") - 0.1);
  return (
    <>
      <Kamera gorsel="tam/59" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 90, 1700])}>
        <Etiket t={t} bas={K(1, "stone")} capa={[310, 530]} konum={[330, 190]} metin="YOUR STONE" renk={RENK.altin} />
      </Kamera>
      <Panel a={eout(ilerle(t, 0.2, 0.6))} taraf="sag" genislik={1000} />
      <SayiRozeti t={t} bas={0.05} n="6" x={1790} y={190} />
      <BaslikBlok t={t} bas={K(1, "Ask")} satirlar={["KNOW YOUR", "STONE TYPE"]} x={1860} y={340} boyut={120} hiza="sag" />
      {a > 0 && (
        <div style={{ position: "absolute", left: 1500, top: 640, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a,
          display: "flex", alignItems: "center", gap: 18 }}>
          <Hap metin="A URINE TEST?" renk={RENK.altin} boyut={38} />
        </div>
      )}
      <VurguRozet t={t} bas={K(2, "answer")} vurgu="ONE ANSWER" not="SHAPES YOUR DIET" x={1500} y={600} genislik={560} boyut={80} />
    </>
  );
};

export default S59;
