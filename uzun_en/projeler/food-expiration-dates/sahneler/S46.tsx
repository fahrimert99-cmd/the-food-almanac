// Sahne 46 — "Myth: a legal deadline": jambon paketi + tokmak; başlık sol üstte, madde işaretleri sağ üstte.
import React from "react";
import { BaslikBlok, Etiket, Ikon, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bit = K(1, "In the") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/46" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1810])}>
        {/* paket üzerindeki bozuk yazılı etiket boş etiketle değiştirilir */}
        <div style={{ position: "absolute", left: 378 - 190, top: 445 - 40, width: 380, height: 80, transform: "rotate(-17deg)",
          background: "#E6ECEF", border: "3px solid #2a2a2a", borderRadius: 6 }} />
        <Etiket t={t} bas={K(0, "use by")} bitis={bit} capa={[440, 650]} konum={[420, 900]} metin="USE BY" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "legal")} bitis={bit} capa={[1230, 520]} konum={[1230, 900]} metin="LEGAL DEADLINE?" renk={RENK.mercan} />
        <Ikon t={t} bas={K(0, "deadline")} ad="carpi" x={1500} y={640} zemin={RENK.mercan} bitis={bit} />
      </Kamera>
      <BaslikBlok t={t} bas={0.1} satirlar={["MYTH:", "A LEGAL DEADLINE"]} x={70} y={100} boyut={84}
        renkler={[RENK.mercan, RENK.lacivert]} />
      <Liste t={t} x={1230} y={118} aralik={90} boyut={30} isaret="carpi" genislik={630} ogeler={[
        { bas: K(1, "defined"), metin: "NOT FEDERALLY DEFINED", renk: RENK.mercan },
        { bas: K(1, "no date"), metin: "NO DATE REQUIRED", renk: RENK.mercan },
      ]} />
      <Not t={t} bas={K(1, "infant")} metin="EXCEPT INFANT FORMULA" x={1290} y={292} boyut={26} agirlik={800} renk={RENK.gri} />
    </>
  );
};

export default S46;
