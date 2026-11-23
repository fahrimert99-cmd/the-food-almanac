// Sahne 14 — buz banyosunda pilav; sağda CDC önerisi ve sıcaklık sınırları.
import React from "react";
import { Baslik, Etiket, IkonYol, INTER, Kamera, Panel, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const PillHap: React.FC<{ t: number; bas: number; bitis?: number; metin: string; renk: string; ikon?: "carpi" | "saat"; x: number; y: number }> = ({
  t, bas, bitis = 1e9, metin, renk, ikon, x, y,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", right: 1920 - x, top: y, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: a, display: "flex",
      alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999,
      padding: "10px 28px 10px 14px", fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 2, color: RENK.murekkep,
      boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
      <span style={{ width: 40, height: 40, borderRadius: "50%", background: renk, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {ikon ? <IkonYol ad={ikon} boyut={24} renk="#fff" kalinlik={7} /> : null}
      </span>
      {metin}
    </div>
  );
};

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pPanel = 1, tAlt = K(1, "below"), tUst = K(1, "above"), tBit = tAlt - 0.3;
  return (
    <>
      <Kamera gorsel="tam/14" pencere={kameraYolu(t, s.sure, [0, 40, 1740], [50, 80, 1640])}>
        <Etiket t={t} bas={K(1, "rice")} bitis={tBit} capa={[700, 450]} konum={[270, 180]} metin="RICE" renk={RENK.altin} boyut={30} />
        <Etiket t={t} bas={K(2, "cool")} capa={[1000, 700]} konum={[1500, 800]} metin="COOL QUICKLY" renk={RENK.yesil} boyut={30} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={700} />
      <PillHap t={t} bas={K(0, "CDC's")} bitis={tBit} metin="CDC ADVICE" renk={RENK.lacivert} x={1860} y={200} />
      <PillHap t={t} bas={K(1, "room")} bitis={tBit} metin="NO ROOM-TEMP COOLING" renk={RENK.mercan} ikon="carpi" x={1860} y={330} />
      <Baslik t={t} bas={tAlt} metin="BELOW 41°F" x={1860} y={470} boyut={90} renk={RENK.yesil} hiza="sag" />
      <Baslik t={t} bas={tUst} metin="OR ABOVE 140°F" x={1860} y={575} boyut={90} renk={RENK.mercan} hiza="sag" />
    </>
  );
};

export default S14;
