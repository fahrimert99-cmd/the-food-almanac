// Sahne 53 — metformin, PPI, H2 blokerleri: bağlantı, durdurma nedeni değil.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const k1 = K(1, "These") - 0.2;
  return (
    <>
      {/* sağ alttaki "1857" yazısı pencere dışında */}
      <Kamera gorsel="tam/53" pencere={kameraYolu(t, s.sure, [130, 50, 1480], [170, 70, 1440])}>
        <Etiket t={t} bas={K(0, "metformin")} bitis={k1} capa={[1360, 745]} konum={[1400, 470]} metin="METFORMIN" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "PPIs")} bitis={k1} capa={[655, 500]} konum={[330, 420]} metin="PPIS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "H2")} bitis={k1} capa={[845, 610]} konum={[830, 230]} metin="H2 BLOCKERS" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "linked")} bitis={k1} metin="LINKED WITH" x={90} y={110} boyut={84} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "linked") + 0.15} bitis={k1} metin="LOWER B12" x={90} y={205} boyut={84} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(1, "links")} metin="LINKS IN STUDIES," x={90} y={110} boyut={84} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "not")} metin="NOT REASONS TO STOP" x={90} y={205} boyut={84} renk={RENK.mercan} />
      <Ikon t={t} bas={K(1, "reasons")} ad="carpi" x={1700} y={170} zemin={RENK.mercan} />
    </>
  );
};
export default S53;
