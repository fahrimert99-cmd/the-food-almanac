// Sahne 42 — mercek altındaki kavanoz: yeniden analiz = bağlantı, kanıt değil; fazla kalsiyumun olası zararları.
// Kitabın sayfalarındaki sahte el yazısı, alttaki kâğıt kartla baştan sona örtülür.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tRe = K(0, "re-analysis"), tEx = K(0, "existing"), tNot = K(0, "not a new"), tLink = K(0, "link"), tBone = K(1, "bone");
  const tFazla = K(1, "extra"), tYok = K(1, "no"), tKab = K(1, "constipation"), tTas = K(1, "kidney"), tKalp = K(1, "heart");
  const tOlas = K(1, "possibly");
  return (
    <>
      <Kamera gorsel="tam/42" pencere={kameraYolu(t, s.sure, [20, 0, 1880], [60, 0, 1800])}>
        <Etiket t={t} bas={tFazla} capa={[900, 540]} konum={[400, 470]} metin="EXTRA CALCIUM" renk={RENK.altin} />
      </Kamera>
      {/* örtü kartı: kitabın sayfalarını gizler */}
      <div style={{ position: "absolute", left: 330, top: 690, width: 1260, height: 275, background: RENK.kagitAcik,
        border: `3px solid ${RENK.lacivert}`, borderRadius: 22, boxShadow: "0 12px 30px rgba(48,40,34,0.2)" }} />
      <Baslik t={t} bas={tRe} bitis={tNot - 0.1} metin="RE-ANALYSIS" x={960} y={790} boyut={110} hiza="orta" renk={RENK.lacivert} />
      <Not t={t} bas={tEx} bitis={tNot - 0.1} metin="of existing trials" x={960} y={862} hiza="orta" genislik={900} boyut={40} />
      <Baslik t={t} bas={tNot} bitis={tLink - 0.1} metin="NOT A NEW EXPERIMENT" x={960} y={820} boyut={104} hiza="orta" renk={RENK.mercan} />
      <Baslik t={t} bas={tLink} bitis={tBone - 0.2} metin="A LINK, NOT PROOF" x={960} y={820} boyut={120} hiza="orta" renk={RENK.koyuYesil} />
      <Liste t={t} x={400} y={738} aralik={92} boyut={34} isaret="nokta" genislik={540}
        ogeler={[
          { bas: tYok - 0.05, metin: "NO EXTRA BENEFIT", renk: RENK.altin },
          { bas: tKab, metin: "CONSTIPATION", renk: RENK.mercan },
        ]} />
      <Liste t={t} x={990} y={738} aralik={92} boyut={34} isaret="nokta" genislik={560}
        ogeler={[
          { bas: tTas, metin: "KIDNEY STONES", renk: RENK.mercan },
          { bas: tKalp, metin: "HEART CALCIFICATION", renk: RENK.mercan },
        ]} />
      <Not t={t} bas={tOlas} metin="possibly" x={1065} y={884} boyut={26} agirlik={700} renk={RENK.gri} />
    </>
  );
};

export default S42;
