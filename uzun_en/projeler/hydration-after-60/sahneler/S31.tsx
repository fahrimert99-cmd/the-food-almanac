// Sahne 31 — susuzluk rehberdir, ama yaşlılarda sessiz kalabilir: boş sandalye + bardak.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [80, 40, 1760]);
  const t1 = K(1, "that's") - 0.1;
  const [sc, al] = pop(t, K(2, "guide"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/31" pencere={p}>
        <Etiket t={t} bas={K(0, "meals,")} capa={[1480, 560]} konum={[1640, 760]} metin="AT MEALS" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={0.3} bitis={t1} metin="THE PANEL NOTED" x={1010} y={105} boyut={34} renk={RENK.altin} font="inter" agirlik={800} aralik={6} />
      <Baslik t={t} bas={K(0, "thirst")} bitis={t1} metin="THIRST" x={1010} y={205} boyut={130} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(0, "guide,")} bitis={t1} metin="IS THE GUIDE" x={1010} y={298} boyut={66} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "catch")} metin="THE CATCH" x={1010} y={205} boyut={130} renk={RENK.mercan} />
      <Baslik t={t} bas={K(1, "older")} metin="FOR OLDER ADULTS" x={1010} y={298} boyut={66} renk={RENK.lacivert} />
      <div style={{ position: "absolute", left: 1010, top: 355, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
        <Hap metin="THE GUIDE MAY RUN QUIET" renk={RENK.mercan} boyut={28} />
      </div>
    </>
  );
};

export default S31;
