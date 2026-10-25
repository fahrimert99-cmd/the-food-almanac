// Sahne 34 — karabiber (piperin): solda görsel, sağda başlık ve NCCIH notu.
import React from "react";
import { BaslikBlok, Etiket, Kamera, kameraYolu, KaynakEtiketi, Not, RENK, SP, kelimeZamani } from "../kutuphane";

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [40, 22, 1840]);
  const tPip = K(1, "adding piperine");
  return (
    <>
      <Kamera gorsel="tam/34" pencere={pen}>
        <Etiket t={t} bas={K(1, "piperine") } capa={[900, 690]} konum={[1330, 600]} metin="PIPERINE" renk={RENK.lacivert} />
      </Kamera>
      <Not t={t} bas={K(0, "several ways")} bitis={tPip - 0.1} metin="SEVERAL WAYS TO SOLVE IT" x={1200} y={230} boyut={40} genislik={640} agirlik={800} />
      <BaslikBlok t={t} bas={tPip} satirlar={s.meta.baslik?.satirlar ?? ["ADD", "BLACK PEPPER"]} x={1200} y={200} boyut={96}
        renkler={[RENK.lacivert, RENK.koyuYesil]} adim={0.4} />
      <Not t={t} bas={K(2, "raise curcumin")} metin="ONE WAY TO RAISE CURCUMIN LEVELS" x={1200} y={760} boyut={36} genislik={640} renk={RENK.koyuYesil} agirlik={800} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(2, "US National")} />
    </>
  );
};

export default S34;
