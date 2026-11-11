// Sahne 47 — potasyum: rozet, sonra sınırı olanlar ve ekibe danışma.
import React from "react";
import { Etiket, INTER, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Hp: React.FC<{ t: number; bas: number; metin: string; renk: string; y: number }> = ({ t, bas, metin, renk, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", right: 70, top: y, opacity: al, transform: `scale(${sc})`, transformOrigin: "100% 50%", display: "flex",
      alignItems: "center", gap: 14, background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999, padding: "12px 28px 12px 20px",
      fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.murekkep, whiteSpace: "nowrap",
      boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
      <span style={{ width: 18, height: 18, borderRadius: "50%", background: renk }} />
      {metin}
    </div>
  );
};

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tS1 = K(1, "That");
  return (
    <>
      <Kamera gorsel="tam/47" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 50, 1780])}>
        <Etiket t={t} bas={K(0, "Prunes")} bitis={tS1} capa={[940, 330]} konum={[940, 130]} metin="PRUNES" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(0, "potassium,")} />
      <VurguRozet t={t} bas={K(0, "732")} bitis={tS1 - 0.1} vurgu="732 mg" not="potassium per 100 grams" x={1500} y={130} genislik={420} boyut={110} />
      <Hp t={t} bas={K(1, "potassium limit")} metin="ON A POTASSIUM LIMIT" renk={RENK.mercan} y={130} />
      <Hp t={t} bas={K(1, "advanced")} metin="ADVANCED KIDNEY DISEASE" renk={RENK.mercan} y={225} />
      <Hp t={t} bas={K(2, "Check")} metin="CHECK WITH YOUR CARE TEAM" renk={RENK.yesil} y={320} />
    </>
  );
};

export default S47;
