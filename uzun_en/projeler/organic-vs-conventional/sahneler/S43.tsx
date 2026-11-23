// Sahne 43 — liste rezidü rehberidir; sağlık etkisi test edilmedi.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tNobody = K(0, "nobody"), tList = K(0, "list"), tHealth = K(0, "changes anyone's health");
  const tGuide = K(1, "guide"), tAll = K(1, "that's all");
  const pPanel = eout(ilerle(t, 0.1, 0.8));
  return (
    <>
      <Kamera gorsel="tam/43" pencere={kameraYolu(t, s.sure, [140, 0, 1700], [190, 20, 1620])}>
        <Etiket t={t} bas={tList} bitis={tAll} capa={[1000, 330]} konum={[1500, 250]} metin="THE LIST" renk={RENK.altin} />
        <Etiket t={t} bas={tGuide} capa={[1000, 800]} konum={[1500, 790]} metin="A GUIDE TO RESIDUE" renk={RENK.yesil} />
      </Kamera>
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 780, opacity: pPanel,
        background: "linear-gradient(to right, rgba(246,243,236,1) 0%, rgba(246,243,236,0.96) 62%, rgba(246,243,236,0) 100%)" }} />
      <Baslik t={t} bas={tNobody} bitis={tGuide - 0.2} metin="NOT TESTED" x={70} y={330} boyut={120} renk={RENK.mercan} />
      <Not t={t} bas={tHealth} bitis={tGuide - 0.2} x={74} y={430} boyut={34} agirlik={800} genislik={560}
        metin="Does following the list change anyone's health?" />
      <Baslik t={t} bas={tGuide - 0.1} metin="A GUIDE" x={70} y={330} boyut={120} renk={RENK.lacivert} />
      <Baslik t={t} bas={tGuide + 0.15} metin="TO RESIDUE" x={70} y={450} boyut={120} renk={RENK.koyuYesil} />
      <Not t={t} bas={tAll} x={74} y={540} boyut={36} agirlik={800} genislik={560} metin="That's all it claims to be." />
    </>
  );
};

export default S43;
