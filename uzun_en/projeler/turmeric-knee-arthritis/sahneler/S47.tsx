// Sahne 47 — Madde 1: doktora/eczacıya danış. Not kağıdındaki sahte yazı, kendi kontrol listemizle örtülür.
import React from "react";
import { ANTON, BaslikBlok, Etiket, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Not kağıdının dörtgeni (görsel koordinatı), kenar payıyla
const POLI = "398,766 713,604 1036,736 776,968";
const SATIRLAR = [{ y: 696, m: "BLOOD THINNER", ifade: "blood" }, { y: 748, m: "GALLSTONES", ifade: "gallstones" }, { y: 800, m: "LIVER PROBLEMS", ifade: "liver" }];

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pen = kameraYolu(t, s.sure, [180, 30, 1700], [215, 45, 1640]);
  const tOne = K(0, "one");
  const tTalk = K(1, "talk");
  const tDoc = K(1, "doctor");
  const tEsp = K(1, "especially");
  const tBottle = K(2, "bottle");
  const tEvery = K(2, "every");
  const [sb, ab] = pop(t, tOne, 0.55);
  const aKart = eout(ilerle(t, 0, 0.3));
  return (
    <>
      <Kamera gorsel="tam/47" pencere={pen}>
        {/* not kağıdı üstüne kâğıt zemin + kontrol listesi */}
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, opacity: aKart }}>
          <polygon points={POLI} fill="#F7F2E4" stroke={RENK.lacivert} strokeWidth={3} strokeLinejoin="round" />
        </svg>
        {SATIRLAR.map((r) => {
          const a = eout(ilerle(t, K(1, r.ifade) - 0.1, 0.45));
          return (
            <div key={r.m} style={{ position: "absolute", left: 565, top: r.y, width: 330, opacity: a, transform: `translateY(${(1 - a) * 10}px)`,
              display: "flex", alignItems: "center", gap: 14, fontFamily: INTER, fontWeight: 800, fontSize: 28, color: RENK.lacivert }}>
              <span style={{ width: 24, height: 24, borderRadius: 6, border: `4px solid ${RENK.altin}`, flex: "none" }} />{r.m}
            </div>
          );
        })}
        <Etiket t={t} bas={tDoc} bitis={8.4} capa={[1215, 505]} konum={[1250, 400]} metin="DOCTOR" renk={RENK.lacivert} boyut={34} />
        <Etiket t={t} bas={tBottle} bitis={11.0} capa={[770, 300]} konum={[1090, 200]} metin="BRING THE BOTTLE" renk={RENK.altin} boyut={34} />
        <Etiket t={t} bas={tEvery} capa={[770, 560]} konum={[1090, 330]} metin="EVERY SUPPLEMENT" renk={RENK.yesil} boyut={34} />
      </Kamera>
      <div style={{ position: "absolute", left: 70, top: 90, width: 120, height: 120, borderRadius: "50%", background: RENK.altin, color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 84, opacity: ab, transform: `scale(${sb})`,
        border: `5px solid ${RENK.kagitAcik}`, boxShadow: "0 10px 24px rgba(48,40,34,0.22)" }}>1</div>
      <BaslikBlok t={t} bas={tTalk} bitis={8.4} satirlar={["DOCTOR OR", "PHARMACIST FIRST"]} x={1860} y={180} boyut={96} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
    </>
  );
};

export default S47;
