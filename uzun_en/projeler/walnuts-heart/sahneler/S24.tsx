// Sahne 24 — LDL düşüşü 4.3 mg/dL, olası aralık 1.6–6.6. Bozuk takvim rakamları kartın altında kalır.
import React from "react";
import { ANTON, Baslik, Etiket, INTER, Kamera, Not, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Kart ve eksen yerleşimi (ekran koordinatı); eksen 0–8 mg/dL
const KX = 540, KY = 30, KW = 780, KH = 625;
const AX0 = 620, AX1 = 1240, AY = 520;
const px = (v: number) => AX0 + (v / 8) * (AX1 - AX0);

const S24: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tMg = K(0, "milligrams"), tLdl = K(0, "LDL"), tDeger = K(0, "4.3,");
  const tAralik = K(0, "likely range"), t1 = K(0, "1.6"), t2 = K(0, "6.6.");
  const tHavuz = K(1, "pooled analysis"), tIki = K(1, "two full years");
  const [sk, ak] = pop(t, 0.0, 0.5);
  const pEks = eout(ilerle(t, tDeger - 0.2, 0.5));
  const pBar = eout(ilerle(t, t1, t2 - t1 + 0.3));
  const [sd, ad] = pop(t, tDeger, 0.55);
  const [sn, an] = pop(t, tDeger + 0.1, 0.4);
  return (
    <>
      <Kamera gorsel="tam/24" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        {/* bozuk takvim rakamları baştan itibaren kâğıtla örtülür */}
        <div style={{ position: "absolute", left: 590, top: 60, width: 680, height: 600,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 70%, ${kagit(0)} 100%)` }} />
      </Kamera>
      {/* takvimi örten kart */}
      <div style={{ position: "absolute", left: KX, top: KY, width: KW, height: KH, opacity: ak, transform: `scale(${0.96 + 0.04 * sk})`,
        background: RENK.kagitAcik, border: `4px solid ${RENK.lacivert}`, borderRadius: 28, boxShadow: "0 14px 34px rgba(48,40,34,0.25)" }} />
      <Baslik t={t} bas={tMg} metin="IN MG/DL" x={930} y={92} boyut={30} renk={RENK.altin} hiza="orta" font="inter" agirlik={800} aralik={6} />
      <Baslik t={t} bas={tLdl} metin="LDL DROP" x={930} y={165} boyut={78} renk={RENK.koyuYesil} hiza="orta" />
      <div style={{ position: "absolute", left: 930, top: 225, transform: `translate(-50%, 0) scale(${sd})`, opacity: ad,
        fontFamily: ANTON, fontSize: 190, lineHeight: 1.1, color: RENK.altin }}>4.3</div>
      <Not t={t} bas={tAralik} metin="LIKELY RANGE" x={930} y={440} hiza="orta" boyut={30} agirlik={800} />
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <line x1={AX0} x2={AX0 + (AX1 - AX0) * pEks} y1={AY + 11} y2={AY + 11} stroke={RENK.lacivert} strokeWidth={3} opacity={0.5} />
        <rect x={px(1.6)} y={AY} width={(px(6.6) - px(1.6)) * pBar} height={22} rx={11} fill={RENK.yesil} opacity={0.85} />
        <circle cx={px(4.3)} cy={AY + 11} r={16 * sn} fill={RENK.altin} stroke={RENK.kagitAcik} strokeWidth={4} opacity={an} />
      </svg>
      {[[1.6, t1], [6.6, t2]].map(([v, tt]) => {
        const [sc, al] = pop(t, tt, 0.45);
        return <div key={v} style={{ position: "absolute", left: px(v), top: 556, transform: `translate(-50%, 0) scale(${sc})`, opacity: al,
          fontFamily: ANTON, fontSize: 44, color: RENK.lacivert }}>{v}</div>;
      })}
      <Etiket t={t} bas={tHavuz} capa={[990, 800]} konum={[1560, 700]} metin="POOLED ANALYSIS" renk={RENK.yesil} />
      <Etiket t={t} bas={tIki} capa={[1290, 915]} konum={[1560, 830]} metin="HELD 2 YEARS" renk={RENK.altin} />
    </>
  );
};

export default S24;
