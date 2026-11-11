// Sahne 46 — ACP önerisi: reçeteli ilaç seçenekleri, kalça ve omurga kırıklarını azaltmak için.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, KaynakEtiketi, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), m = s.meta;
  const tBas = K(0, "osteoporosis"), tACP = K(0, "American"), tRx = K(0, "prescription");
  const tAle = K(0, "alendronate"), tRis = K(0, "risedronate"), tZol = K(0, "zoledronic"), tDen = K(0, "denosumab"), tAzalt = K(0, "reduce");
  return (
    <>
      <Kamera gorsel="tam/46" pencere={kameraYolu(t, s.sure, [0, 0, 1800], [40, 20, 1780])}>
        <Etiket t={t} bas={tRx} capa={[260, 330]} konum={[640, 200]} metin="PRESCRIPTION MEDICINE" renk={RENK.koyuYesil} />
      </Kamera>
      <BaslikBlok t={t} bas={tBas - 1.0} satirlar={["PRESCRIBED", "TREATMENT"]} x={1860} y={200} boyut={100} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={tBas - 0.6} metin={m.baslik?.not ?? ""} x={1860} y={365} hiza="sag" genislik={620} boyut={34} />
      <Liste t={t} x={1090} y={520} aralik={80} boyut={34} isaret="onay" genislik={820}
        ogeler={[
          { bas: tAle, metin: "ALENDRONATE", renk: RENK.yesil },
          { bas: tRis, metin: "RISEDRONATE", renk: RENK.yesil },
          { bas: tZol, metin: "ZOLEDRONIC ACID", renk: RENK.yesil },
          { bas: tDen, metin: "DENOSUMAB", renk: RENK.yesil },
        ]} />
      <Baslik t={t} bas={tAzalt} metin="REDUCE HIP + SPINE FRACTURES" x={1090} y={890} boyut={56} renk={RENK.koyuYesil} />
      {m.etiket && <KaynakEtiketi t={t} bas={tACP} metin={m.etiket} />}
    </>
  );
};

export default S46;
