// Sahne 19 — 2014 meta-analizi: örneklerde tespit edilebilir kalıntı oranları.
import React from "react";
import { AbsoluteFill, Baslik, Hap, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t46 = K(1, "46"), t11 = K(1, "11 percent"), tE = K(2, "eleven"), tS = K(2, "eight");
  const [s1, a1] = pop(t, tE, 0.5);
  const [s2, a2] = pop(t, tS, 0.5);
  return (
    <AbsoluteFill>
      <Kamera gorsel="tam/19" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 10, 1840])}>
        <Baslik t={t} bas={K(0, "2014")} metin="2014" x={70} y={210} boyut={64} renk={RENK.koyuYesil} />
        <Baslik t={t} bas={K(0, "meta-analysis")} metin="META-" x={70} y={280} boyut={64} renk={RENK.koyuYesil} />
        <Baslik t={t} bas={K(0, "meta-analysis")} metin="ANALYSIS" x={70} y={350} boyut={64} renk={RENK.koyuYesil} />
        {/* lambaların yerine: iki rozet, soldaki geleneksel, sağdaki organik */}
        <VurguRozet t={t} bas={t46 - 0.1} vurgu="~46%" not="CONVENTIONAL" x={660} y={140} genislik={360} boyut={120} renk={RENK.mercan} />
        <VurguRozet t={t} bas={t11 - 0.1} vurgu="~11%" not="ORGANIC" x={1260} y={140} genislik={360} boyut={120} renk={RENK.yesil} />
        <div style={{ position: "absolute", left: 0, width: 1920, top: 850, display: "flex", justifyContent: "center", gap: 24 }}>
          <div style={{ transform: `scale(${s1})`, opacity: a1 }}><Hap metin="11 STUDIES" renk={RENK.altin} boyut={30} /></div>
          <div style={{ transform: `scale(${s2})`, opacity: a2 }}><Hap metin="8 ON ONE CROP" renk={RENK.mercan} boyut={30} /></div>
        </div>
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
    </AbsoluteFill>
  );
};

export default S19;
