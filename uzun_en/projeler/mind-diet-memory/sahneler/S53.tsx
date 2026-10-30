// Sahne 53 — Rush kohortları: MIND diyeti ~yarı Alzheimer oranı, daha yavaş gerileme; ama bunlar ilişki, kanıt değil.
import React from "react";
import { BaslikBlok, Etiket, IkonYol, INTER, Kamera, KaynakEtiketi, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol, VurguRozet } from "../kutuphane";

const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tRush = K(0, "rush"), tMind = K(0, "mind"), tHalf = K(0, "half"), tSlow = K(0, "slower"), tAssoc = K(1, "associations"), tProof = K(1, "not proof");
  const aP = eout(ilerle(t, tHalf - 0.4, 0.6));
  const aPs = aP * sol(t, tAssoc - 0.2, 0.4);
  const [sc, al] = pop(t, tSlow, 0.5);
  const a = al * sol(t, tAssoc - 0.2, 0.4);
  return (
    <>
      <Kamera gorsel="tam/53" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820])}>
        <Etiket t={t} bas={tMind} bitis={tAssoc - 0.2} capa={[800, 440]} konum={[1000, 110]} metin="MIND DIET" renk={RENK.koyuYesil} />
      </Kamera>
      <Panel a={eout(ilerle(t, tHalf - 0.4, 0.6))} taraf="sag" genislik={640} />
      <KaynakEtiketi t={t} metin="RUSH COHORTS · OLDER ADULTS" bas={tRush} />
      <VurguRozet t={t} bas={tHalf} vurgu="≈ HALF" not="THE ALZHEIMER'S RATE" x={1610} y={300} genislik={460} bitis={tAssoc - 0.2} />
      {a > 0 && (
        <div style={{ position: "absolute", right: 70, top: 620, opacity: a, transform: `scale(${sc})`, transformOrigin: "100% 50%", display: "flex",
          alignItems: "center", gap: 14, background: "#FCF8EC", border: `4px solid ${RENK.yesil}`, borderRadius: 999, padding: "10px 30px",
          boxShadow: "0 10px 26px rgba(48,40,34,0.18)", fontFamily: INTER, fontWeight: 800, fontSize: 36, letterSpacing: 2, color: RENK.lacivert }}>
          <IkonYol ad="ok" boyut={38} renk={RENK.yesil} />SLOWER DECLINE
        </div>
      )}
      <BaslikBlok t={t} bas={tAssoc} satirlar={["ASSOCIATIONS,", "NOT PROOF"]} x={1860} y={320} boyut={84} hiza="sag"
        adim={Math.max(0.2, tProof - tAssoc)} renkler={[RENK.lacivert, RENK.mercan]} />
    </>
  );
};

export default S53;
