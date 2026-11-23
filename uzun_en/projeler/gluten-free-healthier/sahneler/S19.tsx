// Sahne 19 — Tam tahıl etkisi: rafine tahıla göre düzeltince –%15. Sağ panel + sol görsel.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), b = s.meta.baslik!;
  const tPanel = K(1, "When the researchers") - 0.2;
  const pPan = eout(ilerle(t, 0.05, 0.5)); // kenar artığını baştan örter
  const tRaw = K(0, "lower raw numbers");
  const t1 = K(1, "refined grains"), t15 = K(1, "15 percent");
  const [sN, aN] = pop(t, K(2, "not a gluten"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/19" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 40, 1780])}>
        <Etiket t={t} bas={t1} bitis={K(2, "The authors")} capa={[820, 330]} konum={[800, 110]} metin="REFINED GRAINS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "whole grain effect")} capa={[380, 640]} konum={[380, 900]} metin="WHOLE GRAIN EFFECT" renk={RENK.yesil} />
      </Kamera>
      <Panel a={pPan} taraf="sag" genislik={800} opak={1} />
      <BaslikBlok t={t} bas={tRaw} bitis={tPanel + 0.1} satirlar={["RAW NUMBERS", "MAY NOT BE", "GLUTEN"]} x={1860} y={250} boyut={92} hiza="sag" renkler={[RENK.lacivert, RENK.lacivert, RENK.koyuYesil]} />
      <BaslikBlok t={t} bas={t1 - 0.3} satirlar={b.satirlar} x={1860} y={250} boyut={118} hiza="sag" />
      <VurguRozet t={t} bas={t15} vurgu={b.vurgu!} not={b.not} x={1560} y={500} genislik={400} />
      <div style={{ position: "absolute", left: 1560, top: 800, transform: `translate(-50%, -50%) scale(${sN})`, opacity: aN }}>
        <Hap metin="NOT A GLUTEN EFFECT" renk={RENK.mercan} boyut={28} />
      </div>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={0.3} bitis={tPanel} />
    </>
  );
};

export default S19;
