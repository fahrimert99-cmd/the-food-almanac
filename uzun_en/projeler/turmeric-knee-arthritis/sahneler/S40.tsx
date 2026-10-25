// Sahne 40 — karaciğer: DILIN vaka serisi (10 kişi) ve sonuçları.
import React from "react";
import { Baslik, Etiket, INTER, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik ?? { satirlar: ["THE LIVER"], vurgu: "10", not: "" };
  const tLiver = K(0, "liver");
  const tTen = K(1, "ten");
  const tInj = K(1, "liver injury");
  const tSup = K(1, "turmeric supplements");
  const tFive = K(2, "Five");
  const tOne = K(2, "one died");
  const hap = (bas: number, m: string, r: string, y: number) => {
    const [sc, al] = pop(t, bas, 0.5);
    return (
      <div style={{ position: "absolute", left: 830, top: y, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${r}`,
        borderRadius: 999, padding: "10px 28px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 32, letterSpacing: 1.5,
        color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        <span style={{ width: 20, height: 20, borderRadius: "50%", background: r, flex: "none" }} />{m}
      </div>
    );
  };
  return (
    <>
      <Kamera gorsel="tam/40" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800])}>
        <Etiket t={t} bas={tInj} capa={[640, 420]} konum={[860, 640]} metin="LIVER INJURY" renk={RENK.mercan} />
        <Etiket t={t} bas={tSup} bitis={tFive - 0.2} capa={[1590, 790]} konum={[1560, 905]} metin="TURMERIC SUPPLEMENTS" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      <Baslik t={t} bas={tLiver} metin={b.satirlar[0]} x={200} y={180} boyut={84} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={tTen} vurgu={b.vurgu ?? "10"} not={b.not} x={1625} y={120} genislik={440} boyut={96} renk={RENK.altin} />
      {hap(tFive, "5 HOSPITALIZED", RENK.lacivert, 785)}
      {hap(tOne, "1 DIED", RENK.mercan, 865)}
    </>
  );
};

export default S40;
