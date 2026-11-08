// Sahne 37 — alışveriş arabası: ABD diyabet analizinde daha yüksek riskle bağlantılı alt gruplar.
import React from "react";
import { BaslikBlok, Etiket, KaynakEtiketi, Kamera, Liste, Not, RENK, SP, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tIc = K(2, "sweetened");
  return (
    <>
      <Kamera gorsel="tam/37" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 40, 1760])}>
        {/* sol alttaki imza kalıntısı örtülür */}
        <div style={{ position: "absolute", left: 20, top: 1000, width: 130, height: 80,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 55%, ${kagit(0)} 100%)` }} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} y={48} />
      <BaslikBlok t={t} bas={K(0, "here") + 0.1} satirlar={b.satirlar} x={1860} y={190} boyut={100} hiza="sag"
        renkler={[RENK.mercan, RENK.lacivert]} />
      <Not t={t} bas={K(1, "huge")} metin="THE GROUP IS HUGE AND UNEVEN" x={1860} y={410} hiza="sag" boyut={34} agirlik={800} genislik={800}
        renk={RENK.altin} bitis={tIc - 0.2} />
      <Not t={t} bas={K(2, "American")} metin="AMERICAN DIABETES ANALYSIS" x={1860} y={410} hiza="sag" boyut={34} agirlik={800} genislik={800}
        renk={RENK.altin} bitis={tIc - 0.3} />
      <Liste t={t} isaret="nokta" x={1000} y={480} aralik={100} boyut={36} genislik={880} ogeler={[
        { bas: K(2, "sweetened"), metin: "SWEETENED DRINKS", renk: RENK.mercan },
        { bas: K(2, "refined"), metin: "REFINED BREADS", renk: RENK.mercan },
        { bas: K(2, "sauces"), metin: "SAUCES", renk: RENK.mercan },
        { bas: K(2, "ready-to-eat"), metin: "READY-TO-EAT MIXED DISHES", renk: RENK.mercan },
      ]} />
      <Etiket t={t} bas={K(2, "drinks,")} capa={[220, 420]} konum={[640, 330]} metin="DRINKS" renk={RENK.mercan} />
      <Etiket t={t} bas={K(2, "breads,") } capa={[470, 480]} konum={[760, 470]} metin="BREAD" renk={RENK.mercan} />
      <Etiket t={t} bas={K(2, "sauces")} capa={[505, 600]} konum={[740, 640]} metin="SAUCE" renk={RENK.mercan} />
    </>
  );
};
export default S37;
