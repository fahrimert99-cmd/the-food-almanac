// Sahne 7 — çoğu Amerikalı hedefin altında: erkek ≈3.000, kadın ≈2.300 mg. Solda panel, sağda reyon.
import React from "react";
import { Baslik, Kamera, KaynakEtiketi, Panel, Not, RENK, SP, VurguRozet, eout, ilerle, pencereAra, einout, kelimeZamani } from "../kutuphane";

const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const p = einout(ilerle(t, 0, s.sure + 0.7));
  return (
    <>
      <Kamera gorsel="tam/07" pencere={pencereAra([780, 80, 1140], [820, 110, 1060], p)} />
      <Panel a={eout(ilerle(t, 0.1, 0.6))} taraf="sol" genislik={900} opak={0.96} />
      <KaynakEtiketi t={t} metin="NIH · NATIONAL SURVEY" bas={K(1, "National")} />
      <Baslik t={t} bas={0.3} metin="MOST FALL" x={60} y={250} boyut={110} renk={RENK.lacivert} />
      <Baslik t={t} bas={0.5} metin="SHORT" x={60} y={365} boyut={110} renk={RENK.mercan} />
      <Not t={t} bas={K(1, "adult")} metin="average potassium, mg a day" x={60} y={450} boyut={32} genislik={700} />
      <VurguRozet t={t} bas={K(1, "3,000")} vurgu="≈ 3,000" not="MEN" x={290} y={560} genislik={430} boyut={92} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(1, "2,300")} vurgu="≈ 2,300" not="WOMEN" x={290 + 460} y={560} genislik={430} boyut={92} renk={RENK.yesil} />
    </>
  );
};

export default S07;
