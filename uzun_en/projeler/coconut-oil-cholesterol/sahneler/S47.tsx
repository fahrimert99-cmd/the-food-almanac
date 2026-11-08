// Sahne 47 — 3. yol: etiketteki doymuş yağ satırı; günlük tavan yaklaşık 22 g (2.000 kalori).
import React from "react";
import { ANTON, BaslikBlok, Etiket, Hap, IkonYol, INTER, Kamera, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFat = K(1, "saturated"), tTen = K(2, "ten"), t22 = K(3, "22"), tSev = K(3, "several"), tQ = K(3, "quickly.");
  const [sn, an] = pop(t, 0.05, 0.6);
  const aKart = eout(ilerle(t, K(1, "Nutrition"), 0.6)) * sol(t, t22 - 0.2, 0.4);
  const aSatir = eout(ilerle(t, tFat, 0.5));
  const aSure = pop(t, tTen, 0.5);
  const dolu = eout(ilerle(t, tSev, tQ - tSev + 0.3));
  const aBar = eout(ilerle(t, t22 + 0.8, 0.5));
  return (
    <>
      <Kamera gorsel="tam/47" pencere={kameraYolu(t, s.sure, [0, 40, 1800], [60, 70, 1700])} />
      <div style={{ position: "absolute", left: 1000, top: 110, width: 130, height: 130, borderRadius: "50%", background: RENK.altin, color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 90, opacity: an, transform: `scale(${sn})` }}>3</div>
      <BaslikBlok t={t} bas={K(1, "Check")} bitis={t22 - 0.2} satirlar={["TEN-SECOND", "CHECK"]} x={1860} y={170} boyut={92} hiza="sag" />
      {/* ILLUSTRATIVE besin etiketi taslağı */}
      <div style={{ position: "absolute", left: 1180, top: 420, width: 560, opacity: aKart, transform: `translateY(${(1 - aKart) * 20}px)`,
        background: "#FCF8EC", border: `5px solid ${RENK.lacivert}`, padding: "18px 26px 24px", boxShadow: "0 12px 30px rgba(48,40,34,0.2)" }}>
        <div style={{ fontFamily: ANTON, fontSize: 52, color: RENK.lacivert, lineHeight: 1.1 }}>NUTRITION FACTS</div>
        <div style={{ height: 10, background: RENK.lacivert, margin: "8px 0 14px" }} />
        {[0.7, 0.5].map((w, i) => (
          <div key={i} style={{ height: 14, width: `${w * 100}%`, background: "rgba(27,42,65,0.18)", borderRadius: 7, margin: "18px 0" }} />
        ))}
        <div style={{ margin: "10px -10px", padding: "10px 12px", borderRadius: 10, border: `4px solid ${RENK.mercan}`,
          background: `rgba(204,88,66,${0.1 * aSatir})`, opacity: 0.35 + 0.65 * aSatir, fontFamily: INTER, fontWeight: 800, fontSize: 34, color: RENK.lacivert }}>
          SATURATED FAT
        </div>
        {[0.6, 0.45].map((w, i) => (
          <div key={i} style={{ height: 14, width: `${w * 100}%`, background: "rgba(27,42,65,0.18)", borderRadius: 7, margin: "18px 0" }} />
        ))}
        <div style={{ position: "absolute", right: 14, bottom: -18 }}><Hap metin="ILLUSTRATIVE" renk={RENK.gri} boyut={18} /></div>
      </div>
      {aSure[1] > 0 && (
        <div style={{ position: "absolute", left: 1000, top: 340, opacity: aSure[1] * sol(t, t22 - 0.2, 0.4), transform: `scale(${aSure[0]})`, transformOrigin: "0% 50%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, background: "#FCF8EC", border: `4px solid ${RENK.altin}`, borderRadius: 999, padding: "8px 26px 8px 16px" }}>
            <IkonYol ad="saat" boyut={40} renk={RENK.altin} />
            <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.lacivert }}>10 SECONDS</span>
          </div>
        </div>
      )}
      <VurguRozet t={t} bas={t22} vurgu="≈ 22 G" not="saturated fat ceiling, 2,000-calorie day" x={1440} y={150} boyut={100} genislik={640} />
      {/* ILLUSTRATIVE bütçe çubuğu: porsiyondaki gramlar tavanı hızla tüketir (sayı yok) */}
      <div style={{ position: "absolute", left: 1100, top: 560, width: 640, opacity: aBar }}>
        <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 2, color: RENK.lacivert, marginBottom: 12 }}>DAILY CEILING</div>
        <div style={{ height: 56, borderRadius: 28, border: `4px solid ${RENK.lacivert}`, background: "#FCF8EC", overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${dolu * 100}%`, background: `linear-gradient(90deg, ${RENK.altin}, ${RENK.mercan})` }} />
        </div>
        <div style={{ marginTop: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: INTER, fontWeight: 700, fontSize: 24, color: RENK.lacivert }}>several grams per serving</span>
          <Hap metin="ILLUSTRATIVE" renk={RENK.gri} boyut={18} />
        </div>
      </div>
    </>
  );
};

export default S47;
