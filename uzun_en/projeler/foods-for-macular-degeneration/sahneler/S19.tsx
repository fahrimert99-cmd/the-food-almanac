// Sahne 19 — AREDS katılımcıları ve gruplar
import React from "react";
import { BaslikBlok, INTER, Kamera, KaynakEtiketi, Liste, Panel, RENK, SP, VurguRozet, eout, ilerle, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t3 = K(0, "3,640"), tAged = K(0, "aged");
  const [sc, al] = pop(t, tAged, 0.5);
  const pPanel = eout(ilerle(t, 0.2, 0.7));
  return (
    <>
      <Kamera gorsel="tam/19" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1840])}>
        {/* takvimdeki anlamsız yazıları kâğıt rengiyle örter */}
        <div style={{ position: "absolute", left: 60, top: 40, width: 960, height: 500,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 82%, ${kagit(0)} 100%)` }} />
        <div style={{ position: "absolute", left: 90, top: 440, width: 860, height: 130,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 60%, ${kagit(0)} 100%)` }} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={780} />
      <BaslikBlok t={t} bas={t3 - 0.1} satirlar={["3,640", "PEOPLE"]} x={1860} y={170} boyut={128} hiza="sag" />
      <div style={{ position: "absolute", right: 60, top: 430, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: al,
        background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`, borderRadius: 999, padding: "10px 28px", fontFamily: INTER,
        fontWeight: 800, fontSize: 30, letterSpacing: 1.5, color: RENK.lacivert, whiteSpace: "nowrap" }}>AGED 55 TO 80</div>
      <Liste t={t} isaret="nokta" x={1180} y={540} aralik={86} boyut={32} genislik={700} ogeler={[
        { bas: K(1, "vitamins"), metin: "VITAMINS C + E + BETA-CAROTENE", renk: RENK.yesil },
        { bas: K(1, "zinc"), metin: "ZINC + COPPER", renk: RENK.altin },
        { bas: K(1, "both"), metin: "BOTH COMBINATIONS", renk: RENK.koyuYesil },
        { bas: K(1, "placebo"), metin: "PLACEBO", renk: RENK.lacivert },
      ]} />
      <VurguRozet t={t} bas={K(1, "6.3")} vurgu="6.3 YEARS" not="average follow-up" x={470} y={150} boyut={84} genislik={440} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
    </>
  );
};

export default S19;
