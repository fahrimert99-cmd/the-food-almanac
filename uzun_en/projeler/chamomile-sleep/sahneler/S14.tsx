// Sahne 14 — tahterevalli: anlamlı fark yok; eğilimler ayrı ayrı gösterilir.
import React from "react";
import { BaslikBlok, Etiket, KaynakEtiketi, Kamera, Liste, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, sol } from "../kutuphane";

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const w = kameraYolu(t, s.sure, [0, 80, 1920], [40, 110, 1800]);
  const tNo = K(0, "no"), son0 = K(1, "time") - 0.15;
  const aC = eout(ilerle(t, tNo + 0.5, 0.6)) * sol(t, son0);
  return (
    <>
      <Kamera gorsel="tam/14" pencere={w}>
        <Etiket t={t} bas={K(1, "chamomile")} bitis={K(1, "but")} capa={[253, 440]} konum={[330, 250]} metin="CHAMOMILE" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={K(1, "placebo")} capa={[887, 433]} konum={[1000, 240]} metin="PLACEBO" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      <BaslikBlok t={t} bas={tNo} bitis={son0} satirlar={["NO CLEAR", "DIFFERENCE"]} x={1180} y={300} boyut={110} />
      <div style={{ position: "absolute", left: 1184, top: 535, height: 6, width: 300 * aC, background: RENK.altin }} />
      <Not t={t} bas={K(0, "sleep")} bitis={son0} metin="sleep diary measures" x={1184} y={565} boyut={38} />
      <Liste t={t} isaret="onay" x={1130} y={250} aralik={90} boyut={30} genislik={720}
        ogeler={[{ bas: K(1, "time"), metin: "TIME TO FALL ASLEEP" }, { bas: K(1, "night"), metin: "NIGHT AWAKENINGS" }]} />
      <Not t={t} bas={K(1, "leaned")} metin="LEANED TOWARD CHAMOMILE" x={1130} y={445} boyut={34} renk={RENK.koyuYesil} agirlik={800} />
      <Liste t={t} isaret="carpi" x={1130} y={580} boyut={30} genislik={720}
        ogeler={[{ bas: K(1, "total"), metin: "TOTAL SLEEP TIME", renk: RENK.mercan }]} />
      <Not t={t} bas={K(1, "actually")} metin="LEANED TOWARD PLACEBO" x={1130} y={665} boyut={34} renk={RENK.mercan} agirlik={800} />
    </>
  );
};

export default S14;
