// Sahne 19 — kısa denemeler kısa soruyu yanıtlar. Takvimdeki sahte yazılar kâğıt kartla örtülür; cam ve cihaz üstte yeniden çizilir.
import React from "react";
import { BaslikBlok, Etiket, Img, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, staticFile } from "../kutuphane";

const CAM = { x: 752, y: 494, w: 222, h: 470 };

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tShort = K(0, "short"), tWeeks = K(1, "weeks"), tNext = K(2, "next study"), tCheck = K(2, "check your own");
  const aKart = 1;
  const p1 = eout(ilerle(t, tShort, 0.6));
  const p2 = eout(ilerle(t, tWeeks, 1.6));
  const [sq, aq] = pop(t, tWeeks + 1.4, 0.5);
  const [sl, al] = pop(t, tShort + 0.3, 0.5);
  return (
    <>
      <Kamera gorsel="tam/19" pencere={kameraYolu(t, s.sure, [0, 30, 1920], [60, 70, 1760])}>
        {/* takvim sayfasını örten kart */}
        <div style={{ position: "absolute", left: 488, top: 128, width: 750, height: 590, opacity: aKart, background: RENK.kagitAcik,
          border: `5px solid ${RENK.lacivert}`, borderRadius: 14, boxSizing: "border-box" }}>
          <div style={{ position: "absolute", right: 22, top: 14, fontFamily: INTER, fontWeight: 800, fontSize: 20, letterSpacing: 3,
            color: RENK.gri, opacity: al, transform: `scale(${sl})` }}>ILLUSTRATIVE</div>
          {/* satır 1: kısa denemeler */}
          <div style={{ position: "absolute", left: 40, top: 70, fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 2,
            color: RENK.lacivert, opacity: p1 }}>SHORT TRIALS</div>
          <div style={{ position: "absolute", left: 40, top: 122, height: 34, width: 130 * p1, borderRadius: 17, background: RENK.altin }} />
          {/* satır 2: haftalar süren kullanım */}
          <div style={{ position: "absolute", left: 40, top: 232, fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 2,
            color: RENK.lacivert, opacity: p2 }}>WEEKS OF DAILY USE</div>
          <div style={{ position: "absolute", left: 40, top: 284, height: 34, width: 580 * p2, borderRadius: 17, background: RENK.koyuYesil }} />
          <div style={{ position: "absolute", left: 650, top: 268, fontFamily: INTER, fontWeight: 800, fontSize: 56, color: RENK.mercan,
            opacity: aq, transform: `scale(${sq})` }}>?</div>
        </div>
        {/* cam: görselden yeniden kesilip kartın üstüne çizilir */}
        <div style={{ position: "absolute", left: CAM.x, top: CAM.y, width: CAM.w, height: CAM.h, overflow: "hidden", borderRadius: "40px 40px 0 0", opacity: aKart }}>
          <Img src={staticFile("img/tam/19.jpg")} style={{ position: "absolute", left: -CAM.x, top: -CAM.y, width: 1920, height: 1080 }} />
        </div>
        <Etiket t={t} bas={tCheck} capa={[1190, 790]} konum={[1480, 900]} metin="YOUR OWN RESPONSE" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={tNext} satirlar={["THE NEXT", "STUDY"]} x={1330} y={230} boyut={80}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
    </>
  );
};

export default S19;
