// Bölüm kartı: BÖLÜM 6 — beş artık yemek alışkanlığı.
import React from "react";
import { BolumKarti, RENK, SP, ANTON, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFive = K(0, "five habits");
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/51", kirp: [240, 330, 1200, 1050] },
        { gorsel: "tam/52", kirp: [60, 100, 1000, 805] },
        { gorsel: "tam/54", kirp: [140, 130, 1040, 805] },
      ]} />
      {/* altyazının altında beş numaralı nokta */}
      <div style={{ position: "absolute", left: 140, top: 820, display: "flex", gap: 20 }}>
        {[1, 2, 3, 4, 5].map((n) => {
          const [sc, al] = pop(t, tFive + 0.12 * (n - 1), 0.45);
          return (
            <div key={n} style={{ width: 64, height: 64, borderRadius: "50%", background: RENK.koyuYesil, color: "#fff", opacity: al,
              transform: `scale(${sc})`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 36 }}>{n}</div>
          );
        })}
      </div>
    </>
  );
};

export default S50;
