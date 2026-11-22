// Sahne 36 — hastanın yalnızca meyve suyu seçimi ve C vitamini -> oksalat.
import React from "react";
import { AdimAkisi, Etiket, Kamera, KaynakEtiketi, Liste, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const c1 = s.cumleler[1].bas - 0.1;
  const pPanel = eout(ilerle(t, 0.1, 0.6));
  return (
    <>
      <Kamera gorsel="tam/36" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={K(0, "juice-only")} capa={[920, 640]} konum={[1500, 360]} metin="POMEGRANATE JUICE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "vitamin")} capa={[1360, 640]} konum={[1560, 880]} metin="VITAMIN C" renk={RENK.altin} />
      </Kamera>
      <Panel a={pPanel} taraf="sol" genislik={780} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      <Liste t={t} isaret="nokta" boyut={34} x={90} y={250} aralik={100} genislik={640}
        ogeler={[
          { bas: K(0, "juice-only"), metin: "JUICE-ONLY DIET", renk: RENK.mercan, bitis: c1 },
          { bas: K(0, "stomach"), metin: "AFTER A STOMACH BLEED", renk: RENK.altin, bitis: c1 },
          { bas: K(0, "against"), metin: "AGAINST ADVICE", renk: RENK.lacivert, bitis: c1 },
          { bas: K(0, "semi-solid"), metin: "MOVE TO SEMI-SOLID FOOD", renk: RENK.yesil, bitis: c1 },
        ]} />
      <VurguRozet t={t} bas={K(1, "450")} vurgu="450 MG" not="vitamin C a day (estimated)" x={400} y={250} genislik={470} />
      <AdimAkisi t={t} numarali={false} boyut={30} x={400} y={560}
        adimlar={[{ bas: K(1, "turns"), metin: "VITAMIN C", renk: RENK.altin }, { bas: K(1, "oxalate."), metin: "OXALATE", renk: RENK.mercan }]} />
    </>
  );
};

export default S36;
