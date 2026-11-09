// Sahne 8 — alet ve kase solda; sağda ŞEMATİK drusen noktaları, başlık ve evreleme.
import React from "react";
import { Baslik, Etiket, Hap, INTER, Kamera, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const CX = 1665, CY = 300, R = 140;
// nokta konumları (merkeze göre), boyut
const NOKTA: [number, number, number][] = [[-60, -30, 11], [40, -60, 8], [70, 20, 13], [-20, 50, 9], [-85, 40, 7], [10, 0, 10]];

const Sira: React.FC<{ t: number; bas: number; metin: string; renk: string; y: number }> = ({ t, bas, metin, renk, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: CX, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
      <Hap metin={metin} renk={renk} boyut={26} />
    </div>
  );
};

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tYellow = K(0, "yellow"), tDrusen = K(0, "drusen."), tLarge = K(1, "large,");
  const pR = eout(ilerle(t, tYellow - 0.4, 0.7));
  const buyu = eout(ilerle(t, tLarge, 0.8));
  return (
    <>
      <Kamera gorsel="tam/08" pencere={kameraYolu(t, s.sure, [0, 50, 1800], [60, 90, 1700])}>
        <Etiket t={t} bas={K(0, "dilated")} bitis={tYellow} capa={[620, 330]} konum={[900, 130]} metin="DILATED EYE EXAM" renk={RENK.altin} />
      </Kamera>
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <circle cx={CX} cy={CY} r={R * pR} fill="#EBCFBF" stroke={RENK.lacivert} strokeWidth={5} opacity={pR} />
        {NOKTA.map(([dx, dy, r], i) => {
          const [sc, al] = pop(t, tYellow + 0.15 * i + (i > 2 ? 0.5 : 0), 0.4);
          const grow = i === 2 ? 1 + 0.9 * buyu : 1;
          return <circle key={i} cx={CX + dx} cy={CY + dy} r={r * sc * grow} fill="#E3B93C" stroke={RENK.altin} strokeWidth={3} opacity={al} />;
        })}
      </svg>
      <div style={{ position: "absolute", left: CX - 100, top: CY + R + 14, width: 200, textAlign: "center", opacity: pR,
        fontFamily: INTER, fontWeight: 800, fontSize: 20, letterSpacing: 3, color: RENK.gri }}>ILLUSTRATIVE</div>
      <Baslik t={t} bas={tDrusen} metin="DRUSEN" x={CX} y={560} boyut={100} hiza="orta" renk={RENK.koyuYesil} />
      <Not t={t} bas={tDrusen + 0.3} metin={s.meta.baslik!.not!} x={CX} y={625} hiza="orta" boyut={28} agirlik={800} genislik={380} />
      <Sira t={t} bas={K(1, "many")} metin="HOW MANY" renk={RENK.altin} y={775} />
      <Sira t={t} bas={tLarge - 0.2} metin="HOW LARGE" renk={RENK.altin} y={840} />
      <Sira t={t} bas={K(1, "stage")} metin="YOUR STAGE" renk={RENK.yesil} y={905} />
    </>
  );
};

export default S08;
