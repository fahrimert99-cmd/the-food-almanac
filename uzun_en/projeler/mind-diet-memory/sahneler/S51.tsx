// Sahne 51 — yemek yaşam tarzının bir parçası: ayakkabı (egzersiz), iskambil (sosyal/zihinsel), başlık ve kapanış notu.
import React from "react";
import { BaslikBlok, Etiket, IkonYol, INTER, Kamera, KaynakEtiketi, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Kutu: React.FC<{ t: number; bas: number; y: number; metin: string; renk: string; ikon?: boolean; boyut?: number }> = ({ t, bas, y, metin, renk, ikon, boyut = 34 }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", right: 70, top: y, opacity: al, transform: `scale(${sc})`, transformOrigin: "100% 50%", display: "flex",
      alignItems: "center", gap: 14, background: "#FCF8EC", border: `4px solid ${renk}`, borderRadius: 999, padding: "10px 30px",
      boxShadow: "0 10px 26px rgba(48,40,34,0.18)", fontFamily: INTER, fontWeight: 800, fontSize: boyut, letterSpacing: 2, color: RENK.lacivert }}>
      {ikon && <IkonYol ad="onay" boyut={38} renk={renk} />}{metin}
    </div>
  );
};

const S51: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFood = K(0, "food"), tEx = K(1, "exercise"), tSoc = K(1, "social"), tMen = K(1, "mental"), tHeart = K(1, "heart"), tTog = K(2, "together");
  return (
    <>
      <Kamera gorsel="tam/51" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={tFood} bitis={tEx - 0.1} capa={[1160, 560]} konum={[1500, 620]} metin="FOOD: ONE PIECE" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={tEx} capa={[620, 790]} konum={[1000, 880]} metin="EXERCISE" renk={RENK.mercan} />
        <Etiket t={t} bas={tSoc} capa={[980, 500]} konum={[800, 300]} metin="SOCIAL TIME" renk={RENK.altin} />
        <Etiket t={t} bas={tMen} capa={[1010, 640]} konum={[1500, 760]} metin="MENTAL CHALLENGE" renk={RENK.lacivert} />
      </Kamera>
      <KaynakEtiketi t={t} metin="THE 2025 TRIAL" bas={K(1, "2025")} />
      <BaslikBlok t={t} bas={0.1} satirlar={["THE WHOLE", "LIFESTYLE"]} x={1860} y={170} boyut={92} hiza="sag" />
      <Kutu t={t} bas={tHeart} y={400} metin="HEART HEALTH CHECKS" renk={RENK.mercan} />
      <Kutu t={t} bas={tTog} y={870} metin="TOGETHER, THEY MAY MATTER MORE" renk={RENK.altin} ikon boyut={26} />
    </>
  );
};

export default S51;
