// Sahne 3 — açık buzdolabı; sağ panelde "hangi tarihler önemli".
import React from "react";
import { Baslik, Etiket, Kamera, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const p = eout(ilerle(t, 0, 0.5));
  return (
    <>
      <Kamera gorsel="tam/03" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1840])}>
        {/* jambon etiketindeki sahte yazı örtülür; süt kutusu yazısını etiket hapı kapatır */}
        <div style={{ position: "absolute", left: 785, top: 710, width: 360, height: 92, background: "#FAF8F2" }} />
        <Etiket t={t} bas={0.15} capa={[700, 300]} konum={[690, 430]} metin="MILK" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "dates")} capa={[960, 750]} konum={[1020, 600]} metin="DATE STICKER" renk={RENK.altin} />
      </Kamera>
      <Panel a={p} taraf="sag" genislik={780} />
      <Baslik t={t} bas={0.15} metin="BY THE END," x={1860} y={400} boyut={36} renk={RENK.altin} font="inter" aralik={4} hiza="sag" />
      <Baslik t={t} bas={K(0, "know")} metin="KNOW WHICH" x={1860} y={500} boyut={104} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(0, "dates")} metin="DATES MATTER" x={1860} y={620} boyut={104} renk={RENK.koyuYesil} hiza="sag" />
    </>
  );
};

export default S03;
