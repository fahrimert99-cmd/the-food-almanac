// Sahne 16 — benzer küçük denemeler biriktirilir (havuzlama).
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, Parcaciklar, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCok = K(0, "Many similar");
  const tDia = K(0, "diabetes");
  const tPool = K(1, "pool");
  const tTogether = K(1, "add everything");
  const tPlak = K(1, "pattern");
  const [sc, al] = pop(t, tDia - 0.1, 0.5);
  const [sp2, ap] = pop(t, tPlak, 0.5);
  return (
    <>
      <Kamera gorsel="tam/16" pencere={kameraYolu(t, s.sure, [20, 30, 1880], [70, 60, 1780])}>
        {/* saat kadranındaki anlamsız yazı */}
        <div style={{ position: "absolute", left: 1560, top: 428, width: 150, height: 46,
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, #F3F1E9 0%, #F3F1E9 60%, rgba(243,241,233,0) 100%)" }} />
        <Etiket t={t} bas={tCok} bitis={tPool - 0.1} capa={[480, 700]} konum={[830, 400]} metin="MANY SMALL TRIALS" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={tCok + 0.2} bitis={tPool - 0.1} satirlar={["SMALL", "TRIALS"]} x={140} y={120} boyut={110} />
      <div style={{ position: "absolute", left: 140, top: 340, transform: `scale(${sc})`, opacity: al, transformOrigin: "0% 50%" }}>
        {t < tPool - 0.1 && <Hap metin="SOME IN DIABETES" renk={RENK.mercan} boyut={30} />}
      </div>
      <Parcaciklar t={t} bas={tPool} kaynak={[620, 620]} hedef={[1260, 700]} adet={30} aralik={0.17} omur={1.6} kavis={-160} yayilma={500} hedefYayilma={80} renk={RENK.altinAcik} boyut={9} tohum="havuz" />
      <BaslikBlok t={t} bas={tPool} satirlar={["POOLED"]} x={140} y={120} boyut={110} renkler={[RENK.koyuYesil]} />
      <div style={{ position: "absolute", left: 140, top: 230, transform: `scale(${sp2})`, opacity: ap, transformOrigin: "0% 50%" }}>
        <Hap metin="DOES THE PATTERN HOLD?" renk={RENK.yesil} boyut={30} />
      </div>
    </>
  );
};

export default S16;
