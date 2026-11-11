// Sahne 17 — kalan kadınlarda %29: sol panelde rozet, sonra "daha az güvenilir" uyarısı.
import React from "react";
import { BaslikBlok, Etiket, Hap, Ikon, Kamera, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBaslik = K(0, "hip fractures"), tSayi = K(0, "29 percent");
  const tHap = K(0, "pills,"), tAcik = K(1, "leaves out"), tGuv = K(1, "less reliable");
  const aPanel = eout(ilerle(t, 0.2, 0.6));
  return (
    <>
      <Kamera gorsel="tam/17" pencere={kameraYolu(t, s.sure, [20, 12, 1880], [100, 56, 1720])}>
        <Etiket t={t} bas={tHap} bitis={tAcik - 0.2} capa={[990, 770]} konum={[1130, 905]} metin="THE PILLS" renk={RENK.yesil} />
      </Kamera>
      <Panel a={aPanel} taraf="sol" genislik={640} />
      <BaslikBlok t={t} bas={tBaslik} satirlar={["HIP", "FRACTURES"]} x={64} y={190} boyut={92} />
      <VurguRozet t={t} bas={tSayi} vurgu="–29%" not="women who kept taking the pills" x={290} y={430} genislik={440} />
      <Not t={t} bas={tAcik} metin="Leaves out women who stopped" x={64} y={700} boyut={32} genislik={500} />
      <Ikon t={t} bas={tGuv} ad="uyari" x={110} y={850} boyut={80} zemin={RENK.altin} />
      <div style={{ position: "absolute", left: 176, top: 812 }}>
        <PillOpak t={t} bas={tGuv} />
      </div>
    </>
  );
};

const PillOpak: React.FC<{ t: number; bas: number }> = ({ t, bas }) => {
  const a = eout(ilerle(t, bas + 0.1, 0.4));
  return <div style={{ opacity: a, transform: `translateX(${(1 - a) * -16}px)` }}><Hap metin="LESS RELIABLE" renk={RENK.altin} boyut={30} /></div>;
};

export default S17;
