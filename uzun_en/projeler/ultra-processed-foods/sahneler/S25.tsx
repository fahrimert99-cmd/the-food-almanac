// Sahne 25 — Srour 2019 (BMJ): kohort büyüklüğü, süre, yaş ve cinsiyet dağılımı.
import React from "react";
import { Baslik, Hap, Kamera, KaynakEtiketi, Liste, Not, Panel, RENK, SP, ANTON, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tYas = K(1, "average") - 0.2;
  const pPanel = eout(ilerle(t, tYas, 0.7));
  return (
    <>
      {/* kamera sola kayar: ikinci yarıda ölçek sağ panelin altında kalır */}
      <Kamera gorsel="tam/23" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 40, 1760])} />
      <Panel a={pPanel} taraf="sag" genislik={1350} opak={1} />
      <Hap metin="FRANCE" renk={RENK.altin}
        style={{ position: "absolute", left: 70, top: 140, opacity: eout(ilerle(t, K(0, "France,"), 0.5)) * (1 - eout(ilerle(t, tYas - 0.2, 0.3))) }} />
      <Hap metin="MEDIAN FOLLOW-UP: 5 YEARS" renk={RENK.altin}
        style={{ position: "absolute", left: 70, top: 205, opacity: eout(ilerle(t, K(0, "median"), 0.5)) * (1 - eout(ilerle(t, tYas - 0.2, 0.3))) }} />
      <Baslik t={t} bas={K(0, "105,159") - 0.1} bitis={tYas - 0.2} metin="105,159" x={70} y={350} boyut={110} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "adults") - 0.05} bitis={tYas - 0.2} metin="ADULTS" x={70} y={445} boyut={86} renk={RENK.koyuYesil} />
      <Not t={t} bas={tYas + 0.1} metin="WHO TOOK PART" x={1860} y={250} hiza="sag" boyut={30} renk={RENK.altin} agirlik={800} />
      <Liste t={t} isaret="nokta" x={1130} y={330} aralik={150} boyut={44} genislik={730} ogeler={[
        { bas: K(1, "43,") - 0.2, metin: "AVERAGE AGE ≈ 43", renk: RENK.altin },
        { bas: K(1, "four") - 0.1, metin: "ABOUT 4 IN 5 WOMEN", renk: RENK.koyuYesil },
      ]} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
    </>
  );
};

export default S25;
