// Sahne 40 — Daha fazla su böbrek fonksiyonu düşüşünü yavaşlatmadı: eGFR 2.2 vs 1.9.
import React from "react";
import { BaslikBlok, Etiket, Hap, CubukGrafik, Kamera, KaynakEtiketi, Not, RENK, SP, Panel, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tMore = K(0, "more");
  const tEgfr = K(1, "eGFR,");
  const tA = K(1, "2.2"), tB = K(1, "1.9");
  const tNo = K(2, "no sign");
  const [sc, al] = pop(t, tNo, 0.55);
  return (
    <>
      <Kamera gorsel="tam/40" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [40, 70, 1800])}>
        <Etiket t={t} bas={tMore} bitis={13} capa={[367, 360]} konum={[780, 250]} metin="MORE WATER" renk={RENK.altin} />
      </Kamera>
      <Panel a={eout(ilerle(t, 0.1, 0.6))} taraf="sag" genislik={900} opak={0.9} />
      <BaslikBlok t={t} bas={0.3} satirlar={["MORE WATER", "NO KIDNEY GAIN"]} x={1850} y={160} boyut={100} hiza="sag" />
      <Not t={t} bas={tEgfr} metin="eGFR = FILTERING SCORE" x={1850} y={400} hiza="sag" boyut={34} agirlik={800} />
      <Not t={t} bas={tEgfr + 0.5} metin="AVERAGE DROP, POINTS" x={1850} y={446} hiza="sag" boyut={26} renk={RENK.gri} />
      <CubukGrafik t={t} bas={tA - 0.05} x={1040} y={560} w={800} h={230} maks={3}
        cubuklar={[
          { etiket: "MORE WATER", deger: 2.2, metin: "2.2", renk: RENK.altin, bas: tA - 0.05 },
          { etiket: "USUAL INTAKE", deger: 1.9, metin: "1.9", renk: RENK.lacivert, bas: tB - 0.05 },
        ]} />
      <div style={{ position: "absolute", left: 1445, top: 890, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
        <Hap metin="NO SIGN IT PROTECTS KIDNEYS" renk={RENK.mercan} boyut={28} />
      </div>
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} />}
    </>
  );
};
export default S40;
