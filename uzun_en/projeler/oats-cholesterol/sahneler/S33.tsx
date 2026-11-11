// Sahne 33 — hazır yulaf daha fazla işlenir; işleme jelin kıvamını değiştirebilir.
import React from "react";
import { BaslikBlok, Etiket, Hap, Ikon, Kamera, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tIns = K(0, "Instant"), tFurther = K(0, "processed further");
  const tProc = K(1, "Processing"), tGel = K(1, "beta-glucan gel"), tFlag = K(1, "flagged earlier");
  const hap = (bas: number, metin: string, renk: string, y: number) => {
    const [sc, al] = pop(t, bas, 0.5);
    return al > 0 ? (
      <div style={{ position: "absolute", right: 60, top: y, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: al }}>
        <Hap metin={metin} renk={renk} boyut={30} />
      </div>
    ) : null;
  };
  return (
    <>
      <Kamera gorsel="tam/33" pencere={kameraYolu(t, s.sure, [0, 130, 1700], [10, 190, 1560])}>
        <Etiket t={t} bas={tIns} capa={[230, 640]} konum={[1020, 760]} metin="INSTANT OATS" renk={RENK.altin} />
        <Etiket t={t} bas={tGel} capa={[545, 560]} konum={[960, 330]} metin="BETA-GLUCAN GEL" renk={RENK.yesil} />
      </Kamera>
      <Panel a={eout(ilerle(t, 0.2, 0.8))} taraf="sag" genislik={640} />
      {hap(tFurther, "PROCESSED FURTHER", RENK.lacivert, 150)}
      <BaslikBlok t={t} bas={tProc} satirlar={["PROCESSING", "AND GEL"]} x={1860} y={300} boyut={92} hiza="sag" />
      <Ikon t={t} bas={tFlag} ad="uyari" x={1560} y={640} zemin={RENK.altin} />
      {hap(tFlag + 0.2, "DETAIL WE FLAGGED", RENK.altin, 760)}
    </>
  );
};

export default S33;
