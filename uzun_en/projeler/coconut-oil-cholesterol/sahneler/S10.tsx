// Sahne 10 — laboratuvar raporunda LDL mg/dL; 10 puan mütevazı; günlük alışkanlık > ara sıra kaşık.
import React from "react";
import { AltSis, BaslikBlok, Etiket, Hap, Kamera, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S10: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tLdl = K(0, "LDL"), tMg = K(0, "milligrams"), tOn = K(1, "Ten"), tGun = K(2, "daily"), tAra = K(2, "occasional");
  const pPanel = eout(ilerle(t, 0.2, 0.6));
  const [s1, a1] = pop(t, tGun, 0.5);
  const [s2, a2] = pop(t, tAra, 0.5);
  return (
    <>
      <Kamera gorsel="tam/10" pencere={kameraYolu(t, s.sure, [0, 60, 1920], [60, 110, 1790])}>
        <Etiket t={t} bas={K(2, "spoonful") - 0.1} capa={[345, 760]} konum={[760, 560]} metin="COCONUT OIL" renk={RENK.altin} boyut={26} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={940} />
      <AltSis a={0.7} yukseklik={150} />
      <BaslikBlok t={t} bas={tLdl} satirlar={s.meta.baslik?.satirlar ?? []} x={1860} y={170} boyut={92} hiza="sag" />
      <VurguRozet t={t} bas={tMg} vurgu="mg/dL" not="per deciliter" x={1290} y={400} boyut={92} genislik={340} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={tOn} vurgu="10 POINTS" not="a modest change on its own" x={1670} y={400} boyut={62} genislik={380} bitis={tGun - 0.2} />
      <div style={{ position: "absolute", left: 1000, top: 640, display: "flex", flexDirection: "column", gap: 22, alignItems: "flex-start" }}>
        <div style={{ transform: `scale(${s1})`, opacity: a1, transformOrigin: "0 50%" }}><Hap metin="DAILY HABIT" renk={RENK.mercan} boyut={34} /></div>
        <div style={{ transform: `scale(${s2})`, opacity: a2, transformOrigin: "0 50%" }}><Hap metin="OCCASIONAL SPOONFUL" renk={RENK.yesil} boyut={34} /></div>
      </div>
    </>
  );
};
export default S10;
