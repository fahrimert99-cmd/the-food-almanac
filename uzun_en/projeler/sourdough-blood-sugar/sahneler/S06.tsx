// Sahne 6 — maya kültürü (starter): kavanoz solda, sağ üstte başlık ve malzeme listesi.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBaslik = K(1, "starter");
  const tListe = K(1, "flour");
  const [sc, al] = pop(t, K(0, "packaged"), 0.5);
  const aHap = al * sol(t, tBaslik - 0.3);
  return (
    <>
      {/* pencere sol-alt kusurlu köşeleri (karalama, bozuk yazı) dışarıda tutar */}
      <Kamera gorsel="tam/06" pencere={kameraYolu(t, s.sure, [230, 0, 1690], [270, 20, 1620])}>
        <Etiket t={t} bas={K(1, "a living mix")} bitis={9.4} capa={[480, 560]} konum={[560, 110]} metin="LIVING MIX" renk={RENK.yesil} />
      </Kamera>
      {aHap > 0 && (
        <div style={{ position: "absolute", left: 1030, top: 110, opacity: aHap, transform: `scale(${sc})`, transformOrigin: "0 50%" }}>
          <Hap metin="NOT PACKAGED YEAST ALONE" renk={RENK.mercan} boyut={30} />
        </div>
      )}
      <BaslikBlok t={t} bas={tBaslik} bitis={tListe - 0.2} satirlar={["THE", "STARTER"]} x={1860} y={230} boyut={104} hiza="sag" />
      <Liste t={t} x={1060} y={190} aralik={82} boyut={34} isaret="nokta" genislik={800} ogeler={[
        { bas: K(1, "flour"), metin: "FLOUR", renk: RENK.altin },
        { bas: K(1, "water"), metin: "WATER", renk: RENK.altin },
        { bas: K(1, "wild yeast"), metin: "WILD YEAST", renk: RENK.yesil },
        { bas: K(1, "lactic acid"), metin: "LACTIC ACID BACTERIA", renk: RENK.yesil },
      ]} />
    </>
  );
};

export default S06;
