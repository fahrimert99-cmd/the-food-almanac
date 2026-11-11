// Sahne 51 — İpucu 3: büyük K vitamini yeşillikleri, tabaklar sırayla etiketlenir.
import React from "react";
import { ANTON, Baslik, Etiket, Hap, Kamera, RENK, SP, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Tabaklar soldan sağa (görsel koordinatı): ifade, ad, çapa, etiket konumu
const TABAK = [
  { f: "spinach", ad: "SPINACH", capa: [273, 590], konum: [330, 350] },
  { f: "kale", ad: "KALE", capa: [633, 565], konum: [650, 275] },
  { f: "collards", ad: "COLLARDS", capa: [960, 565], konum: [980, 350] },
  { f: "turnip", ad: "TURNIP GREENS", capa: [1287, 575], konum: [1290, 275] },
  { f: "chard", ad: "SWISS CHARD", capa: [1647, 565], konum: [1640, 350] },
] as const;

const S51: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tUc = K(0, "three"), tBuyuk = K(1, "big ones"), tSabit = K(2, "keep their portions");
  const [sb, ab] = pop(t, tUc, 0.5);
  const [sp, ap] = pop(t, tSabit, 0.55);
  return (
    <>
      <Kamera gorsel="tam/51" pencere={kameraYolu(t, s.sure, [40, 40, 1840], [120, 80, 1680])}>
        {TABAK.map((b) => (
          <Etiket key={b.ad} t={t} bas={K(2, b.f)} capa={[b.capa[0], b.capa[1]]} konum={[b.konum[0], b.konum[1]]}
            metin={b.ad} renk={RENK.yesil} boyut={30} />
        ))}
      </Kamera>
      <div style={{ position: "absolute", left: 80, top: 100, width: 96, height: 96, borderRadius: "50%", background: RENK.altin,
        color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 64,
        transform: `scale(${sb})`, opacity: ab }}>3</div>
      <Baslik t={t} bas={tBuyuk} metin="KNOW THE BIG ONES" x={210} y={150} boyut={96} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 960, top: 860, transform: `translate(-50%, -50%) scale(${sp})`, opacity: ap }}>
        <Hap metin="KEEP PORTIONS STEADY" renk={RENK.altin} boyut={36} />
      </div>
    </>
  );
};

export default S51;
