// Sahne 13 — crossover deneme: her gönüllü her ekmeği farklı günlerde yer.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const [sc, al] = pop(t, K(1, "different"), 0.5);
  const sonEtiket = c[2].bas - 0.1;
  return (
    <>
      <Kamera gorsel="tam/13" pencere={kameraYolu(t, s.sure, [20, 0, 1880], [90, 40, 1740])}>
        {/* takvimdeki bozuk yazıları kapatan yama + sol alttaki imza */}
        <div style={{ position: "absolute", left: 772, top: 62, width: 400, height: 448, background: "rgb(251,246,218)",
          boxShadow: "0 0 22px 16px rgb(251,246,218)" }} />
        <div style={{ position: "absolute", left: 0, top: 1015, width: 170, height: 65,
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgb(251,247,222) 0%, rgb(251,247,222) 70%, rgba(251,247,222,0) 100%)" }} />
        <Etiket t={t} bas={K(1, "every")} bitis={sonEtiket} capa={[360, 560]} konum={[330, 330]} metin="SOURDOUGH" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "bread")} bitis={sonEtiket} capa={[1450, 560]} konum={[1500, 300]} metin="ORDINARY BREAD" renk={RENK.lacivert} />
        <div style={{ position: "absolute", left: 975, top: 130, transform: `translate(-50%,-50%) scale(${sc})`, opacity: al }}>
          <Hap metin="DIFFERENT DAYS" renk={RENK.altin} boyut={30} />
        </div>
        <Baslik t={t} bas={K(1, "person")} metin="ONE PERSON" x={975} y={235} boyut={72} hiza="orta" renk={RENK.lacivert} />
        <Baslik t={t} bas={K(1, "own")} metin="OWN COMPARISON" x={975} y={325} boyut={56} hiza="orta" renk={RENK.koyuYesil} />
      </Kamera>
      <BaslikBlok t={t} bas={0.1} bitis={c[1].bas - 0.1} satirlar={["CROSSOVER", "TRIALS"]} x={70} y={170} boyut={96}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Baslik t={t} bas={K(2, "small")} metin="SMALL STUDIES," x={70} y={160} boyut={64} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(2, "more")} metin="MORE INFORMATIVE" x={70} y={240} boyut={64} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(2, "informative.")} x={74} y={300} metin="each person compared with themself" boyut={28} renk={RENK.gri} />
    </>
  );
};

export default S13;
