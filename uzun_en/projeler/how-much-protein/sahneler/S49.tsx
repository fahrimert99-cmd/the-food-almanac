// Sahne 49 — adım 1: aralığını bul (kg dönüşümü ve gram aralığı).
import React from "react";
import { ANTON, Baslik, Etiket, Kamera, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop, sol, INTER } from "../kutuphane";

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFor = K(2, "pounds");
  const tCarp1 = K(2, "1.0");
  const tCarp2 = K(2, "1.2");
  const t170 = K(3, "170");
  const tSon = K(3, "77") - 0.3;
  const [sn, an] = pop(t, 0.0, 0.5);
  const aKart = eout(ilerle(t, tFor - 0.2, 0.5)) * sol(t, tSon);
  const parca = (bas: number, metin: string, renk: string) => {
    const [sc, al] = pop(t, bas, 0.5);
    return (
      <div style={{ transform: `scale(${sc})`, opacity: al, background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999,
        padding: "12px 34px", fontFamily: ANTON, fontSize: 56, color: renk, whiteSpace: "nowrap", letterSpacing: 1 }}>{metin}</div>
    );
  };
  return (
    <>
      <Kamera gorsel="tam/49" pencere={kameraYolu(t, s.sure, [60, 40, 1800], [160, 90, 1650])}>
        <Etiket t={t} bas={t170} capa={[1030, 595]} konum={[560, 860]} metin="170 LB" renk={RENK.altin} />
      </Kamera>
      {/* adım numarası + başlık, sol üstteki boş kâğıtta */}
      <div style={{ position: "absolute", left: 70, top: 48, width: 92, height: 92, borderRadius: "50%", background: RENK.altin,
        color: "#fff", transform: `scale(${sn})`, opacity: an, display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: ANTON, fontSize: 60 }}>1</div>
      <Baslik t={t} bas={K(1, "find")} metin="FIND YOUR RANGE" x={190} y={94} boyut={80} renk={RENK.lacivert} />
      {/* formül kartı: alt bantta, sırayla dolar */}
      {aKart > 0 && (
        <div style={{ position: "absolute", left: 150, top: 770, width: 1620, height: 160, opacity: aKart, borderRadius: 30,
          background: "rgba(252,248,236,0.95)", border: `4px solid ${RENK.lacivert}`, boxShadow: "0 12px 30px rgba(48,40,34,0.2)",
          display: "flex", alignItems: "center", justifyContent: "center", gap: 36 }}>
          {parca(tFor - 0.1, "LB ÷ 2.2 = KG", RENK.lacivert)}
          <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 48, color: RENK.altin, opacity: eout(ilerle(t, tCarp1, 0.4)) }}>→</span>
          {parca(tCarp1 - 0.1, "KG × 1.0", RENK.yesil)}
          {parca(tCarp2 - 0.1, "KG × 1.2", RENK.koyuYesil)}
        </div>
      )}
      <VurguRozet t={t} bas={K(3, "77") - 0.1} vurgu="77–93 G" not="PER DAY AT 170 LB" x={640} y={170} genislik={500} boyut={110} />
    </>
  );
};

export default S49;
