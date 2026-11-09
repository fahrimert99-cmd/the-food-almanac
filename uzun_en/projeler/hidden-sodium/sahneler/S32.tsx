// Sahne 32 — Ön yüzdeki iddialar: üç kase (dolu → az → boş) = 140 / 35 / <5 mg.
import React from "react";
import { Etiket, Hap, Kamera, KaynakEtiketi, RENK, SP, kameraYolu, kelimeZamani, pop, sol, VurguRozet } from "../kutuphane";

const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tClaim = K(0, "claims"), tLow = K(1, "140"), tVery = K(2, "35"), tFree = K(3, "5 milligrams");
  const [sc, al] = pop(t, tClaim, 0.5);
  const a = al * sol(t, K(1, "Low") - 0.1);
  return (
    <>
      <Kamera gorsel="tam/32" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1840])}>
        <Etiket t={t} bas={tLow} capa={[433, 570]} konum={[433, 760]} metin="LOW SODIUM" renk={RENK.yesil} />
        <Etiket t={t} bas={tVery} capa={[970, 575]} konum={[970, 760]} metin="VERY LOW SODIUM" renk={RENK.altin} />
        <Etiket t={t} bas={tFree} capa={[1460, 600]} konum={[1460, 780]} metin="SODIUM FREE" renk={RENK.koyuYesil} />
      </Kamera>
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} bas={0.2} />}
      {a > 0 && (
        <div style={{ position: "absolute", left: 960, top: 190, transform: `translate(-50%,-50%) scale(${sc})`, opacity: a }}>
          <Hap metin="CLAIMS ON THE FRONT" renk={RENK.altin} boyut={36} />
        </div>
      )}
      <VurguRozet t={t} bas={tLow} vurgu="≤ 140 MG" not="PER SERVING" x={433} y={108} genislik={340} boyut={72} renk={RENK.yesil} />
      <VurguRozet t={t} bas={tVery} vurgu="≤ 35 MG" not="PER SERVING" x={970} y={108} genislik={340} boyut={72} renk={RENK.altin} />
      <VurguRozet t={t} bas={tFree} vurgu="< 5 MG" not="PER SERVING" x={1400} y={108} genislik={340} boyut={72} renk={RENK.koyuYesil} />
    </>
  );
};
export default S32;
