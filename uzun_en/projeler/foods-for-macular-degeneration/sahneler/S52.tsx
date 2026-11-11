// Sahne 52 — Kanıt sınırları: gözlem / AREDS / eksik deney, üç vuruş.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S52: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tHar = K(0, "Harvard"), tLink = K(0, "links"), tAre = K(1, "AREDS"), tPil = K(1, "pills");
  const tTrial = K(2, "randomized"), tNo = K(2, "hasn't"), tSp = K(2, "spinach");
  return (
    <>
      <Kamera gorsel="tam/52" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 50, 1780])}>
        <Etiket t={t} bas={tHar} bitis={tAre - 0.2} capa={[420, 620]} konum={[420, 340]} metin="HARVARD STUDIES" renk={RENK.altin} />
        <Etiket t={t} bas={tSp} capa={[1360, 540]} konum={[1560, 330]} metin="SPINACH" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={tLink} bitis={tAre - 0.2} metin="LINKS, NOT CAUSE" x={100} y={170} boyut={92} renk={RENK.lacivert} />
      <Baslik t={t} bas={tAre} bitis={tTrial - 0.2} metin="AREDS TRIALS" x={1250} y={170} boyut={80} renk={RENK.koyuYesil} />
      <Not t={t} bas={tPil} bitis={tTrial - 0.2} metin="Pills tested in people at risk" x={1250} y={240} genislik={560} boyut={32} />
      <Baslik t={t} bas={tNo} metin="NO LONG TRIAL YET" x={100} y={170} boyut={92} renk={RENK.mercan} />
      <Not t={t} bas={tNo + 0.4} metin="of adding spinach or eggs to meals" x={100} y={240} genislik={760} boyut={34} />
    </>
  );
};

export default S52;
