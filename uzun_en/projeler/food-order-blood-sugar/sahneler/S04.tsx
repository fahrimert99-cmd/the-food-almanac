// Sahne 4 — 1 dakikalık onaylı demodan uyarlandı.
import React from "react";
import { AbsoluteFill, AltSis, ANTON, Baslik, Etiket, GorselKart, Img, INTER, Kamera, RENK, SP, einout, eout, ilerle, kagit,
  kelimeZamani, kis, pop, random, staticFile } from "../kutuphane";

// --- 4. Gerçek etki mi? + videonun dört sorusu -------------------------------------------
const KARTLAR = [
  { ifade: "what the research", gorsel: "tam/41", kirp: [0, 370, 880, 1030] as [number, number, number, number], ad: "THE RESEARCH" },
  { ifade: "inside your body", gorsel: "tam/28", kirp: [60, 150, 980, 840] as [number, number, number, number], ad: "INSIDE YOUR BODY" },
  { ifade: "who it helps most", gorsel: "tam/39", kirp: [240, 0, 1680, 1080] as [number, number, number, number], ad: "WHO IT HELPS" },
  { ifade: "where the evidence runs out", gorsel: "tam/04", kirp: [590, 250, 1530, 955] as [number, number, number, number], ad: "THE LIMITS" },
];

const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const pKart = eout(ilerle(t, c[1].bas - 0.25, 0.7));
  const z = ilerle(t, 0, s.sure);
  const tReal = K(0, "real effect"), tOr = K(0, "or just"), tHack = K(0, "food hack");
  // panel sahnenin başından itibaren: sol üstteki sahte kimya yazıları hiç görünmesin
  const pPanel = 1 - pKart;
  return (
    <>
      <Kamera gorsel="tam/04" pencere={[100 + 60 * z, 180 + 20 * z, 1600 - 90 * z]}>
        {/* sağ alttaki imza kalıntısı kâğıt rengiyle örtülür */}
        <div style={{ position: "absolute", left: 1480, top: 880, width: 300, height: 200,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 55%, ${kagit(0)} 100%)` }} />
      </Kamera>
      <AltSis a={0.8} />
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 900, opacity: pPanel,
        background: `linear-gradient(to right, ${kagit(1)} 0%, ${kagit(1)} 56%, ${kagit(0)} 100%)` }} />
      <div style={{ opacity: 1 - pKart }}>
        <Baslik t={t} bas={tReal} metin="REAL EFFECT" x={70} y={360} boyut={112} renk={RENK.koyuYesil} />
        <Baslik t={t} bas={tOr} metin="or just another" x={76} y={470} boyut={40} renk={RENK.gri} font="inter" agirlik={700} />
        <Baslik t={t} bas={tHack} metin="FOOD HACK?" x={70} y={580} boyut={112} renk={RENK.mercan} />
      </div>
      <AbsoluteFill style={{ backgroundColor: RENK.kagit, opacity: 0.96 * pKart }} />
      {pKart > 0 && (
        <Baslik t={t} bas={c[1].bas} metin="IN THIS VIDEO" x={960} y={240} boyut={30} renk={RENK.altin} hiza="orta" font="inter" aralik={8} />
      )}
      {KARTLAR.map((k, i) => {
        const bas = K(1, k.ifade);
        const [sc, al] = pop(t, bas, 0.6);
        if (al <= 0) return null;
        const x = 330 + i * 420;
        const don = (1 - eout(ilerle(t, bas, 0.7))) * (i % 2 ? 4 : -4);
        return (
          <React.Fragment key={k.ad}>
            <GorselKart t={t} bas={bas} gorsel={k.gorsel} kirp={k.kirp} x={x} y={520} w={360} h={270} aci={i % 2 ? 1.5 : -1.5} />
            <div style={{ position: "absolute", left: x - 190 - 18, top: 520 - 143 - 22, width: 58, height: 58, borderRadius: "50%",
              background: RENK.lacivert, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: ANTON, fontSize: 32, transform: `scale(${sc})`, opacity: al, border: `3px solid ${RENK.kagitAcik}` }}>{i + 1}</div>
            <Baslik t={t} bas={bas + 0.15} metin={k.ad} x={x} y={735} boyut={46} renk={RENK.lacivert} hiza="orta" />
          </React.Fragment>
        );
      })}
    </>
  );
};

export default S04;
