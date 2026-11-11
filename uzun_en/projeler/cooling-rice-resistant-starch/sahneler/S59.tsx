// Sahne 59 — pratik kural: hızlı soğutma, buzdolabı, yeniden ısıtma.
import React from "react";
import { Etiket, Kamera, Liste, Panel, RENK, SP, kameraYolu, kelimeZamani, eout, ilerle } from "../kutuphane";

const S59: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pPanel = eout(ilerle(t, K(1, "Cool") - 0.2, 0.6));
  return (
    <>
      <Kamera gorsel="tam/59" pencere={kameraYolu(t, s.sure, [60, 40, 1800], [120, 80, 1680])}>
        <Etiket t={t} bas={K(0, "harmless")} bitis={K(1, "Cool") - 0.1} capa={[640, 560]} konum={[760, 160]} metin="HARMLESS BONUS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "treatment.")} bitis={K(1, "Cool") - 0.1} capa={[1100, 440]} konum={[1250, 160]} metin="NOT A TREATMENT" renk={RENK.mercan} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={800} />
      <Liste t={t} x={1240} y={250} aralik={150} boyut={32} genislik={640} isaret="sayi" ogeler={[
        { bas: K(1, "Cool"), metin: "COOL QUICKLY" },
        { bas: K(1, "refrigerate"), metin: "FRIDGE WITHIN ~2 HOURS" },
        { bas: K(1, "eat"), metin: "EAT WITHIN 3–4 DAYS" },
        { bas: K(1, "reheat"), metin: "REHEAT UNTIL STEAMING HOT", renk: RENK.mercan },
      ]} />
    </>
  );
};

export default S59;
