// Sahne 41 — yemek borusu: solda şişe/bardak, sağda kâğıt panel (iç çemberdeki anatomi çizimini örter), vaka bilgisi.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Ikon, Kamera, RENK, SP, VurguRozet, eout, ilerle, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tThroat = K(0, "throat"), tUndil = K(1, "undiluted"), tReport = K(2, "case report"), tAge = K(2, "15-year-old");
  const tDil = K(2, "dilution"), tUlcer = K(2, "ulcers"), tRec = K(3, "recovered");
  const [sK, aK] = pop(t, tReport, 0.5);
  return (
    <>
      <Kamera gorsel="tam/41" pencere={kameraYolu(t, s.sure, [10, 20, 1900], [90, 50, 1720])}>
        <Etiket t={t} bas={tUndil - 0.1} bitis={tDil - 0.3} capa={[370, 430]} konum={[800, 250]} metin="UNDILUTED" renk={RENK.mercan} boyut={30} />
        <Etiket t={t} bas={tDil - 0.5} capa={[640, 790]} konum={[900, 760]} metin="DILUTION" renk={RENK.yesil} boyut={28} />
      </Kamera>
      <div style={{ position: "absolute", left: 1030, top: 0, bottom: 0, right: 0,
        background: `linear-gradient(to right, ${kagit(0)} 0px, ${kagit(1)} 100px, ${kagit(1)} 100%)` }} />
      <Baslik t={t} bas={tThroat} bitis={tDil - 0.15} metin="THE THROAT" x={1140} y={210} boyut={104} renk={RENK.lacivert} />
      <BaslikBlok t={t} bas={tDil} satirlar={["DILUTE", "IT"]} x={1140} y={190} boyut={104} />
      <VurguRozet t={t} bas={tAge} vurgu="AGE 15" not="daily vinegar drink" x={1400} y={420} genislik={400} renk={RENK.altin} />
      <div style={{ position: "absolute", left: 1140, top: 640, opacity: aK, transform: `scale(${sK})`, transformOrigin: "0 50%" }}>
        <Hap metin="CHANG ET AL. · CLIN ENDOSC · 2020" renk={RENK.altin} boyut={24} />
      </div>
      <div style={{ position: "absolute", left: 1140, top: 730, opacity: eout(ilerle(t, tUlcer, 0.4)) }}>
        <Hap metin="ULCERS ALONG ESOPHAGUS" renk={RENK.mercan} boyut={28} />
      </div>
      <div style={{ position: "absolute", left: 1140, top: 820, opacity: eout(ilerle(t, tRec, 0.4)) }}>
        <Hap metin="RECOVERED WITH TREATMENT" renk={RENK.yesil} boyut={28} />
      </div>
      <Ikon t={t} bas={tRec} ad="onay" x={1760} y={852} boyut={70} zemin={RENK.yesil} />
    </>
  );
};

export default S41;
