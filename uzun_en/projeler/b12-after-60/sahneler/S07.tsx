// Sahne 7 — yavaş birikir: dolap solda, sağda başlık, kaynak ve rozet.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, RENK, SP, VurguRozet, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1800]);
  return (
    <>
      <Kamera gorsel="tam/07" pencere={p}>
        <Etiket t={t} bas={K(0, "reserve")} bitis={K(1, "National") - 0.1} capa={[480, 593]} konum={[1000, 640]} metin="LARGE RESERVE" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "shortage")} satirlar={["SLOW TO", "SHOW UP"]} x={1380} y={200} boyut={116} hiza="orta"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Baslik t={t} bas={K(1, "National")} metin="NATIONAL INSTITUTES OF HEALTH" x={1380} y={450} boyut={30} hiza="orta" font="inter" agirlik={800} aralik={4} renk={RENK.altin} />
      <VurguRozet t={t} bas={K(1, "several")} vurgu="SEVERAL YEARS" not="FOR SYMPTOMS TO APPEAR" x={1380} y={520} genislik={640} boyut={84} renk={RENK.mercan} />
    </>
  );
};

export default S07;
