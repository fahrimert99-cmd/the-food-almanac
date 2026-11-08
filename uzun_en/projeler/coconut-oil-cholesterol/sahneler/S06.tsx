import React from "react";
import { Baslik, BaslikBlok, CubukGrafik, Etiket, IkonYol, INTER, Ikon, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet,
  eout, ilerle, kagit, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Sahne 6 — terazi (kadran rakamları bozuk: kâğıt yamayla örtülü), sağda 82 g rozeti ve oran çubuğu
const KADRAN: [number, number] = [638, 690];
const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const pBar = eout(ilerle(t, K(1, "eight-tenths"), 1.0));
  const pOk = eout(ilerle(t, 0.3, 1.5));
  return (
    <>
      <Kamera gorsel="tam/06" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800])}>
        {/* kadran yaması: sahte rakamlar yerine sade kadran */}
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          <ellipse cx={KADRAN[0]} cy={KADRAN[1]} rx={160} ry={196} fill="#FBF8F1" />
          {Array.from({ length: 24 }, (_, i) => {
            const a = (i / 24) * Math.PI * 2;
            const r0 = i % 2 ? 0.86 : 0.8;
            return <line key={i} x1={KADRAN[0] + Math.sin(a) * 150 * r0} y1={KADRAN[1] - Math.cos(a) * 186 * r0}
              x2={KADRAN[0] + Math.sin(a) * 150} y2={KADRAN[1] - Math.cos(a) * 186} stroke={RENK.lacivert} strokeWidth={3} opacity={0.6} />;
          })}
          <line x1={KADRAN[0]} y1={KADRAN[1]} x2={KADRAN[0] + 40 * pOk} y2={KADRAN[1] - 140} stroke={RENK.mercan} strokeWidth={8} strokeLinecap="round" />
          <circle cx={KADRAN[0]} cy={KADRAN[1]} r={12} fill={RENK.lacivert} />
          {/* sağ alttaki silik filigran kalıntısı */}
          <ellipse cx={1740} cy={1040} rx={130} ry={60} fill={kagit(1)} />
        </svg>
        <Etiket t={t} bas={K(0, "hundred")} capa={[1000, 790]} konum={[1520, 800]} metin="100 G OF OIL" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={K(0, "According")} />
      <BaslikBlok t={t} bas={K(0, "82")} satirlar={["82 G", "SATURATED"]} x={1860} y={150} boyut={100} hiza="sag" />
      <VurguRozet t={t} bas={K(0, "82") + 0.4} vurgu="82 g" not="per 100 g of coconut oil" x={1640} y={330} genislik={420} renk={RENK.mercan} />
      {/* 100 g çubuğunun %82'si doludur */}
      <Not t={t} bas={K(1, "eight-tenths") - 0.2} metin="MORE THAN EIGHT-TENTHS OF THE OIL" x={1860} y={570} hiza="sag" genislik={640} boyut={30} agirlik={800} />
      <div style={{ position: "absolute", left: 1240, top: 640, width: 620, height: 44, borderRadius: 22, background: "#FCF8EC",
        border: `3px solid ${RENK.lacivert}`, overflow: "hidden", opacity: eout(ilerle(t, c[1].bas, 0.4)) }}>
        <div style={{ width: `${82 * pBar}%`, height: "100%", background: RENK.mercan }} />
      </div>
    </>
  );
};
export default S06;
