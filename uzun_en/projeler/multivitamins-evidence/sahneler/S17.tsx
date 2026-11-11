// Sahne 17 — Grodstein alt çalışması: hafızada fark yok
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t5947 = K(1, "5,947"), t12 = K(1, "12"), tTel = K(1, "telephone"), tNo = K(1, "made no");
  return (
    <>
      <Kamera gorsel="tam/17" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 25, 1840])} />
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} />}
      <VurguRozet t={t} bas={t5947} bitis={tNo - 0.3} vurgu="5,947" not="MEN AGED 65+" x={1560} y={150} genislik={380} boyut={100} />
      <VurguRozet t={t} bas={t12} vurgu="12 YRS" not="UP TO · FOLLOW-UP" x={1560} y={390} genislik={380} boyut={84} renk={RENK.lacivert} />
      <Etiket t={t} bas={tTel} capa={[545, 255]} konum={[1090, 290]} metin="TELEPHONE TESTS" renk={RENK.altin} boyut={26} />
      <BaslikBlok t={t} bas={tNo} satirlar={s.meta.baslik!.satirlar} x={1560} y={690} boyut={92} hiza="orta"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
    </>
  );
};

export default S17;
