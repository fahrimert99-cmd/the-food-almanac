// Sahne 19 — akşam yemeğinden sonra kısa yürüyüşler uzun yürüyüşlerden iyiydi
import React from "react";
import { AbsoluteFill, Etiket, INTER, Kamera, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDin = K(0, "after dinner"), tPost = K(0, "post-meal"), tLow = K(0, "lower"), tSmall = K(1, "small study"), tDir = K(1, "direction");
  const [s1, a1] = pop(t, tSmall, 0.5);
  const [s2, a2] = pop(t, tDir, 0.5);
  return (
    <>
      {/* sağ alttaki sahte imza yazısı ve soldaki lamba kadraj dışında */}
      <Kamera gorsel="tam/19" pencere={kameraYolu(t, s.sure, [260, 30, 1640], [320, 60, 1560])}>
        <Etiket t={t} bas={tDin} bitis={5.0} capa={[1020, 690]} konum={[1000, 780]} metin="AFTER DINNER" renk={RENK.altin} />
        <Etiket t={t} bas={tPost} bitis={5.0} capa={[1690, 800]} konum={[1560, 690]} metin="POST-MEAL WALKS" renk={RENK.yesil} />
      </Kamera>
      <VurguRozet t={t} bas={tLow - 0.1} bitis={4.9} vurgu="LOWER" not="THAN THE LONG WALKS" x={640} y={80} genislik={400} boyut={84} renk={RENK.yesil} />
      <div style={{ position: "absolute", left: 1230, top: 660, width: 540, padding: "22px 30px", background: "#FCF8EC", border: `4px solid ${RENK.altin}`,
        borderRadius: 26, boxShadow: "0 10px 26px rgba(48,40,34,0.2)", opacity: Math.max(a1, 0), transform: `scale(${Math.max(s1, 0.01)})`, transformOrigin: "50% 100%" }}>
        <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 40, letterSpacing: 2, color: RENK.altin }}>SMALL STUDY</div>
        <div style={{ fontFamily: INTER, fontWeight: 700, fontSize: 32, lineHeight: 1.3, marginTop: 8, color: RENK.lacivert, opacity: a2,
          transform: `translateY(${(1 - eout(ilerle(t, tDir, 0.5))) * 10}px)`, minHeight: 84 }}>
          {a2 > 0 ? "SAME DIRECTION AS THE FIRST TRIAL" : ""}</div>
      </div>
    </>
  );
};

export default S19;
