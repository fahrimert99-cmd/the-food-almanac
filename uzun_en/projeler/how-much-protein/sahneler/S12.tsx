// Sahne 12 — RDA: 0,8 g/kg. Sağ panelde başlık, rozet ve üç maddelik liste; teraziyi tavuk işaretler.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Liste, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tProt = K(0, "protein"), t08 = K(0, "0.8");
  return (
    <>
      <Kamera gorsel="tam/12" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 70, 1700])}>
        {/* tavuk, teraziin sol kefesinde */}
        <Etiket t={t} bas={tProt} bitis={t08 + 0.6} capa={[270, 650]} konum={[360, 900]} metin="PROTEIN" renk={RENK.yesil} />
      </Kamera>
      <Panel a={eout(ilerle(t, 0.15, 0.6))} taraf="sag" genislik={1000} />
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} />}
      <BaslikBlok t={t} bas={K(0, "Recommended") + 0.05} satirlar={b.satirlar} x={1860} y={200} boyut={124} hiza="sag" renkler={[RENK.koyuYesil]} />
      <VurguRozet t={t} bas={t08} vurgu={b.vurgu!} not={b.not} x={1560} y={330} genislik={460} boyut={120} />
      <Liste t={t} x={1180} y={640} aralik={88} boyut={36} isaret="onay" genislik={690} ogeler={[
        { bas: K(1, "National Academies"), metin: "SET BY NATIONAL ACADEMIES" },
        { bas: K(1, "all adults"), metin: "ALL ADULTS" },
        { bas: K(1, "over 65"), metin: "OVER 65 INCLUDED" },
      ]} />
    </>
  );
};

export default S12;
