// Sahne 16 — 50 g grubu: kalça yoğunluğu yalnızca %0,3 düştü; kontrolle karşılaştırma.
import React from "react";
import { BaslikBlok, Etiket, INTER, IkonYol, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, eout, ilerle, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const BARLAR = [
  { ad: "CONTROL", deger: "–1.1%", uz: 440, renk: RENK.mercan },
  { ad: "50 G A DAY", deger: "–0.3%", uz: 120, renk: RENK.yesil },
];

const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik;
  const t50 = K(0, "50 grams"), tPct = K(0, "0.3"), tFark = K(1, "difference"), tAnlam = K(1, "statistically");
  const [sc, al] = pop(t, tAnlam, 0.55);
  return (
    <>
      <Kamera gorsel="tam/16" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1800])} />
      {/* görselin sağ kenarındaki sert kesiti kâğıt geçişiyle gizle */}
      <div style={{ position: "absolute", left: 880, top: 0, bottom: 0, width: 1040,
        background: `linear-gradient(to right, ${kagit(0)} 0%, ${kagit(1)} 25%, ${kagit(1)} 100%)` }} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <BaslikBlok t={t} bas={t50 - 0.3} satirlar={["50 GRAMS"]} x={1860} y={170} boyut={110} hiza="sag" />
      <Etiket t={t} bas={t50} capa={[520, 480]} konum={[640, 200]} metin="50 G A DAY" renk={RENK.yesil} />
      <VurguRozet t={t} bas={tPct - 0.2} vurgu={b?.vurgu ?? "–0.3%"} not="after 12 months" x={1640} y={300} genislik={400} renk={RENK.yesil} />
      {/* 2. cümle: kontrolle karşılaştırma */}
      {BARLAR.map((r, i) => {
        const p = eout(ilerle(t, tFark + 0.1 + i * 0.3, 0.9));
        const [sb, ab] = pop(t, tFark + 0.1 + i * 0.3, 0.4);
        return (
          <div key={r.ad} style={{ position: "absolute", left: 1250, top: 560 + i * 100, opacity: ab }}>
            <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 22, letterSpacing: 2, color: RENK.lacivert, marginBottom: 4 }}>{r.ad}</div>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: Math.max(8, r.uz * p), height: 34, background: r.renk, borderRadius: 8 }} />
              <span style={{ opacity: p, fontFamily: INTER, fontWeight: 800, fontSize: 30, color: r.renk, transform: `scale(${sb})` }}>{r.deger}</span>
            </div>
          </div>
        );
      })}
      <div style={{ position: "absolute", right: 60, top: 800, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: al, display: "flex",
        alignItems: "center", gap: 14, background: RENK.kagitAcik, border: `3px solid ${RENK.yesil}`, borderRadius: 999, padding: "8px 26px 8px 10px",
        fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 1.5, color: RENK.murekkep, whiteSpace: "nowrap", boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        <span style={{ width: 38, height: 38, borderRadius: "50%", background: RENK.yesil, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IkonYol ad="onay" boyut={24} renk="#fff" kalinlik={7} />
        </span>
        STATISTICALLY MEANINGFUL
      </div>
    </>
  );
};

export default S16;
