// Sahne 14 — çapraz tasarım: 2 hafta ultra-işlenmiş, 2 hafta işlenmemiş, rastgele sıra, sonra geçiş.
import React from "react";
import { Etiket, Hap, Img, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, staticFile } from "../kutuphane";

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bitisB = K(2, "the order") - 0.2;
  const hapOge = (bas: number, x: number, y: number, metin: string, renk: string, bitis = 1e9) => {
    const [sc, al] = pop(t, bas, 0.5);
    return (
      <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: t > bitis ? 0 : al }}>
        <Hap metin={metin} renk={renk} boyut={36} />
      </div>
    );
  };
  return (
    <>
      <Kamera gorsel="tam/14" pencere={kameraYolu(t, s.sure, [60, 260, 1800], [120, 300, 1700])}>
        {/* sağ tepsideki gazlı içecek anlatıma uymaz: görselin boş kâğıt şeridi üzerine kopyalanır */}
        <div style={{ position: "absolute", left: 1190, top: 290, width: 230, height: 382, clipPath: "polygon(0 0, 100% 0, 100% 62%, 66% 62%, 66% 100%, 0 100%)", overflow: "hidden",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%)",
          maskImage: "linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%)" }}>
          <Img src={staticFile("img/tam/14.jpg")} style={{ position: "absolute", left: -1000, top: -200 * 1.158, width: 1920, height: 1080 * 1.158 }} />
        </div>
        <Etiket t={t} bas={K(0, "ultra-processed")} bitis={bitisB} capa={[520, 560]} konum={[520, 250]} metin="ULTRA-PROCESSED" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "unprocessed")} bitis={bitisB} capa={[1560, 720]} konum={[1500, 250]} metin="UNPROCESSED" renk={RENK.yesil} />
        <Etiket t={t} bas={K(2, "switched")} capa={[860, 555]} konum={[960, 900]} metin="THEN THEY SWITCHED" renk={RENK.altin} />
      </Kamera>
      {hapOge(K(0, "two weeks"), 480, 880, "2 WEEKS", RENK.mercan)}
      {hapOge(K(1, "two weeks"), 1480, 880, "2 WEEKS", RENK.yesil)}
      {hapOge(K(2, "random"), 960, 150, "RANDOM ORDER", RENK.lacivert)}
    </>
  );
};

export default S14;
