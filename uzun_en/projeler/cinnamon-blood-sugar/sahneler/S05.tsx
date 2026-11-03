// Sahne 5 — kabuk / çubuk / toz etiketleri, sonra "şekeri nasıl etkiler?" sorusu ve açık cevap rozeti.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S05: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBark = K(0, "bark"), tSticks = K(0, "sticks"), tPowder = K(0, "powder");
  const tSoru = K(1, "help"), tCevap = K(2, "answer");
  const bitisE = K(1, "People") - 0.1;
  const pPanel = eout(ilerle(t, tSoru - 0.3, 0.7));
  return (
    <>
      <Kamera gorsel="tam/05" pencere={kameraYolu(t, s.sure, [100, 40, 1720], [170, 90, 1580])}>
        <Etiket t={t} bas={tBark} bitis={bitisE} capa={[1330, 270]} konum={[1520, 330]} metin="DRIED BARK" renk={RENK.mercan} />
        <Etiket t={t} bas={tSticks} bitis={bitisE} capa={[430, 730]} konum={[330, 530]} metin="STICKS" renk={RENK.altin} />
        <Etiket t={t} bas={tPowder} bitis={bitisE} capa={[830, 440]} konum={[640, 240]} metin="GROUND POWDER" renk={RENK.yesil} />
      </Kamera>
      <Panel a={pPanel} taraf="sol" genislik={640} opak={0.9} />
      <BaslikBlok t={t} bas={tSoru} satirlar={["HELP THE BODY", "HANDLE SUGAR?"]} x={90} y={150} boyut={78}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <VurguRozet t={t} bas={tCevap} vurgu="?" not="IN HUMANS: STILL BEING SORTED OUT" x={310} y={420} genislik={400} renk={RENK.altin} />
    </>
  );
};

export default S05;
