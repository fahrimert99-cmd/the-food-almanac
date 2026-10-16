// Sahne 28 — 10 dakika bekle, sonra ısıt (saat; sol panel).
import React from "react";
import { AltSis, BaslikBlok, Hap, Kamera, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Kadran üstündeki bozuk yazı ve rakamları saat yüzü renginde yamayla örter: [x, y, genişlik, yükseklik, rgb]
const YAMALAR: [number, number, number, number, string][] = [
  [965, 440, 560, 190, "231,221,191"],
  [945, 745, 640, 190, "212,198,170"],
  [1527, 567, 220, 220, "211,205,181"],
  [1480, 745, 240, 220, "211,200,172"],
  [1267, 853, 260, 200, "208,196,168"],
  [687, 853, 260, 200, "203,196,166"],
  [380, 580, 260, 240, "203,194,162"],
  [945, 350, 150, 120, "233,222,192"],
];

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCrush = K(0, "crushed garlic"), tTen = K(0, "ten minutes"), tMw = K(0, "microwaving");
  const tKept = K(0, "much of that"), tEnz = K(1, "enzyme");
  const pPanel = eout(ilerle(t, 0.1, 0.6));
  const hap = (bas: number, metin: string, renk: string, y: number) => {
    const [sc, al] = pop(t, bas, 0.5);
    return <div style={{ position: "absolute", left: 80, top: y, transformOrigin: "0 50%", transform: `scale(${sc})`, opacity: al }}><Hap metin={metin} renk={renk} boyut={32} /></div>;
  };
  return (
    <>
      <Kamera gorsel="tam/28" pencere={kameraYolu(t, s.sure, [250, 0, 1500], [300, 30, 1420])}>
        {YAMALAR.map(([x, y, w, h, c], i) => (
          <div key={i} style={{ position: "absolute", left: x - w / 2, top: y - h / 2, width: w, height: h,
            background: `radial-gradient(ellipse 50% 50% at 50% 50%, rgba(${c},1) 0%, rgba(${c},1) 62%, rgba(${c},0) 100%)` }} />
        ))}
      </Kamera>
      <AltSis a={0.6} yukseklik={130} />
      <Panel a={pPanel} taraf="sol" genislik={820} />
      <BaslikBlok t={t} bas={tTen} satirlar={s.meta.baslik!.satirlar} x={76} y={200} boyut={96} />
      {hap(tCrush, "CRUSHED GARLIC STANDS", RENK.altin, 440)}
      {hap(tMw, "THEN MICROWAVE", RENK.mercan, 530)}
      {hap(tKept, "ACTIVITY MOSTLY KEPT", RENK.yesil, 620)}
      {hap(tEnz, "ENZYME WORKS FIRST", RENK.lacivert, 710)}
    </>
  );
};

export default S28;
