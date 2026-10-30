// Sahne 20 — USPSTF önerisi: sağ üstte kart içinde başlıklar, kavanoza etiketler, sonda "kanıt yetersiz".
import React from "react";
import { BaslikBlok, Etiket, Hap, Ikon, Kamera, KaynakEtiketi, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tPost = K(0, "postmenopausal"), tHome = K(0, "at home"), tAgainst = K(0, "recommends"), tD = K(0, "400");
  const tCa = K(0, "1,000"), tHigher = K(1, "higher doses"), tMen = K(1, "men"), tEv = K(1, "evidence");
  const aKart = eout(ilerle(t, 0.2, 0.5));
  const [sc, al] = pop(t, tEv, 0.5);
  return (
    <>
      <Kamera gorsel="tam/20" pencere={kameraYolu(t, s.sure, [30, 17, 1860], [90, 50, 1740])}>
        <Etiket t={t} bas={tD} bitis={tHigher - 0.1} capa={[720, 670]} konum={[1330, 400]} metin="VITAMIN D ≤ 400 IU" renk={RENK.altin} />
        <Etiket t={t} bas={tCa} bitis={tHigher - 0.1} capa={[540, 560]} konum={[1330, 480]} metin="CALCIUM ≤ 1,000 MG" renk={RENK.lacivert} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      {/* sağ üst kart zemini */}
      <div style={{ position: "absolute", left: 980, top: 130, width: 860, height: 220, opacity: aKart, borderRadius: 28,
        background: "#FBF8F1", border: `3px solid ${RENK.lacivert}`, boxShadow: "0 12px 30px rgba(48,40,34,0.2)" }} />
      <BaslikBlok t={t} bas={tPost} bitis={tAgainst - 0.1} satirlar={["POSTMENOPAUSAL"]} x={1020} y={190} boyut={84} renkler={[RENK.lacivert]} />
      <BaslikBlok t={t} bas={tHome} bitis={tAgainst - 0.1} satirlar={["WOMEN AT HOME"]} x={1020} y={285} boyut={60} renkler={[RENK.koyuYesil]} />
      <BaslikBlok t={t} bas={tAgainst} bitis={tHigher - 0.1} satirlar={["RECOMMENDS", "AGAINST"]} x={1020} y={190} boyut={84}
        renkler={[RENK.lacivert, RENK.mercan]} adim={0.4} />
      <BaslikBlok t={t} bas={tHigher} satirlar={["HIGHER DOSES", "AND MEN"]} x={1020} y={190} boyut={84}
        renkler={[RENK.lacivert, RENK.lacivert]} adim={tMen - tHigher} />
      {al > 0 && (
        <>
          <Ikon t={t} bas={tEv} ad="soru" x={1060} y={430} boyut={80} zemin={RENK.altin} />
          <div style={{ position: "absolute", left: 1120, top: 392, opacity: al, transform: `scale(${sc})`, transformOrigin: "0 50%" }}>
            <Hap metin="EVIDENCE NOT ENOUGH" renk={RENK.altin} boyut={34} />
          </div>
        </>
      )}
    </>
  );
};

export default S20;
