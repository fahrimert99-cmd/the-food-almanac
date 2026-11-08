// Sahne 8 — erkek hedefi için ≈8 muz; kimse denememeli; potasyum birçok besinden gelir.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, Not, Panel, RENK, SP, VurguRozet, eout, einout, ilerle, kelimeZamani, pencereAra } from "../kutuphane";

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t34 = K(0, "3,400"), tEight = K(0, "eight"), tNo = K(1, "Nobody"), tMany = K(2, "many");
  const geniş = einout(ilerle(t, tMany - 0.4, 1.3));
  const aPanel = eout(ilerle(t, 0.2, 0.6)) * (1 - geniş);
  return (
    <>
      <Kamera gorsel="tam/07" pencere={pencereAra([0, 30, 1500], [0, 20, 1920], geniş)}>
        <Etiket t={t} bas={K(2, "foods")} capa={[1150, 250]} konum={[1200, 120]} metin="ORANGES" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "foods") + 0.35} capa={[1700, 230]} konum={[1440, 140]} metin="POTATOES" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "foods") + 0.7} capa={[1700, 440]} konum={[1500, 325]} metin="TOMATOES" renk={RENK.yesil} />
      </Kamera>
      <Panel a={aPanel} taraf="sag" genislik={760} opak={0.95} />
      <VurguRozet t={t} bas={t34} bitis={tEight - 0.15} vurgu="3,400" not="mg, a man's daily target" x={1560} y={260} genislik={460} boyut={120} />
      <Baslik t={t} bas={tEight - 0.05} bitis={tMany - 0.2} metin="ABOUT" x={1860} y={230} boyut={80} renk={RENK.altin} hiza="sag" />
      <Baslik t={t} bas={tEight + 0.1} bitis={tMany - 0.2} metin="8 BANANAS" x={1860} y={330} boyut={120} renk={RENK.lacivert} hiza="sag" />
      <Not t={t} bas={tEight + 0.6} bitis={tMany - 0.2} metin={s.meta.baslik?.not ?? ""} x={1860} y={410} hiza="sag" boyut={32} genislik={620} />
      <Ikon t={t} bas={tNo} bitis={tMany - 0.2} ad="carpi" x={1360} y={640} zemin={RENK.mercan} />
      <Not t={t} bas={tNo + 0.1} bitis={tMany - 0.2} metin="Nobody should try that." x={1860} y={620} hiza="sag" boyut={40} genislik={420} agirlik={800} />
    </>
  );
};

export default S08;
