// Sahne 59 — kemik kaygısında sıradaki adım doktorla konuşmak.
import React from "react";
import { ANTON, Etiket, INTER, IkonYol, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S59: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOp = K(0, "osteoporosis"), tPe = K(0, "osteopenia"), tNext = K(0, "next step"), tDoc = K(0, "conversation"),
    tNot = K(0, "not a bigger pill");
  // defter üzerindeki sahte yazıyı örten kart: sahne boyunca görünür
  const [sk, ak] = pop(t, 0.3, 0.5);
  const a1 = sol(t, tNext - 0.1);
  const a2 = eout(ilerle(t, tNext, 0.5));
  const [sn, an] = pop(t, tNot, 0.5);
  return (
    <>
      <Kamera gorsel="tam/59" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [60, 60, 1800])} />
      <Etiket t={t} bas={tOp} bitis={tNext} capa={[480, 300]} konum={[300, 110]} metin="BONE CONCERN" renk={RENK.altin} />
      <div style={{ position: "absolute", left: 1060, top: 560, width: 600, height: 340, transform: `translate(-50%, -50%) scale(${sk})`,
        opacity: ak, background: "#FCF8EC", border: `4px solid ${RENK.altin}`, borderRadius: 26, boxShadow: "0 12px 30px rgba(48,40,34,0.22)" }}>
        <div style={{ position: "absolute", inset: 0, opacity: a1, padding: "36px 40px", boxSizing: "border-box" }}>
          {[{ m: "OSTEOPOROSIS", b: tOp }, { m: "OSTEOPENIA", b: tPe }].map((o, i) => {
            const [sc, al] = pop(t, o.b, 0.5);
            return (
              <div key={o.m} style={{ transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al, marginTop: i ? 34 : 0,
                fontFamily: ANTON, fontSize: 70, color: RENK.lacivert, whiteSpace: "nowrap" }}>{o.m}</div>
            );
          })}
        </div>
        <div style={{ position: "absolute", inset: 0, opacity: a2, padding: "36px 40px", boxSizing: "border-box" }}>
          <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 4, color: RENK.altin }}>NEXT STEP</div>
          {a2 > 0 && (
            <div style={{ marginTop: 12, opacity: eout(ilerle(t, tDoc, 0.5)), fontFamily: ANTON, fontSize: 80, lineHeight: 1.05,
              color: RENK.koyuYesil }}>TALK TO YOUR DOCTOR</div>
          )}
        </div>
      </div>
      <div style={{ position: "absolute", left: 960, top: 880, transform: `translate(-50%, 0) scale(${sn})`, opacity: an, display: "flex",
        alignItems: "center", gap: 14, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`, borderRadius: 999,
        padding: "10px 28px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 32, letterSpacing: 1.5, color: RENK.murekkep,
        boxShadow: "0 8px 22px rgba(48,40,34,0.2)" }}>
        <IkonYol ad="carpi" boyut={34} renk={RENK.mercan} />
        NOT A BIGGER PILL
      </div>
    </>
  );
};

export default S59;
