// Sahne 59 — tüm tabak/diyet önemli; doktora danışın. Görselin kenarları (üst şerit, sağ boşluk) kamerayla dışarıda.
import React from "react";
import { Baslik, Etiket, Kamera, Liste, Not, Panel, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani, sol } from "../kutuphane";

const S59: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const c1 = c[1].bas - 0.2;
  const aUst = eout(ilerle(t, K(0, "overall") - 0.3, 0.5)) * sol(t, c1, 0.4);
  const aPanel = eout(ilerle(t, c[1].bas - 0.15, 0.7));
  return (
    <>
      <Kamera gorsel="tam/59" pencere={kameraYolu(t, s.sure, [0, 80, 1720], [50, 95, 1600])}>
        <Etiket t={t} bas={K(0, "eat")} bitis={c1} capa={[560, 520]} konum={[420, 880]} metin="WHAT'S ON THE PLATE" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "eggs,")} bitis={c1} capa={[1010, 740]} konum={[1380, 880]} metin="THE EGG" renk={RENK.altin} />
      </Kamera>
      {/* üst bant: yazı için kâğıt zemin */}
      <div style={{ position: "absolute", left: 0, right: 0, top: 0, height: 320, opacity: aUst * 0.95,
        background: `linear-gradient(to bottom, ${kagit(1)} 0%, ${kagit(1)} 70%, ${kagit(0)} 100%)` }} />
      <Baslik t={t} bas={K(0, "overall")} bitis={c1} metin="OVERALL DIET" x={960} y={170} boyut={104} renk={RENK.koyuYesil} hiza="orta" />
      <Not t={t} bas={K(0, "may matter")} bitis={c1} metin="MAY MATTER AS MUCH AS THE EGG ITSELF" x={960} y={235} boyut={36} hiza="orta" agirlik={800} />
      {/* sağ panel: doktora danış */}
      <Panel a={aPanel} taraf="sag" genislik={780} opak={0.96} />
      <Not t={t} bas={c[1].bas} metin="IF YOU HAVE" x={1200} y={200} boyut={40} agirlik={800} renk={RENK.altin} />
      <Liste t={t} isaret="nokta" x={1200} y={290} aralik={96} boyut={42} genislik={640}
        ogeler={[
          { bas: K(1, "diabetes"), metin: "DIABETES", renk: RENK.altin },
          { bas: K(1, "high LDL"), metin: "HIGH LDL", renk: RENK.altin },
          { bas: K(1, "heart disease"), metin: "HEART DISEASE", renk: RENK.altin },
        ]} />
      <Baslik t={t} bas={K(1, "ask your doctor")} metin="ASK YOUR" x={1860} y={690} boyut={100} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(1, "ask your doctor") + 0.2} metin="DOCTOR" x={1860} y={800} boyut={100} renk={RENK.koyuYesil} hiza="sag" />
    </>
  );
};

export default S59;
