// Sahne 56 — kalıntı: organik daha az, ama USDA'da %99+ sınırın altında (büyüteç).
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S56: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOrg = K(0, "Organic"), tRes = K(0, "detectable"), t30 = K(0, "30 percent");
  const tUsda = K(1, "USDA"), t99 = K(1, "99 percent"), tLim = K(1, "legal");
  return (
    <>
      <Kamera gorsel="tam/56" pencere={kameraYolu(t, s.sure, [180, 60, 1700], [330, 110, 1480])}>
        <></>
      </Kamera>
      <Baslik t={t} bas={tOrg} bitis={tUsda - 0.2} metin="ORGANIC" x={70} y={130} boyut={110} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tOrg + 0.3} bitis={tUsda - 0.2} metin="FEWER RESIDUES" x={74} y={240} boyut={48} renk={RENK.lacivert} />
      <Etiket t={t} bas={tRes} bitis={tUsda - 0.2} capa={[930, 500]} konum={[330, 860]} metin="DETECTABLE RESIDUES" renk={RENK.mercan} />
      <VurguRozet t={t} bas={t30} bitis={tUsda - 0.2} vurgu="–30%" not="STANFORD REVIEW" x={330} y={400} genislik={380} renk={RENK.yesil} />
      <KaynakEtiketi t={t} bas={tUsda} metin="USDA TESTING" />
      <VurguRozet t={t} bas={t99} vurgu=">99%" not="OF SAMPLES" x={330} y={400} genislik={380} renk={RENK.altin} />
      <Etiket t={t} bas={tLim} capa={[1500, 380]} konum={[1500, 180]} metin="AT OR BELOW LEGAL LIMITS" renk={RENK.lacivert} />
    </>
  );
};

export default S56;
