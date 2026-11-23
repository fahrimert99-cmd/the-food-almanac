// Sahne 57 — "4. ASK FIRST": reçete defteri, ilaç şişesi ve zencefil; sağda sıralı uyarı hapları.
import React from "react";
import { Baslik, Etiket, IkonYol, INTER, Kamera, Panel, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Sağa dayalı hap (pop ile gelir)
const Hap2: React.FC<{ t: number; bas: number; metin: string; renk: string; y: number; ikon?: "onay" | "uyari" | "saat" }> = ({ t, bas, metin, renk, y, ikon }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", right: 60, top: y, opacity: al, transform: `scale(${sc})`, transformOrigin: "100% 50%", display: "flex",
      alignItems: "center", gap: 14, whiteSpace: "nowrap", background: "#FCF8EC", border: `4px solid ${renk}`, borderRadius: 999,
      padding: "12px 30px 12px 20px", fontFamily: INTER, fontWeight: 800, fontSize: 36, letterSpacing: 1.5, color: RENK.lacivert,
      boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
      {ikon ? <IkonYol ad={ikon} boyut={36} renk={renk} /> : <span style={{ width: 20, height: 20, borderRadius: "50%", background: renk }} />}
      {metin}
    </div>
  );
};

const S57: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pPanel = eout(ilerle(t, 0.2, 0.7));
  const tAsk = K(0, "ask");
  return (
    <>
      <Kamera gorsel="tam/57" pencere={kameraYolu(t, s.sure, [0, 0, 1840], [70, 40, 1700])}>
        {/* uydurma "NEVILLES" başlığını kâğıt rengi yamayla örter */}
        <div style={{ position: "absolute", left: 305, top: 428, width: 150, height: 62, transform: "rotate(-9deg)", background: kagit(1), borderRadius: 8 }} />
        <Etiket t={t} bas={K(0, "blood thinner")} bitis={tAsk - 0.2} capa={[740, 350]} konum={[740, 150]} metin="MEDICINE BOTTLE" renk={RENK.altin} />
        <Etiket t={t} bas={tAsk} capa={[480, 640]} konum={[330, 900]} metin="ASK FIRST" renk={RENK.koyuYesil} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={780} />
      <Baslik t={t} bas={0.3} metin="4. ASK" x={1860} y={240} boyut={110} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={0.5} metin="FIRST" x={1860} y={355} boyut={110} renk={RENK.koyuYesil} hiza="sag" />
      <Hap2 t={t} bas={K(0, "blood thinner")} metin="BLOOD THINNER" renk={RENK.mercan} y={500} ikon="uyari" />
      <Hap2 t={t} bas={K(0, "diabetes medicine")} metin="DIABETES MEDICINE" renk={RENK.mercan} y={605} ikon="uyari" />
      <Hap2 t={t} bas={K(0, "surgery coming")} metin="SURGERY COMING" renk={RENK.mercan} y={710} ikon="saat" />
      <Hap2 t={t} bas={K(0, "doctor")} metin="DOCTOR OR PHARMACIST" renk={RENK.yesil} y={830} ikon="onay" />
    </>
  );
};

export default S57;
