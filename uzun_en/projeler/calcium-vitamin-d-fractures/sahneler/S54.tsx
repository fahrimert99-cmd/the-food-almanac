// Sahne 54 — 4. adım: D vitamini hapları kemik ve düşmeler için değil.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, sol } from "../kutuphane";

const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const gec = K(2, "the"); // ikinci grup (görev gücü) başlar
  const a1 = sol(t, gec - 0.1, 0.4);
  return (
    <>
      <Kamera gorsel="tam/54" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 28, 1820])}>
        <Etiket t={t} bas={K(1, "pills")} bitis={K(2, "VITAL") + 3} capa={[1215, 650]} konum={[1520, 300]} metin="DON'T COUNT ON IT" renk={RENK.mercan} />
      </Kamera>
      <div style={{ opacity: a1 }}>
        <BaslikBlok t={t} bas={K(1, "Don't")} satirlar={["NOT FOR", "BONES OR", "FALLS"]} x={70} y={230} boyut={84}
          renkler={[RENK.lacivert, RENK.lacivert, RENK.mercan]} />
        <VurguRozet t={t} bas={K(2, "2,000")} vurgu="2,000 UNITS" not="VITAL: no fracture benefit" x={290} y={620} genislik={440} boyut={72} />
      </div>
      <BaslikBlok t={t} bas={K(2, "task")} satirlar={["TASK FORCE", "ADVISES AGAINST", "VITAMIN D", "FOR FALLS"]} x={70} y={220} boyut={66}
        adim={0.45} renkler={[RENK.lacivert, RENK.mercan, RENK.lacivert, RENK.lacivert]} />
      <Not t={t} bas={K(2, "adults")} metin="adults 65 and older, living at home" x={72} y={520} boyut={32} genislik={470} agirlik={800} />
    </>
  );
};

export default S54;
