// Sahne 53 — Cochrane: sol panel bozuk göz tablosunu örter, iki rozet; sağda şişe.
import React from "react";
import { Baslik, Etiket, KaynakEtiketi, Kamera, Panel, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tPil = K(0, "pills"), tReal = K(0, "real"), t38 = K(1, "38"), t23 = K(1, "23");
  return (
    <>
      <Kamera gorsel="tam/53" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840])}>
        <Etiket t={t} bas={tPil} capa={[1450, 600]} konum={[1650, 400]} metin="EYE PILLS" renk={RENK.altin} />
      </Kamera>
      {/* bozuk harfli göz tablosunu baştan sona örter */}
      <Panel a={1} taraf="sol" genislik={1080} opak={1} />
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} bas={0.2} />}
      <Baslik t={t} bas={tReal} bitis={t38 - 0.3} metin="REAL," x={100} y={300} boyut={110} renk={RENK.lacivert} />
      <Baslik t={t} bas={tReal + 0.18} bitis={t38 - 0.3} metin="BUT MODEST" x={100} y={420} boyut={110} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={t38 - 0.05} vurgu="–38%" not="lower odds · wet form" x={380} y={220} genislik={560} boyut={110} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={t23 - 0.05} vurgu="–23%" not="lower odds · losing 3+ eye-chart lines" x={380} y={540} genislik={560} boyut={110} renk={RENK.altin} />
    </>
  );
};

export default S53;
