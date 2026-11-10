// Sahne 43 — çay ve kahvede kafein (FDA): solda görsel, sağda yatay çubuklar.
import React from "react";
import { Baslik, Etiket, INTER, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, eout, ilerle, kameraYolu,
  kelimeZamani, pop } from "../kutuphane";

const X0 = 1100, OLCEK = 2.8; // mg başına piksel

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTea = K(1, "37"), tKahve = K(2, "113");
  const pT = eout(ilerle(t, tTea, 0.8));
  const pK = eout(ilerle(t, tKahve, 1.0));
  const [sa, aa] = pop(t, K(1, "green") , 0.4);
  const [sb, ab] = pop(t, K(2, "coffee"), 0.4);
  return (
    <>
      <Kamera gorsel="tam/43" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])} />
      {/* görseldeki soluk gölge dikişini kâğıt yamayla gizle */}
      <div style={{ position: "absolute", left: 1000, top: 690, width: 300, height: 190, background: "radial-gradient(ellipse at center, #F7F5EE 55%, rgba(247,245,238,0) 100%)" }} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? "FDA · 2024"} bas={K(1, "Food and Drug")} />
      {/* yeşil çay ve kahve kapları */}
      <Etiket t={t} bas={K(1, "green")} bitis={K(2, "The") - 0.1} capa={[390, 520]} konum={[560, 140]} metin="GREEN TEA" renk={RENK.yesil} />
      <Etiket t={t} bas={K(2, "coffee")} capa={[805, 560]} konum={[820, 140]} metin="BREWED COFFEE" renk={RENK.mercan} />
      <Baslik t={t} bas={K(0, "caffeine")} metin="CAFFEINE" x={X0} y={150} boyut={90} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "12-ounce")} metin="PER 12 OUNCES" x={X0} y={235} boyut={64} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={tTea} vurgu="37 mg" not="green tea" x={X0 + 190} y={330} renk={RENK.yesil} genislik={380} />
      {/* çubuklar */}
      <div style={{ position: "absolute", left: X0, top: 575, opacity: aa, transform: `scale(${sa})`, transformOrigin: "0 50%",
        fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: RENK.lacivert }}>GREEN TEA</div>
      <div style={{ position: "absolute", left: X0, top: 620, width: 37 * OLCEK * pT, height: 64, background: RENK.yesil, borderRadius: 8 }} />
      <div style={{ position: "absolute", left: X0, top: 725, opacity: ab, transform: `scale(${sb})`, transformOrigin: "0 50%",
        fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: RENK.lacivert }}>BREWED COFFEE</div>
      <div style={{ position: "absolute", left: X0, top: 770, width: 113 * OLCEK * pK, height: 64, background: RENK.mercan, borderRadius: "8px 0 0 8px" }} />
      <div style={{ position: "absolute", left: X0 + 113 * OLCEK, top: 770, width: (247 - 113) * OLCEK * pK, height: 64,
        background: RENK.mercan, opacity: 0.4, borderRadius: "0 8px 8px 0" }} />
      <div style={{ position: "absolute", left: X0, top: 848, opacity: pK, fontFamily: INTER, fontWeight: 800, fontSize: 30,
        color: RENK.mercan }}>ROUGHLY 113 TO 247 MG</div>
    </>
  );
};

export default S43;
