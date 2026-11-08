// Sahne 26 — çalışma küçük, kısa ve sağlıklı kişilerde; sınırlar.
import React from "react";
import { BaslikBlok, INTER, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const c = s.cumleler;
  const t2 = c[2].bas - 0.1;
  const [sc, al] = pop(t, 0.05, 0.5);
  const metin = t >= K(1, "four") ? "4 WEEKS" : "THIS TRIAL";
  return (
    <>
      <Kamera gorsel="tam/26" pencere={kameraYolu(t, s.sure, [0, 120, 1800], [40, 160, 1700])}>
        {/* takvim başlığındaki bozuk yazıyı örten hap */}
        <div style={{ position: "absolute", left: 500, top: 686, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al,
          background: RENK.lacivert, color: "#fff", borderRadius: 999, padding: "8px 26px", fontFamily: INTER, fontWeight: 800,
          fontSize: 30, letterSpacing: 2, whiteSpace: "nowrap", boxShadow: "0 6px 16px rgba(48,40,34,0.25)" }}>{metin}</div>
      </Kamera>
      <BaslikBlok t={t} bas={K(1, "small")} bitis={t2} satirlar={["SMALL AND", "SHORT"]} x={1860} y={200} boyut={100} hiza="sag" />
      <Liste t={t} isaret="onay" x={1000} y={450} genislik={860} boyut={42} aralik={90} ogeler={[
        { bas: K(1, "small"), bitis: t2, metin: "SMALL TRIAL", renk: RENK.altin },
        { bas: K(1, "lasted"), bitis: t2, metin: "ONLY FOUR WEEKS", renk: RENK.altin },
        { bas: K(1, "healthy"), bitis: t2, metin: "HEALTHY PEOPLE", renk: RENK.altin },
      ]} />
      <Not t={t} bas={c[2].bas + 0.1} metin="IT CAN'T TELL US ABOUT" x={1860} y={230} hiza="sag" boyut={46} agirlik={800} genislik={800} />
      <Liste t={t} isaret="carpi" x={1000} y={330} genislik={860} boyut={44} aralik={100} ogeler={[
        { bas: K(2, "years"), metin: "WHAT HAPPENS OVER YEARS", renk: RENK.mercan },
        { bas: K(2, "LDL"), metin: "PEOPLE WITH HIGH LDL", renk: RENK.mercan },
      ]} />
    </>
  );
};

export default S26;
