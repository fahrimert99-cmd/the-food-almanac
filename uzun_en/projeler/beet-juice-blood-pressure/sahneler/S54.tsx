// Sahne 54 — özet: havuzlanmış çalışmalar ~3.5 puan; hastalarda 4 haftada ~8, 1 haftada yok.
import React from "react";
import { Etiket, Kamera, Panel, RENK, SP, VurguRozet, Baslik, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tPooled = K(0, "Pooled"), tHalf = K(0, "half"), tBigger = K(0, "bigger");
  const tPat = K(1, "patients"), tFour = K(1, "four-week"), tOne = K(1, "one-week");
  const pPanel = eout(ilerle(t, 0, 0.5));
  return (
    <>
      <Kamera gorsel="tam/54" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [260, 40, 1660])}>
        <Etiket t={t} bas={tBigger} bitis={tPat - 0.1} capa={[1220, 560]} konum={[1500, 250]} metin="BIGGER WITH LONGER USE" renk={RENK.yesil} />
      </Kamera>
      <Panel a={pPanel} taraf="sol" genislik={800} opak={0.96} />
      <Baslik t={t} bas={tPooled} bitis={tPat - 0.1} metin="POOLED TRIALS" x={80} y={190} boyut={88} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={tHalf - 0.6} bitis={tPat - 0.1} vurgu="–3.55" not="points of systolic pressure" x={330} y={330} />
      <Baslik t={t} bas={tPat} metin="IN PATIENTS" x={80} y={190} boyut={88} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={tFour} vurgu="≈ –8" not="4-week trial" x={260} y={330} genislik={360} renk={RENK.yesil} />
      <VurguRozet t={t} bas={tOne} vurgu="NONE" not="1-week trial" x={260} y={600} genislik={360} renk={RENK.mercan} />
    </>
  );
};

export default S54;
