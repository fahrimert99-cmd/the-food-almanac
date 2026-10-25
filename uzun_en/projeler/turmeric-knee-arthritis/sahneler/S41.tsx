// Sahne 41 — vaka serisi sınırı + gen varyantı ve karabiber bilgisi (sağ panelde iki rozet).
import React from "react";
import { Baslik, INTER, Kamera, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tRare = K(0, "rare");
  const tCase = K(0, "case series");
  const tOften = K(0, "how often");
  const kapan = c[1].bas - 0.1;
  const pPanel = eout(ilerle(t, kapan - 0.1, 0.6));
  const hap = (bas: number, m: string, r: string, y: number) => {
    const [sc, al] = pop(t, bas, 0.5);
    const a = al * (1 - pPanel);
    if (a <= 0) return null;
    return (
      <div style={{ position: "absolute", left: 70, top: y, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: a,
        display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${r}`,
        borderRadius: 999, padding: "10px 26px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5,
        color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        <span style={{ width: 20, height: 20, borderRadius: "50%", background: r, flex: "none" }} />{m}
      </div>
    );
  };
  return (
    <>
      <Kamera gorsel="tam/41" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1800])} />
      <Baslik t={t} bas={tRare} bitis={kapan} metin="RARE" x={70} y={220} boyut={130} renk={RENK.koyuYesil} />
      {hap(tCase, "CASE SERIES", RENK.lacivert, 340)}
      {hap(tOften, "FREQUENCY UNKNOWN", RENK.altin, 420)}
      <Panel a={pPanel} taraf="sag" genislik={1000} />
      <VurguRozet t={t} bas={K(1, "Seven")} vurgu="7 OF 10" not="carried a particular gene variant" x={1520} y={200}
        genislik={560} boyut={120} renk={RENK.altin} />
      <VurguRozet t={t} bas={K(1, "three of the seven")} vurgu="3 OF 7" not="supplements also had black pepper extract"
        x={1520} y={560} genislik={560} boyut={120} renk={RENK.mercan} />
    </>
  );
};

export default S41;
