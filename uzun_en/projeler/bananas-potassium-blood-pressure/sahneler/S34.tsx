// Sahne 34 — güvenlik: dışlananlar, sonra 3.35 vs 3.30
import React from "react";
import { Baslik, Etiket, Hap, Kamera, KaynakEtiketi, Liste, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";
import { INTER } from "../kutuphane";

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tGuv = K(0, "safety");
  const tKid = K(0, "kidney disease");
  const tDiu = K(0, "potassium-sparing diuretics");
  const tSup = K(0, "potassium supplements");
  const tOut = K(0, "left out");
  const tSer = K(1, "serious events");
  const tEq = K(1, "about equal");
  const tNo = K(1, "no significant difference");
  const t1 = K(1, "3.35"), t2 = K(1, "3.30"), tPer = K(1, "per 1,000");
  const bitL = tSer - 0.3;
  const [sc, al] = pop(t, tOut, 0.5);
  return (
    <>
      <Kamera gorsel="tam/34" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 40, 1800])}>
        <Etiket t={t} bas={tGuv + 0.2} bitis={tKid + 1.5} capa={[667, 872]} konum={[900, 640]} metin="STETHOSCOPE" renk={RENK.lacivert} />
        <Etiket t={t} bas={tGuv + 0.8} bitis={tKid + 1.5} capa={[420, 770]} konum={[520, 560]} metin="BANANA" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.4} />
      {/* 1. cümle: dışlananlar */}
      <Baslik t={t} bas={tGuv} bitis={bitL} metin="SAFETY: WHO WAS" x={1000} y={190} boyut={70} renk={RENK.lacivert} />
      <Baslik t={t} bas={tGuv + 0.15} bitis={bitL} metin="LEFT OUT" x={1000} y={270} boyut={90} renk={RENK.mercan} />
      <Liste t={t} x={1000} y={360} aralik={110} boyut={36} isaret="carpi" genislik={880}
        ogeler={[
          { bas: tKid, metin: "KIDNEY DISEASE", renk: RENK.mercan, bitis: bitL },
          { bas: tDiu, metin: "POTASSIUM-SPARING DIURETICS", renk: RENK.mercan, bitis: bitL },
          { bas: tSup, metin: "POTASSIUM SUPPLEMENTS", renk: RENK.mercan, bitis: bitL },
        ]} />
      {/* 2. cümle: iki oran */}
      <Baslik t={t} bas={tSer} bitis={tEq - 0.1} metin="SERIOUS EVENTS" x={1000} y={200} boyut={84} renk={RENK.lacivert} />
      <Not t={t} bas={tSer + 0.4} bitis={tEq - 0.1} metin="from too much potassium" x={1000} y={260} boyut={36} renk={RENK.gri} />
      <Baslik t={t} bas={tEq} metin="ABOUT EQUAL" x={1000} y={200} boyut={96} renk={RENK.koyuYesil} />
      <Not t={t} bas={tNo} metin="No significant difference" x={1004} y={268} boyut={38} renk={RENK.lacivert} agirlik={800} />
      <VurguRozet t={t} bas={t1} vurgu="3.35" x={1190} y={400} genislik={320} renk={RENK.altin} />
      <div style={{ position: "absolute", left: 1450, top: 440, width: 80, textAlign: "center", fontFamily: INTER, fontWeight: 800,
        fontSize: 32, letterSpacing: 2, color: RENK.gri, opacity: pop(t, t2 - 0.2, 0.4)[1] }}>VS</div>
      <VurguRozet t={t} bas={t2} vurgu="3.30" x={1700} y={400} genislik={320} renk={RENK.lacivert} />
      <Not t={t} bas={tPer} metin="serious high-potassium events per 1,000 person-years" x={1440} y={610} boyut={32} hiza="orta" genislik={760} agirlik={700} />
    </>
  );
};

export default S34;
