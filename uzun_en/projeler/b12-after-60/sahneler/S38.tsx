// Sahne 38 — Yorgunluk ve halsizlik (anemi bağlantısı); çoğu kişi yaşa yazar.
import React from "react";
import { Baslik, Etiket, IkonYol, INTER, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  // kitap ve fincan (alt kenar) kadraj dışında
  const pencere = kameraYolu(t, s.sure, [0, 40, 1500], [60, 60, 1400]);
  const [sc, al] = pop(t, K(1, "shrug"), 0.55);
  return (
    <>
      <Kamera gorsel="tam/38" pencere={pencere}>
        <Etiket t={t} bas={K(0, "tiredness")} bitis={K(1, "Many")} capa={[230, 620]} konum={[760, 470]} metin="TIREDNESS" renk={RENK.mercan} />
      </Kamera>
      <Not t={t} bas={K(0, "National")} metin="NATIONAL INSTITUTES OF HEALTH LISTS" x={1010} y={150} boyut={26} agirlik={800} renk={RENK.altin} />
      <Baslik t={t} bas={K(0, "tiredness")} metin="TIRED AND" x={1010} y={270} boyut={120} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "weakness")} metin="WEAK" x={1010} y={400} boyut={120} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "anemia")} metin="LINKED TO A TYPE OF ANEMIA" x={1010} y={500} boyut={32} agirlik={800} />
      <div style={{ position: "absolute", left: 1010, top: 700, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al, whiteSpace: "nowrap",
        display: "flex", alignItems: "center", gap: 16, background: RENK.kagitAcik, border: `4px solid ${RENK.altin}`, borderRadius: 999,
        padding: "12px 34px 12px 14px", boxShadow: "0 10px 26px rgba(48,40,34,0.2)" }}>
        <span style={{ width: 54, height: 54, borderRadius: "50%", background: RENK.altin, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IkonYol ad="soru" boyut={36} renk="#fff" kalinlik={6} />
        </span>
        <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 34, letterSpacing: 2, color: RENK.murekkep }}>OFTEN BLAMED ON AGE</span>
      </div>
    </>
  );
};

export default S38;
