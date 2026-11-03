// Sahne 44 — mega dozlar ve görev gücünün uyarısı.
import React from "react";
import { Baslik, Etiket, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b1 = s.cumleler[1].bas - 0.1;
  return (
    <>
      <Kamera gorsel="tam/44" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [60, 60, 1780])}>
        <Etiket t={t} bas={K(0, "Mega-dose")} bitis={b1} capa={[490, 790]} konum={[300, 480]} metin="MEGA-DOSE PILLS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "ordinary")} bitis={K(1, "advises") - 0.1} capa={[1130, 740]} konum={[1590, 560]} metin="ORDINARY DOSES" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "opposite")} metin="MORE ISN'T" x={1860} y={170} boyut={104} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(0, "careful")} metin="BETTER" x={1860} y={280} boyut={104} renk={RENK.koyuYesil} hiza="sag" />
      <Not t={t} bas={K(1, "advises")} metin="TASK FORCE ADVISES AGAINST" x={1860} y={390} hiza="sag" boyut={28} renk={RENK.altin} agirlik={800} />
      <Liste t={t} isaret="carpi" x={1330} y={450} aralik={84} boyut={32} genislik={550}
        ogeler={[{ bas: K(1, "beta"), metin: "BETA CAROTENE", renk: RENK.mercan }, { bas: K(1, "vitamin"), metin: "VITAMIN E", renk: RENK.mercan }]} />
    </>
  );
};

export default S44;
