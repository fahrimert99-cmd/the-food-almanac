// Sahne 13 — fayda yüksek başlangıç basıncında; düşük başlangıçta belirgin fark yok (2010 denemesi).
// Sayacın bozuk rakamları kâğıt yamayla örtülür, yerine sade ibre çizilir (ILLUSTRATIVE).
import React from "react";
import { Etiket, Hap, INTER, ANTON, Kamera, RENK, SP, einout, eout, ilerle, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const YUZ = [{ cx: 520, cy: 583 }, { cx: 1420, cy: 583 }];

const Yuz: React.FC<{ t: number; i: number; ibre: number; renk: string; baslik: string; bas: number; sonuc: string; sonucBas: number; sonucRenk: string }> = ({
  t, i, ibre, renk, baslik, bas, sonuc, sonucBas, sonucRenk,
}) => {
  const { cx, cy } = YUZ[i];
  const a = eout(ilerle(t, 0.15, 0.5));
  const [sb, ab] = pop(t, bas, 0.5);
  const [ss, as] = pop(t, sonucBas, 0.5);
  const cizgiler = Array.from({ length: 13 }, (_, k) => {
    const d = (-100 + (200 * k) / 12) * (Math.PI / 180);
    return [cx + Math.sin(d) * 118, cy - 10 - Math.cos(d) * 118, cx + Math.sin(d) * 146, cy - 10 - Math.cos(d) * 146];
  });
  const ac = (-100 + 200 * ibre) * (Math.PI / 180);
  return (
    <>
      <div style={{ position: "absolute", left: cx - 255, top: cy - 280, width: 510, height: 560, opacity: a,
        background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 82%, ${kagit(0)} 100%)` }} />
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, opacity: a }}>
        {cizgiler.map((c, k) => <line key={k} x1={c[0]} y1={c[1]} x2={c[2]} y2={c[3]} stroke={RENK.murekkep} strokeWidth={4} opacity={0.5} />)}
        <line x1={cx} y1={cy - 10} x2={cx + Math.sin(ac) * 112} y2={cy - 10 - Math.cos(ac) * 112} stroke={renk} strokeWidth={9} strokeLinecap="round" opacity={ab} />
        <circle cx={cx} cy={cy - 10} r={14} fill={RENK.murekkep} opacity={a} />
      </svg>
      <div style={{ position: "absolute", left: cx, top: cy - 215, transform: `translate(-50%, 0) scale(${sb})`, opacity: ab, whiteSpace: "nowrap",
        fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 3, color: renk }}>{baslik}</div>
      <div style={{ position: "absolute", left: cx, top: cy + 60, transform: `translate(-50%, 0) scale(${ss})`, opacity: as, textAlign: "center",
        fontFamily: ANTON, fontSize: 54, lineHeight: 1.1, color: sonucRenk, whiteSpace: "pre" }}>{sonuc}</div>
    </>
  );
};

const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tYuksek = K(0, "already"), tDusuk = K(1, "lower");
  const ibreSol = 0.85 - 0.5 * einout(ilerle(t, K(0, "high.") + 0.2, 1.0)); // yüksekten aşağı
  const [sy, ay] = pop(t, K(1, "2010"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/13" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 34, 1800])}>
        <Yuz t={t} i={0} ibre={ibreSol} renk={t < K(0, "high.") + 0.2 ? RENK.mercan : RENK.yesil} baslik="HIGH START" bas={tYuksek}
          sonuc={"BIGGER\nDROP"} sonucBas={K(0, "high.") + 0.9} sonucRenk={RENK.yesil} />
        <Yuz t={t} i={1} ibre={0.3} renk={RENK.yesil} baslik="LOWER START" bas={tDusuk} sonuc={"NO CLEAR\nDIFFERENCE"} sonucBas={K(1, "no")} sonucRenk={RENK.gri} />
        <Etiket t={t} bas={K(0, "benefit")} bitis={tYuksek + 0.4} capa={[980, 560]} konum={[980, 190]} metin="GARLIC" renk={RENK.altin} />
      </Kamera>
      <div style={{ position: "absolute", left: 960, top: 105, transform: `translate(-50%, -50%) scale(${sy})`, opacity: ay }}>
        <Hap metin="2010 TRIAL" renk={RENK.altin} />
      </div>
      <div style={{ position: "absolute", left: 960, top: 905, transform: "translateX(-50%)", opacity: eout(ilerle(t, 0.6, 0.5)),
        fontFamily: INTER, fontWeight: 800, fontSize: 22, letterSpacing: 3, color: RENK.gri }}>ILLUSTRATIVE</div>
    </>
  );
};

export default S13;
