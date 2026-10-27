// Sahne 23 — alt üçte bir ~9 g, üst üçte birde %39 daha düşük risk; gözlemsel
import React from "react";
import { Etiket, Hap, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Pil: React.FC<{ t: number; bas: number; y: number; metin: string; renk: string }> = ({ t, bas, y, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  return (
    <div style={{ position: "absolute", left: 60, top: y, opacity: al, transform: `scale(${sc})`, transformOrigin: "0% 50%" }}>
      <Hap metin={metin} renk={renk} boyut={30} />
    </div>
  );
};

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tUst = K(1, "top"), tGozlem = K(1, "observational,");
  return (
    <>
      <Kamera gorsel="tam/23" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1740])}>
        <Etiket t={t} bas={K(0, "bottom")} bitis={tUst - 0.2} capa={[800, 730]} konum={[330, 250]} metin="BOTTOM THIRD" renk={RENK.mercan} />
        <Etiket t={t} bas={tUst} capa={[1230, 380]} konum={[1640, 280]} metin="TOP THIRD" renk={RENK.yesil} />
      </Kamera>
      <VurguRozet t={t} bas={K(0, "9")} bitis={tUst - 0.2} vurgu="≈ 9 G" not="UNDER 1 TABLESPOON" x={300} y={340} genislik={440} boyut={92} renk={RENK.mercan} />
      <VurguRozet t={t} bas={K(1, "39")} bitis={tGozlem - 0.15} vurgu="–39%" not="CARDIOVASCULAR RISK" x={300} y={340} genislik={460} boyut={92} renk={RENK.yesil} />
      <Pil t={t} bas={tGozlem} y={350} metin="OBSERVATIONAL" renk={RENK.altin} />
      <Pil t={t} bas={K(1, "differ")} y={440} metin="OTHER DIFFERENCES POSSIBLE" renk={RENK.mercan} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
    </>
  );
};

export default S23;
