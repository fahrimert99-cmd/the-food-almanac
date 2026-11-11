// Sahne 48 — Öneri mevcut diyete ve test sonuçlarına göre yönlendirilir; herkes için tek kural yok.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tKural = K(0, "not by one rule");
  const eSon = tKural - 0.15;
  const p = eout(ilerle(t, tKural, 0.5));
  return (
    <>
      <Kamera gorsel="tam/48" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840])} sinirla={false}>
        <Etiket t={t} bas={K(0, "2026")} bitis={eSon} capa={[600, 300]} konum={[520, 100]} metin="2026 GUIDELINE" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(0, "current diet")} bitis={eSon} capa={[1560, 760]} konum={[1690, 545]} metin="CURRENT DIET" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "test results")} bitis={eSon} capa={[1190, 490]} konum={[1300, 150]} metin="TEST RESULTS" renk={RENK.altin} />
        {/* Panodaki boş sayfaya "yazılan" kapanış */}
        <div style={{ position: "absolute", left: 650, top: 400, transform: "translate(-50%, -50%) rotate(-19deg)", opacity: p, textAlign: "center" }}>
          <div style={{ fontFamily: "Anton, sans-serif", fontSize: 52, lineHeight: 1.1, color: RENK.mercan }}>NOT ONE RULE</div>
          <div style={{ fontFamily: "Anton, sans-serif", fontSize: 52, lineHeight: 1.1, color: RENK.lacivert }}>FOR EVERYONE</div>
        </div>
      </Kamera>
    </>
  );
};

export default S48;
