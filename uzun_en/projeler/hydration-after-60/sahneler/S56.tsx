// Sahne 56 — "After 60, thirst can fade": sağ panelde başlık + 1984 çalışmasının dört bulgusu, bardakta etiket.
import React from "react";
import { BaslikBlok, Etiket, INTER, Kamera, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Madde: React.FC<{ t: number; bas: number; y: number; metin: string; renk: string }> = ({ t, bas, y, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 1120, top: y, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
      display: "flex", alignItems: "center", gap: 14, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${renk}`,
      borderRadius: 999, padding: "10px 28px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 1.5,
      color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
      <span style={{ width: 20, height: 20, borderRadius: "50%", background: renk, flex: "none" }} />
      {metin}
    </div>
  );
};

const S56: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pPanel = eout(ilerle(t, 0.0, 0.7));
  return (
    <>
      <Kamera gorsel="tam/56" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 34, 1800])}>
        <Etiket t={t} bas={K(1, "less thirsty")} capa={[690, 330]} konum={[690, 120]} metin="LESS THIRSTY" renk={RENK.altin} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={820} />
      <BaslikBlok t={t} bas={K(0, "After")} satirlar={["AFTER 60,", "THIRST FADES"]} x={1120} y={230} boyut={96} />
      <Madde t={t} bas={K(1, "1984")} y={470} metin="1984 STUDY" renk={RENK.lacivert} />
      <Madde t={t} bas={K(1, "drank less")} y={560} metin="DRANK LESS" renk={RENK.altin} />
      <Madde t={t} bas={K(1, "24 hours")} y={650} metin="24 H WITHOUT WATER" renk={RENK.yesil} />
      <Madde t={t} bas={K(1, "more concentrated")} y={740} metin="BLOOD MORE CONCENTRATED" renk={RENK.mercan} />
    </>
  );
};

export default S56;
