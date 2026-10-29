// Sahne 56 — porsiyon: ceviz ölçeği, takas ve kahvaltı/öğle alışkanlığı.
import React from "react";
import { Baslik, Etiket, INTER, Kamera, RENK, SP, ANTON, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Ölçü kabının üstündeki bozuk yazıyı örten kâğıt etiketi (görsel koordinatı)
const KabEtiketi: React.FC<{ t: number; bas: number; adimlar: { bas: number; metin: string; boyut: number }[] }> = ({ t, bas, adimlar }) => {
  const [sc, al] = pop(t, bas, 0.5);
  let k = 0;
  adimlar.forEach((a, i) => { if (t >= a.bas) k = i; });
  const a = adimlar[k];
  const gir = eout(ilerle(t, a.bas, 0.35));
  return (
    <div style={{ position: "absolute", left: 495, top: 612, width: 410, height: 224, opacity: al, transform: `scale(${sc})`,
      background: "#F7F1E1", border: `4px solid ${RENK.altin}`, borderRadius: 18, boxShadow: "0 10px 24px rgba(48,40,34,0.28)",
      display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ fontFamily: ANTON, fontSize: a.boyut, color: RENK.koyuYesil, whiteSpace: "nowrap", opacity: 0.3 + 0.7 * gir,
        transform: `translateY(${(1 - gir) * 14}px)` }}>{a.metin}</div>
    </div>
  );
};

const S56: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOz = K(0, "one to two ounces"), tCup = K(0, "quarter to half a cup"), tSwap = K(0, "swapped in");
  const tMed = K(1, "replace medicine"), tEasy = K(1, "easy habit"), tBf = K(1, "breakfast"), tLunch = K(1, "lunch");
  const [sr, ar] = pop(t, tOz + 0.1, 0.55);
  return (
    <>
      <Kamera gorsel="tam/56" pencere={kameraYolu(t, s.sure, [40, 90, 1840], [150, 170, 1640])}>
        <KabEtiketi t={t} bas={K(0, "walnuts")} adimlar={[
          { bas: K(0, "walnuts"), metin: "WALNUTS", boyut: 64 },
          { bas: tOz, metin: "1–2 OZ", boyut: 96 },
          { bas: tCup, metin: "¼–½ CUP", boyut: 80 },
        ]} />
        <Etiket t={t} bas={tSwap} bitis={9.2} capa={[860, 440]} konum={[1330, 330]} metin="SWAPPED IN" renk={RENK.yesil} />
        <Etiket t={t} bas={tBf} capa={[1300, 590]} konum={[1330, 300]} metin="BREAKFAST" renk={RENK.altin} />
        <Etiket t={t} bas={tLunch} capa={[1560, 660]} konum={[1620, 800]} metin="OR LUNCH" renk={RENK.koyuYesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "useful habit")} bitis={9.2} metin="A SMALL, USEFUL HABIT" x={160} y={190} boyut={100} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tMed} metin="WON'T REPLACE MEDICINE" x={160} y={170} boyut={80} renk={RENK.lacivert} />
      <Baslik t={t} bas={tEasy} metin="EASY HABIT" x={160} y={250} boyut={80} renk={RENK.koyuYesil} />
    </>
  );
};

export default S56;
