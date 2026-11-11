// Sahne 55 — bir tatlı kaşığı kassia: miligram hesabı.
import React from "react";
import { Etiket, IkonYol, INTER, Kamera, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const Hap: React.FC<{ t: number; bas: number; metin: string; ikon: "saat" | "uyari"; renk: string; y: number }> = ({ t, bas, metin, ikon, renk, y }) => {
  const p = eout(ilerle(t, bas, 0.5));
  return (
    <div style={{ position: "absolute", left: 1650, top: y, transform: `translate(-50%, -50%) translateY(${(1 - p) * 14}px)`, opacity: p,
      display: "flex", alignItems: "center", gap: 12, background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999,
      padding: "10px 24px 10px 14px", whiteSpace: "nowrap", fontFamily: INTER, fontWeight: 800, fontSize: 26, color: RENK.murekkep,
      boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
      <IkonYol ad={ikon} boyut={36} renk={renk} />
      {metin}
    </div>
  );
};

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/55" pencere={kameraYolu(t, s.sure, [40, 22, 1840], [100, 60, 1720])}>
        <Etiket t={t} bas={K(0, "teaspoon,")} capa={[790, 240]} konum={[300, 170]} metin="FULL TEASPOON" renk={RENK.altin} />
      </Kamera>
      <VurguRozet t={t} bas={K(0, "2.5")} vurgu="≈ 2.5 G" not="a full teaspoon" x={290} y={400} genislik={340} boyut={90} />
      <VurguRozet t={t} bas={K(0, "five")} vurgu="5–8 MG" not="with cassia" x={1650} y={250} genislik={360} boyut={90} renk={RENK.mercan} />
      <Hap t={t} bas={K(1, "every")} metin="EVERY DAY" ikon="saat" renk={RENK.lacivert} y={560} />
      <Hap t={t} bas={K(1, "pass")} metin="PASS THE LIMIT" ikon="uyari" renk={RENK.mercan} y={660} />
    </>
  );
};

export default S55;
