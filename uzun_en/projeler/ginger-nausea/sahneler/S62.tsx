// Sahne 62 — hap kutusu ve zencefil; sağda üstte uyarı hapları, altta başlık.
import React from "react";
import { Baslik, Etiket, IkonYol, INTER, Kamera, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Hap2: React.FC<{ t: number; bas: number; metin: string; renk: string; y: number; ikon: "onay" | "uyari" | "saat" }> = ({ t, bas, metin, renk, y, ikon }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 1230, top: y, opacity: al, transform: `scale(${sc})`, transformOrigin: "0% 50%", display: "flex",
      alignItems: "center", gap: 14, whiteSpace: "nowrap", background: "#FCF8EC", border: `4px solid ${renk}`, borderRadius: 999,
      padding: "12px 30px 12px 20px", fontFamily: INTER, fontWeight: 800, fontSize: 34, letterSpacing: 1.5, color: RENK.lacivert,
      boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
      <IkonYol ad={ikon} boyut={36} renk={renk} />
      {metin}
    </div>
  );
};

const S62: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pPanel = eout(ilerle(t, 0.2, 0.7));
  const tCheck = K(0, "check with");
  return (
    <>
      <Kamera gorsel="tam/62" pencere={kameraYolu(t, s.sure, [0, 0, 1700], [60, 60, 1560])}>
        <Etiket t={t} bas={K(0, "blood thinners")} bitis={tCheck - 0.2} capa={[400, 560]} konum={[330, 160]} metin="YOUR MEDICINES" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "adding ginger")} capa={[860, 760]} konum={[1060, 540]} metin="GINGER" renk={RENK.altin} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={900} />
      <Hap2 t={t} bas={K(0, "blood thinners")} metin="BLOOD THINNERS" renk={RENK.mercan} y={170} ikon="uyari" />
      <Hap2 t={t} bas={K(0, "diabetes medicine")} metin="DIABETES MEDICINE" renk={RENK.mercan} y={275} ikon="uyari" />
      <Hap2 t={t} bas={K(0, "surgery coming")} metin="SURGERY COMING" renk={RENK.mercan} y={380} ikon="saat" />
      <Baslik t={t} bas={tCheck} metin="ASK YOUR" x={1860} y={620} boyut={108} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={tCheck + 0.2} metin="DOCTOR FIRST" x={1860} y={738} boyut={108} renk={RENK.koyuYesil} hiza="sag" />
      <Hap2 t={t} bas={K(0, "pharmacist")} metin="OR PHARMACIST" renk={RENK.yesil} y={830} ikon="onay" />
    </>
  );
};

export default S62;
