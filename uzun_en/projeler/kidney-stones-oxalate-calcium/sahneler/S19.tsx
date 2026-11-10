// Sahne 19 — en çok kalsiyum alan erkekler: sağ sütunda başlık, –34% rozeti, düzeltilen etkenler.
import React from "react";
import { AltSis, Baslik, Etiket, Hap, Kamera, KaynakEtiketi, INTER, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tAdj = K(0, "after adjusting");
  const aAdj = eout(ilerle(t, tAdj, 0.5));
  const chips = [{ m: "FLUID", b: K(0, "fluid") }, { m: "ANIMAL PROTEIN", b: K(0, "animal protein") }];
  return (
    <>
      <Kamera gorsel="tam/19" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [60, 60, 1760])}>
        <Etiket t={t} bas={K(0, "most calcium")} bitis={5.4} capa={[570, 300]} konum={[930, 170]} metin="DIETARY CALCIUM" renk={RENK.yesil} />
      </Kamera>
      <AltSis a={0.8} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      <Baslik t={t} bas={K(0, "most calcium")} metin={b.satirlar[0]} x={1850} y={230} boyut={96} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(0, "third")} metin={b.satirlar[1]} x={1850} y={340} boyut={96} renk={RENK.koyuYesil} hiza="sag" />
      <VurguRozet t={t} bas={K(0, "least")} vurgu={b.vurgu!} not={b.not} x={1610} y={420} genislik={500} renk={RENK.yesil} />
      <div style={{ position: "absolute", left: 1360, width: 490, top: 740, opacity: aAdj, textAlign: "right", fontFamily: INTER,
        fontWeight: 800, fontSize: 24, letterSpacing: 4, color: RENK.altin }}>ADJUSTED FOR</div>
      {chips.map((c, i) => {
        const [sc, al] = pop(t, c.b, 0.5);
        return (
          <div key={c.m} style={{ position: "absolute", right: 70, top: 790 + i * 72, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: al }}>
            <Hap metin={c.m} renk={RENK.lacivert} boyut={30} />
          </div>
        );
      })}
    </>
  );
};

export default S19;
