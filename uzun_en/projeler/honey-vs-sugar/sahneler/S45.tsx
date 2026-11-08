// Sahne 45 — "One. Treat honey as a sugar": bal şekerin yerine mi geçiyor, üstüne mi ekleniyor.
import React from "react";
import { ANTON, BaslikBlok, Etiket, Hap, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const [sc, al] = pop(t, K(0, "One"), 0.5);
  const gec = c[3].bas - 0.1;           // 3. cümlede "yerine geçer" katmanları çekilir
  const [sh, ah] = pop(t, K(3, "adding sugar"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/45" pencere={kameraYolu(t, s.sure, [40, 22, 1840], [100, 60, 1720])}>
        <Etiket t={t} bas={K(2, "replaces")} bitis={gec} capa={[1340, 560]} konum={[1700, 380]} metin="HONEY" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "sugar you'd")} bitis={gec} capa={[490, 650]} konum={[400, 470]} metin="THE SUGAR YOU'D USE" renk={RENK.yesil} />
        <Etiket t={t} bas={K(3, "on top")} capa={[1050, 800]} konum={[1450, 905]} metin="ON TOP OF EVERYTHING" renk={RENK.mercan} />
      </Kamera>
      {/* numara rozeti + başlık */}
      <div style={{ position: "absolute", left: 70, top: 120, width: 110, height: 110, borderRadius: "50%", background: RENK.lacivert, color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 80, transform: `scale(${sc})`, opacity: al,
        border: `5px solid ${RENK.kagitAcik}`, boxShadow: "0 8px 22px rgba(48,40,34,0.22)" }}>1</div>
      <BaslikBlok t={t} bas={K(1, "Treat")} satirlar={["TREAT HONEY", "AS A SUGAR"]} x={220} y={150} boyut={88} />
      <Ikon t={t} bas={K(2, "reasonable")} bitis={gec} ad="onay" x={1730} y={560} boyut={96} />
      {ah > 0 && (
        <div style={{ position: "absolute", left: 220, top: 345, transform: `translate(0, -50%) scale(${sh})`, opacity: ah * sol(t, 1e9) }}>
          <Hap metin="JUST ADDING SUGAR" renk={RENK.mercan} boyut={28} />
        </div>
      )}
    </>
  );
};

export default S45;
