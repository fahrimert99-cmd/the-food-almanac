// Sahne 43 — Sağlık halesi: hindistancevizi tehlikeli değil, ama hale kanıttan büyük.
import React from "react";
import { BaslikBlok, Etiket, Hap, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tHalo = K(1, "halo"), tBig = K(1, "bigger"), tEv = K(1, "evidence");
  const [s1, a1] = pop(t, tBig, 0.6);
  const [s2, a2] = pop(t, tEv, 0.6);
  const pH = eout(ilerle(t, tHalo, 0.8));
  return (
    <>
      <Kamera gorsel="tam/43" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [40, 50, 1840])}>
        <Etiket t={t} bas={K(0, "coconut")} bitis={K(1, "poor") - 0.1} capa={[1650, 790]} konum={[1620, 230]} metin="NOT DANGEROUS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "poor")} bitis={tHalo - 0.1} capa={[1400, 560]} konum={[1000, 420]} metin="POOR EVERYDAY OIL" renk={RENK.mercan} />
        {/* şişenin üstünde altın hale */}
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          <ellipse cx={1412} cy={222} rx={150 * pH} ry={30 * pH} fill="none" stroke={RENK.altin} strokeWidth={9} opacity={pH} />
        </svg>
      </Kamera>
      <BaslikBlok t={t} bas={tHalo} satirlar={["THE HEALTH", "HALO"]} x={140} y={190} boyut={104} />
      {/* ILLUSTRATIVE: hale kanıttan büyük (sayı yok) */}
      <div style={{ position: "absolute", left: 330, top: 520, width: 300, height: 300, marginLeft: -150, borderRadius: "50%",
        background: "rgba(184,134,43,0.22)", border: `5px solid ${RENK.altin}`, opacity: a1, transform: `scale(${s1})`,
        display: "flex", alignItems: "center", justifyContent: "center", fontFamily: INTER, fontWeight: 800, fontSize: 30, color: RENK.lacivert, letterSpacing: 2 }}>
        HEALTH HALO
      </div>
      <div style={{ position: "absolute", left: 640, top: 650, width: 150, height: 150, marginLeft: -75, borderRadius: "50%",
        background: "rgba(27,42,65,0.14)", border: `5px solid ${RENK.lacivert}`, opacity: a2, transform: `scale(${s2})`,
        display: "flex", alignItems: "center", justifyContent: "center", fontFamily: INTER, fontWeight: 800, fontSize: 22, color: RENK.lacivert, letterSpacing: 1 }}>
        EVIDENCE
      </div>
      <div style={{ position: "absolute", left: 140, top: 850, opacity: a2 }}>
        <Hap metin="ILLUSTRATIVE" renk={RENK.gri} boyut={20} />
      </div>
    </>
  );
};

export default S43;
