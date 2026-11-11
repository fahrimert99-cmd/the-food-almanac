// Sahne 23 — yüksek sodyumda etki daha büyük: >4 g → –6.9, 2–4 g → ≈ –2 (anlamlı fark değil).
import React from "react";
import { Etiket, Hap, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik ?? { satirlar: [], vurgu: "", not: "" };
  const tHigh = K(0, "high sodium"), tAbove = K(1, "almost seven"), tTwo = K(1, "two to four"), tSig = K(2, "not statistically"), tPr = K(2, "practical part");
  const [s1, a1] = pop(t, tSig, 0.5);
  const [s2, a2] = pop(t, tPr, 0.5);
  return (
    <>
      <Kamera gorsel="tam/23" pencere={kameraYolu(t, s.sure, [60, 90, 1700], [140, 130, 1560])}>
        {/* kapaktaki sahte harfler gümüş yamayla örtülür */}
        <div style={{ position: "absolute", left: 1112, top: 620, width: 146, height: 140, borderRadius: "50%",
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, #C4C8CB 0%, #A9AEB2 70%, #8F9498 100%)" }} />
        <Etiket t={t} bas={tHigh} bitis={tAbove} capa={[800, 790]} konum={[860, 900]} metin="SODIUM" renk={RENK.altin} boyut={28} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.3} />
      <VurguRozet t={t} bas={tAbove} vurgu={b.vurgu ?? ""} not="mmHg top number, sodium above 4 g a day" x={1330} y={150} genislik={340} boyut={104} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={tTwo} vurgu="≈ –2" not="mmHg, sodium 2–4 g a day" x={1710} y={150} genislik={340} boyut={104} renk={RENK.altin} />
      <div style={{ position: "absolute", left: 1530, top: 410, transform: `translateX(-50%) scale(${s1})`, opacity: a1 }}>
        <Hap metin="GAP NOT SIGNIFICANT" renk={RENK.altin} boyut={26} />
      </div>
      <div style={{ position: "absolute", left: 1530, top: 480, transform: `translateX(-50%) scale(${s2})`, opacity: a2 }}>
        <Hap metin="SEE THE PRACTICAL PART" renk={RENK.yesil} boyut={26} />
      </div>
    </>
  );
};

export default S23;
