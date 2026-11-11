// Sahne 54 — 3 yıllık randomize deney: 604 yetişkin, MIND kontrol diyetini geçemedi; iki grup da iyileşti (terazi dengede).
import React from "react";
import { Etiket, Hap, INTER, IkonYol, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol, VurguRozet } from "../kutuphane";

const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTri = K(0, "three-year"), t604 = K(0, "604"), tMind = K(0, "mind"), tCtl = K(0, "control"), tBoth = K(1, "both");
  const aH = eout(ilerle(t, tTri, 0.5)) * sol(t, tBoth - 0.2, 0.4);
  const [sc, al] = pop(t, tBoth, 0.55);
  return (
    <>
      <Kamera gorsel="tam/54" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 22, 1840])}>
        <Etiket t={t} bas={tMind} capa={[390, 800]} konum={[200, 480]} metin="MIND DIET" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={tCtl} capa={[1400, 800]} konum={[1640, 480]} metin="CONTROL DIET" renk={RENK.lacivert} />
      </Kamera>
      {aH > 0 && (
        <div style={{ position: "absolute", left: 1000, top: 50, opacity: aH, transform: `translateY(${(1 - aH) * -10}px)` }}>
          <Hap metin="3-YEAR RANDOMIZED TRIAL" renk={RENK.altin} boyut={30} />
        </div>
      )}
      <VurguRozet t={t} bas={t604} vurgu="604" not="ADULTS AGED 65+" x={260} y={60} genislik={340} boyut={92} />
      {al > 0 && (
        <div style={{ position: "absolute", left: 1000, top: 50, opacity: al, transform: `scale(${sc})`, transformOrigin: "0 50%", display: "flex",
          alignItems: "center", gap: 14, background: "#FCF8EC", border: `4px solid ${RENK.yesil}`, borderRadius: 999, padding: "10px 30px 10px 12px",
          boxShadow: "0 10px 26px rgba(48,40,34,0.18)", fontFamily: INTER, fontWeight: 800, fontSize: 32, letterSpacing: 2, color: RENK.lacivert }}>
          <span style={{ width: 48, height: 48, borderRadius: "50%", background: RENK.yesil, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
            <IkonYol ad="onay" boyut={30} renk="#fff" />
          </span>BOTH GROUPS IMPROVED
        </div>
      )}
    </>
  );
};

export default S54;
