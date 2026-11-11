// Sahne 35 — Cochrane incelemesi: 11 çalışma, 735 kişi (meta.baslik). Sağ boşlukta başlık ve rozet.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCoch = K(0, "Cochrane,"), tUpd = K(0, "updated"), t2020 = K(0, "2020,");
  const tGar = K(1, "Garrison"), t11 = K(1, "11"), t735 = K(1, "735");
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1760]);
  const m = s.meta;
  const b = m.baslik ?? { satirlar: ["11 TRIALS"], vurgu: "735", not: "" };
  return (
    <>
      <Kamera gorsel="tam/35" pencere={p} />
      <Baslik t={t} bas={t2020} bitis={t11 - 0.4} metin="2020" x={1400} y={300} boyut={150} renk={RENK.altin} />
      <Not t={t} bas={tUpd} bitis={t11 - 0.4} metin="Cochrane review updated" x={1400} y={400} boyut={34} genislik={440} />
      <Etiket t={t} bas={tCoch} capa={[470, 330]} konum={[1000, 150]} metin="COCHRANE REVIEW" renk={RENK.koyuYesil} boyut={28} />
      <KaynakEtiketi t={t} metin={m.etiket ?? ""} bas={tGar} y={900 - 80} />
      <Baslik t={t} bas={t11} metin={b.satirlar[0]} x={1400} y={300} boyut={110} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={t735} vurgu={b.vurgu ?? "735"} not={b.not} x={1640} y={440} genislik={420} renk={RENK.altin} />
    </>
  );
};

export default S35;
