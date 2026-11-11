// Sahne 28 — geleneksel beslenme gözlemi; yazarların uyarısı: Batı diyetine taşınamaz.
import React from "react";
import { ANTON, BaslikBlok, Etiket, INTER, Kamera, Ikon, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Hap2: React.FC<{ t: number; bas: number; metin: string; renk: string }> = ({ t, bas, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  return (
    <div style={{ transform: `scale(${sc})`, opacity: al, background: "#FCF8EC", border: `4px solid ${renk}`, borderRadius: 999,
      padding: "10px 28px", fontFamily: INTER, fontWeight: 800, fontSize: 34, letterSpacing: 2, color: RENK.lacivert, whiteSpace: "nowrap" }}>{metin}</div>
  );
};

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const t1 = c[1].bas - 0.1;
  const [sn, an] = pop(t, K(1, "carried"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/28" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800])}>
        <Etiket t={t} bas={K(0, "coconut")} bitis={t1} capa={[480, 760]} konum={[900, 700]} metin="COCONUTS" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "traditional")} satirlar={["TRADITIONAL", "DIETS"]} x={1860} y={170} boyut={100} hiza="sag" />
      <Ikon t={t} bas={K(0, "heart")} bitis={t1} ad="onay" x={1050} y={445} boyut={80} />
      <Not t={t} bas={K(0, "heart")} bitis={t1} metin="NO MORE HEART DISEASE SEEN" x={1860} y={420} hiza="sag" boyut={44} agirlik={800} genislik={760} />
      <div style={{ position: "absolute", left: 1400, top: 650, transform: "translate(-50%, -50%)", display: "flex", alignItems: "center", gap: 18 }}>
        <Hap2 t={t} bas={K(1, "reviewers")} metin="TRADITIONAL DIET" renk={RENK.yesil} />
        <span style={{ transform: `scale(${sn})`, opacity: an, fontFamily: ANTON, fontSize: 56, color: RENK.altin }}>VS</span>
        <Hap2 t={t} bas={K(1, "Western")} metin="WESTERN DIET" renk={RENK.mercan} />
      </div>
      <Not t={t} bas={K(1, "differs")} metin="DIFFERS IN MANY OTHER WAYS" x={1860} y={730} hiza="sag" boyut={40} agirlik={800} genislik={760} />
    </>
  );
};

export default S28;
