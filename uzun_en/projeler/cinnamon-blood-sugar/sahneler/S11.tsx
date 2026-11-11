// Sahne 11 — 2008 analizi: 5 çalışma, 282 kişi; sonra üç ölçüt değişmedi.
import React from "react";
import { BaslikBlok, Kamera, KaynakEtiketi, Panel, RENK, SP, VurguRozet, INTER, kagit, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const OLCUTLER = [
  { ifade: "A1C,", ad: "A1C" },
  { ifade: "fasting", ad: "FASTING GLUCOSE" },
  { ifade: "cholesterol", ad: "CHOLESTEROL" },
];

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBaslik = K(0, "2008"), tFive = K(0, "five"), t282 = K(0, "282"), tNo = K(1, "no");
  const gec = tNo - 0.15;
  const pPanel = eout(ilerle(t, 0.1, 0.7));
  const b = s.meta.baslik?.satirlar ?? ["NO CHANGE", "IN 2008"];
  return (
    <>
      <Kamera gorsel="tam/11" pencere={kameraYolu(t, s.sure, [0, 120, 1700], [60, 160, 1560])}>
        {/* sağdaki cihaz ve dikiş çizgisi kâğıt yamayla örtülür */}
        <div style={{ position: "absolute", left: 1085, top: 380, width: 300, height: 460,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 70%, ${kagit(0)} 100%)` }} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={820} opak={1} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.1} />
      <BaslikBlok t={t} bas={tBaslik} satirlar={b} x={1860} y={170} boyut={92} hiza="sag" renkler={[RENK.lacivert, RENK.altin]} />
      <VurguRozet t={t} bas={tFive} bitis={gec} vurgu="5" not="PLACEBO-CONTROLLED TRIALS" x={1560} y={440} genislik={440} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={t282} bitis={gec} vurgu="282" not="PEOPLE WITH DIABETES" x={1560} y={680} genislik={440} renk={RENK.altin} />
      {OLCUTLER.map((o, i) => {
        const [sc, al] = pop(t, K(1, o.ifade), 0.5);
        return (
          <div key={o.ad} style={{ position: "absolute", left: 1290, top: 450 + i * 130, transform: `scale(${sc})`, transformOrigin: "0% 50%",
            opacity: al, display: "flex", alignItems: "center", gap: 16, whiteSpace: "nowrap", background: RENK.kagitAcik,
            border: `3px solid ${RENK.gri}`, borderRadius: 999, padding: "12px 30px 12px 14px", fontFamily: INTER, fontWeight: 800,
            fontSize: 32, letterSpacing: 1.5, color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
            <span style={{ width: 44, height: 44, borderRadius: "50%", background: RENK.gri, color: "#fff", display: "flex",
              alignItems: "center", justifyContent: "center", fontSize: 30 }}>=</span>
            {o.ad}
          </div>
        );
      })}
    </>
  );
};

export default S11;
