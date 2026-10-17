// Sahne 41 — çoğu kişi için güvenli, NIH'e göre 7 yıla kadar; yaygın yan etkiler.
import React from "react";
import { AltSis, Baslik, Etiket, Ikon, Kamera, Liste, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBasla = K(0, "people"), tSar = K(0, "garlic"), tGuvenli = K(0, "safe"), tNIH = K(1, "NIH"), tYan = K(2, "side");
  const yan = [["BREATH ODOR", "breath"], ["BODY ODOR", "body"], ["STOMACH PAIN", "stomach"], ["GAS", "gas"], ["NAUSEA", "nausea"]];
  return (
    <>
      <Kamera gorsel="tam/41" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])}>
        <Etiket t={t} bas={tSar} bitis={tNIH} capa={[760, 520]} konum={[290, 400]} metin="GARLIC" renk={RENK.yesil} />
      </Kamera>
      <AltSis a={0.7} />
      <Baslik t={t} bas={tBasla} bitis={tYan - 0.2} metin="SAFE BY MOUTH" x={90} y={130} boyut={90} renk={RENK.koyuYesil} />
      <Ikon t={t} bas={tGuvenli} bitis={tYan - 0.2} ad="onay" x={760} y={125} boyut={84} />
      <VurguRozet t={t} bas={tNIH} bitis={tYan - 0.2} vurgu="UP TO 7 YEARS" not="used safely · NIH" x={1690} y={150} boyut={60} genislik={360} />
      <Baslik t={t} bas={tYan} metin="SIDE EFFECTS" x={1850} y={125} boyut={62} hiza="sag" renk={RENK.lacivert} />
      <Liste t={t} isaret="nokta" x={1540} y={210} aralik={80} boyut={30} genislik={340}
        ogeler={yan.map(([m, k]) => ({ bas: K(2, k), metin: m, renk: RENK.altin }))} />
    </>
  );
};
export default S41;
