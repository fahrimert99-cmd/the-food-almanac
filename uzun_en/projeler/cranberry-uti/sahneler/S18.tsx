// Sahne 18 — kadınlar, tekrarlayan UTI: solda görsel, sağda başlık, rozet ve aralık çubuğu.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, INTER, ANTON } from "../kutuphane";

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), m = s.meta;
  const tW = K(0, "women"), t8 = K(1, "eight"), t26 = K(1, "26"), tR = K(2, "one percent");
  // aralık çubuğu: 0–50% ölçek, 1% ile 45% arası (anlatımdaki değerler)
  const bx0 = 1300, bx1 = 1840, yb = 800;
  const px = (v: number) => bx0 + ((bx1 - bx0) * v) / 50;
  const a = eout(ilerle(t, tR - 0.2, 0.5));
  const gen = eout(ilerle(t, K(2, "45"), 0.9));
  const w = (px(1) + (px(45) - px(1)) * gen) - px(1);
  return (
    <>
      <Kamera gorsel="tam/18" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [60, 70, 1760])} />
      <BaslikBlok t={t} bas={tW} satirlar={m.baslik!.satirlar} x={1860} y={210} boyut={92} hiza="sag" />
      <Etiket t={t} bas={K(1, "cranberry")} bitis={tR} capa={[600, 400]} konum={[430, 190]} metin="CRANBERRY JUICE" renk={RENK.mercan} />
      <Not t={t} bas={t8} metin="8 trials · 1,555 women" x={1860} y={420} hiza="sag" boyut={40} agirlik={800} />
      <VurguRozet t={t} bas={t26} vurgu={m.baslik!.vurgu!} not="risk of another infection" x={1560} y={490} genislik={420} />
      <KaynakEtiketi t={t} metin={m.etiket!} />
      {a > 0 && (
        <div style={{ opacity: a }}>
          <div style={{ position: "absolute", left: bx0, top: yb - 110, fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 2, color: RENK.lacivert }}>PLAUSIBLE RANGE · LOWER RISK</div>
          <div style={{ position: "absolute", left: bx0, top: yb, width: bx1 - bx0, height: 6, background: RENK.murekkep, opacity: 0.25 }} />
          <div style={{ position: "absolute", left: px(1), top: yb - 12, width: w, height: 30, borderRadius: 15, background: RENK.altin }} />
          <div style={{ position: "absolute", left: px(26) - 5, top: yb - 30, width: 10, height: 66, background: RENK.lacivert, borderRadius: 5 }} />
          <div style={{ position: "absolute", left: px(1) - 30, top: yb + 40, fontFamily: ANTON, fontSize: 44, color: RENK.altin }}>1%</div>
          <div style={{ position: "absolute", left: px(45) - 30, top: yb + 40, opacity: gen, fontFamily: ANTON, fontSize: 44, color: RENK.altin }}>45%</div>
        </div>
      )}
    </>
  );
};

export default S18;
