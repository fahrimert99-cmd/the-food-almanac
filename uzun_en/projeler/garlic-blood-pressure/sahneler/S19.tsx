// Sahne 19 — çift kör: iki özdeş şişe, etiketlerde "?"; ne hastalar ne araştırmacılar bilir.
import React from "react";
import { Baslik, Hap, IkonYol, INTER, Kamera, RENK, SP, ANTON, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCift = K(1, "double-blind"), tGuard = K(1, "guards");
  const aUst = sol(t, tCift - 0.1);
  const [sq, aq] = pop(t, K(0, "who"), 0.5);
  const [sg, ag] = pop(t, tGuard, 0.5);
  const kisi = [
    { ifade: K(0, "patients"), metin: "PATIENTS" },
    { ifade: K(0, "researchers"), metin: "RESEARCHERS" },
  ];
  return (
    <>
      <Kamera gorsel="tam/19" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 0, 1860])}>
        {/* alt kenardaki sahte harf kâğıt yamayla örtülür */}
        <div style={{ position: "absolute", left: 420, top: 925, width: 220, height: 80,
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, #F6F3EC 0%, #F6F3EC 60%, rgba(246,243,236,0) 100%)" }} />
        {[703, 1223].map((x) => (
          <div key={x} style={{ position: "absolute", left: x - 100, top: 530, width: 200, height: 180, textAlign: "center",
            fontFamily: ANTON, fontSize: 190, lineHeight: "180px", color: RENK.lacivert,
            transform: `scale(${sq})`, opacity: aq }}>?</div>
        ))}
      </Kamera>
      {/* üst: kimler bilmiyor */}
      <div style={{ position: "absolute", left: 0, right: 0, top: 80, display: "flex", justifyContent: "center", gap: 40, opacity: aUst }}>
        {kisi.map((k) => {
          const [sc, al] = pop(t, k.ifade, 0.5);
          return (
            <div key={k.metin} style={{ transform: `scale(${sc})`, opacity: al }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, whiteSpace: "nowrap", background: RENK.kagitAcik,
                border: `3px solid ${RENK.lacivert}`, borderRadius: 999, padding: "8px 26px 8px 10px", fontFamily: INTER,
                fontWeight: 800, fontSize: 30, letterSpacing: 2, color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.18)" }}>
                <span style={{ width: 44, height: 44, borderRadius: "50%", background: RENK.altin, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <IkonYol ad="soru" boyut={30} renk="#fff" kalinlik={7} />
                </span>
                {k.metin}: DON'T KNOW
              </div>
            </div>
          );
        })}
      </div>
      <Baslik t={t} bas={tCift} metin="DOUBLE-BLIND" x={960} y={110} boyut={112} renk={RENK.koyuYesil} hiza="orta" />
      {ag > 0 && (
        <div style={{ position: "absolute", left: 960, top: 900, transform: `translate(-50%, -50%) scale(${sg})`, opacity: ag }}>
          <Hap metin="GUARDS AGAINST WISHFUL THINKING" renk={RENK.altin} boyut={34} />
        </div>
      )}
    </>
  );
};

export default S19;
