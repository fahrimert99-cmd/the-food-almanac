// Sahne 5 — MIND kısaltması açılımı (sağda), Akdeniz + DASH masası (solda).
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, Not, RENK, SP, ANTON, INTER, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Kısaltma satırı: büyük harf + kelime
const Harf: React.FC<{ t: number; bas: number; bitis: number; harf: string; metin: string; y: number }> = ({ t, bas, bitis, harf, metin, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 1280, top: y, opacity: a, display: "flex", alignItems: "center", gap: 22,
      transform: `translateX(${(1 - eout(ilerle(t, bas, 0.5))) * 40}px)` }}>
      <div style={{ width: 84, height: 84, borderRadius: "50%", background: RENK.altin, color: "#fff", display: "flex", alignItems: "center",
        justifyContent: "center", fontFamily: ANTON, fontSize: 56, transform: `scale(${sc})` }}>{harf}</div>
      <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 36, color: RENK.lacivert, whiteSpace: "nowrap" }}>{metin}</div>
    </div>
  );
};

const S05: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tKapat = K(1, "Martha") - 0.1;
  const tIki = K(1, "two existing");
  return (
    <>
      <Kamera gorsel="tam/05" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 40, 1800])}>
        <Etiket t={t} bas={tIki} capa={[330, 520]} konum={[330, 290]} metin="FISH & OLIVES" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={tIki + 0.6} capa={[1000, 520]} konum={[1000, 330]} metin="VEG & GRAINS" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={0.0} bitis={tKapat} metin="MIND STANDS FOR" x={1280} y={150} boyut={30} font="inter" aralik={6} renk={RENK.altin} />
      <Harf t={t} bas={K(0, "Mediterranean-DASH")} bitis={tKapat} harf="M" metin="MEDITERRANEAN-DASH" y={215} />
      <Harf t={t} bas={K(0, "Intervention")} bitis={tKapat} harf="I" metin="INTERVENTION" y={335} />
      <Harf t={t} bas={K(0, "Neurodegenerative")} bitis={tKapat} harf="N" metin="NEURODEGENERATIVE" y={455} />
      <Harf t={t} bas={K(0, "Delay")} bitis={tKapat} harf="D" metin="DELAY" y={575} />
      {/* Morris ve Rush */}
      <Baslik t={t} bas={K(1, "Martha")} bitis={tIki - 0.1} metin="MARTHA CLARE MORRIS" x={1860} y={230} boyut={66} hiza="sag" renk={RENK.lacivert} />
      <Not t={t} bas={K(1, "Rush")} bitis={tIki - 0.1} metin="Rush University · Chicago" x={1860} y={290} hiza="sag" boyut={38} agirlik={800} renk={RENK.koyuYesil} />
      {/* iki desen, tek skor */}
      <BaslikBlok t={t} bas={tIki} satirlar={b.satirlar} x={1860} y={240} boyut={92} hiza="sag" renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={K(1, "keeping")} metin={b.not!} x={1860} y={440} hiza="sag" boyut={36} genislik={560} />
    </>
  );
};

export default S05;
