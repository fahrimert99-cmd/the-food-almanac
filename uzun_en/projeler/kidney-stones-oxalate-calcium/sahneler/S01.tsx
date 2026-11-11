// S01 — açılış: süt, ıspanak, taş; 23 vs 12 çubukları
import React from "react";
import { Baslik, CubukGrafik, Etiket, Hap, Kamera, KaynakEtiketi, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTas = K(0, "stone?"), tSut = K(1, "dairy"), tDeney = K(2, "five-year"), t23 = K(2, "23"), t12 = K(3, "normal-calcium");
  const w = kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800]);
  const [sc, al] = pop(t, tDeney, 0.5);
  const fade = 1 - eout(ilerle(t, t23 - 0.3, 0.3));
  return (
    <>
      <Kamera gorsel="tam/01" pencere={w}>
        <Etiket t={t} bas={tTas} bitis={tDeney - 0.2} capa={[1020, 890]} konum={[1420, 860]} metin="KIDNEY STONE" renk={RENK.mercan} />
        <Etiket t={t} bas={tSut} bitis={tDeney - 0.2} capa={[380, 420]} konum={[760, 250]} metin="DAIRY" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      {/* 5 yıllık deney bilgisi */}
      {al > 0 && fade > 0 && (
        <div style={{ position: "absolute", left: 1550, top: 210, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al * fade }}>
          <Hap metin="5-YEAR TRIAL · 120 MEN" renk={RENK.lacivert} boyut={30} />
        </div>
      )}
      <Baslik t={t} bas={t23} metin="23 VS 12" x={1210} y={190} boyut={118} renk={RENK.koyuYesil} />
      <Not t={t} bas={t23 + 0.3} metin="stone relapses in 5 years, low calcium vs normal calcium" x={1210} y={262} boyut={28} genislik={640} />
      <CubukGrafik t={t} bas={t23} x={1210} y={470} w={640} h={300} maks={26}
        cubuklar={[
          { etiket: "LOW CALCIUM", deger: 23, metin: "23", renk: RENK.mercan, bas: t23 },
          { etiket: "NORMAL CALCIUM", deger: 12, metin: "12", renk: RENK.yesil, bas: t12 },
        ]} />
    </>
  );
};

export default S01;
