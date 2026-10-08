// Sahne 57 — Kapanış başlığı: "Same food. Different order." + "A small change you can try at your very next meal."
// Düzen: üstte kâğıt zeminde büyük başlık (görsel aşağı kaydırıldı, üst kenar kâğıt geçişinin altında);
// tabakta üç sıra rozeti: "Same food" ile 1-2-3 (ekmek önce), "Different order" ile 1 ve 3 yer değiştirir (yeşillik önce).
import React from "react";
import { Baslik, ANTON, INTER, Kamera, RENK, SP, einout, eout, ilerle, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// rozet konumları (görsel koordinatı)
const EKMEK: [number, number] = [1450, 470], TAVUK: [number, number] = [830, 560], YESIL: [number, number] = [640, 335];

const hex = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
const karis = (a: string, b: string, p: number) => {
  const x = hex(a), y = hex(b);
  return `rgb(${x.map((v, i) => Math.round(v + (y[i] - v) * p)).join(",")})`;
};

const Rozet: React.FC<{ x: number; y: number; no: number; renk: string; sc: number; a: number }> = ({ x, y, no, renk, sc, a }) => (
  <div style={{ position: "absolute", left: x - 40, top: y - 40, width: 80, height: 80, borderRadius: "50%", background: renk,
    border: `5px solid ${RENK.kagitAcik}`, boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "center",
    color: "#fff", fontFamily: ANTON, fontSize: 44, transform: `scale(${sc})`, opacity: a, boxShadow: "0 10px 24px rgba(48,40,34,0.32)" }}>{no}</div>
);

const S57: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAyni = K(0, "Same"), tYemek = K(0, "food"), tFarkli = K(1, "Different"), tSira = K(1, "order");
  const tKucuk = K(2, "A small change"), tSonraki = K(2, "your very next meal"), tOgun = K(2, "next meal");
  // rozetler: 1 (ekmek) ve 3 (yeşillik) "Different" ile yer değiştirir
  const pYer = einout(ilerle(t, tFarkli + 0.1, 0.9));
  const yay = (a: [number, number], b: [number, number], bukum: number, p: number): [number, number] => {
    const cx = (a[0] + b[0]) / 2, cy = (a[1] + b[1]) / 2 + bukum;
    return [(1 - p) ** 2 * a[0] + 2 * (1 - p) * p * cx + p * p * b[0], (1 - p) ** 2 * a[1] + 2 * (1 - p) * p * cy + p * p * b[1]];
  };
  const [x1, y1] = yay(EKMEK, YESIL, -150, pYer);
  const [x3, y3] = yay(YESIL, EKMEK, 230, pYer);
  const r1 = pop(t, tYemek - 0.1, 0.5), r2 = pop(t, tYemek + 0.05, 0.5), r3 = pop(t, tYemek + 0.2, 0.5);
  const [sk] = pop(t, tSira + 0.05, 0.5); // yerine oturunca hafif sekme
  const otur = pYer >= 1 ? 0.88 + 0.12 * sk : 1;
  const aNot = eout(ilerle(t, tKucuk - 0.1, 0.5));
  const pVurgu = eout(ilerle(t, tSonraki, 0.4));
  const pCizgi = eout(ilerle(t, tOgun, 0.6));
  return (
    <>
      <Kamera gorsel="tam/57" pencere={kameraYolu(t, s.sure, [40, -250, 1840], [80, -210, 1740])} sinirla={false}>
        <Rozet x={TAVUK[0]} y={TAVUK[1]} no={2} renk={RENK.lacivert} sc={r2[0]} a={r2[1]} />
        <Rozet x={x3} y={y3} no={3} renk={karis(RENK.lacivert, RENK.mercan, pYer)} sc={r3[0] * otur} a={r3[1]} />
        <Rozet x={x1} y={y1} no={1} renk={karis(RENK.lacivert, RENK.yesil, pYer)} sc={r1[0] * otur} a={r1[1]} />
      </Kamera>
      {/* üst kâğıt geçişi: görselin üst kenarı bunun altında kalır */}
      <div style={{ position: "absolute", left: 0, right: 0, top: 0, height: 580,
        background: `linear-gradient(to bottom, ${kagit(1)} 0%, ${kagit(1)} 62%, ${kagit(0.85)} 75%, ${kagit(0)} 100%)` }} />

      <Baslik t={t} bas={tAyni + 0.05} metin="SAME FOOD." x={960} y={128} boyut={126} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={tFarkli - 0.05} metin="DIFFERENT ORDER." x={960} y={262} boyut={126} renk={RENK.koyuYesil} hiza="orta" />
      <div style={{ position: "absolute", left: 0, right: 0, top: 350, textAlign: "center", opacity: aNot, transform: `translateY(${(1 - aNot) * 12}px)`,
        fontFamily: INTER, fontWeight: 500, fontSize: 42, color: RENK.lacivert, whiteSpace: "nowrap" }}>
        A small change you can try at{" "}
        <span style={{ position: "relative", display: "inline-block", fontWeight: 800, color: karis(RENK.lacivert, RENK.altin, pVurgu) }}>
          your very next meal.
          <span style={{ position: "absolute", left: 0, bottom: -6, height: 6, borderRadius: 3, width: `${97 * pCizgi}%`, background: RENK.altin }} />
        </span>
      </div>
    </>
  );
};

export default S57;
