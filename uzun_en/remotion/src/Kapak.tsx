// YouTube kapak görseli (1280x720): sağ panelde gravür kapak görselinin konusu; solda kâğıt üstünde, sol yarıyı dolduran
// büyük başlık (son satır, yani vücuttaki sonuç, altın renkte) + sağ üstte vurgu rozeti. Rakip analizinden: kapakta başlığın
// kısa hâli dev harflerle okunmalı; küçük kanal rozeti yok (kanal adı zaten videonun altında görünür).
// Girdi: tam.gen.json -> kapak {satirlar, vurgu, vurgu_alt, gorsel, kutu}.
import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";
import "./fontlar";
import { ANTON, INTER } from "./fontlar";
import marka from "./marka.gen.json";
import { kagit } from "./ortak";
import { RENK } from "./zaman";
import { TAM } from "./tam/veri";

const GENISLIK = 700;   // yazı bloğunun en geniş satırı (px)
const YUKSEKLIK = 620;  // yazı bloğunun toplam yüksekliği (px)
const SATIR = 1.0;      // satır aralığı (Anton zaten uzun harfli)
const MASKE = "linear-gradient(90deg, transparent 0, #000 10%, #000 92%, transparent 100%), "
  + "linear-gradient(180deg, transparent 0, #000 8%, #000 92%, transparent 100%)";

// Konunun gireceği sağ panel (tuval px). Vurgu rozeti sağ üstte durduğu için panel o zaman biraz aşağıdan başlar.
const yerlesim = (kutu: number[] | null | undefined, rozet: boolean) => {
  const [x0, y0, x1, y1] = kutu && kutu.length === 4 ? kutu : [0.5, 0, 1, 1];
  const P = { x0: 600, x1: 1240, y0: rozet ? 150 : 50, y1: 680 };
  const pw = P.x1 - P.x0, ph = P.y1 - P.y0;
  const s = Math.max(0.6, Math.min(1.8, pw / ((x1 - x0) * 1280), ph / ((y1 - y0) * 720)));
  const w = 1280 * s, h = 720 * s;
  return { w, h, sol: P.x0 + (pw - (x1 - x0) * w) / 2 - x0 * w, ust: P.y0 + (ph - (y1 - y0) * h) / 2 - y0 * h };
};

export const Kapak: React.FC = () => {
  const k = TAM.kapak;
  const satirlar = k.satirlar.length ? k.satirlar : [marka.ad.toUpperCase()];
  const enUzun = Math.max(...satirlar.map((s) => s.length));
  const boyut = Math.floor(Math.min(190, GENISLIK / (enUzun * 0.47), YUKSEKLIK / (satirlar.length * SATIR)));
  const yukseklik = satirlar.length * boyut * SATIR;
  const ust = (720 - yukseklik) / 2;
  const yer = yerlesim(k.kutu, !!k.vurgu);
  return (
    <AbsoluteFill style={{ backgroundColor: RENK.kagit, overflow: "hidden" }}>
      {k.gorsel && (
        // Konu (hazirla.py'nin bulduğu sınır kutusu) sağ panele en büyük hâliyle ve kesilmeden sığdırılır; görselin kenarları
        // kâğıda yumuşakça karışır.
        <Img src={staticFile(`img/${k.gorsel}.jpg`)} style={{ position: "absolute", left: yer.sol, top: yer.ust, width: yer.w, height: yer.h,
          objectFit: "cover", WebkitMaskImage: MASKE, WebkitMaskComposite: "source-in", maskImage: MASKE, maskComposite: "intersect" }} />
      )}
      <div style={{ position: "absolute", inset: 0,
        background: `linear-gradient(90deg, ${kagit(1)} 0%, ${kagit(1)} 44%, ${kagit(0.6)} 54%, ${kagit(0)} 64%)` }} />
      <div style={{ position: "absolute", inset: 14, border: `4px solid ${RENK.altin}`, borderRadius: 18 }} />
      {satirlar.map((s, i) => (
        <div key={i} style={{ position: "absolute", left: 50, top: ust + i * boyut * SATIR, fontFamily: ANTON, fontSize: boyut,
          lineHeight: `${boyut * SATIR}px`, whiteSpace: "nowrap",
          color: i === satirlar.length - 1 && satirlar.length > 1 ? RENK.altin : RENK.lacivert }}>{s}</div>
      ))}
      {k.vurgu && (
        <div style={{ position: "absolute", left: 1105, top: 170, transform: "translate(-50%, -50%) rotate(-6deg)", width: 230, height: 230,
          borderRadius: "50%", background: RENK.mercan, border: "8px solid #FBF8F1", boxShadow: "0 14px 34px rgba(48,40,34,0.35)",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#fff" }}>
          <div style={{ fontFamily: ANTON, fontSize: k.vurgu.length > 4 ? 58 : 72, lineHeight: 1 }}>{k.vurgu}</div>
          {k.vurgu_alt && (
            <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 19, lineHeight: 1.15, textAlign: "center", marginTop: 8,
              maxWidth: 170, textTransform: "uppercase", letterSpacing: 1 }}>{k.vurgu_alt}</div>
          )}
        </div>
      )}
    </AbsoluteFill>
  );
};
