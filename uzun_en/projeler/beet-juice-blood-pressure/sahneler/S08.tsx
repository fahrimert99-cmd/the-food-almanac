// Sahne 8 — nitrat emilir, tükürük bezleri ağıza geri gönderir; tükürükte düzey yükselir (şematik).
import React from "react";
import { AdimAkisi, Baslik, Etiket, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, kis, pop, sol, Ikon } from "../kutuphane";

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBar = K(1, "levels");
  const dolu = eout(ilerle(t, tBar + 0.2, 1.8));
  const aBar = eout(ilerle(t, tBar - 0.1, 0.5));
  const yb = 820, h = 240, x = 1600;
  const [sc, al] = pop(t, K(1, "saliva"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/08" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1800])}>
        <Etiket t={t} bas={K(0, "juice")} bitis={3.2} capa={[360, 560]} konum={[620, 200]} metin="BEET JUICE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "salivary")} bitis={6.8} capa={[790, 610]} konum={[1180, 560]} metin="SALIVARY GLANDS" renk={RENK.koyuYesil} />
      </Kamera>
      <div style={{ opacity: sol(t, 3.3) }}>
        <AdimAkisi t={t} x={1400} y={300} boyut={32} numarali={false} adimlar={[
          { bas: K(0, "swallow"), metin: "SWALLOWED", renk: RENK.mercan },
          { bas: K(0, "absorbed"), metin: "ABSORBED", renk: RENK.altin },
        ]} />
      </div>
      <Baslik t={t} bas={K(1, "back")} metin="BACK TO" x={1860} y={190} boyut={110} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(1, "mouth")} metin="THE MOUTH" x={1860} y={304} boyut={110} renk={RENK.koyuYesil} hiza="sag" />
      {aBar > 0 && (
        <>
          <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, opacity: aBar }}>
            <rect x={x - 40} y={yb - h} width={80} height={h} rx={14} fill="#FCF8EC" stroke={RENK.lacivert} strokeWidth={4} />
            <rect x={x - 40 + 6} y={yb - h * (0.12 + 0.8 * dolu) } width={68} height={h * (0.12 + 0.8 * dolu) - 6} rx={9} fill={RENK.mercan} />
          </svg>
          <div style={{ position: "absolute", left: x + 70, top: yb - h + 16, opacity: aBar, fontFamily: INTER, fontWeight: 800, fontSize: 34,
            color: RENK.lacivert, lineHeight: 1.2 }}>NITRATE<br />IN SALIVA</div>
          <div style={{ position: "absolute", left: x + 70, top: yb - 40, opacity: aBar, fontFamily: INTER, fontWeight: 800, fontSize: 20,
            letterSpacing: 3, color: RENK.gri }}>ILLUSTRATIVE</div>
        </>
      )}
    </>
  );
};

export default S08;
