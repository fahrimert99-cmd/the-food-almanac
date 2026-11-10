// Sahne 52 — duvar panosu kâğıt çerçeveyle örtülü; içinde anlatımın mesajı değişir.
import React from "react";
import { ANTON, Etiket, IkonYol, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S52: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAdv = K(0, "advanced kidney"), tOth = K(0, "another condition"), tPlan = K(0, "follow the plan"), tRep = K(1, "can't replace");
  const durumlar = [
    { bas: tAdv, bit: tOth - 0.1, satir: ["ADVANCED", "KIDNEY DISEASE"], renk: RENK.lacivert, onay: false },
    { bas: tOth, bit: tPlan - 0.1, satir: ["OTHER CONDITION", "OWN FOOD LIMITS"], renk: RENK.lacivert, onay: false },
    { bas: tPlan, bit: tRep - 0.1, satir: ["KIDNEY TEAM", "FIRST"], renk: RENK.koyuYesil, onay: true },
    { bas: tRep, bit: 1e9, satir: ["THIS VIDEO CAN'T", "REPLACE YOUR PLAN"], renk: RENK.mercan, onay: false },
  ];
  return (
    <>
      <Kamera gorsel="tam/52" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [100, 50, 1720])}>
        {/* duvar panosunun bozuk çizimi çerçeveli kâğıtla örtülür */}
        <div style={{ position: "absolute", left: 700, top: 50, width: 540, height: 420, background: RENK.kagit,
          border: `5px solid ${RENK.lacivert}`, boxSizing: "border-box", boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }}>
          <div style={{ position: "absolute", inset: 10, border: `2px solid ${RENK.altin}`, opacity: 0.7 }} />
          {durumlar.map((d, i) => {
            const [sc, al] = pop(t, d.bas, 0.5);
            const a = al * sol(t, d.bit, 0.3);
            if (a <= 0) return null;
            return (
              <div key={i} style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center",
                justifyContent: "center", gap: 6, opacity: a, transform: `scale(${0.9 + 0.1 * sc})` }}>
                {d.onay && <div style={{ marginBottom: 6 }}><IkonYol ad="onay" boyut={64} renk={RENK.yesil} kalinlik={9} /></div>}
                {d.satir.map((m) => (
                  <div key={m} style={{ fontFamily: ANTON, fontSize: 56, lineHeight: 1.1, color: d.renk, whiteSpace: "nowrap" }}>{m}</div>
                ))}
              </div>
            );
          })}
        </div>
        <Etiket t={t} bas={K(0, "kidney team")} capa={[1100, 568]} konum={[1560, 200]} metin="YOUR KIDNEY TEAM" renk={RENK.altin} boyut={28} />
      </Kamera>
    </>
  );
};
export default S52;
