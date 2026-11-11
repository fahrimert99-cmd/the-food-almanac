// Sahne 20 — çalışmanın sınırları: sağ panelde gerçekler listesi, altta iki karar satırı.
import React from "react";
import { Baslik, Etiket, Ikon, INTER, Kamera, Liste, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const aPanel = eout(ilerle(t, K(1, "It was") - 0.5, 0.7));
  const tReal = K(2, "shows"), tYears = K(3, "can't");
  const satir = (bas: number, y: number, ad: "onay" | "soru", renk: string, metin: string) => (
    <>
      <Ikon t={t} bas={bas} ad={ad} x={1130} y={y} boyut={80} zemin={renk} />
      <Baslik t={t} bas={bas + 0.15} metin={metin} x={1200} y={y} boyut={40} font="inter" renk={RENK.lacivert} />
    </>
  );
  return (
    <>
      <Kamera gorsel="tam/20" pencere={kameraYolu(t, s.sure, [60, 30, 1800], [0, 0, 1920])}>
        <Etiket t={t} bas={K(1, "two weeks")} capa={[700, 845]} konum={[250, 800]} metin="2 WEEKS PER DIET" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "Be")} metin="BE FAIR" x={50} y={200} boyut={92} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "limits")} metin="THE LIMITS" x={50} y={305} boyut={92} renk={RENK.mercan} />
      <Panel a={aPanel} genislik={900} />
      <Liste t={t} isaret="nokta" x={1090} y={170} aralik={120} boyut={34} genislik={780} ogeler={[
        { bas: K(1, "20"), metin: "20 ADULTS, MOSTLY YOUNGER", renk: RENK.lacivert },
        { bas: K(1, "two weeks"), metin: "2 WEEKS ON EACH DIET", renk: RENK.lacivert },
        { bas: K(1, "hospital"), metin: "HOSPITAL, MEALS PROVIDED", renk: RENK.lacivert },
      ]} />
      <div style={{ position: "absolute", left: 1090, top: 575, width: 700 * eout(ilerle(t, tReal - 0.2, 0.6)), height: 4, background: RENK.altin }} />
      {satir(tReal, 680, "onay", RENK.yesil, "EFFECT IS REAL THERE")}
      {satir(tYears, 820, "soru", RENK.altin, "WHAT ABOUT YEARS?")}
    </>
  );
};

export default S20;
