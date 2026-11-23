// Sahne 23 — UC Davis modeli: tahmini alım ile referans doz karşılaştırması.
import React from "react";
import { AbsoluteFill, Etiket, Hap, Kamera, KaynakEtiketi, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tUC = K(0, "UC"), tCarl = K(0, "Carl"), tJosh = K(0, "Josh"), tFurther = K(0, "went a step");
  const tMod = K(1, "modeled"), tTen = K(1, "ten"), tTw = K(1, "twelve"), tRef = K(1, "reference"), tDay = K(1, "daily");
  const aIsim = (b: number) => pop(t, b, 0.5);
  const [s1, a1] = aIsim(tUC), [s2, a2] = aIsim(tCarl), [s3, a3] = aIsim(tJosh);
  const kapat = sol(t, tFurther + 0.9);
  return (
    <AbsoluteFill>
      <Kamera gorsel="tam/23" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        {/* defter: model */}
        <Etiket t={t} bas={tMod} bitis={tTw} capa={[1100, 300]} konum={[1100, 150]} metin="INTAKE MODEL" renk={RENK.lacivert} />
        <Etiket t={t} bas={tTen} bitis={tRef} capa={[1480, 330]} konum={[1520, 150]} metin="10 PESTICIDES" renk={RENK.mercan} />
        {/* çilek sepeti: ürünler */}
        <Etiket t={t} bas={tTw} bitis={tDay} capa={[330, 520]} konum={[330, 160]} metin="12 PRODUCE ITEMS" renk={RENK.yesil} />
        {/* cetvel: referans doz */}
        <Etiket t={t} bas={tRef} capa={[640, 470]} konum={[900, 150]} metin="REFERENCE DOSE" renk={RENK.altin} />
        {/* su bardağı: günlük miktar */}
        <Etiket t={t} bas={tDay} capa={[1480, 800]} konum={[1480, 900]} metin="DAILY SAFE AMOUNT" renk={RENK.yesil} />
      </Kamera>
      <div style={{ position: "absolute", left: 0, width: 1920, top: 130, display: "flex", justifyContent: "center", gap: 20, opacity: kapat }}>
        <div style={{ transform: `scale(${s1})`, opacity: a1 }}><Hap metin="UC DAVIS" renk={RENK.lacivert} boyut={32} /></div>
        <div style={{ transform: `scale(${s2})`, opacity: a2 }}><Hap metin="CARL WINTER" renk={RENK.altin} boyut={32} /></div>
        <div style={{ transform: `scale(${s3})`, opacity: a3 }}><Hap metin="JOSH KATZ" renk={RENK.altin} boyut={32} /></div>
      </div>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
    </AbsoluteFill>
  );
};

export default S23;
