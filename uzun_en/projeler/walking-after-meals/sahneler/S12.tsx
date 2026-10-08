// Sahne 12 — Reynolds 2016: 41 yetişkin, iki yürüyüş planı, 2 hafta + 1 ay ara (sağ panelde zaman çizgisi).
import React from "react";
import { ANTON, Etiket, INTER, Kamera, KaynakEtiketi, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const BLOKLAR = [
  { ifade: "two weeks", ad: "PLAN 1", y: 470, renk: RENK.altin },
  { ifade: "each", ad: "PLAN 2", y: 740, renk: RENK.yesil },
];

const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tYuru = K(0, "walking"), t41 = K(0, "41"), tAy = K(0, "month");
  const pPanel = eout(ilerle(t, t41 - 0.3, 0.6));
  const [sa, aa] = pop(t, tAy, 0.5);
  const pCizgi = eout(ilerle(t, tAy, 0.7));
  return (
    <>
      <Kamera gorsel="tam/12" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [40, 80, 1780])}>
        <Etiket t={t} bas={tYuru} capa={[550, 930]} konum={[800, 820]} metin="WALKING PLANS" renk={RENK.yesil} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={860} opak={0.96} />
      <KaynakEtiketi t={t} metin="Reynolds et al. · Diabetologia · 2016" bas={0.2} />
      <VurguRozet t={t} bas={t41} vurgu="41" not="ADULTS WITH TYPE 2 DIABETES" x={1490} y={150} genislik={560} boyut={130} renk={RENK.koyuYesil} />
      {BLOKLAR.map((b, i) => {
        const bas = K(0, b.ifade) + (i === 0 ? 0 : 0.0);
        const [sc, al] = pop(t, bas, 0.5);
        return (
          <div key={b.ad} style={{ position: "absolute", left: 1210, top: b.y - 55, width: 560, height: 110, transform: `scale(${sc})`,
            transformOrigin: "50% 50%", opacity: al, display: "flex", alignItems: "center", justifyContent: "space-between",
            background: RENK.kagitAcik, border: `4px solid ${b.renk}`, borderRadius: 24, padding: "0 34px",
            boxShadow: "0 10px 26px rgba(48,40,34,0.16)" }}>
            <span style={{ fontFamily: ANTON, fontSize: 52, color: b.renk }}>{b.ad}</span>
            <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 32, letterSpacing: 1.5, color: RENK.lacivert }}>2 WEEKS</span>
          </div>
        );
      })}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <line x1={1490} y1={528} x2={1490} y2={528 + 154 * pCizgi} stroke={RENK.lacivert} strokeWidth={5} strokeDasharray="14 10" />
      </svg>
      <div style={{ position: "absolute", left: 1490, top: 605, transform: `translate(-50%, -50%) scale(${sa})`, opacity: aa,
        background: RENK.lacivert, color: "#fff", borderRadius: 999, padding: "8px 24px", fontFamily: INTER, fontWeight: 800,
        fontSize: 28, letterSpacing: 2, whiteSpace: "nowrap" }}>1 MONTH BETWEEN</div>
    </>
  );
};

export default S12;
