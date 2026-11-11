// Sahne 30 — stevia bitkisi, Suez denemesi
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Liste, Not, Panel, RENK, SP, VurguRozet, eout, ilerle,
  kameraYolu, kelimeZamani, sol } from "../kutuphane";

// Yerel yardımcı: kelimede belirip yumuşakça gelen blok
const Gel: React.FC<{ t: number; bas: number; bitis?: number; style: React.CSSProperties; children: React.ReactNode }> = ({ t, bas, bitis = 1e9, style, children }) => {
  const p = eout(ilerle(t, bas, 0.45)), a = p * sol(t, bitis);
  if (a <= 0) return null;
  return <div style={{ position: "absolute", opacity: a, transform: `translateY(${(1 - p) * 14}px)`, ...style }}>{children}</div>;
};
const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  return (
    <>
      <Kamera gorsel="tam/30" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 25, 1840])}>
        <Etiket t={t} bas={K(0, "stevia")} capa={[760, 300]} konum={[270, 330]} metin="STEVIA PLANT" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "glucose responses")} capa={[1370, 560]} konum={[1640, 720]} metin="GLUCOSE METER" renk={RENK.altin} boyut={26} />
      </Kamera>
      <KaynakEtiketi t={t} bas={K(1, "Suez")} metin="Suez et al. · Cell · 2022" />
      <VurguRozet t={t} bas={K(1, "did not change")} vurgu="NO CHANGE" not="glucose responses, stevia" x={1680} y={250} genislik={380} boyut={72} renk={RENK.yesil} />
    </>
  );
};

export default S30;
