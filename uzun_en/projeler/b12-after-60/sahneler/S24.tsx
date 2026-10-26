// Sahne 24 — metformin kullananlar için B12 testi önerisi: etiketler + sağda başlık.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S24: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      {/* etiketler görsel koordinatında, Kamera içinde */}
      <Kamera gorsel="tam/24" pencere={kameraYolu(t, s.sure, [0, 90, 1720], [60, 140, 1620])}>
        <Etiket t={t} bas={K(0, "routine")} bitis={K(0, "metformin") - 0.2} capa={[440, 790]} konum={[640, 520]}
          metin="ROUTINE TESTING" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "metformin")} bitis={K(1, "sensible") - 0.2} capa={[913, 690]} konum={[1150, 520]}
          metin="METFORMIN USERS" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={K(1, "sensible")} satirlar={b.satirlar} x={1860} y={330} boyut={104} hiza="sag" />
      <Not t={t} bas={K(1, "checking")} metin="Checking your B12 level" x={1860} y={590} hiza="sag" genislik={640} boyut={38} />
    </>
  );
};

export default S24;
