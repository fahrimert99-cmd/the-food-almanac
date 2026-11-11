// Sahne 14 — ambalajı okumak: paketteki tek kontrol "probiotic" kelimesinden önemli.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tPack = K(0, "package");
  const tCheck = K(1, "one check");
  const tOn = K(1, "on the pack");
  const tMore = K(1, "matters more");
  const tWord = K(1, "probiotic.");
  const pPanel = eout(ilerle(t, tCheck - 0.4, 0.6));
  const [sc, al] = pop(t, tWord, 0.5);
  return (
    <>
      <Kamera gorsel="tam/14" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [110, 60, 1700])}>
        <Etiket t={t} bas={tPack} bitis={tCheck - 0.2} capa={[960, 520]} konum={[1330, 640]} metin="THE PACKAGE" renk={RENK.altin} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={820} opak={0.97} />
      <Baslik t={t} bas={tCheck} metin="ONE CHECK" x={1860} y={340} boyut={118} renk={RENK.koyuYesil} hiza="sag" />
      <Baslik t={t} bas={tOn} metin="ON THE PACK" x={1860} y={470} boyut={80} renk={RENK.lacivert} hiza="sag" />
      <Not t={t} bas={tMore} metin="matters more than the word" x={1860} y={580} hiza="sag" boyut={36} />
      <div style={{ position: "absolute", right: 60, top: 690, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: al }}>
        <Hap metin="PROBIOTIC" renk={RENK.gri} boyut={44} />
      </div>
    </>
  );
};

export default S14;
