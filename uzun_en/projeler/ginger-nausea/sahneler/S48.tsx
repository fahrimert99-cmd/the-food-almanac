// Sahne 48 — nasıl çalıştığı kanıtlanmadı: vazopresin, mide ritmi, 13 kişi
import React from "react";
import { BaslikBlok, Baslik, Etiket, Kamera, KaynakEtiketi, Liste, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tHere = K(0, "here"), tMot = K(1, "motion"), tLow = K(1, "lowered"), tCalm = K(1, "calmed"), t13 = K(2, "13");
  const tEnd1 = K(1, "ginger") - 0.2, tEnd2 = K(2, "But") - 0.2;
  return (
    <>
      <Kamera gorsel="tam/48" pencere={kameraYolu(t, s.sure, [0, 60, 1800], [70, 100, 1650])}>
        <Etiket t={t} bas={K(1, "ginger")} bitis={tEnd2} capa={[330, 520]} konum={[330, 880]} metin="GINGER" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "stomach")} bitis={tEnd2} capa={[900, 600]} konum={[950, 880]} metin="STOMACH" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={tHere} bitis={tEnd1} satirlar={["HOW IT WORKS:", "NOT PROVEN"]} x={1860} y={250} boyut={90} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <KaynakEtiketi t={t} bas={tMot} metin={s.meta.etiket!} />
      <Liste t={t} isaret="nokta" x={1180} y={330} aralik={100} boyut={36} genislik={700}
        ogeler={[
          { bas: tLow, metin: "LOWERED VASOPRESSIN", renk: RENK.altin, bitis: tEnd2 },
          { bas: tCalm, metin: "CALMED STOMACH RHYTHM", renk: RENK.yesil, bitis: tEnd2 },
        ]} />
      <VurguRozet t={t} bas={t13} vurgu="13" not="PEOPLE IN A LAB" x={1560} y={260} genislik={380} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(2, "not")} metin="NOT PROVEN" x={1860} y={640} boyut={100} hiza="sag" renk={RENK.mercan} />
    </>
  );
};
export default S48;
