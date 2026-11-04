// Sahne 24 — Weizmann / Korem çalışması
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S24: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tW = K(0, "Weizmann"), tLed = K(0, "led"), tKorem = K(0, "Korem"), tWith = K(0, "with"), tEran = K(0, "Eran"), tSenior = K(0, "senior");
  return (
    <>
      <Kamera gorsel="tam/24" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 40, 1760])}>
        {/* mikroskop lamındaki bozuk yazı koyu yamayla örtülü */}
        <div style={{ position: "absolute", left: 322, top: 520, width: 150, height: 50, borderRadius: 8, background: "#3F4852" }} />
        <Etiket t={t} bas={tLed} bitis={tWith - 0.2} capa={[260, 330]} konum={[700, 250]} metin="LED BY KOREM" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={tKorem} />
      <Baslik t={t} bas={tW} bitis={tLed - 0.2} metin="WEIZMANN" x={1860} y={190} boyut={110} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={tW + 0.5} bitis={tLed - 0.2} metin="INSTITUTE" x={1860} y={313} boyut={110} renk={RENK.koyuYesil} hiza="sag" />
      <Not t={t} bas={K(0, "Science")} bitis={tLed - 0.2} metin="OF SCIENCE · ISRAEL" x={1860} y={410} boyut={40} hiza="sag" genislik={700} agirlik={800} />
      <Baslik t={t} bas={tWith} metin="SENIOR AUTHORS" x={1860} y={170} boyut={72} renk={RENK.koyuYesil} hiza="sag" />
      <Liste t={t} x={1330} y={250} aralik={84} boyut={42} isaret="nokta" genislik={520} ogeler={[
        { bas: tEran, metin: "ERAN SEGAL", renk: RENK.altin },
        { bas: K(0, "Elinav") - 0.4, metin: "ERAN ELINAV", renk: RENK.altin },
      ]} />
    </>
  );
};
export default S24;
