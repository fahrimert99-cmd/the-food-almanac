// Sahne 49 — 4. nokta: sarımsağı ezip ~10 dk beklet
import React from "react";
import { ANTON, AdimAkisi, AltSis, Baslik, Ikon, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const [sc, al] = pop(t, 0.05, 0.55);
  // 10 dk = saat kadranında 60 derece (12'den 2'ye): "sit" ... "pan" arasında çizilir
  const tSit = K(1, "sit"), tPan = K(1, "pan");
  const p = eout(ilerle(t, tSit, tPan - tSit + 0.3));
  const cx = 960, cy = 507, r = 300;
  const a0 = -Math.PI / 2, a1 = a0 + (Math.PI / 3) * p;
  const nok = (a: number) => `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
  const [pm, am] = pop(t, tSit + 0.5, 0.5);
  const kartA = eout(ilerle(t, c[2].bas - 0.1, 0.5));
  const tSon = c[3].bas - 0.1;
  return (
    <>
      <Kamera gorsel="tam/49" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [100, 50, 1700])}>
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          {p > 0 && (
            <path d={`M ${nok(a0)} A ${r} ${r} 0 0 1 ${nok(a1)}`} fill="none" stroke={RENK.altin} strokeWidth={18} strokeLinecap="round" />
          )}
        </svg>
        <div style={{ position: "absolute", left: cx + r * 0.4, top: cy - r * 0.78, transform: `scale(${pm})`, opacity: am, background: RENK.kagitAcik,
          border: `3px solid ${RENK.altin}`, borderRadius: 999, padding: "6px 22px", fontFamily: INTER, fontWeight: 800, fontSize: 34, color: RENK.lacivert,
          whiteSpace: "nowrap" }}>10 MIN</div>
      </Kamera>
      <AltSis a={0.9} />
      <div style={{ position: "absolute", left: 90, top: 90, width: 96, height: 96, borderRadius: "50%", background: RENK.altin, color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 64, transform: `scale(${sc})`, opacity: al }}>4</div>
      <AdimAkisi t={t} x={1000} y={150} boyut={30} adimlar={[
        { bas: K(1, "crush"), metin: "CRUSH OR CHOP", renk: RENK.yesil },
        { bas: tSit, metin: "SIT ABOUT 10 MIN", renk: RENK.altin },
        { bas: tPan, metin: "THEN THE PAN", renk: RENK.koyuYesil },
      ]} />
      <div style={{ position: "absolute", left: 460, top: 770, width: 1000, height: 160, borderRadius: 30, background: RENK.kagitAcik,
        opacity: kartA * 0.96, boxShadow: "0 12px 30px rgba(48,40,34,0.22)" }} />
      <Baslik t={t} bas={K(2, "enzyme")} bitis={tSon} metin="BASED ON ENZYME RESEARCH" x={960} y={805} boyut={30} renk={RENK.altin} hiza="orta" font="inter" aralik={3} />
      <Baslik t={t} bas={K(2, "may")} bitis={tSon} metin="MAY PRESERVE MORE" x={960} y={870} boyut={72} renk={RENK.koyuYesil} hiza="orta" />
      <Baslik t={t} bas={K(3, "It")} metin="NOT TESTED FOR" x={960} y={805} boyut={30} renk={RENK.altin} hiza="orta" font="inter" aralik={3} />
      <Baslik t={t} bas={K(3, "tested")} metin="BLOOD PRESSURE" x={960} y={870} boyut={72} renk={RENK.lacivert} hiza="orta" />
      <Ikon t={t} bas={K(3, "hasn't")} ad="soru" x={520} y={850} boyut={80} zemin={RENK.altin} />
    </>
  );
};

export default S49;
