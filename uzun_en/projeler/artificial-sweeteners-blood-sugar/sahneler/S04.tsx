// Sahne 4 — kanal tanıtımı, sonra "tatlandırıcılar nedir".
import React from "react";
import { Baslik, Etiket, Kamera, MARKA, Panel, RENK, SP, kagit, eout, ilerle, kameraYolu, kelimeZamani, sol } from "../kutuphane";

const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  // kanal adı MARKA'dan: "THE FOOD" / "ALMANAC"
  const w = MARKA.filigran.split(" ");
  const marka = [w.slice(0, -1).join(" "), w[w.length - 1]];
  const cikis = K(1, "start") - 0.1;
  const aPanel = eout(ilerle(t, 0.1, 0.5)) * sol(t, cikis, 0.5);
  return (
    <>
      <Kamera gorsel="tam/04" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800])}>
        <Etiket t={t} bas={K(1, "sweeteners")} capa={[540, 485]} konum={[300, 330]} metin="SWEETENER PACKETS" renk={RENK.altin} />
      </Kamera>
      <Panel a={aPanel} taraf="sol" genislik={760} />
      <Baslik t={t} bas={K(0, "food") - 0.4} bitis={cikis} metin={marka[0]} x={70} y={400} boyut={120} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "almanac") - 0.2} bitis={cikis} metin={marka[1]} x={70} y={520} boyut={120} renk={RENK.koyuYesil} />
      {/* alt kısım yumuşakça örtülür: ayak ve zemin üstünde okunur başlık */}
      <div style={{ position: "absolute", left: 0, right: 0, top: 690, height: 270, opacity: eout(ilerle(t, K(1, "what") - 0.2, 0.6)),
        background: `linear-gradient(to bottom, ${kagit(0)} 0%, ${kagit(0.94)} 40%, ${kagit(0.96)} 100%)` }} />
      <Baslik t={t} bas={K(1, "what")} metin="WHAT THEY" x={960} y={790} boyut={78} hiza="orta" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "actually")} metin="ACTUALLY ARE" x={960} y={880} boyut={78} hiza="orta" renk={RENK.koyuYesil} />
    </>
  );
};

export default S04;
