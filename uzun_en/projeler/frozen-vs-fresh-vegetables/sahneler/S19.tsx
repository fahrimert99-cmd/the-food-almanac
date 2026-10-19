// Sahne 19 — Li 2017: taze, taze-saklanmış, dondurulmuş (üç grup)
import React from "react";
import { Baslik, Kamera, KaynakEtiketi, Not, RENK, SP, ilerle, eout, kameraYolu, kelimeZamani } from "../kutuphane";

// kâğıt rengi yama (görseldeki sahte takvimleri örter)
const Yama: React.FC<{ x: number; y: number; w: number; h: number }> = ({ x, y, w, h }) => (
  <div style={{ position: "absolute", left: x, top: y, width: w, height: h, background: "#FCF8D6", borderRadius: 20,
    boxShadow: "0 0 24px 16px #FCF8D6" }} />
);
// alttaki bozuk yazıyı örten kapsül etiketi
const Alt: React.FC<{ t: number; bas: number; x: number; m: string; renk: string }> = ({ t, bas, x, m, renk }) => {
  const a = eout(ilerle(t, bas, 0.5));
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: 930, transform: `translate(-50%, ${(1 - a) * 10}px)`, opacity: a, whiteSpace: "nowrap",
      background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999, width: 330, textAlign: "center", boxSizing: "border-box", padding: "6px 0", fontFamily: "Inter, sans-serif",
      fontWeight: 800, fontSize: 30, letterSpacing: 2, color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>{m}</div>
  );
};

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [b1, b2, b3] = s.meta.baslik!.satirlar;
  const t3 = K(1, "third"), tFS = K(1, "fresh-stored:");
  return (
    <>
      <Kamera gorsel="tam/19" pencere={kameraYolu(t, s.sure, [10, 0, 1900], [40, 10, 1840])}>
        <Yama x={90} y={80} w={620} h={250} />
        <Yama x={225} y={320} w={300} h={55} />
        <Yama x={80} y={300} w={130} h={170} />
        <Yama x={540} y={310} w={160} h={140} />
        <Yama x={795} y={465} w={40} h={45} />
        <Yama x={1105} y={465} w={40} h={45} />
        <Yama x={1380} y={465} w={90} h={55} />
        <Yama x={1690} y={465} w={50} h={55} />
        <Yama x={690} y={80} w={560} h={385} />
        <Yama x={1270} y={80} w={590} h={385} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      {/* iki grup önce, üçüncü grup eklenince */}
      <Baslik t={t} bas={K(0, "two-year")} metin={b1} x={330} y={240} boyut={84} hiza="orta" renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tFS} metin={b2} x={960} y={240} boyut={72} hiza="orta" renk={RENK.altin} />
      <Baslik t={t} bas={K(1, "third") + 0.0} metin={b3} x={1580} y={240} boyut={84} hiza="orta" renk={RENK.lacivert} />
      <Not t={t} bas={K(1, "refrigerator")} metin="5 DAYS IN THE FRIDGE" x={960} y={310} boyut={30} agirlik={800} hiza="orta" />
      <Alt t={t} bas={K(1, "added")} x={330} m="FRESH" renk={RENK.yesil} />
      <Alt t={t} bas={tFS} x={960} m="FRESH-STORED" renk={RENK.altin} />
      <Alt t={t} bas={t3} x={1580} m="FROZEN" renk={RENK.lacivert} />
    </>
  );
};

export default S19;
