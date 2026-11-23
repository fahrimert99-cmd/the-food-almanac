// Sahne 58 — "5. LASTING NAUSEA": telefon, su bardağı, zencefil; sağda gün/sıvı hapları ve "doktoru ara".
import React from "react";
import { Baslik, Etiket, IkonYol, INTER, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Hap2: React.FC<{ t: number; bas: number; metin: string; renk: string; y: number; ikon: "onay" | "uyari" | "saat" | "carpi" }> = ({ t, bas, metin, renk, y, ikon }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", right: 60, top: y, opacity: al, transform: `scale(${sc})`, transformOrigin: "100% 50%", display: "flex",
      alignItems: "center", gap: 14, whiteSpace: "nowrap", background: "#FCF8EC", border: `4px solid ${renk}`, borderRadius: 999,
      padding: "12px 30px 12px 20px", fontFamily: INTER, fontWeight: 800, fontSize: 34, letterSpacing: 1.5, color: RENK.lacivert,
      boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
      <IkonYol ad={ikon} boyut={36} renk={renk} />
      {metin}
    </div>
  );
};

const S58: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pPanel = eout(ilerle(t, 0.2, 0.7));
  return (
    <>
      <Kamera gorsel="tam/58" pencere={kameraYolu(t, s.sure, [20, 10, 1800], [90, 60, 1680])}>
        <Etiket t={t} bas={K(0, "drinking fluids")} bitis={K(0, "call") - 0.2} capa={[793, 440]} konum={[1020, 150]} metin="FLUIDS" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "call")} capa={[510, 560]} konum={[330, 130]} metin="CALL YOUR DOCTOR" renk={RENK.koyuYesil} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={780} />
      <Baslik t={t} bas={0.3} metin="5. LASTING" x={1860} y={240} boyut={104} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={0.5} metin="NAUSEA" x={1860} y={350} boyut={104} renk={RENK.koyuYesil} hiza="sag" />
      <Hap2 t={t} bas={K(0, "lasts for days")} metin="LASTS FOR DAYS" renk={RENK.mercan} y={480} ikon="saat" />
      <Hap2 t={t} bas={K(0, "drinking fluids")} metin="NOT DRINKING FLUIDS" renk={RENK.mercan} y={585} ikon="carpi" />
      <Hap2 t={t} bas={K(0, "call")} metin="CALL YOUR DOCTOR" renk={RENK.yesil} y={700} ikon="onay" />
      <Not t={t} bas={K(0, "not just another")} metin="not just another cup of tea" x={1860} y={830} hiza="sag" genislik={640} />
    </>
  );
};

export default S58;
