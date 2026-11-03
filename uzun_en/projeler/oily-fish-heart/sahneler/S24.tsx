// Sahne 24 — şişe ve konserveler: icosapent ethyl, günde 4 gram (VITAL'in 4 katı).
import React from "react";
import { AltSis, BaslikBlok, Etiket, INTER, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S24: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const B = { satirlar: [] as string[], vurgu: "", not: "", ...(s.meta.baslik ?? {}) };
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [0, 40, 1760]);
  const [sc, al] = pop(t, K(0, "EPA"), 0.5);
  const [sv, av] = pop(t, K(1, "four"), 0.55);
  return (
    <>
      <Kamera gorsel="tam/24" pencere={p} />
      <AltSis a={0.4} />
      <Etiket t={t} bas={K(0, "icosapent")} capa={[400, 640]} konum={[760, 170]} metin="ICOSAPENT ETHYL" renk={RENK.altin} />
      <div style={{ position: "absolute", left: 1330, top: 190, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        background: RENK.kagitAcik, border: `3px solid ${RENK.yesil}`, borderRadius: 999, padding: "9px 26px", fontFamily: INTER, fontWeight: 800,
        fontSize: 28, letterSpacing: 1.5, color: RENK.lacivert, whiteSpace: "nowrap", boxShadow: "0 8px 20px rgba(48,40,34,0.14)" }}>PURIFIED EPA ALONE</div>
      <BaslikBlok t={t} bas={K(0, "four")} satirlar={B.satirlar} x={1330} y={400} boyut={120} renkler={[RENK.koyuYesil, RENK.koyuYesil]} />
      <Not t={t} bas={K(1, "That's")} metin={B.not ?? ""} x={1330} y={680} boyut={30} genislik={520} agirlik={700} />
    </>
  );
};

export default S24;
