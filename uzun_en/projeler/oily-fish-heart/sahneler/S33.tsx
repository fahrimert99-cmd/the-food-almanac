// Sahne 33 — "İlaç, atıştırmalık değil": sağdaki boş kâğıtta başlık + üç madde, resimde reçete notu.
import React from "react";
import { BaslikBlok, Etiket, Ikon, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Yerel hap: sağ sütundaki maddeler
const Madde: React.FC<{ t: number; bas: number; metin: string; y: number; renk: string }> = ({ t, bas, metin, y, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 1180, top: y, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
      display: "flex", alignItems: "center", gap: 14, background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999,
      padding: "10px 26px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 1.5, color: RENK.lacivert,
      whiteSpace: "nowrap", boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
      <span style={{ width: 18, height: 18, borderRadius: "50%", background: renk, flex: "none" }} />{metin}
    </div>
  );
};

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pencere = kameraYolu(t, s.sure, [440, 0, 1480], [480, 20, 1400]);
  return (
    <>
      <Kamera gorsel="tam/33" pencere={pencere}>
        <Etiket t={t} bas={K(1, "prescribed") - 0.1} capa={[640, 600]} konum={[700, 70]} metin="PRESCRIBED" renk={RENK.altin} boyut={28} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "medicines")} satirlar={["A MEDICINE,", "NOT A SNACK"]} x={1180} y={250} boyut={78} />
      <Madde t={t} bas={K(0, "high triglycerides")} metin="HIGH TRIGLYCERIDES" y={470} renk={RENK.mercan} />
      <Madde t={t} bas={K(0, "already on statins")} metin="ALREADY ON STATINS" y={580} renk={RENK.altin} />
      <Madde t={t} bas={K(0, "monitored")} metin="DOCTOR MONITORED" y={690} renk={RENK.yesil} />
      <Ikon t={t} bas={K(1, "keep taking it")} ad="onay" x={1240} y={850} boyut={84} />
      <div style={{ position: "absolute", left: 1310, top: 822, opacity: pop(t, K(1, "keep taking it") + 0.1, 0.5)[1],
        fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 2, color: RENK.koyuYesil, whiteSpace: "nowrap" }}>KEEP TAKING IT</div>
    </>
  );
};

export default S33;
