import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, eout, ilerle, kagit, kameraYolu, kelimeZamani, kis, pop } from "../kutuphane";

// Sahne 3 — doktor masası: nelere dikkat etmeli, ne zaman kan testi
const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      {/* sağ alttaki imza kalıntısı pencere dışında kalır */}
      <Kamera gorsel="tam/03" pencere={kameraYolu(t, s.sure, [90, 0, 1700], [170, 40, 1600])}>
        <Etiket t={t} bas={K(0, "watch")} capa={[1570, 455]} konum={[1190, 250]} metin="WHAT TO WATCH FOR" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "blood")} capa={[1192, 650]} konum={[1010, 430]} metin="ASK FOR A BLOOD TEST" renk={RENK.mercan} />
      </Kamera>
    </>
  );
};

export default S03;
