// Sahne 27 — karaciğer: LDL reseptörleri (hücre deneyleri).
import React from "react";
import { Baslik, Etiket, Hap, Kamera, Not, Parcaciklar, RENK, ANTON, INTER, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Şematik: LDL parçacıkları reseptörlere yanaşır (görsel anlatım, sayı yok)
const Sema: React.FC<{ t: number; bas: number; yut: number }> = ({ t, bas, yut }) => {
  const a = eout(ilerle(t, bas, 0.6));
  if (a <= 0) return null;
  const X = [1575, 1680, 1785];
  return (
    <div style={{ position: "absolute", left: 1500, top: 540, width: 360, height: 380, opacity: a, background: RENK.kagitAcik,
      border: `3px solid ${RENK.murekkep}`, borderRadius: 22, boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }}>
      <div style={{ position: "absolute", left: 0, right: 0, top: 12, textAlign: "center", fontFamily: INTER, fontWeight: 800, fontSize: 24,
        letterSpacing: 2, color: RENK.lacivert }}>LDL RECEPTORS</div>
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 10, textAlign: "center", fontFamily: INTER, fontWeight: 800, fontSize: 18,
        letterSpacing: 2, color: RENK.gri }}>ILLUSTRATIVE</div>
      <svg width={360} height={380} style={{ position: "absolute", left: 0, top: 0 }}>
        <rect x={10} y={250} width={340} height={80} rx={10} fill="#E9C9B8" stroke={RENK.murekkep} strokeWidth={3} />
        {X.map((x, i) => {
          const cx = x - 1500;
          const u = eout(ilerle(t, yut + i * 0.35, 1.0));
          const y = 80 + (200 - 80) * u;
          return (
            <g key={i}>
              <path d={`M${cx} 250 L${cx} 222 M${cx} 222 L${cx - 16} 200 M${cx} 222 L${cx + 16} 200`} stroke={RENK.mercan} strokeWidth={6} fill="none" strokeLinecap="round" />
              <circle cx={cx} cy={y} r={24} fill={RENK.altinAcik} stroke={RENK.murekkep} strokeWidth={3} opacity={1 - 0.6 * ilerle(t, yut + i * 0.35 + 1.0, 0.5)} />
              <text x={cx} y={y + 7} textAnchor="middle" style={{ fontFamily: INTER, fontWeight: 800, fontSize: 18, fill: RENK.murekkep }}>LDL</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const m = s.meta;
  const [sc, al] = pop(t, K(1, "dish"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/27" pencere={kameraYolu(t, s.sure, [40, 20, 1840], [0, 40, 1760])} />
      <Baslik t={t} bas={K(0, "Another")} metin="IN THE LIVER" x={1860} y={170} boyut={116} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "liver") + 0.1} metin={m.baslik!.not!} x={1860} y={245} hiza="sag" genislik={520} boyut={32} />
      <div style={{ position: "absolute", inset: 0 }}>
        <Etiket t={t} bas={K(1, "human")} bitis={K(1, "green")} capa={[480, 330]} konum={[1180, 420]} metin="HUMAN LIVER CELLS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "green")} bitis={K(1, "LDL")} capa={[1120, 720]} konum={[1640, 450]} metin="GREEN TEA" renk={RENK.yesil} />
      </div>
      <Parcaciklar t={t} bas={K(1, "compounds")} kaynak={[1080, 620]} hedef={[520, 380]} adet={16} aralik={0.25} omur={1.8}
        yayilma={120} kavis={-200} hedefYayilma={200} tohum="g27" renk={RENK.yesil} />
      <div style={{ position: "absolute", left: 1470, top: 480, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al * (1 - eout(ilerle(t, K(1, "green") - 0.1, 0.3))) }}>
        <Hap metin="IN A DISH" renk={RENK.altin} boyut={30} />
      </div>
      <Sema t={t} bas={K(1, "LDL")} yut={K(1, "pull")} />
    </>
  );
};

export default S27;
