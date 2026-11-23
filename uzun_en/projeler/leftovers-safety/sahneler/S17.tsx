// Sahne 17 — takvim ve yahni: Rutgers sınırı, sağda başlık.
import React from "react";
import { Baslik, Etiket, INTER, Kamera, KaynakEtiketi, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDort = K(1, "four"), tBaslik = K(2, "day");
  const [sc, al] = pop(t, K(2, "not"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/17" pencere={kameraYolu(t, s.sure, [0, 40, 1600], [40, 90, 1500])}>
        <Etiket t={t} bas={tDort} bitis={tBaslik} capa={[555, 640]} konum={[420, 900]} metin="DAY FOUR" renk={RENK.mercan} boyut={30} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={K(0, "Rutgers")} />
      <Baslik t={t} bas={tBaslik} metin="DAY FOUR" x={1860} y={400} boyut={130} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(2, "outer")} metin="IS THE EDGE" x={1860} y={530} boyut={130} renk={RENK.koyuYesil} hiza="sag" />
      <div style={{ position: "absolute", right: 60, top: 660, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: al, display: "flex",
        alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`, borderRadius: 999,
        padding: "10px 28px 10px 14px", fontFamily: INTER, fontWeight: 800, fontSize: 32, letterSpacing: 2, color: RENK.murekkep,
        boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
        <span style={{ width: 14, height: 14, borderRadius: "50%", background: RENK.mercan }} />
        NOT A TARGET
      </div>
    </>
  );
};

export default S17;
