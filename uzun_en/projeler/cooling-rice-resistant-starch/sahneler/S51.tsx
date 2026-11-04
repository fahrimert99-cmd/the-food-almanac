// Sahne 51 — adım 4: tek porsiyon, 165 °F, tekrar tekrar ısıtma yok.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, sayac } from "../kutuphane";
import { INTER } from "../kutuphane";

const S51: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tPor = K(1, "portion"), tBuhar = K(1, "steaming"), t165 = K(1, "165"), tYok = K(2, "Do not");
  return (
    <>
      <Kamera gorsel="tam/51" pencere={kameraYolu(t, s.sure, [0, 40, 1800], [60, 110, 1620])}>
        <Etiket t={t} bas={tPor} bitis={tBuhar - 0.1} capa={[520, 540]} konum={[430, 800]} metin="ONE PORTION" renk={RENK.lacivert} />
        <Etiket t={t} bas={tBuhar} capa={[535, 400]} konum={[260, 215]} metin="STEAMING HOT" renk={RENK.mercan} />
      </Kamera>
      <Panel a={eout(ilerle(t, 0.1, 0.6))} taraf="sag" genislik={820} />
      <Baslik t={t} bas={0.0} metin="STEP 4" x={1860} y={170} boyut={64} renk={RENK.altin} hiza="sag" />
      <VurguRozet t={t} bas={t165} vurgu={`${sayac(t, t165, 165, 0.6)} °F`} not="steaming hot, once" x={1580} y={290}
        genislik={520} boyut={140} renk={RENK.mercan} />
      <Ikon t={t} bas={tYok} ad="carpi" x={1375} y={705} zemin={RENK.mercan} boyut={90} />
      {t >= tYok && (
        <div style={{ position: "absolute", left: 1445, top: 668, width: 430, opacity: eout(ilerle(t, tYok, 0.5)),
          fontFamily: INTER, fontWeight: 800, fontSize: 44, lineHeight: 1.15, color: RENK.lacivert }}>
          NO REPEATED<br />REHEATING
        </div>
      )}
    </>
  );
};
export default S51;
