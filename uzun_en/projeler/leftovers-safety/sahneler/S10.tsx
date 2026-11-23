// Sahne 10 — iki saat kuralı: sofra + kum saati, sağda başlık ve 1 saat rozeti.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, INTER, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S10: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tIki = K(0, "two"), tSicak = K(1, "above"), tBir = K(1, "drops");
  const [sc, al] = pop(t, tSicak, 0.5);
  return (
    <>
      <Kamera gorsel="tam/10" pencere={kameraYolu(t, s.sure, [0, 90, 1560], [40, 120, 1440])}>
        <Etiket t={t} bas={K(0, "food")} bitis={tIki + 0.4} capa={[520, 470]} konum={[330, 300]} metin="FOOD OUT" renk={RENK.altin} boyut={30} />
        <Etiket t={t} bas={tIki} capa={[750, 290]} konum={[1020, 200]} metin="TWO HOURS" renk={RENK.altin} boyut={30} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={K(0, "American")} />
      <Baslik t={t} bas={tIki} metin="2 HOURS" x={1860} y={420} boyut={130} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={tIki + 0.18} metin="OUT" x={1860} y={550} boyut={130} renk={RENK.koyuYesil} hiza="sag" />
      <div style={{ position: "absolute", left: 1500, top: 660, transform: `translate(-50%, 0) scale(${sc})`, opacity: al, display: "flex",
        alignItems: "center", gap: 14, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`, borderRadius: 999,
        padding: "10px 28px 10px 12px", fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 2, color: RENK.murekkep,
        boxShadow: "0 8px 22px rgba(48,40,34,0.2)" }}>
        <span style={{ width: 14, height: 14, borderRadius: "50%", background: RENK.mercan }} />
        ABOVE 90°F
      </div>
      <VurguRozet t={t} bas={tBir} vurgu="1 HOUR" x={1500} y={760} genislik={420} renk={RENK.mercan} boyut={96} />
    </>
  );
};

export default S10;
