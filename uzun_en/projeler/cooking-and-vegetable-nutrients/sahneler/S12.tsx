// Sahne 12 — kuru ağırlık: terazi + iki rozet (C vitamini, folat), sonra karotenoidler ve hücre kesiti.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const bitisKayip = c[1].bas - 0.1;
  const [sc, al] = pop(t, K(0, "dry weight") - 0.2, 0.5);
  const tCar = K(1, "Carotenoids");
  return (
    <>
      <Kamera gorsel="tam/12" pencere={kameraYolu(t, s.sure, [0, 0, 1900], [20, 30, 1790])}>
        {/* terazi tabanındaki bozuk yazıyı örten etiket */}
        <div style={{ position: "absolute", left: 785, top: 887, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
          <Hap metin="DRY WEIGHT" renk={RENK.altin} boyut={26} />
        </div>
        <Etiket t={t} bas={K(1, "easier") - 0.1} capa={[1580, 215]} konum={[1500, 128]} metin="EASIER TO EXTRACT" renk={RENK.mercan} boyut={24} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <VurguRozet t={t} bas={K(0, "44 percent") - 0.1} bitis={bitisKayip} vurgu="–44%" not="VITAMIN C" x={1440} y={760} genislik={270} boyut={84} renk={RENK.mercan} />
      <VurguRozet t={t} bas={K(0, "65 percent") - 0.1} bitis={bitisKayip} vurgu="–65%" not="FOLATE" x={1735} y={760} genislik={270} boyut={84} renk={RENK.mercan} />
      <Baslik t={t} bas={tCar - 0.1} metin="CAROTENOIDS" x={1840} y={790} boyut={70} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "better") - 0.1} metin="LOOKED BETTER" x={1840} y={880} boyut={58} hiza="sag" renk={RENK.koyuYesil} />
    </>
  );
};

export default S12;
