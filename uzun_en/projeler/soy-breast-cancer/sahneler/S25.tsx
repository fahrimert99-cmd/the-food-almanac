// Sahne 25 — Dong & Qin 2011 meta-analizi: kitap yığını + tofu solda, sağda başlık, rozet ve kaynak.
import React from "react";
import { AltSis, Baslik, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik;
  const tAnaliz = K(0, "analysis"), t14 = K(0, "14"), tStud = K(0, "prospective");
  const tRisk = K(1, "11 percent");
  const pencere = kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1760]);
  return (
    <>
      <Kamera gorsel="tam/25" pencere={pencere}>
        <Etiket t={t} bas={tStud} capa={[800, 480]} konum={[1150, 800]} metin="PROSPECTIVE STUDIES" renk={RENK.altin} />
      </Kamera>
      <AltSis a={0.6} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={tAnaliz} />
      <Baslik t={t} bas={t14} metin={b?.satirlar[0] ?? "14 STUDIES"} x={1000} y={300} boyut={110} renk={RENK.lacivert} />
      <Not t={t} bas={t14 + 0.3} metin="pooled breast cancer incidence" x={1004} y={430} boyut={34} genislik={760} />
      <VurguRozet t={t} bas={tRisk} vurgu={b?.vurgu ?? "–11%"} not={b?.not} x={1370} y={500} genislik={600} renk={RENK.koyuYesil} />
    </>
  );
};

export default S25;
