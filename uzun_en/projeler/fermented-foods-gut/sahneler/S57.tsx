// Sahne 57 — özet: Stanford denemesi (mutfak masası, sağ panelde sayılar).
import React from "react";
import { Baslik, Etiket, Hap, Kamera, KaynakEtiketi, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S57: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tYog = K(0, "fermented"), tMik = K(0, "microbiome"), t19 = K(0, "19");
  const [sc, al] = pop(t, tMik, 0.5);
  return (
    <>
      <Kamera gorsel="tam/57" pencere={kameraYolu(t, s.sure, [150, 50, 1650], [230, 85, 1500])}>
        <Etiket t={t} bas={tYog} capa={[660, 430]} konum={[520, 300]} metin="YOGURT" renk={RENK.yesil} />
        <Etiket t={t} bas={tYog + 0.5} capa={[890, 420]} konum={[1090, 200]} metin="KEFIR" renk={RENK.altin} />
      </Kamera>
      <Panel a={eout(ilerle(t, K(0, "36") - 0.2, 0.6))} taraf="sag" genislik={640} />
      <KaynakEtiketi t={t} metin="Wastyk et al. · Cell · 2021" bas={K(0, "Stanford")} />
      <VurguRozet t={t} bas={K(0, "36")} vurgu="36" not="HEALTHY ADULTS" x={1620} y={150} genislik={400} />
      <Baslik t={t} bas={K(0, "ten")} metin="10 WEEKS" x={1620} y={440} boyut={86} renk={RENK.koyuYesil} hiza="orta" />
      <div style={{ position: "absolute", left: 1620, top: 540, transform: `translate(-50%, 0) scale(${sc})`, opacity: al }}>
        <Hap metin="DIVERSITY ▲" renk={RENK.yesil} boyut={32} />
      </div>
      <VurguRozet t={t} bas={t19} vurgu="19" not="INFLAMMATORY PROTEINS LOWER" x={1620} y={650} genislik={420} renk={RENK.mercan} />
    </>
  );
};

export default S57;
