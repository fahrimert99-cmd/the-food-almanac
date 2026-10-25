// Sahne 39 — NCCIH: sıradan zerdeçal güvenli sayılır; ardından yaygın yan etkiler (sağ panelde liste).
import React from "react";
import { Baslik, Etiket, INTER, Kamera, KaynakEtiketi, Liste, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tOrd = K(0, "ordinary");
  const tSafe = K(0, "likely safe");
  const tUp = K(0, "up to");
  const tYan = K(1, "side effects");
  const kapan = c[1].bas - 0.2;
  const pPanel = eout(ilerle(t, kapan, 0.6));
  const [sc, al] = pop(t, tUp, 0.5);
  const yan = [
    { ifade: "upset", metin: "UPSET STOMACH" },
    { ifade: "reflux", metin: "REFLUX" },
    { ifade: "nausea", metin: "NAUSEA" },
    { ifade: "loose", metin: "LOOSE OR HARD STOOLS" },
  ];
  return (
    <>
      <Kamera gorsel="tam/39" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [20, 30, 1800])}>
        <Etiket t={t} bas={tOrd} bitis={kapan} capa={[800, 520]} konum={[800, 360]} metin="ORDINARY TURMERIC" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      <VurguRozet t={t} bas={tSafe} bitis={kapan} vurgu="LIKELY SAFE" not="ordinary turmeric by mouth" x={340} y={150}
        genislik={520} boyut={72} renk={RENK.yesil} />
      <div style={{ position: "absolute", left: 90, top: 400, transform: `scale(${sc})`, transformOrigin: "0% 50%",
        opacity: al * (1 - pPanel), display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik,
        border: `3px solid ${RENK.altin}`, borderRadius: 999, padding: "10px 26px 10px 18px", fontFamily: INTER, fontWeight: 800,
        fontSize: 28, letterSpacing: 1.5, color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        <span style={{ width: 20, height: 20, borderRadius: "50%", background: RENK.altin, flex: "none" }} />
        UP TO 2–3 MONTHS
      </div>
      <Panel a={pPanel} taraf="sag" genislik={1020} />
      <Baslik t={t} bas={tYan} metin="COMMON" x={1234} y={190} boyut={64} renk={RENK.altin} font="inter" aralik={6} />
      <Baslik t={t} bas={tYan + 0.1} metin="SIDE EFFECTS" x={1230} y={290} boyut={110} renk={RENK.lacivert} />
      <Liste t={t} x={1234} y={430} aralik={100} boyut={40} isaret="nokta" genislik={640}
        ogeler={yan.map((y) => ({ bas: K(1, y.ifade), metin: y.metin, renk: RENK.altin }))} />
    </>
  );
};

export default S39;
