// Sahne 24 — yaklaşık %70 hafif ya da hiç yükselme; kalan grup "hyper-responder" (Fernandez 2006).
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S24: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [l1, l2] = s.meta.baslik!.satirlar;
  return (
    <>
      <Kamera gorsel="tam/24" pencere={kameraYolu(t, s.sure, [0, 120, 1800], [70, 190, 1660])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={0.2} />
      <Baslik t={t} bas={K(0, "seventy")} metin={l1} x={140} y={200} boyut={112} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "mild")} metin={l2} x={140} y={320} boyut={112} renk={RENK.koyuYesil} />
      <Etiket t={t} bas={K(0, "people")} bitis={11.4} capa={[500, 730]} konum={[500, 540]} metin="MOST PEOPLE" renk={RENK.yesil} />
      <Etiket t={t} bas={K(1, "remaining")} capa={[1325, 810]} konum={[1250, 600]} metin="THE REMAINING GROUP" renk={RENK.mercan} />
      <Baslik t={t} bas={K(1, "hyper-responders")} metin="HYPER-RESPONDERS" x={1330} y={450} boyut={70} renk={RENK.mercan} hiza="orta" />
    </>
  );
};

export default S24;
