// Sahne 57 — adım 4: kinini atla; takviyeden önce eczacıya sor.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S57: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1840]);
  const tKinin = K(1, "quinine"), tSupp = K(2, "supplement"), tEcz = K(2, "pharmacist"), tKanit = K(2, "evidence"), tUyum = K(2, "fits");
  const kon: [number, number] = [1560, 420];
  return (
    <>
      <Kamera gorsel="tam/57" pencere={p} />
      <Baslik t={t} bas={0} metin="4" x={1300} y={235} boyut={150} renk={RENK.altin} />
      <BaslikBlok t={t} bas={tKinin} satirlar={["SKIP", "QUININE"]} x={1420} y={175} boyut={88}
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Etiket t={t} bas={tSupp} bitis={tEcz - 0.1} capa={[1000, 320]} konum={kon} metin="CRAMP SUPPLEMENT" renk={RENK.altin} />
      <Etiket t={t} bas={tEcz} bitis={tKanit - 0.1} capa={[1000, 320]} konum={kon} metin="ASK PHARMACIST" renk={RENK.yesil} />
      <Etiket t={t} bas={tKanit} bitis={tUyum - 0.1} capa={[800, 450]} konum={kon} metin="EVIDENCE?" renk={RENK.yesil} />
      <Etiket t={t} bas={tUyum} capa={[640, 450]} konum={kon} metin="FITS YOUR MEDICINES?" renk={RENK.yesil} />
    </>
  );
};
export default S57;
