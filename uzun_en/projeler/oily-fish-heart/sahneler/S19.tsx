// Sahne 19 — ASCEND: 15.480 diyabetli yetişkin; olay oranı 8,9% ve 9,2%.
import React from "react";
import { AltSis, Baslik, CubukGrafik, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const B = { satirlar: [] as string[], vurgu: "", not: "", ...(s.meta.baslik ?? {}) };
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [0, 40, 1740]);
  const tGraf = K(1, "8.9");
  return (
    <>
      <Kamera gorsel="tam/19" pencere={p} />
      <AltSis a={0.4} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(0, "second")} />
      <Baslik t={t} bas={K(0, "ASCEND,")} metin={B.satirlar[0]} x={1330} y={190} boyut={130} renk={RENK.koyuYesil} />
      <Etiket t={t} bas={K(0, "one gram")} capa={[780, 700]} konum={[800, 880]} metin="1 GRAM A DAY" renk={RENK.altin} />
      <Etiket t={t} bas={K(0, "diabetes.")} capa={[300, 430]} konum={[330, 190]} metin="DIABETES" renk={RENK.mercan} />
      <VurguRozet t={t} bas={K(0, "15,480")} vurgu={B.vurgu} not="adults with diabetes" x={1560} y={330} genislik={420}
        renk={RENK.altin} bitis={K(1, "Over") - 0.1} />
      <Not t={t} bas={K(1, "serious")} metin="SERIOUS VASCULAR EVENTS" x={1330} y={330} boyut={30} agirlik={800} genislik={540} />
      <Not t={t} bas={K(1, "seven")} metin="over about 7½ years" x={1330} y={375} boyut={26} renk={RENK.gri} genislik={540} />
      <CubukGrafik t={t} bas={tGraf} x={1330} y={560} w={500} h={260} maks={11}
        cubuklar={[
          { etiket: "OMEGA-3", deger: 8.9, metin: "8.9%", renk: RENK.altin, bas: K(1, "8.9") - 0.05 },
          { etiket: "PLACEBO", deger: 9.2, metin: "9.2%", renk: RENK.gri, bas: K(1, "9.2") - 0.05 },
        ]} />
    </>
  );
};

export default S19;
