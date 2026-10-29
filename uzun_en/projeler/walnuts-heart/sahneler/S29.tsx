// Sahne 29 — AHA 2017: doymuş yağı doymamış yağla değiştirmek LDL'yi düşürür. Sağ yarı başlık ve rozet.
import React from "react";
import { BaslikBlok, Etiket, IkonYol, INTER, KaynakEtiketi, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tYil = K(0, "2017"), tDoymus = K(0, "saturated"), tDoymamis = K(0, "unsaturated"), tDusur = K(0, "lowers"), tPoli = K(1, "walnuts");
  const [sc, al] = pop(t, tDusur, 0.55);
  return (
    <>
      <Kamera gorsel="tam/29" pencere={kameraYolu(t, s.sure, [0, 100, 1700], [100, 140, 1560])} />
      <BaslikBlok t={t} bas={0.2} satirlar={b.satirlar} x={1860} y={170} boyut={96} hiza="sag" />
      <VurguRozet t={t} bas={tYil} bitis={tDusur - 0.1} vurgu="2017" not="AMERICAN HEART ASSOCIATION ADVISORY" x={1530} y={470} genislik={560} boyut={96} />
      <div style={{ position: "absolute", left: 1530, top: 500, transform: `translate(-50%, 0) scale(${sc})`, opacity: al, display: "flex",
        alignItems: "center", gap: 18, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `4px solid ${RENK.yesil}`, borderRadius: 999,
        padding: "14px 34px 14px 16px", boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }}>
        <span style={{ width: 56, height: 56, borderRadius: 14, background: RENK.yesil, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ transform: "rotate(90deg)", display: "flex" }}><IkonYol ad="ok" boyut={40} renk="#fff" kalinlik={7} /></span>
        </span>
        <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 40, letterSpacing: 2, color: RENK.koyuYesil }}>LOWERS LDL</span>
      </div>
      <Etiket t={t} bas={tDoymus} bitis={tDoymamis - 0.1} capa={[330, 440]} konum={[330, 190]} metin="SATURATED FAT" renk={RENK.mercan} />
      <Etiket t={t} bas={tDoymamis} bitis={tPoli - 0.1} capa={[790, 650]} konum={[800, 900]} metin="UNSATURATED FAT" renk={RENK.yesil} />
      <Etiket t={t} bas={tPoli} capa={[790, 650]} konum={[800, 900]} metin="MOSTLY POLYUNSATURATED" renk={RENK.yesil} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.3} />
    </>
  );
};

export default S29;
