// Sahne 38 — En güçlü kanıt: tip 2 diyabet ve prediyabet. Sol panel + sivri / yumuşatılmış eğri kartları.
import React from "react";
import { Baslik, INTER, Kamera, Liste, RENK, SP, einout, eout, ilerle, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Eğri simgeleri (200x110 kutu, taban y=100). Veri değil, yalnızca biçim.
const SIVRI = "M 4 100 C 48 100, 58 10, 86 10 C 114 10, 122 96, 196 97";
const YUMUSAK = "M 4 100 C 56 100, 74 56, 108 56 C 142 56, 152 96, 196 97";

// Eğri simgeli kart: kalem ucuyla çizilen simge + üst satır + Anton başlık.
const EgriKart: React.FC<{
  t: number; bas: number; y: number; renk: string; ust: string; baslik: string; baslikBas: number;
  cizgiler: { d: string; renk: string; bas: number; soluk?: boolean }[]; ok?: number;
}> = ({ t, bas, y, renk, ust, baslik, baslikBas, cizgiler, ok }) => {
  const [sc, al] = pop(t, bas, 0.55);
  if (al <= 0) return null;
  const pOk = ok == null ? 0 : eout(ilerle(t, ok, 0.5));
  return (
    <div style={{ position: "absolute", left: 66, top: y, width: 656, height: 164, opacity: al, transform: `scale(${sc})`,
      transformOrigin: "0 50%", background: RENK.kagitAcik, border: `4px solid ${renk}`, borderRadius: 24,
      boxShadow: "0 10px 26px rgba(48,40,34,0.16)" }}>
      <svg width={190} height={112} viewBox="-10 -10 220 130" style={{ position: "absolute", left: 18, top: 26 }}>
        <line x1={0} y1={100} x2={200} y2={100} stroke={RENK.murekkep} strokeOpacity={0.45} strokeWidth={3} strokeDasharray="8 8" />
        {cizgiler.map((c, i) => (
          <path key={i} d={c.d} fill="none" stroke={c.renk} strokeWidth={c.soluk ? 5 : 9} strokeLinecap="round"
            opacity={c.soluk ? 0.4 : 1} pathLength={1} strokeDasharray={1} strokeDashoffset={1 - einout(ilerle(t, c.bas, 0.9))} />
        ))}
        {pOk > 0 && (
          <g opacity={pOk}>
            <line x1={98} y1={16} x2={98} y2={16 + 18 * pOk} stroke={RENK.altin} strokeWidth={6} strokeLinecap="round" />
            <polygon points={`88,${18 + 18 * pOk} 108,${18 + 18 * pOk} 98,${32 + 18 * pOk}`} fill={RENK.altin} />
          </g>
        )}
      </svg>
      <div style={{ position: "absolute", left: 228, top: 30, fontFamily: INTER, fontWeight: 800, fontSize: 24, letterSpacing: 3,
        color: RENK.altin, whiteSpace: "nowrap" }}>{ust}</div>
      <Baslik t={t} bas={baslikBas} metin={baslik} x={224} y={100} boyut={54} renk={renk} />
    </div>
  );
};

const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  // kamera sağa yaslı yavaş yakınlaşma; sol el (bilekteki şişlik) panelin altında kalır
  const pencere = kameraYolu(t, s.sure, [0, 56, 1820], [110, 100, 1720]);
  const tListeSon = c[1].bas - 0.2;
  const tSivri = K(1, "blood sugar spikes"), tBuyuk = K(1, "larger");
  const tYumusak = K(1, "softening"), tOnem = K(1, "may matter most");
  return (
    <>
      <Kamera gorsel="tam/38" pencere={pencere}>
        {/* sağdaki bıçak ağzındaki sahte yazı: bıçak rengiyle örtülür */}
        <div style={{ position: "absolute", left: 1006, top: 470, width: 92, height: 46, transform: "rotate(-21deg)",
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(106,122,129,1) 0%, rgba(106,122,129,1) 58%, rgba(106,122,129,0) 100%)" }} />
        {/* perçinin sağındaki küçük sahte işaret */}
        <div style={{ position: "absolute", left: 1087, top: 461, width: 28, height: 14, transform: "rotate(-21deg)",
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(104,121,129,1) 0%, rgba(104,121,129,1) 50%, rgba(104,121,129,0) 100%)" }} />
      </Kamera>
      {/* sol panel: baştan tam opak (sol bilekteki şişlik hiç görünmesin) */}
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 900,
        background: `linear-gradient(to right, ${kagit(1)} 0%, ${kagit(1)} 64%, ${kagit(0.9)} 76%, ${kagit(0)} 100%)` }} />
      <Baslik t={t} bas={K(0, "strongest") - 0.1} metin="THE STRONGEST" x={66} y={232} boyut={92} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "evidence") - 0.1} metin="EVIDENCE" x={66} y={340} boyut={92} renk={RENK.koyuYesil} />
      {/* 1. cümle: kimlerden */}
      <Baslik t={t} bas={K(0, "people with") - 0.05} bitis={tListeSon} metin="COMES FROM PEOPLE WITH" x={70} y={452} boyut={26}
        renk={RENK.altin} font="inter" aralik={3} />
      <Liste t={t} x={66} y={500} aralik={96} boyut={42} isaret="onay" genislik={600} ogeler={[
        { bas: K(0, "type 2 diabetes"), metin: "TYPE 2 DIABETES", renk: RENK.koyuYesil, bitis: tListeSon },
        { bas: K(0, "prediabetes"), metin: "PREDIABETES", renk: RENK.yesil, bitis: tListeSon },
      ]} />
      {/* 2. cümle: büyük sıçramalar, yumuşatma */}
      <EgriKart t={t} bas={tSivri} y={432} renk={RENK.mercan} ust="BLOOD SUGAR" baslik="LARGER SPIKES" baslikBas={tBuyuk}
        cizgiler={[{ d: SIVRI, renk: RENK.mercan, bas: tSivri + 0.1 }]} />
      <EgriKart t={t} bas={tYumusak - 0.05} y={630} renk={RENK.yesil} ust="SOFTENING THEM" baslik="MAY MATTER MOST" baslikBas={tOnem}
        cizgiler={[{ d: SIVRI, renk: RENK.mercan, bas: tYumusak - 0.05, soluk: true }, { d: YUMUSAK, renk: RENK.yesil, bas: tYumusak + 0.15 }]}
        ok={tYumusak + 0.35} />
      <div style={{ position: "absolute", left: 70, top: 822, opacity: eout(ilerle(t, tYumusak + 0.3, 0.5)),
        fontFamily: INTER, fontWeight: 800, fontSize: 18, letterSpacing: 2, color: RENK.altin, border: `2.5px solid ${RENK.altin}`,
        background: "#FCF6E6", borderRadius: 999, padding: "4px 14px" }}>ILLUSTRATIVE</div>
    </>
  );
};

export default S38;
