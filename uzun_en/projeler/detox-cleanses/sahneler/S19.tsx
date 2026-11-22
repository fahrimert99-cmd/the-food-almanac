// Sahne 19 — NIH bilgi notu: az sayıda düşük kaliteli insan çalışması, uzun vadeli çalışma yok.
import React from "react";
import { Etiket, Kamera, KaynakEtiketi, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/19" pencere={kameraYolu(t, s.sure, [100, 60, 1700], [160, 100, 1560])}>
        <Etiket t={t} bas={K(0, "few human")} bitis={4.2} capa={[400, 760]} konum={[420, 350]} metin="FEW HUMAN STUDIES" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "low quality")} capa={[560, 800]} konum={[470, 330]} metin="LOW QUALITY" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "long-term")} capa={[1230, 520]} konum={[1330, 330]} metin="NO LONG-TERM STUDIES" renk={RENK.koyuYesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={K(0, "NIH's")} />
    </>
  );
};

export default S19;
