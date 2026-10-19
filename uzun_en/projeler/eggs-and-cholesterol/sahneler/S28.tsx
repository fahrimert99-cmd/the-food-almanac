// Sahne 28 — üç büyük kohort; defter sayfalarındaki bozuk yazı boş çizgili sayfayla örtülür.
import React from "react";
import { AltSis, ANTON, Baslik, IkonYol, INTER, Kamera, KaynakEtiketi, Not, RENK, SP, eout, ilerle, kameraYolu,
  kelimeZamani, pop } from "../kutuphane";

const KOHORT = [
  { ifade: "83,349", sayi: "83,349", ad: "WOMEN", alt: "NURSES' HEALTH STUDY", x: 380 },
  { ifade: "90,214", sayi: "90,214", ad: "WOMEN", alt: "NURSES' HEALTH STUDY II", x: 960 },
  { ifade: "42,055", sayi: "42,055", ad: "MEN", alt: "HEALTH PROFESSIONALS", x: 1540 },
];

// defter sayfaları: sol ve sağ çokgen + çizgiler
const Sayfalar: React.FC = () => {
  const sol = [[587, 765], [905, 770], [915, 945], [447, 940]];
  const sag = [[945, 768], [1287, 760], [1400, 950], [945, 948]];
  const cizgiler = (p: number[][], n: number) => Array.from({ length: n }, (_, i) => {
    const u = (i + 1) / (n + 1);
    const a = [p[0][0] + (p[3][0] - p[0][0]) * u, p[0][1] + (p[3][1] - p[0][1]) * u];
    const b = [p[1][0] + (p[2][0] - p[1][0]) * u, p[1][1] + (p[2][1] - p[1][1]) * u];
    return <line key={i} x1={a[0] + 24} y1={a[1]} x2={b[0] - 24} y2={b[1]} stroke="#8A7F6A" strokeOpacity={0.4} strokeWidth={2.5} />;
  });
  return (
    <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
      {[sol, sag].map((p, k) => (
        <g key={k}>
          <polygon points={p.map((q) => q.join(",")).join(" ")} fill="#F4EEDB" stroke="#B9AD92" strokeWidth={2} />
          {cizgiler(p, 5)}
        </g>
      ))}
    </svg>
  );
};

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFree = K(2, "free of");
  const [sc, al] = pop(t, tFree, 0.5);
  return (
    <>
      <Kamera gorsel="tam/28" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1800])}>
        <Sayfalar />
      </Kamera>
      <AltSis a={0.5} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <Baslik t={t} bas={K(0, "three large")} metin="THREE LARGE COHORTS" x={960} y={175} boyut={84} renk={RENK.koyuYesil} hiza="orta" />
      {KOHORT.map((k) => {
        const b = K(1, k.ifade);
        const [c, a] = pop(t, b, 0.55);
        return (
          <div key={k.sayi} style={{ position: "absolute", left: k.x - 250, top: 290, width: 500, opacity: a, transform: `scale(${c})`,
            textAlign: "center", background: "#FCF8EC", border: `4px solid ${RENK.altin}`, borderRadius: 24, padding: "8px 12px 14px",
            boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }}>
            <div style={{ fontFamily: ANTON, fontSize: 92, lineHeight: 1.05, color: RENK.altin }}>{k.sayi}</div>
            <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 30, color: RENK.lacivert }}>{k.ad}</div>
            <div style={{ fontFamily: INTER, fontWeight: 700, fontSize: 24, letterSpacing: 1, color: RENK.koyuYesil }}>{k.alt}</div>
          </div>
        );
      })}
      {al > 0 && (
        <div style={{ position: "absolute", left: 140, top: 500, opacity: al, transform: `scale(${sc})`, transformOrigin: "0 50%",
          display: "flex", alignItems: "center", gap: 18, background: "#FCF8EC", border: `4px solid ${RENK.yesil}`, borderRadius: 999,
          padding: "10px 30px 10px 14px", boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }}>
          <div style={{ width: 54, height: 54, borderRadius: "50%", background: RENK.yesil, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <IkonYol ad="onay" boyut={34} renk="#fff" />
          </div>
          <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 34, letterSpacing: 1, color: RENK.lacivert, whiteSpace: "nowrap" }}>
            FREE OF HEART DISEASE &amp; DIABETES</div>
        </div>
      )}
      <Not t={t} bas={tFree + 0.3} metin="at the start" x={178} y={580} boyut={30} agirlik={700} renk={RENK.gri} />
    </>
  );
};

export default S28;
