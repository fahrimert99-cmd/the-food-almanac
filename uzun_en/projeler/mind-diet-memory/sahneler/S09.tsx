// Sahne 9 — eksik olanlar (toz, takviye, egzotik) ve sıradan market rafı.
import React from "react";
import { BaslikBlok, Etiket, Ikon, INTER, Kamera, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const cik = K(2, "Everything") - 0.1;
  const pPanel = eout(ilerle(t, 0.1, 0.6)) * (1 - eout(ilerle(t, cik, 0.5)));
  const yok = [
    { ifade: "powder", metin: "NO POWDER" }, { ifade: "supplement", metin: "NO SUPPLEMENT" }, { ifade: "exotic", metin: "NO EXOTIC INGREDIENT" },
  ];
  return (
    <>
      <Kamera gorsel="tam/09" pencere={kameraYolu(t, s.sure, [40, 60, 1840], [120, 110, 1680])}>
        <Etiket t={t} bas={K(2, "list")} capa={[1000, 330]} konum={[1000, 150]} metin="LEAFY GREENS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(2, "ordinary")} capa={[960, 590]} konum={[1180, 900]} metin="BERRIES" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(2, "supermarket")} capa={[1660, 600]} konum={[1640, 880]} metin="NUTS" renk={RENK.altin} />
      </Kamera>
      <Panel a={pPanel} taraf="sol" genislik={900} opak={0.96} />
      <BaslikBlok t={t} bas={0.35} satirlar={["WHAT'S", "MISSING?"]} x={70} y={190} boyut={100} bitis={cik} renkler={[RENK.lacivert, RENK.mercan]} />
      {yok.map((o, i) => {
        const b = K(1, o.ifade);
        const [sc, al] = pop(t, b, 0.5);
        const a = al * (1 - eout(ilerle(t, cik, 0.5)));
        if (a <= 0) return null;
        return (
          <div key={o.metin} style={{ position: "absolute", left: 70, top: 440 + i * 110, opacity: a, transform: `scale(${sc})`, transformOrigin: "0 50%",
            display: "flex", alignItems: "center", gap: 18, background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`, borderRadius: 999,
            padding: "10px 30px 10px 12px", fontFamily: INTER, fontWeight: 800, fontSize: 32, letterSpacing: 1.5, color: RENK.lacivert,
            boxShadow: "0 8px 22px rgba(48,40,34,0.14)", whiteSpace: "nowrap" }}>
            <span style={{ width: 46, height: 46, borderRadius: "50%", background: RENK.mercan, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width={28} height={28} viewBox="0 0 48 48" stroke="#fff" strokeWidth={7} strokeLinecap="round"><line x1="10" y1="10" x2="38" y2="38" /><line x1="38" y1="10" x2="10" y2="38" /></svg>
            </span>
            {o.metin}
          </div>
        );
      })}
    </>
  );
};

export default S09;
