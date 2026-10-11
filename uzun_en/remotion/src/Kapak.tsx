// YouTube kapak görseli (1280x720). Rakip analizinden (Food code, ilk videonun %2,4 tıklama oranı): beyaz zemin, solda her
// satırı ayrı ayrı blok genişliğine büyütülmüş dev başlık (son satır, yani vücuttaki sonuç, altın renkte) ve altında
// isteğe bağlı kısa şerit; sağda kenarlara taşan büyük, canlı konu görseli; sağ üstte vurgu rozeti. Çerçeve ve kanal rozeti yok.
// Girdi: tam.gen.json -> kapak {satirlar, serit, vurgu, vurgu_alt, gorsel, kutu, zemin}.
import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";
import "./fontlar";
import { ANTON, INTER } from "./fontlar";
import marka from "./marka.gen.json";
import { RENK } from "./zaman";
import { TAM } from "./tam/veri";

const SOL = 46;          // yazı bloğunun sol kenarı (px)
const BLOK = 600;        // yazı bloğunun genişliği: her satır bu genişliğe büyütülür (px)
const AZAMI = 230;       // tek bir satırın en büyük punto değeri
const ORAN = 1.8;        // en büyük satır en küçüğün en çok bu katı olur (kısa kelime devleşmesin)
const SATIR = 0.98;      // satır yüksekliği (punto katı); Anton'un büyük harf yüksekliği 0.86
const DIKEY = 40;        // üst/alt boşluk (px)
const SERIT = 34;        // şerit yazı puntosu
// Anton-Regular harf genişlikleri (em, PIL ile ölçüldü): satırları tarayıcıda ölçmeden genişliğe oturtmak için.
const EN: Record<string, number> = {
  A: 0.485, B: 0.479, C: 0.474, D: 0.493, E: 0.412, F: 0.399, G: 0.485, H: 0.499, I: 0.227, J: 0.466, K: 0.472, L: 0.397,
  M: 0.746, N: 0.498, O: 0.486, P: 0.472, Q: 0.494, R: 0.477, S: 0.461, T: 0.396, U: 0.474, V: 0.469, W: 0.712, X: 0.484,
  Y: 0.446, Z: 0.41, "1": 0.331, " ": 0.234, "-": 0.311, "–": 0.311, "—": 0.563, ":": 0.242, "?": 0.492, "!": 0.229,
  "%": 1.057, ".": 0.229, ",": 0.236, "'": 0.214, "’": 0.214, "&": 0.52, "+": 0.355, "=": 0.311, "/": 0.405,
};
const genislik = (s: string) => [...s.toUpperCase()].reduce((t, c) => t + (EN[c] ?? (/\d/.test(c) ? 0.494 : 0.48)), 0);
const MASKE = "linear-gradient(90deg, transparent 0, #000 12%, #000 94%, transparent 100%), "
  + "linear-gradient(180deg, transparent 0, #000 6%, #000 94%, transparent 100%)";

const rgba = (hex: string, a: number) => {
  const n = parseInt(hex.replace("#", ""), 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
};

// Satır puntoları: her satır blok genişliğini doldurur; toplam yükseklik sığmazsa hepsi aynı oranda küçülür.
const puntolar = (satirlar: string[], yukseklik: number) => {
  const ham = satirlar.map((s) => Math.min(AZAMI, BLOK / Math.max(genislik(s), 0.5)));
  const taban = Math.min(...ham);
  const p = ham.map((x) => Math.min(x, taban * ORAN));
  const k = Math.min(1, yukseklik / p.reduce((t, x) => t + x * SATIR, 0));
  return p.map((x) => Math.floor(x * k));
};

// Konu (hazirla.py'nin bulduğu sınır kutusu) sağ panele büyütülür; panelden biraz taşar, sağ kenarda kesilebilir.
const yerlesim = (kutu: number[] | null | undefined) => {
  const [x0, y0, x1, y1] = kutu && kutu.length === 4 ? kutu : [0.5, 0, 1, 1];
  const P = { x0: 620, x1: 1280, y0: 20, y1: 700 };
  const pw = P.x1 - P.x0, ph = P.y1 - P.y0;
  const s = Math.max(0.6, Math.min(2.4, 1.12 * Math.min(pw / ((x1 - x0) * 1280), ph / ((y1 - y0) * 720))));
  const w = 1280 * s, h = 720 * s;
  return { w, h, sol: P.x0 + pw * 0.56 - ((x0 + x1) / 2) * w, ust: P.y0 + ph / 2 - ((y0 + y1) / 2) * h };
};

export const Kapak: React.FC = () => {
  const k = TAM.kapak;
  const zemin = k.zemin || "#FFFFFF";
  const satirlar = k.satirlar.length ? k.satirlar : [marka.ad.toUpperCase()];
  const seritH = k.serit ? SERIT * 1.9 + 22 : 0;
  const p = puntolar(satirlar, 720 - 2 * DIKEY - seritH);
  const yaziH = p.reduce((t, x) => t + x * SATIR, 0);
  let y = (720 - yaziH - seritH) / 2;
  const yer = yerlesim(k.kutu);
  return (
    <AbsoluteFill style={{ backgroundColor: zemin, overflow: "hidden" }}>
      {k.gorsel && (
        <Img src={staticFile(`img/${k.gorsel}.jpg`)} style={{ position: "absolute", left: yer.sol, top: yer.ust, width: yer.w, height: yer.h,
          objectFit: "cover", WebkitMaskImage: MASKE, WebkitMaskComposite: "source-in", maskImage: MASKE, maskComposite: "intersect" }} />
      )}
      {/* Görsel sola taşarsa yazının altı zemin rengiyle örtülür */}
      <div style={{ position: "absolute", inset: 0,
        background: `linear-gradient(90deg, ${rgba(zemin, 1)} 0%, ${rgba(zemin, 1)} 46%, ${rgba(zemin, 0)} 56%)` }} />
      {satirlar.map((s, i) => {
        const ust = y;
        y += p[i] * SATIR;
        return (
          <div key={i} style={{ position: "absolute", left: SOL, top: ust, fontFamily: ANTON, fontSize: p[i], lineHeight: `${p[i] * SATIR}px`,
            whiteSpace: "nowrap", color: i === satirlar.length - 1 && satirlar.length > 1 ? RENK.altin : RENK.lacivert }}>{s}</div>
        );
      })}
      {k.serit && (
        <div style={{ position: "absolute", left: SOL, top: y + 22, background: RENK.mercan, color: "#fff", borderRadius: 10,
          padding: `${SERIT * 0.28}px ${SERIT * 0.55}px`, fontFamily: INTER, fontWeight: 800, lineHeight: 1.2, letterSpacing: 1,
          fontSize: Math.min(SERIT, Math.floor(BLOK / (k.serit.length * 0.7))), textTransform: "uppercase", whiteSpace: "nowrap" }}>{k.serit}</div>
      )}
      {k.vurgu && (
        <div style={{ position: "absolute", left: 1145, top: 125, transform: "translate(-50%, -50%) rotate(-6deg)", width: 200, height: 200,
          borderRadius: "50%", background: RENK.mercan, border: "7px solid #fff", boxShadow: "0 12px 30px rgba(30,30,40,0.30)",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#fff" }}>
          <div style={{ fontFamily: ANTON, fontSize: k.vurgu.length > 4 ? 52 : 64, lineHeight: 1 }}>{k.vurgu}</div>
          {k.vurgu_alt && (
            <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 16, lineHeight: 1.15, textAlign: "center", marginTop: 7,
              maxWidth: 150, textTransform: "uppercase", letterSpacing: 1 }}>{k.vurgu_alt}</div>
          )}
        </div>
      )}
    </AbsoluteFill>
  );
};
