// Sahne 20 — fayda tepesi: iki hafta sonunda iyi, dördüncü haftada düzleşti.
import React from "react";
import { BaslikBlok, Etiket, KaynakEtiketi, Kamera, Liste, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, sol } from "../kutuphane";

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tGrup = K(0, "tea group"), tUyku = K(0, "sleep inefficiency"), tDep = K(0, "depression");
  const tDort = K(1, "four-week"), tAyni = K(1, "about the same");
  const aListe = sol(t, tDort - 0.1);
  return (
    <>
      <Kamera gorsel="tam/20" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={tGrup} bitis={tDort - 0.1} capa={[560, 400]} konum={[900, 470]} metin="TEA GROUP" renk={RENK.altin} />
        <Etiket t={t} bas={tAyni} capa={[1500, 860]} konum={[1380, 640]} metin="ABOUT THE SAME" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.4} />
      <div style={{ opacity: aListe }}>
        <Not t={t} bas={K(0, "scored better")} metin="Better right after 2 weeks" x={900} y={140} boyut={30} renk={RENK.gri} />
        <Liste t={t} x={900} y={210} boyut={40} aralik={80} isaret="onay" genislik={700}
          ogeler={[{ bas: tUyku, metin: "SLEEP INEFFICIENCY" }, { bas: tDep, metin: "DEPRESSION" }]} />
      </div>
      <BaslikBlok t={t} bas={tDort} satirlar={["BENEFIT", "FADED"]} x={900} y={130} boyut={110} renkler={[RENK.lacivert, RENK.mercan]} />
      <Not t={t} bas={tDort + 0.5} metin="by the 4-week follow-up" x={904} y={380} boyut={32} renk={RENK.gri} />
    </>
  );
};

export default S20;
