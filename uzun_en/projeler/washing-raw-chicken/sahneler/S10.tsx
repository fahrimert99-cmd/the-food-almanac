// Sahne 10 — Sağlık kurumları yıkamaya karşı; USDA 2019 açıklaması.
import React from "react";
import { Baslik, BaslikBlok, Ikon, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S10: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBest = K(1, "best");
  return (
    <>
      <Kamera gorsel="tam/10" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780])} />
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} />}
      <BaslikBlok t={t} bas={K(0, "Health")} bitis={3.2} satirlar={["HEALTH AGENCIES", "PUSH BACK"]} x={830} y={150} boyut={66}
        renkler={[RENK.lacivert, RENK.mercan]} />
      <VurguRozet t={t} bas={K(1, "2019,")} bitis={tBest - 0.3} vurgu="2019" not="USDA OFFICIAL" x={1030} y={90} genislik={360} boyut={90} />
      <Baslik t={t} bas={tBest} metin="BEST PRACTICE:" x={830} y={150} boyut={66} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "not")} metin="NOT TO WASH" x={830} y={225} boyut={66} renk={RENK.mercan} />
      <Ikon t={t} bas={K(1, "wash")} ad="carpi" x={990} y={450} boyut={110} zemin={RENK.mercan} />
    </>
  );
};

export default S10;
