// Sahne 13 — fayda esas olarak yüksek başlangıç basıncında. Sol panel + kavanozlar sağda.
import React from "react";
import { ANTON, INTER, Hap, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Kart: React.FC<{ t: number; bas: number; ust: string; metin: string; renk: string; y: number }> = ({ t, bas, ust, metin, renk, y }) => {
  const [sc, al] = pop(t, bas, 0.55);
  return (
    <div style={{ position: "absolute", left: 90, top: y, width: 780, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al,
      background: "#FCF8EC", border: `4px solid ${renk}`, borderRadius: 26, padding: "16px 28px 20px", boxShadow: "0 10px 26px rgba(48,40,34,0.16)" }}>
      <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 3, color: RENK.gri }}>{ust}</div>
      <div style={{ fontFamily: ANTON, fontSize: 76, lineHeight: 1.1, color: renk }}>{metin}</div>
    </div>
  );
};

const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pPanel = eout(ilerle(t, 0.2, 0.7));
  return (
    <>
      <Kamera gorsel="tam/11" pencere={kameraYolu(t, s.sure, [700, 60, 1200], [650, 90, 1250])} />
      <Panel a={pPanel} taraf="sol" genislik={1000} opak={1} />
      <Kart t={t} bas={K(0, "already")} ust="ALREADY HIGH" metin="BIGGER DROP" renk={RENK.yesil} y={170} />
      <div style={{ position: "absolute", left: 90, top: 470 }}>
        <Hap metin="2010 TRIAL" renk={RENK.altin} boyut={32} style={{ opacity: pop(t, K(1, "2010"), 0.45)[1], transform: `scale(${pop(t, K(1, "2010"), 0.45)[0]})`, transformOrigin: "0 50%" }} />
      </div>
      <Kart t={t} bas={K(1, "lower")} ust="LOWER STARTING PRESSURE" metin="NO CLEAR DIFFERENCE" renk={RENK.mercan} y={580} />
      <Not t={t} bas={K(0, "mostly")} metin="the benefit shows up mostly where pressure was high" x={90} y={800} boyut={32} genislik={800} />
    </>
  );
};
export default S13;
