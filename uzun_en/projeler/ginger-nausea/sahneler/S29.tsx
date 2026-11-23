// Sahne 29 — kanıt incelmiş ama zencefil işe yaramaz değil.
import React from "react";
import { Baslik, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tUse = K(0, "useless"), tThin = K(1, "thinner"), tMay = K(2, "may"), tSafe = K(2, "safe");
  return (
    <>
      <Kamera gorsel="tam/29" pencere={kameraYolu(t, s.sure, [20, 60, 1880], [100, 100, 1720])} />
      <Baslik t={t} bas={K(0, "doesn't")} bitis={tThin - 0.2} metin="NOT USELESS" x={960} y={160} boyut={120} renk={RENK.koyuYesil} hiza="orta" />
      <Baslik t={t} bas={tThin} bitis={tMay - 0.2} metin="THINNER EVIDENCE" x={960} y={160} boyut={120} renk={RENK.lacivert} hiza="orta" />
      <Not t={t} bas={K(1, "headlines")} bitis={tMay - 0.2} metin="than the headlines suggest" x={960} y={245} hiza="orta" boyut={36} />
      <Baslik t={t} bas={tMay} bitis={tSafe - 0.2} metin="MAY HELP" x={960} y={160} boyut={120} renk={RENK.koyuYesil} hiza="orta" />
      <Not t={t} bas={K(2, "some")} bitis={tSafe - 0.2} metin="in some situations" x={960} y={245} hiza="orta" boyut={36} />
      <Ikon t={t} bas={tSafe} ad="onay" x={500} y={165} boyut={92} />
      <Baslik t={t} bas={tSafe} metin="SAFE BOTANICAL OPTION" x={960} y={165} boyut={92} renk={RENK.lacivert} hiza="orta" />
    </>
  );
};

export default S29;
