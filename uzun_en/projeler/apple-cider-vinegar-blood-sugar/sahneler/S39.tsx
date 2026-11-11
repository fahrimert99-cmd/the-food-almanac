// Sahne 39 — dişler: 190 çekilmiş diş, 9 asitli sıvı; sirke en büyük mineral kaybı. Bardaklardaki dişler ve şişe üzerinde.
import React from "react";
import { AltSis, Baslik, Etiket, Kamera, KaynakEtiketi, Not, kagit, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTeeth = K(0, "teeth"), t190 = K(1, "190"), tNine = K(1, "nine"), tVin = K(2, "vinegar"), tGreat = K(2, "greatest");
  return (
    <>
      <Kamera gorsel="tam/39" pencere={kameraYolu(t, s.sure, [0, 70, 1920], [50, 130, 1800])}>
        <Etiket t={t} bas={tVin} capa={[185, 580]} konum={[650, 470]} metin="VINEGAR & APPLE CIDER" renk={RENK.mercan} boyut={28} />
        {/* bardaklar arasındaki ufak fındık benzeri kusur örtülür */}
        <div style={{ position: "absolute", left: 650, top: 975, width: 100, height: 80, background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 50%, ${kagit(0)} 100%)` }} />
      </Kamera>
      <AltSis a={0.7} yukseklik={130} />
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} bas={t190 - 0.2} />}
      <Baslik t={t} bas={tTeeth} metin="TEETH" x={420} y={250} boyut={150} renk={RENK.lacivert} bitis={tVin - 0.2} />
      <VurguRozet t={t} bas={t190} vurgu="190" not="extracted human teeth" x={1160} y={150} genislik={400} />
      <VurguRozet t={t} bas={tNine} vurgu="9" not="acidic liquids" x={1560} y={150} genislik={340} renk={RENK.mercan} />
      <Not t={t} bas={tGreat} metin="Greatest mineral loss in the lab test" x={1860} y={430} hiza="sag" boyut={36} agirlik={800} genislik={900} />
    </>
  );
};

export default S39;
