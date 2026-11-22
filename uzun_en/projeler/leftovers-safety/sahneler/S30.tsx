// Sahne 30 — çöp kovası + güveç kavanozu; "tatma" etiketi, sonra başlık ve "at" etiketi.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTaste = K(1, "taste"), tUnsure = K(2, "unsure,"), tThrow = K(2, "throw");
  return (
    <>
      <Kamera gorsel="tam/30" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 28, 1820])}>
        <Etiket t={t} bas={tTaste} bitis={K(2, "And") - 0.1} capa={[1100, 520]} konum={[1560, 330]} metin="NEVER TASTE" renk={RENK.mercan} boyut={34} />
        <Etiket t={t} bas={tThrow} capa={[440, 640]} konum={[380, 900]} metin="THROW IT OUT" renk={RENK.koyuYesil} boyut={32} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <BaslikBlok t={t} bas={tUnsure - 0.6} satirlar={["WHEN IN", "DOUBT, TOSS"]} x={1860} y={450} boyut={116} hiza="sag" />
    </>
  );
};

export default S30;
