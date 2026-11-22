// Sahne 13 — neden plasebo? Soğuk algınlığı kendiliğinden geçer; karşılaştırma grubu olmadan ayırt edilemez.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, Not, RENK, SP, einout, eout, ilerle, kagit, kameraYolu, kelimeZamani, pop, INTER } from "../kutuphane";

// Çizim alanı (ekran koordinatı); eğri yüksekten alçağa kendiliğinden iner
const X0 = 110, X1 = 900, Y0 = 470, Y1 = 830;
const egri = `M ${X0} ${Y0} C ${X0 + 260} ${Y0 + 10}, ${X0 + 420} ${Y1 - 30}, ${X1} ${Y1 - 10}`;

const Nokta: React.FC<{ t: number; bas: number; x: number; y: number; renk: string }> = ({ t, bas, x, y, renk }) => {
  const [sc, al] = pop(t, bas, 0.45);
  return <circle cx={x} cy={y} r={13 * sc} fill={renk} stroke={RENK.kagitAcik} strokeWidth={4} opacity={al} />;
};

const Kap: React.FC<{ t: number; bas: number; x: number; y: number; metin: string; renk: string }> = ({ t, bas, x, y, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
      <Hap metin={metin} renk={renk} boyut={26} />
    </div>
  );
};

const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800]);
  const tGun3 = K(2, "day three"), tGun5 = K(2, "day five");
  const cz = einout(ilerle(t, K(2, "remedy"), 3.0));
  const tAyr = K(3, "which was which");
  // işaretler eğri üzerinde: kübik bezier noktası
  const bz = (u: number): [number, number] => {
    const P = [[X0, Y0], [X0 + 260, Y0 + 10], [X0 + 420, Y1 - 30], [X1, Y1 - 10]], m = 1 - u;
    const f = (i: number) => m * m * m * P[0][i] + 3 * m * m * u * P[1][i] + 3 * m * u * u * P[2][i] + u * u * u * P[3][i];
    return [f(0), f(1)];
  };
  const [gx3, gy3] = bz(0.3), [gx5, gy5] = bz(0.72);
  return (
    <>
      <Kamera gorsel="tam/13" pencere={p}>
        <Etiket t={t} bas={K(1, "fade")} capa={[1650, 280]} konum={[1500, 135]} metin="FADE ON THEIR OWN" renk={RENK.altin} />
      </Kamera>
      {/* sol panel: soldaki bozuk takvim yazılarını ve dikişi örter */}
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 1080,
        background: `linear-gradient(to right, ${kagit(1)} 0%, ${kagit(1)} 940px, ${kagit(0)} 100%)` }} />
      <Baslik t={t} bas={0.05} metin="WHY A PLACEBO?" x={70} y={190} boyut={104} renk={RENK.lacivert} />
      <Not t={t} bas={K(1, "colds")} metin="Colds fade on their own." x={74} y={290} boyut={40} agirlik={700} renk={RENK.koyuYesil} />
      {/* diyagram: 3. gün → 5. gün */}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        {t >= tGun3 - 0.3 && (
          <g opacity={eout(ilerle(t, tGun3 - 0.3, 0.5))}>
            <line x1={X0 - 10} y1={Y1 + 20} x2={X1 + 10} y2={Y1 + 20} stroke={RENK.murekkep} strokeWidth={3} opacity={0.6} />
            <line x1={X0 - 10} y1={Y1 + 20} x2={X0 - 10} y2={Y0 - 40} stroke={RENK.murekkep} strokeWidth={3} opacity={0.6} />
            <text x={X1} y={Y1 + 60} textAnchor="end" style={{ fontFamily: INTER, fontWeight: 700, fontSize: 24, fill: RENK.gri }}>DAYS →</text>
            <text x={X0 + 10} y={Y0 - 56} style={{ fontFamily: INTER, fontWeight: 800, fontSize: 22, letterSpacing: 3, fill: RENK.altin }}>ILLUSTRATIVE</text>
          </g>
        )}
        {t >= tGun3 - 0.3 && (
          <path d={egri} fill="none" stroke={RENK.koyuYesil} strokeWidth={10} strokeLinecap="round" pathLength={1}
            strokeDasharray={1} strokeDashoffset={1 - cz} />
        )}
        <Nokta t={t} bas={tGun3} x={gx3} y={gy3} renk={RENK.mercan} />
        <Nokta t={t} bas={tGun5} x={gx5} y={gy5} renk={RENK.yesil} />
        {t >= tAyr - 0.2 && (
          <path d={egri} fill="none" stroke={RENK.mercan} strokeWidth={6} strokeDasharray="4 14" strokeLinecap="round"
            opacity={eout(ilerle(t, tAyr - 0.2, 0.5))} transform="translate(0 -3)" />
        )}
      </svg>
      <Kap t={t} bas={tGun3 + 0.1} x={gx3 + 20} y={gy3 - 60} metin="DAY 3: TRY REMEDY" renk={RENK.mercan} />
      <Kap t={t} bas={tGun5 + 0.1} x={gx5 + 10} y={gy5 + 70} metin="DAY 5: FEEL BETTER" renk={RENK.yesil} />
      <Kap t={t} bas={K(3, "comparison group")} x={500} y={910} metin="NEED A COMPARISON GROUP" renk={RENK.altin} />
      <Kap t={t} bas={tAyr} x={720} y={640} metin="REMEDY… OR TIME?" renk={RENK.lacivert} />
    </>
  );
};

export default S13;
