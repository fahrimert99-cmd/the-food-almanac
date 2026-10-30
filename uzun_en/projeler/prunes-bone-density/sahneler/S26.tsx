// Sahne 26 — Wallace 2017 incelemesi: 24 çalışma, iki hücre türü
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kam = kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1840]);
  const tPrunes = K(1, "Prunes");
  return (
    <>
      <Kamera gorsel="tam/26" pencere={kam}>
        {/* büyüteç camı ve kâsedeki kuru erik */}
        <Etiket t={t} bas={K(0, "reviewed")} bitis={tPrunes - 0.2} capa={[773, 533]} konum={[250, 290]} metin="WALLACE'S REVIEW" renk={RENK.altin} boyut={26} />
        <Etiket t={t} bas={tPrunes} capa={[980, 215]} konum={[1590, 170]} metin="PRUNES + EXTRACTS" renk={RENK.koyuYesil} boyut={26} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      <VurguRozet t={t} bas={K(0, "24") - 0.05} bitis={tPrunes - 0.2} vurgu="24" not="cell, animal and human studies" x={1700} y={300} genislik={340} />
      <Baslik t={t} bas={K(1, "both")} metin="BOTH KINDS" x={60} y={250} boyut={56} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "both") + 0.18} metin="OF BONE CELLS" x={60} y={316} boyut={56} renk={RENK.koyuYesil} />
    </>
  );
};

export default S26;
