// Sahne 4 — soru: gerçek etki mi, mutfak efsanesi mi?
import React from "react";
import { Baslik, Kamera, Not, Panel, RENK, SP, AltSis, eout, ilerle, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pPanel = eout(ilerle(t, 0.2, 0.7));
  const tSon = K(1, "Let's see");
  return (
    <>
      <Kamera gorsel="tam/04" pencere={kameraYolu(t, s.sure, [400, 170, 1400], [440, 190, 1340])}>
        {/* sol üstteki karalama kâğıt rengiyle örtülür */}
        <div style={{ position: "absolute", left: 420, top: 20, width: 340, height: 220,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 60%, ${kagit(0)} 100%)` }} />
      </Kamera>
      <AltSis a={1} />
      <Panel a={pPanel} taraf="sag" genislik={760} />
      <Baslik t={t} bas={K(0, "lower blood")} bitis={tSon} metin="REAL EFFECT?" x={1860} y={290} boyut={100} hiza="sag" renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(0, "kitchen")} bitis={tSon} metin="KITCHEN LEGEND?" x={1860} y={410} boyut={100} hiza="sag" renk={RENK.mercan} />
      <Baslik t={t} bas={tSon} metin="LET'S SEE" x={1860} y={290} boyut={100} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={tSon + 0.2} metin="THE TRIALS" x={1860} y={410} boyut={100} hiza="sag" renk={RENK.altin} />
      <Not t={t} bas={tSon + 0.5} metin="what the trials found" x={1860} y={540} hiza="sag" boyut={34} />
    </>
  );
};

export default S04;
