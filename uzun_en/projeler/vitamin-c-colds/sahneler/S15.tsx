// Sahne 15 — risk oranı 1 = fark yok; 0.97 çok yakın; 0.5 = yarıya inme.
import React from "react";
import { Etiket, Kamera, VurguRozet, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kam = kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780]);
  const t1 = K(0, "one"), t097 = K(1, "zero"), t05 = K(2, "zero");
  return (
    <>
      <Kamera gorsel="tam/15" pencere={kam}>
        <Etiket t={t} bas={K(0, "no difference")} bitis={t097} capa={[960, 280]} konum={[1300, 120]} metin="NO DIFFERENCE" renk={RENK.altin} />
      </Kamera>
      <VurguRozet t={t} bas={t1} vurgu="1" not="NO DIFFERENCE" x={290} y={170} genislik={340} boyut={96} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={t097} vurgu="0.97" not="VERY CLOSE TO 1" x={1630} y={170} genislik={380} boyut={96} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={t05} vurgu="0.5" not="RISK CUT IN HALF" x={290} y={730} genislik={340} boyut={96} renk={RENK.mercan} />
    </>
  );
};

export default S15;
