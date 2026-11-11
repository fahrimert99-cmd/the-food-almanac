// Sahne 17 — iki haftada ±0,9 kg; sağda başlık/rozet, altında iki hap, sonra vücut yağı.
import React from "react";
import { AltSis, Baslik, IkonYol, INTER, Kamera, RENK, SP, VurguRozet, kelimeZamani, kameraYolu, pop, sol } from "../kutuphane";

// Zeminli hap + ok simgesi (yukarı/aşağı)
const Hapim: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string; yukari: boolean }> = ({ t, bas, bitis = 1e9, x, y, metin, renk, yukari }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", right: 1920 - x, top: y, opacity: a, transform: `scale(${sc})`, transformOrigin: "100% 50%",
      display: "flex", alignItems: "center", gap: 14, background: "#FCF8EC", border: `3px solid ${renk}`, borderRadius: 999,
      padding: "8px 26px 8px 8px", boxShadow: "0 8px 22px rgba(48,40,34,0.16)", whiteSpace: "nowrap" }}>
      <span style={{ width: 46, height: 46, borderRadius: "50%", background: renk, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ transform: `rotate(${yukari ? -90 : 90}deg)`, display: "flex" }}><IkonYol ad="ok" boyut={30} renk="#fff" kalinlik={7} /></span>
      </span>
      <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1, color: RENK.lacivert }}>{metin}</span>
    </div>
  );
};

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAyrim = 10.1; // vücut yağı vuruşundan hemen önce ilk grup çıkar
  return (
    <>
      <Kamera gorsel="tam/17" pencere={kameraYolu(t, s.sure, [0, 40, 1800], [90, 30, 1700])} />
      <AltSis a={0.5} />
      {/* vuruş 1: iki hafta + ±0,9 kg */}
      <Baslik t={t} bas={K(0, "two weeks")} bitis={tAyrim} metin="TWO WEEKS" x={1860} y={190} boyut={96} hiza="sag" renk={RENK.lacivert} />
      <VurguRozet t={t} bas={K(0, "0.9")} bitis={tAyrim} vurgu="±0.9 KG" not="gained on one diet, lost on the other" x={1560} y={270}
        genislik={500} boyut={104} renk={RENK.altin} />
      <Hapim t={t} bas={K(0, "ultra-processed")} bitis={tAyrim} x={1860} y={590} metin="ULTRA-PROCESSED: GAINED" renk={RENK.mercan} yukari />
      <Hapim t={t} bas={K(0, "unprocessed")} bitis={tAyrim} x={1860} y={680} metin="UNPROCESSED: LOST" renk={RENK.yesil} yukari={false} />
      {/* vuruş 2: vücut yağı */}
      <Baslik t={t} bas={K(1, "Body fat")} metin="BODY FAT" x={1860} y={190} boyut={96} hiza="sag" renk={RENK.lacivert} />
      <Hapim t={t} bas={K(1, "0.4")} x={1860} y={330} metin="ROSE ~0.4 KG" renk={RENK.mercan} yukari />
      <Hapim t={t} bas={K(1, "fell")} x={1860} y={430} metin="FELL ~0.3 KG" renk={RENK.yesil} yukari={false} />
    </>
  );
};

export default S17;
