// Sahne 26 — bağırsakta katekinler (misel / yağ emilimi).
import React from "react";
import { Baslik, Etiket, Hap, Kamera, KaynakEtiketi, Not, Parcaciklar, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const m = s.meta;
  const tBas = K(1, "gut");
  const [sc, al] = pop(t, K(2, "less"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/26" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])} />
      {m.etiket && <KaynakEtiketi t={t} metin={m.etiket} bas={K(0, "2020")} />}
      <Baslik t={t} bas={tBas - 0.3} metin="IN THE GUT" x={1860} y={400} boyut={116} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={tBas + 0.3} metin="catechins might reduce fat absorption" x={1860} y={475} hiza="sag" genislik={560} boyut={34} />
      <div style={{ position: "absolute", inset: 0 }}>
        <Etiket t={t} bas={K(2, "Catechins")} bitis={K(2, "tiny")} capa={[1600, 150]} konum={[1380, 330]} metin="GREEN TEA" renk={RENK.yesil} />
        <Etiket t={t} bas={K(2, "droplets")} bitis={K(2, "intestinal")} capa={[790, 585]} konum={[1180, 640]} metin="FAT DROPLETS" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "intestinal")} capa={[985, 560]} konum={[1330, 800]} metin="INTESTINAL WALL" renk={RENK.mercan} />
      </div>
      <Parcaciklar t={t} bas={K(2, "carry")} kaynak={[620, 560]} hedef={[985, 560]} adet={14} aralik={0.2} omur={1.4}
        yayilma={260} kavis={-40} hedefYayilma={40} tohum="g26" />
      <div style={{ position: "absolute", right: 60, top: 880, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: al }}>
        <Hap metin="LESS FAT ABSORBED" renk={RENK.yesil} boyut={32} />
      </div>
    </>
  );
};

export default S26;
