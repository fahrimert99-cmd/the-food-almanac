// Sahne 53 — "Bir dürtme": sağ panelde önce dem aralığı, sonra içecek denemeleri, sonra A NUDGE başlığı.
import React from "react";
import { BaslikBlok, Baslik, Kamera, Not, Panel, INTER, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tRange = K(0, "huge range"), tWeak = K(1, "weak"), tStrong = K(1, "strong");
  const tDrink = K(2, "drink"), tSmall = K(2, "smaller,"), tLess = K(2, "less certain"), tNudge = K(3, "nudge");
  const ayir = K(2, "trials") - 0.15;
  const sonA = K(3, "So") - 0.15;
  const aP = eout(ilerle(t, 0.2, 0.7));
  const X0 = 1330, X1 = 1860, W = X1 - X0;
  const pB = eout(ilerle(t, tRange + 0.2, 0.9));
  const [sw, aw] = pop(t, tWeak, 0.45);
  const [ss, as] = pop(t, tStrong, 0.45);
  const etiket = (a: number, sc: number, x: number, metin: string, hiza: "left" | "right") => (
    <div style={{ position: "absolute", [hiza]: hiza === "left" ? x : 1920 - x, top: 495, opacity: a, transform: `scale(${sc})`,
      fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: RENK.lacivert }}>{metin}</div>
  );
  const bitis1 = ayir;
  const f1 = eout(ilerle(t, bitis1, 0.4));
  const f2 = eout(ilerle(t, sonA, 0.4));
  return (
    <>
      <Kamera gorsel="tam/53" pencere={kameraYolu(t, s.sure, [0, 40, 1800], [70, 70, 1680])} />
      <Panel a={aP} taraf="sag" genislik={740} />
      {/* 1. vuruş: aralık çubuğu */}
      <div style={{ opacity: 1 - f1 }}>
        <Baslik t={t} bas={tRange} bitis={bitis1} metin="HUGE RANGE" x={1860} y={290} boyut={96} renk={RENK.koyuYesil} hiza="sag" />
        <div style={{ position: "absolute", left: X0, top: 420, width: W * pB, height: 36, borderRadius: 18,
          background: `linear-gradient(to right, #D9E4C4, ${RENK.koyuYesil})`, border: `3px solid ${RENK.lacivert}` }} />
        {etiket(aw, sw, X0, "WEAK BREW", "left")}
        {etiket(as, ss, 1920 - X1, "STRONG BREW", "right")}
        <div style={{ position: "absolute", left: X0, top: 580, opacity: pB, fontFamily: INTER, fontWeight: 800, fontSize: 20, letterSpacing: 2,
          color: RENK.altin, border: `3px solid ${RENK.altin}`, borderRadius: 999, padding: "4px 14px", background: "#FCF6E6" }}>ILLUSTRATIVE</div>
      </div>
      {/* 2. vuruş: içecek denemeleri */}
      <div style={{ opacity: (1 - f2) }}>
        <Baslik t={t} bas={tDrink} bitis={sonA} metin="DRINK TRIALS" x={1860} y={290} boyut={96} renk={RENK.lacivert} hiza="sag" />
        <Baslik t={t} bas={tSmall} bitis={sonA} metin="SMALLER" x={1860} y={420} boyut={64} renk={RENK.yesil} hiza="sag" />
        <Baslik t={t} bas={tLess} bitis={sonA} metin="LESS CERTAIN" x={1860} y={500} boyut={64} renk={RENK.altin} hiza="sag" />
      </div>
      {/* 3. vuruş: başlık */}
      <BaslikBlok t={t} bas={tNudge - 0.1} satirlar={["A NUDGE"]} x={1860} y={300} boyut={120} hiza="sag" renkler={[RENK.koyuYesil]} />
      <Not t={t} bas={K(3, "not") } metin="not a transformation" x={1860} y={400} hiza="sag" genislik={520} boyut={38} />
    </>
  );
};

export default S53;
