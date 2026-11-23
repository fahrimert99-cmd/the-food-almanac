// Sahne 46 — karne: desteklenen / belirsiz / yanlış (sağ panelde üç satır).
import React from "react";
import { ANTON, BaslikBlok, IkonYol, INTER, Kamera, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const satirlar = [
    { bas: K(1, "Well supported"), ad: "WELL SUPPORTED", renk: RENK.yesil, ikon: "onay" as const,
      alt: ["Little effect on colds caught", "Small shortening with daily use"] },
    { bas: K(2, "Uncertain"), ad: "UNCERTAIN", renk: RENK.altin, ikon: "soru" as const,
      alt: ["Late starts, high doses, juice"] },
    { bas: K(3, "False"), ad: "FALSE", renk: RENK.mercan, ikon: "carpi" as const,
      alt: ["That vitamin C reliably stops colds"] },
  ];
  return (
    <>
      <Kamera gorsel="tam/46" pencere={kameraYolu(t, s.sure, [0, 30, 1900], [20, 60, 1800])} />
      <Panel a={eout(ilerle(t, 0.1, 0.6))} taraf="sag" genislik={880} opak={0.98} />
      <BaslikBlok t={t} bas={0.35} satirlar={["THE HONEST", "SCORECARD"]} x={1860} y={150} boyut={90} hiza="sag" />
      {satirlar.map((r, i) => {
        const [sc, al] = pop(t, r.bas, 0.55);
        if (al <= 0) return null;
        return (
          <div key={r.ad} style={{ position: "absolute", left: 1130, top: 370 + i * 190, width: 730, height: 160, opacity: al,
            transform: `scale(${sc})`, transformOrigin: "100% 50%", background: "#FCF8EC", border: `4px solid ${r.renk}`,
            borderRadius: 26, boxShadow: "0 10px 26px rgba(48,40,34,0.16)", display: "flex", alignItems: "center", gap: 26,
            padding: "0 28px" }}>
            <div style={{ width: 84, height: 84, flex: "none", borderRadius: "50%", background: r.renk, display: "flex",
              alignItems: "center", justifyContent: "center" }}>
              <IkonYol ad={r.ikon} boyut={52} renk="#fff" />
            </div>
            <div>
              <div style={{ fontFamily: ANTON, fontSize: 50, lineHeight: 1.1, color: r.renk }}>{r.ad}</div>
              {r.alt.map((a) => (
                <div key={a} style={{ fontFamily: INTER, fontWeight: 600, fontSize: 28, lineHeight: 1.3, color: RENK.lacivert }}>{a}</div>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default S46;
