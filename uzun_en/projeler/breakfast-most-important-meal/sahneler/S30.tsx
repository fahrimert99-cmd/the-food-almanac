// Sahne 30 — 170 lb kişi için 77–93 g; aktif yaşlılar, böbrek hastalığı, doktora danışma.
import React from "react";
import { Baslik, Etiket, Hap, IkonYol, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";
// Açılan hap: x,y = merkez
const Pil: React.FC<{ t: number; bas: number; metin: string; x: number; y: number; renk: string; bitis?: number; boyut?: number }> = ({
  t, bas, metin, x, y, renk, bitis = 1e9, boyut = 30,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a }}>
      <Hap metin={metin} renk={renk} boyut={boyut} />
    </div>
  );
};
const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t1 = s.cumleler[1].bas - 0.1;
  const [sc, al] = pop(t, K(1, "severe"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/30" pencere={kameraYolu(t, s.sure, [40, 0, 1800], [160, 110, 1600])}>
        <Etiket t={t} bas={K(1, "Active")} bitis={K(1, "ask")} capa={[1290, 700]} konum={[1250, 330]} metin="ACTIVE: A BIT MORE" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "ask")} capa={[900, 690]} konum={[900, 330]} metin="ASK YOUR DOCTOR" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "170-pound")} bitis={t1} metin="170-POUND PERSON" x={90} y={190} boyut={88} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={K(0, "77")} bitis={t1} vurgu="77–93 G" not="roughly, per day" x={1300} y={110} genislik={520} boyut={110} />
      {/* böbrek hastalığı uyarısı */}
      <div style={{ position: "absolute", left: 90, top: 150, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al * sol(t, K(1, "ask")),
        display: "flex", alignItems: "center", gap: 16, background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`, borderRadius: 26,
        padding: "14px 28px 14px 18px", boxShadow: "0 8px 22px rgba(48,40,34,0.18)" }}>
        <IkonYol ad="uyari" boyut={54} renk={RENK.mercan} kalinlik={5} />
        <div style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: 30, letterSpacing: 1.5, color: RENK.lacivert, lineHeight: 1.3 }}>
          SEVERE KIDNEY DISEASE<br />MAY NEED TO LIMIT PROTEIN
        </div>
      </div>
    </>
  );
};
export default S30;
