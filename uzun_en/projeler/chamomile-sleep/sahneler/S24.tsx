// Sahne 24 — bölüm 5 açılışı: kitap yığını + kavanoz; sağda "12 TRIALS POOLED"
import React from "react";
import { BaslikBlok, Baslik, Etiket, Hap, Ikon, Kamera, KaynakEtiketi, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S24: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tPool = K(0, "pool"), t12 = K(1, "12"), tRand = K(1, "randomized"), tAnx = K(1, "anxiety");
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780]);
  return (
    <>
      <Kamera gorsel="tam/24" pencere={pen}>
        <Etiket t={t} bas={K(0, "trials")} bitis={tPool + 1.4} capa={[380, 560]} konum={[900, 170]} metin="SMALL TRIALS" renk={RENK.mercan} />
        <Etiket t={t} bas={tPool} bitis={K(1, "In") + 0.4} capa={[800, 640]} konum={[1180, 330]} metin="POOLED" renk={RENK.yesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={3.7} />
      <Baslik t={t} bas={K(1, "2019")} metin="2019" x={1500} y={190} boyut={70} renk={RENK.altin} hiza="orta" />
      <Not t={t} bas={K(1, "Hieu")} metin="HIEU & COLLEAGUES" x={1500} y={235} boyut={30} hiza="orta" agirlik={800} />
      <BaslikBlok t={t} bas={t12} satirlar={["12 TRIALS", "POOLED"]} x={1500} y={400} boyut={130} hiza="orta" />
      <Not t={t} bas={tRand} metin="RANDOMIZED + QUASI-RANDOMIZED" x={1500} y={630} boyut={30} hiza="orta" agirlik={800} genislik={700} />
      <div style={{ position: "absolute", left: 1500, top: 720, transform: "translateX(-50%)" }}>
        {tAnx > 0 && t >= tAnx && <Hap metin="ANXIETY + SLEEP" renk={RENK.yesil} boyut={32}
          style={{ opacity: eout(ilerle(t, tAnx, 0.4)) }} />}
      </div>
    </>
  );
};
export default S24;
