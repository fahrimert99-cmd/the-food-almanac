// Sahne 16 — beslenme: neredeyse berabere; tabela sonraki bölümü gösterir.
import React from "react";
import { AbsoluteFill, BaslikBlok, Etiket, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTitle = K(0, "nutrition");
  const tFark = K(1, "one place");
  const tSon = K(1, "next chapter");
  const cizgi = eout(ilerle(t, tTitle, 0.6));
  return (
    <AbsoluteFill>
      <Kamera gorsel="tam/16" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1780])}>
        {/* sepet: tek net değişiklik */}
        <Etiket t={t} bas={tFark} bitis={tSon - 0.3} capa={[300, 440]} konum={[330, 250]} metin="ONE CLEAR CHANGE" renk={RENK.yesil} />
        {/* tabela oku: sonraki bölüm */}
        <Etiket t={t} bas={tSon} capa={[880, 245]} konum={[1330, 215]} metin="NEXT CHAPTER" renk={RENK.altin} />
      </Kamera>
      <div style={{ position: "absolute", left: 1020, top: 330, height: 6, width: 220 * cizgi, background: RENK.altin }} />
      <BaslikBlok t={t} bas={tTitle} satirlar={["NUTRITION:", "CLOSE TO A TIE"]} x={1020} y={430} boyut={110} />
    </AbsoluteFill>
  );
};

export default S16;
