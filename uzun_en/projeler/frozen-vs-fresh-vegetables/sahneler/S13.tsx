// Sahne 13 — Favell'in karşılaştırma tasarımı: taze aşamalar vs dondurulmuş.
import React from "react";
import { Baslik, Hap, KaynakEtiketi, Kamera, Not, RENK, SP, VurguRozet, INTER, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bitisHap = K(0, "twelve") - 0.15;
  const [sA, aA] = pop(t, K(0, "fresh"), 0.5);
  const [sB, aB] = pop(t, K(0, "commercially"), 0.5);
  const [sV, aV] = pop(t, K(0, "same"), 0.4);
  const gec = sol(t, bitisHap);
  const tVit = K(1, "Vitamin");
  return (
    <>
      <Kamera gorsel="tam/13" pencere={kameraYolu(t, s.sure, [230, 80, 1500], [250, 100, 1440])}>
        {/* termometre üstündeki anlamsız yazı küçük yamayla örtülür */}
        <div style={{ position: "absolute", left: 1222, top: 306, width: 42, height: 30, background: "#FAF9DA" }} />
      </Kamera>
      <div style={{ position: "absolute", left: 0, right: 0, top: 122, display: "flex", justifyContent: "center", alignItems: "center", gap: 22,
        opacity: gec }}>
        <div style={{ transform: `scale(${sA})`, opacity: aA }}><Hap metin="FRESH: DIFFERENT STAGES" renk={RENK.yesil} boyut={28} /></div>
        <span style={{ opacity: aV, transform: `scale(${sV})`, fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 2, color: RENK.gri }}>VS</span>
        <div style={{ transform: `scale(${sB})`, opacity: aB }}><Hap metin="COMMERCIALLY FROZEN" renk={RENK.lacivert} boyut={28} /></div>
      </div>
      <VurguRozet t={t} bas={K(0, "twelve")} vurgu="UP TO 12 MONTHS" not="IN A DEEP FREEZER" x={960} y={60} genislik={720} boyut={80} bitis={tVit - 0.2} />
      <Baslik t={t} bas={tVit} metin="VITAMIN C" x={960} y={105} boyut={84} renk={RENK.koyuYesil} hiza="orta" />
      <Not t={t} bas={K(1, "yardstick.")} metin="THE YARDSTICK" x={960} y={160} boyut={30} hiza="orta" agirlik={800} renk={RENK.altin} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
    </>
  );
};

export default S13;
