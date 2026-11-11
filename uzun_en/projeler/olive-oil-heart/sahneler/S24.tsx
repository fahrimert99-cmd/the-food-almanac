// Sahne 24 — ABD kohortları: arşiv dolabı üstünde katılımcı kartları, sağda süre rozeti.
import React from "react";
import { ANTON, Baslik, Etiket, INTER, Kamera, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Ahşap üstüne oturan sayı kartı
const Kart: React.FC<{ t: number; bas: number; x: number; y: number; sayi: string; ad: string; alt: string; renk: string }> = ({ t, bas, x, y, sayi, ad, alt, renk }) => {
  const [sc, al] = pop(t, bas, 0.55);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, width: 450, transform: `translate(-50%, 0) scale(${sc})`, opacity: al,
      background: "#FCF8EC", border: `4px solid ${renk}`, borderRadius: 22, padding: "8px 20px 12px", textAlign: "center",
      boxShadow: "0 10px 26px rgba(48,40,34,0.22)" }}>
      <div style={{ fontFamily: ANTON, fontSize: 64, lineHeight: 1.1, color: renk, whiteSpace: "nowrap" }}>{sayi} <span style={{ color: RENK.lacivert }}>{ad}</span></div>
      <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 22, letterSpacing: 2, color: RENK.lacivert }}>{alt}</div>
    </div>
  );
};

const S24: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tKad = K(1, "61,181"), tErk = K(1, "31,797"), tSag = K(1, "free of heart disease"), tYil = K(1, "24 years");
  const [sS, aS] = pop(t, tSag, 0.55);
  const [sY, aY] = pop(t, tYil, 0.6);
  return (
    <>
      <Kamera gorsel="tam/24" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [90, 70, 1700])}>
        {/* çekmecedeki kâğıdın anlamsız yazısı */}
        <div style={{ position: "absolute", left: 745, top: 505, width: 150, height: 60,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 60%, ${kagit(0)} 100%)` }} />
      </Kamera>
      <Baslik t={t} bas={0.1} metin="UNITED STATES" x={110} y={130} boyut={92} renk={RENK.koyuYesil} />
      <Kart t={t} bas={tKad} x={830} y={205} sayi="61,181" ad="WOMEN" alt="NURSES' HEALTH STUDY" renk={RENK.koyuYesil} />
      <Kart t={t} bas={tErk} x={1330} y={205} sayi="31,797" ad="MEN" alt="HEALTH PROFESSIONALS STUDY" renk={RENK.lacivert} />
      <Etiket t={t} bas={tSag} capa={[900, 560]} konum={[1690, 400]} metin="HEART-DISEASE FREE" renk={RENK.yesil} boyut={24} />
      <div style={{ position: "absolute", left: 1730, top: 470, width: 280, transform: `translate(-50%, 0) scale(${sY})`, opacity: aY,
        background: "#FCF8EC", border: `4px solid ${RENK.altin}`, borderRadius: 24, padding: "6px 14px 12px", textAlign: "center",
        boxShadow: "0 10px 26px rgba(48,40,34,0.2)" }}>
        <div style={{ fontFamily: ANTON, fontSize: 92, lineHeight: 1.1, color: RENK.altin }}>24</div>
        <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 24, letterSpacing: 2, color: RENK.lacivert }}>YEARS, UP TO</div>
      </div>
    </>
  );
};

export default S24;
