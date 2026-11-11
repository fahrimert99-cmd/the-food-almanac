// Sahne 24 — floral kaynak + işleme; ısıtma uyarısı (kavanoz, tencere, termometre)
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S24: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tFloral = K(0, "floral"), tProc = K(0, "processing");
  const tHeat = K(1, "heating"), tNot = K(1, "not settled");
  const [sc, al] = pop(t, tNot, 0.5);
  return (
    <>
      <Kamera gorsel="tam/24" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [90, 100, 1740])} />
      <Etiket t={t} bas={tFloral} bitis={c[1].bas + 0.3} capa={[1010, 560]} konum={[1130, 400]} metin="FLORAL SOURCE" renk={RENK.altin} />
      <Etiket t={t} bas={tProc} bitis={c[1].bas + 0.3} capa={[330, 640]} konum={[200, 400]} metin="PROCESSING" renk={RENK.mercan} />
      <BaslikBlok t={t} bas={tHeat} satirlar={["HEATING MAY", "REDUCE SOME", "BENEFITS?"]} x={1330} y={230} boyut={84}
        renkler={[RENK.lacivert, RENK.lacivert, RENK.mercan]} />
      <Not t={t} bas={K(1, "commercial")} metin="Commercial processing" x={1334} y={520} boyut={30} renk={RENK.gri} />
      <div style={{ position: "absolute", left: 1334, top: 620, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
        <Hap metin="NOT SETTLED" renk={RENK.altin} boyut={34} />
      </div>
    </>
  );
};

export default S24;
