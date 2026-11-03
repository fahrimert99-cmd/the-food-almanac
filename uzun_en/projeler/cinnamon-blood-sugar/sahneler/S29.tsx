// Sahne 29 — NIH: hâlâ belirsiz. Sağda panel, solda kitap + kum saati.
import React from "react";
import { AbsoluteFill, BaslikBlok, Etiket, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tNih = K(0, "National"), tUn = K(0, "unclear"), tRes = K(1, "research");
  return (
    <AbsoluteFill>
      <Kamera gorsel="tam/29" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 40, 1780])}>
        <Etiket t={t} bas={tRes} capa={[520, 640]} konum={[330, 330]} metin="RESEARCH" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "unclear") + 0.6} bitis={tRes - 0.2} capa={[960, 440]} konum={[1090, 210]} metin="UNCLEAR" renk={RENK.mercan} />
      </Kamera>
      <Panel a={eout(ilerle(t, 0.1, 0.8))} taraf="sag" genislik={780} />
      <BaslikBlok t={t} bas={tNih} satirlar={["NIH:"]} x={1240} y={300} boyut={110} renkler={[RENK.lacivert]} />
      <BaslikBlok t={t} bas={tUn} satirlar={["STILL UNCLEAR"]} x={1240} y={420} boyut={92} renkler={[RENK.koyuYesil]} />
      <Not t={t} bas={tRes} x={1240} y={540} genislik={560} boyut={34}
        metin="Research doesn't clearly support cinnamon for any health condition." />
    </AbsoluteFill>
  );
};

export default S29;
