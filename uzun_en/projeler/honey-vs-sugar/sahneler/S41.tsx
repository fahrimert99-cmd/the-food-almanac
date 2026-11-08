// Sahne 41 — AHA günlük eklenmiş şeker sınırı: kadınlar 25 g (6 çay kaşığı), erkekler 36 g (9).
import React from "react";
import { BaslikBlok, Hap, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Parantez: çizilen yatay köşeli ayraç + hap etiketi (görsel koordinatında)
const Ayrac: React.FC<{ t: number; bas: number; x0: number; x1: number; y: number; renk: string; metin: string }> = ({ t, bas, x0, x1, y, renk, metin }) => {
  const p = eout(ilerle(t, bas, 0.7));
  if (p <= 0) return null;
  const [sc, al] = pop(t, bas + 0.45, 0.5);
  const xe = x0 + (x1 - x0) * p;
  return (
    <>
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
        <polyline points={`${x0},${y + 24} ${x0},${y} ${xe},${y} ${xe},${y + 24 * (p >= 1 ? 1 : 0)}`} fill="none" stroke={RENK.kagitAcik} strokeWidth={13} strokeLinecap="round" strokeLinejoin="round" />
        <polyline points={`${x0},${y + 24} ${x0},${y} ${xe},${y} ${xe},${y + 24 * (p >= 1 ? 1 : 0)}`} fill="none" stroke={renk} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div style={{ position: "absolute", left: (x0 + x1) / 2, top: y - 50, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
        <Hap metin={metin} renk={renk} boyut={28} />
      </div>
    </>
  );
};

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/41" pencere={kameraYolu(t, s.sure, [20, 40, 1880], [70, 20, 1760])}>
        <Ayrac t={t} bas={K(0, "six teaspoons") - 0.2} x0={600} x1={1480} y={655} renk={RENK.altin} metin="6 TEASPOONS" />
        <Ayrac t={t} bas={K(1, "nine teaspoons") - 0.2} x0={600} x1={1710} y={515} renk={RENK.lacivert} metin="9 TEASPOONS" />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(0, "American Heart")} />
      <BaslikBlok t={t} bas={K(0, "American Heart")} satirlar={s.meta.baslik?.satirlar ?? []} x={70} y={195} boyut={80} />
      <VurguRozet t={t} bas={K(0, "25 grams")} vurgu="25 g" not="most women · 100 calories" x={1130} y={150} genislik={380} renk={RENK.altin} />
      <VurguRozet t={t} bas={K(1, "36 grams")} vurgu="36 g" not="most men · 150 calories" x={1560} y={150} genislik={380} renk={RENK.lacivert} />
    </>
  );
};

export default S41;
