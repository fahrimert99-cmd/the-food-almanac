// Sahne 49 — doğru tanı: tüp rafı, steteskop, klip tahta.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Hap, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kam = kameraYolu(t, s.sure, [0, 40, 1920], [40, 80, 1780]);
  const tAn = K(2, "anemia");
  const a = eout(ilerle(t, tAn, 0.5));
  return (
    <>
      <Kamera gorsel="tam/49" pencere={kam}>
        <Etiket t={t} bas={K(0, "diagnosis")} bitis={K(1, "Many") - 0.2} capa={[1150, 640]} konum={[1500, 880]} metin="DIAGNOSIS" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "blood tests")} capa={[500, 330]} konum={[880, 150]} metin="BLOOD TESTS" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={K(1, "don't know")} satirlar={["UNDIAGNOSED", "IS COMMON"]} x={1860} y={150} boyut={92} hiza="sag" />
      {a > 0 && (
        <div style={{ position: "absolute", right: 60, top: 520, opacity: a, transform: `translateY(${(1 - a) * 12}px)` }}>
          <Hap metin="RELATED PROBLEMS: ANEMIA" renk={RENK.mercan} boyut={30} />
        </div>
      )}
    </>
  );
};
export default S49;
