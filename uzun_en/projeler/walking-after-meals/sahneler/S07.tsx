// Sahne 7 — insülin: organ, yeşil parçacıklar ve damar; sağda başlık, altta hedef dokular.
import React from "react";
import { BaslikBlok, Etiket, INTER, Kamera, Not, Parcaciklar, RENK, SP, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Doku: React.FC<{ t: number; bas: number; x: number; y: number; metin: string }> = ({ t, bas, x, y, metin }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al, display: "flex",
      alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${RENK.yesil}`, borderRadius: 999,
      padding: "10px 26px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 1.5, color: RENK.murekkep,
      boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
      <span style={{ width: 20, height: 20, borderRadius: "50%", background: RENK.yesil }} />{metin}
    </div>
  );
};

const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      {/* alttaki sayfa numarası pencere dışında; sağdaki sahte yazı yamayla örtülür */}
      <Kamera gorsel="tam/07" pencere={kameraYolu(t, s.sure, [60, 20, 1800], [100, 50, 1700])}>
        <div style={{ position: "absolute", left: 1635, top: 385, width: 150, height: 50,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, rgb(251,249,224) 0%, rgb(251,249,224) 65%, rgba(251,249,224,0) 100%)` }} />
        <Etiket t={t} bas={K(0, "releasing")} bitis={K(0, "helps") + 0.8} capa={[700, 565]} konum={[900, 430]} metin="RELEASED INSULIN" renk={RENK.yesil} />
        <Parcaciklar t={t} bas={K(0, "move")} kaynak={[1000, 570]} hedef={[1500, 560]} adet={18} aralik={0.16} kavis={-60} yayilma={40}
          hedefYayilma={40} renk={RENK.yesil} tohum="s07" />
        <Etiket t={t} bas={K(0, "blood")} bitis={K(0, "muscle") - 0.2} capa={[1450, 560]} konum={[1450, 700]} metin="BLOOD" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "insulin")} satirlar={["INSULIN"]} x={1860} y={150} boyut={130} hiza="sag" renkler={[RENK.koyuYesil]} />
      <Not t={t} bas={K(0, "helps")} metin="helps glucose leave the bloodstream" x={1860} y={225} hiza="sag" boyut={34} />
      <Doku t={t} bas={K(0, "muscle")} x={1130} y={840} metin="MUSCLE" />
      <Doku t={t} bas={K(0, "liver")} x={1430} y={840} metin="LIVER" />
      <Doku t={t} bas={K(0, "fat")} x={1700} y={840} metin="FAT TISSUE" />
    </>
  );
};

export default S07;
