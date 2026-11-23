// Sahne 22 — CDC tahmini: ABD'de yılda ~1.250 Listeria enfeksiyonu, 172 ölüm; nadir ama ciddi; 65+ daha yüksek riskte.
import React from "react";
import { BaslikBlok, Etiket, INTER, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sn, an] = pop(t, 0.2, 0.5);
  return (
    <>
      <Kamera gorsel="tam/22" pencere={kameraYolu(t, s.sure, [0, 20, 1900], [100, 70, 1720])}>
        {/* gazete ve gözlük (bozuk küçük yazı) kâğıt notla örtülü */}
        <div style={{ position: "absolute", left: 1030 - 200, top: 580 - 105, width: 400, height: 210, transform: `rotate(-4deg) scale(${sn})`, opacity: an,
          background: RENK.kagitAcik, border: `3px solid ${RENK.murekkep}`, borderRadius: 10, boxShadow: "0 12px 26px rgba(48,40,34,0.3)",
          display: "flex", alignItems: "center", justifyContent: "center", fontFamily: INTER, fontWeight: 800, fontSize: 38, letterSpacing: 4,
          color: RENK.lacivert, textAlign: "center", lineHeight: 1.3 }}>
          CDC<br />ESTIMATE
        </div>
        <Etiket t={t} bas={K(0, "Listeria")} bitis={K(1, "It") - 0.1} capa={[790, 340]} konum={[420, 170]} metin="LEFTOVERS" renk={RENK.altin} />
      </Kamera>
      <VurguRozet t={t} bas={K(0, "1,250")} vurgu="1,250" not="infections a year" x={1400} y={170} genislik={360} boyut={96} />
      <VurguRozet t={t} bas={K(0, "172")} vurgu="172" not="deaths a year" x={1760} y={170} genislik={300} boyut={96} renk={RENK.mercan} />
      <BaslikBlok t={t} bas={K(1, "rare")} satirlar={["RARE,", "BUT SERIOUS"]} x={1860} y={520} boyut={96} hiza="sag" />
      <VurguRozet t={t} bas={K(1, "65")} vurgu="65+" not="higher risk" x={1620} y={720} genislik={300} boyut={96} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.1} />
    </>
  );
};

export default S22;
