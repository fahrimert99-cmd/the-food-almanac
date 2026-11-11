// Sahne 21 — ham bal –19, yonca balı –33 (mg/dL, açlık glukozu). Üstte boş kâğıtta başlık + rozet; altta nesneler.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const m = s.meta;
  const tYonca = K(1, "clover honey");
  return (
    <>
      <Kamera gorsel="tam/21" pencere={kameraYolu(t, s.sure, [0, 120, 1900], [70, 150, 1760])}>
        <Etiket t={t} bas={K(0, "fasting glucose")} capa={[1480, 860]} konum={[1330, 560]} metin="FASTING GLUCOSE" renk={RENK.mercan} boyut={26} />
      </Kamera>
      {m.etiket && <KaynakEtiketi t={t} metin={m.etiket} />}
      <Baslik t={t} bas={K(0, "raw honey")} bitis={tYonca - 0.5} metin="RAW HONEY" x={80} y={230} boyut={120} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={K(0, "19")} bitis={tYonca - 0.5} vurgu="–19" not="mg/dL fasting glucose" x={1120} y={150} genislik={460} boyut={120} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tYonca} metin="CLOVER HONEY" x={80} y={230} boyut={120} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={K(1, "33")} vurgu="–33" not="mg/dL fasting glucose" x={1120} y={150} genislik={460} boyut={120} renk={RENK.koyuYesil} />
    </>
  );
};

export default S21;
