// Sahne 28 — toplam uyku süresi/verimlilik net değişmedi; nesnel ölçüm gerek
import React from "react";
import { BaslikBlok, Baslik, Etiket, Hap, Ikon, Kamera, KaynakEtiketi, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTot = K(0, "total"), tEff = K(0, "efficiency"), tNot = K(0, "not"), tFut = K(1, "future"), tMeas = K(1, "measure"), tQs = K(1, "questionnaires");
  const pen = kameraYolu(t, s.sure, [0, 40, 1920], [60, 70, 1800]);
  const [sc, al] = pop(t, tEff, 0.5);
  return (
    <>
      <Kamera gorsel="tam/28" pencere={pen}>
        <Etiket t={t} bas={tTot} bitis={tFut - 0.1} capa={[1210, 460]} konum={[1600, 310]} metin="TOTAL SLEEP TIME" renk={RENK.altin} />
        <Etiket t={t} bas={tMeas} capa={[700, 510]} konum={[340, 300]} metin="MEASURE OBJECTIVELY" renk={RENK.yesil} />
      </Kamera>
      <div style={{ position: "absolute", left: 1600, top: 380, transform: `translateX(-50%) scale(${sc})`, opacity: al * (t < tFut - 0.1 ? 1 : 0) }}>
        <Hap metin="SLEEP EFFICIENCY" renk={RENK.altin} boyut={30} />
      </div>
      <Baslik t={t} bas={tNot} metin="NO CLEAR GAIN" x={1840} y={170} boyut={84} renk={RENK.lacivert} hiza="sag" />
      <div style={{ position: "absolute", left: 340, top: 400, transform: "translateX(-50%)", opacity: eout(ilerle(t, tQs - 0.4, 0.4)) }}>
        {t >= tQs - 0.4 && <Hap metin="NOT ONLY QUESTIONNAIRES" renk={RENK.mercan} boyut={26} />}
      </div>
    </>
  );
};
export default S28;
