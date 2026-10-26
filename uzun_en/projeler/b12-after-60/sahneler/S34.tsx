// Sahne 34 — Takviyesiz grupta güçlendirilmiş mısır gevreği: %12 vs %23; çalışma yalnızca bağlantı gösterir.
import React from "react";
import { AbsoluteFill, Baslik, Etiket, Kamera, Not, RENK, SP, VurguRozet, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pencere = kameraYolu(t, s.sure, [380, 230, 1220], [440, 270, 1120]);
  const tSon = K(1, "This") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/34" pencere={pencere}>
        <Etiket t={t} bas={K(0, "fortified")} bitis={tSon} capa={[1000, 640]} konum={[1000, 380]} metin="FORTIFIED CEREAL" renk={RENK.altin} />
      </Kamera>
      {/* gazete kâğıdı çizgilerini soldur */}
      <AbsoluteFill style={{ background: `linear-gradient(to bottom, ${kagit(0)} 0%, ${kagit(0)} 72%, ${kagit(0.9)} 90%)` }} />
      <Not t={t} bas={K(0, "no supplements")} bitis={tSon} metin="NO SUPPLEMENTS" x={90} y={170} boyut={30} renk={RENK.altin} agirlik={800} />
      <VurguRozet t={t} bas={K(0, "12")} bitis={tSon} vurgu="12%" not="4+ TIMES A WEEK" x={270} y={250} renk={RENK.yesil} genislik={380} />
      <VurguRozet t={t} bas={K(0, "23")} bitis={tSon} vurgu="23%" not="NONE" x={270} y={510} renk={RENK.mercan} genislik={380} />
      <Not t={t} bas={K(0, "low 12")} bitis={tSon} metin="were low in B12" x={270} y={700} hiza="orta" boyut={28} agirlik={800} />
      <Baslik t={t} bas={K(1, "only")} metin="ONLY A LINK" x={90} y={200} boyut={100} renk={RENK.lacivert} />
      <Not t={t} bas={K(1, "younger")} metin="THE STUDY ALSO INCLUDED YOUNGER ADULTS" x={90} y={290} boyut={28} agirlik={800} renk={RENK.altin} />
    </>
  );
};

export default S34;
