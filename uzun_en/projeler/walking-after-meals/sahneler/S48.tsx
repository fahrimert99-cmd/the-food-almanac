// Sahne 48 — Adım 5: saat takıntısı yok. Duvar saati ve masa solda; sağ panelde mesaj.
import React from "react";
import { ANTON, Baslik, Etiket, Hap, Ikon, Kamera, Liste, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, Panel } from "../kutuphane";

const Adim: React.FC<{ t: number; n: string; bas: number }> = ({ t, n, bas }) => {
  const [sc, al] = pop(t, bas, 0.5);
  return (
    <div style={{ position: "absolute", left: 56, top: 56, width: 96, height: 96, borderRadius: "50%", background: RENK.lacivert,
      color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 60,
      opacity: al, transform: `scale(${sc})`, border: `4px solid ${RENK.kagitAcik}`, boxShadow: "0 8px 22px rgba(48,40,34,0.22)" }}>{n}</div>
  );
};

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tClock = K(1, "clock."), tSome = K(2, "Some"), tAfter = K(2, "after"), tBetter = K(2, "better"), tNone = K(2, "none,"),
    tMissed = K(2, "missed");
  const pPanel = eout(ilerle(t, tSome - 0.2, 0.7));
  return (
    <>
      <Kamera gorsel="tam/48" pencere={kameraYolu(t, s.sure, [0, 10, 1860], [60, 50, 1700])}>
        <Etiket t={t} bas={K(1, "stress")} bitis={tSome - 0.2} capa={[900, 215]} konum={[470, 150]} metin="DON'T STRESS" renk={RENK.altin} />
        <Etiket t={t} bas={tAfter} capa={[740, 590]} konum={[420, 420]} metin="AFTER A MEAL" renk={RENK.yesil} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={860} opak={0.97} />
      <Adim t={t} n="5" bas={0.1} />
      <Baslik t={t} bas={tSome} metin="SOME MOVEMENT" x={1170} y={250} boyut={92} renk={RENK.lacivert} />
      <Baslik t={t} bas={tBetter - 0.1} metin="IS BETTER" x={1170} y={360} boyut={92} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tNone - 0.2} metin="THAN NONE" x={1170} y={470} boyut={92} renk={RENK.koyuYesil} />
      <Liste t={t} isaret="onay" x={1170} y={600} boyut={34} genislik={700} ogeler={[
        { bas: tMissed, metin: "A MISSED WALK UNDOES NOTHING" },
      ]} />
    </>
  );
};

export default S48;
