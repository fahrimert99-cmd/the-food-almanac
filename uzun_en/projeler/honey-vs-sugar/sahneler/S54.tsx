// Sahne 54 — Ham / tek çiçek ballar daha iyi görünüyor ama az sayıda küçük çalışma; yaşlı diyabetliler bilinmiyor.
import React from "react";
import { BaslikBlok, Baslik, Etiket, Kamera, Panel, RENK, SP, VurguRozet, eout, ilerle, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tRaw = K(0, "raw"), tSingle = K(0, "single-flower"), tSmall = K(0, "small"), t41 = K(0, "41"), tOlder = K(1, "older"), tNot = K(1, "not known");
  const b = tOlder - 0.25;
  const pPanel = eout(ilerle(t, tOlder - 0.3, 0.7));
  return (
    <>
      <Kamera gorsel="tam/54" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1800])}>
        {/* alttaki bozuk yazıyı kâğıt rengiyle örter */}
        <div style={{ position: "absolute", left: 820, top: 985, width: 370, height: 95,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 60%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={tRaw} bitis={b} capa={[800, 450]} konum={[1130, 150]} metin="RAW HONEY" renk={RENK.altin} />
        <Etiket t={t} bas={tSingle} bitis={b} capa={[430, 250]} konum={[400, 90]} metin="SINGLE-FLOWER" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={tSmall} bitis={b} capa={[1200, 790]} konum={[1640, 880]} metin="SMALL TRIALS" renk={RENK.lacivert} />
      </Kamera>
      <VurguRozet t={t} bas={t41} bitis={b} vurgu="41" not="MEDIAN AGE" x={1700} y={520} genislik={320} renk={RENK.altin} />
      <Panel a={pPanel} taraf="sag" genislik={760} />
      <BaslikBlok t={t} bas={tOlder} satirlar={["OLDER ADULTS", "WITH DIABETES"]} x={1250} y={300} boyut={78}
        renkler={[RENK.lacivert, RENK.lacivert]} />
      <Baslik t={t} bas={tNot} metin="NOT KNOWN" x={1250} y={520} boyut={118} renk={RENK.mercan} />
    </>
  );
};

export default S54;
