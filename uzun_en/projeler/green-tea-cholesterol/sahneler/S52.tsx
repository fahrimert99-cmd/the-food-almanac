// Sahne 52 — İpucu 2: kaç fincan? Sağ panelde 630 mg rozeti, sonra "ABOUT 2 CUPS" başlığı; fincanlara 8 OZ etiketi.
import React from "react";
import { ANTON, Baslik, BaslikBlok, Etiket, IkonYol, INTER, Kamera, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu,
  kelimeZamani, pop } from "../kutuphane";

const S52: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t630 = K(2, "630"), tCup = K(3, "two"), tWeak = K(3, "more");
  const [sb, ab] = pop(t, 0.05, 0.55);
  const [sw, aw] = pop(t, tWeak, 0.5);
  const aP = eout(ilerle(t, 0.2, 0.7));
  return (
    <>
      <Kamera gorsel="tam/52" pencere={kameraYolu(t, s.sure, [0, 60, 1760], [60, 90, 1640])} />
      <Panel a={aP} taraf="sag" genislik={760} />
      {/* 2. ipucu rozeti + soru */}
      <div style={{ position: "absolute", left: 150, top: 120, transform: `scale(${sb})`, opacity: ab, width: 92, height: 92, borderRadius: "50%",
        background: RENK.lacivert, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 60 }}>2</div>
      <Baslik t={t} bas={K(1, "how many")} bitis={t630 - 0.1} metin="HOW MANY CUPS?" x={280} y={166} boyut={72} renk={RENK.koyuYesil} />
      {/* 630 mg: deneme dozu */}
      <VurguRozet t={t} bas={t630} bitis={tCup - 0.15} vurgu="630 MG" not="catechins a day · typical trial dose" x={1540} y={300} genislik={520} renk={RENK.koyuYesil} />
      {/* ≈ 2 fincan */}
      <BaslikBlok t={t} bas={tCup} satirlar={["ABOUT", "2 CUPS"]} x={1860} y={290} boyut={110} hiza="sag" />
      <Not t={t} bas={tCup + 0.5} metin="of average-strength tea matches the typical trial dose" x={1860} y={530} hiza="sag" genislik={560} />
      <Etiket t={t} bas={K(3, "8-ounce")} capa={[370, 560]} konum={[390, 300]} metin="8 OZ" renk={RENK.yesil} />
      <Etiket t={t} bas={K(3, "8-ounce") + 0.3} capa={[790, 570]} konum={[1040, 700]} metin="8 OZ" renk={RENK.yesil} />
      <div style={{ position: "absolute", left: 1530, top: 760, transform: `translate(-50%,-50%) scale(${sw})`, opacity: aw, whiteSpace: "nowrap",
        display: "flex", alignItems: "center", gap: 12, background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`, borderRadius: 999,
        padding: "8px 24px 8px 10px", fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 1.5, color: RENK.murekkep }}>
        <span style={{ width: 40, height: 40, borderRadius: "50%", background: RENK.altin, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IkonYol ad="uyari" boyut={24} renk="#fff" />
        </span>
        WEAK TEA: MORE CUPS
      </div>
    </>
  );
};

export default S52;
