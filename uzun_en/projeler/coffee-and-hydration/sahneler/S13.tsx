// Sahne 13 — 50 erkek, iki deneme, karşılıklı dengelenmiş sıra.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t50 = K(0, "50"), tCup = K(0, "three"), tTwo = K(1, "two"), tCnt = K(1, "counterbalanced"), tSelf = K(1, "compared");
  const bA = tTwo - 0.12;
  const pP = eout(ilerle(t, 0, 0.7));
  const [sa, aa] = pop(t, tTwo + 0.9, 0.5);
  const [sb, ab] = pop(t, tCnt, 0.5);
  const [sc, ac] = pop(t, tCnt + 0.25, 0.5);
  const tr = (txt: string, x: number, sk: number, al: number) => (
    <div style={{ position: "absolute", left: x, top: 500, transform: `translate(-50%, -50%) scale(${sk})`, opacity: al }}>
      <Hap metin={txt} renk={RENK.altin} boyut={34} />
    </div>
  );
  return (
    <>
      <Kamera gorsel="tam/13" pencere={kameraYolu(t, s.sure, [330, 200, 1300], [450, 300, 1100])}>
        <Etiket t={t} bas={K(0, "coffee")} bitis={bA} capa={[866, 600]} konum={[740, 440]} metin="COFFEE" renk={RENK.altin} />
      </Kamera>
      <Panel a={pP} taraf="sag" genislik={800} opak={1} />
      <VurguRozet t={t} bas={t50} bitis={bA} vurgu="50 MEN" x={1500} y={190} genislik={420} boyut={110} />
      <Baslik t={t} bas={tCup} bitis={bA} metin="3–6 CUPS" x={1860} y={520} boyut={104} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={tCup + 0.3} bitis={bA} metin="OF COFFEE A DAY, USUALLY" x={1860} y={600} hiza="sag" boyut={34} agirlik={800} genislik={640} />
      <Baslik t={t} bas={tTwo} metin="2 TRIALS" x={1860} y={230} boyut={110} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={tTwo + 0.2} metin="3 DAYS EACH" x={1860} y={350} boyut={84} hiza="sag" renk={RENK.koyuYesil} />
      {tr("TRIAL 1", 1330, sb, ab)}
      {tr("TRIAL 2", 1700, sc, ac)}
      {ab > 0 && <div style={{ position: "absolute", left: 1515, top: 500, transform: `translate(-50%, -50%) scale(${sb})`, opacity: ab,
        fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: 52, color: RENK.lacivert }}>↔</div>}
      <Not t={t} bas={tCnt + 0.3} metin="COUNTERBALANCED ORDER" x={1860} y={590} hiza="sag" boyut={34} agirlik={800} genislik={640} />
      <Not t={t} bas={tSelf} metin="EACH MAN COMPARED WITH HIMSELF" x={1860} y={700} hiza="sag" boyut={34} agirlik={800} genislik={640} renk={RENK.koyuYesil} />
    </>
  );
};

export default S13;
