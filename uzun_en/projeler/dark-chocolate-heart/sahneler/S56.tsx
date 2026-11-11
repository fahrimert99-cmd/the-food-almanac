// Sahne 56 — işleme, ağır metaller ve etiket okuma (raf + elde çikolata).
import React from "react";
import { Baslik, Etiket, Kamera, Liste, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S56: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tIsl = K(0, "Processing"), tStrip = K(0, "strip"), tLead = K(0, "lead");
  const tRead = K(1, "read"), tPick = K(1, "pick"), tPort = K(1, "portions");
  const gec = tRead - 0.15; // ilk grup soluyor
  const pPanel = eout(ilerle(t, 0.1, 0.6));
  return (
    <>
      <Kamera gorsel="tam/56" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 22, 1840])} />
      <Panel a={pPanel} taraf="sag" genislik={700} />
      <Baslik t={t} bas={tIsl} bitis={gec} metin="PROCESSING" x={1860} y={190} boyut={92} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={tStrip} bitis={gec} metin="can strip away most flavanols" x={1860} y={265} hiza="sag" genislik={430} boyut={36} />
      <Etiket t={t} bas={tLead} bitis={gec} capa={[1150, 650]} konum={[1640, 520]} metin="LEAD + CADMIUM" renk={RENK.mercan} />
      <Liste t={t} isaret="onay" boyut={30} x={1470} y={190} aralik={92} genislik={420} ogeler={[
        { bas: tRead, metin: "READ THE LABEL" },
        { bas: tPick, metin: "PICK CAREFULLY" },
        { bas: tPort, metin: "SMALL PORTIONS", renk: RENK.altin },
      ]} />
    </>
  );
};

export default S56;
