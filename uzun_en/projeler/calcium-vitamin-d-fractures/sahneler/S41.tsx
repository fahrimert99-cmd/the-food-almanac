// Sahne 41 — kalp ve kalsiyum kavanozu; 2011 yeniden analiz, ≈24% bağlantısı.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Liste, Not, RENK, SP, kameraYolu, kelimeZamani, VurguRozet } from "../kutuphane";

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), m = s.meta;
  const tKalp = K(0, "heart"), tYeni = K(1, "re-examined"), tHavuz = K(1, "pooled"), tYil = K(1, "2011");
  const tBulgu = K(2, "found"), t24 = K(2, "24"), tCa = K(2, "calcium");
  const bit = tBulgu - 0.1;
  return (
    <>
      <Kamera gorsel="tam/41" pencere={kameraYolu(t, s.sure, [0, 60, 1800], [80, 90, 1680])}>
        <Etiket t={t} bas={tKalp + 0.2} bitis={bit} capa={[440, 470]} konum={[400, 230]} metin="THE HEART" renk={RENK.mercan} />
        <Etiket t={t} bas={tCa} capa={[800, 470]} konum={[1450, 700]} metin="CALCIUM SUPPLEMENTS" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={tKalp} bitis={bit} satirlar={["HEART", "ATTACKS?"]} x={1860} y={240} boyut={110} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Not t={t} bas={tKalp + 1.0} bitis={bit} metin={m.baslik?.not ?? ""} x={1860} y={440} hiza="sag" genislik={620} boyut={34} />
      <Liste t={t} x={1010} y={640} aralik={80} boyut={32} genislik={860}
        ogeler={[
          { bas: tYeni, metin: "WOMEN'S HEALTH INITIATIVE DATA", renk: RENK.lacivert, bitis: bit },
          { bas: tHavuz, metin: "+ OTHER POOLED TRIALS", renk: RENK.lacivert, bitis: bit },
        ]} />
      <VurguRozet t={t} bas={t24} vurgu="≈ 24%" not="more heart attacks, linked with calcium supplements" x={1500} y={290}
        genislik={560} boyut={140} renk={RENK.mercan} />
      {m.etiket && <KaynakEtiketi t={t} bas={tYil} metin={m.etiket} />}
    </>
  );
};

export default S41;
