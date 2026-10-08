// Sahne 8 — pankreas insülin salar; glukoz kandan kaslara, karaciğere ve yağ dokusuna geçer.
import React from "react";
import { Baslik, Etiket, Hap, INTER, Kamera, Not, Parcaciklar, Pencere, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani,
  pop, sol } from "../kutuphane";

// Görsel (tam/08): sol sayfada büyük organ, üstte kanallı küçük organ (pankreas), yeşil insülin kümesi (~620,480),
// kırmızı noktalı damar (kıvrım ~750,610). Sağ sayfa boş. Kusurlar: sahte etiketler "Fiber Bundle", "Buulin",
// "Liver" ve sayfa no "19" -> görsel rengiyle yamalanır.
const KAGIT_G = "#FAF8E1";
const YAMALAR: [number, number, number, number, number?][] = [
  [656, 438, 40, 15], [686, 428, 117, 32], // Fiber Bundle (çizgi + yazı)
  [666, 503, 90, 14], [748, 494, 75, 28], // Buulin
  [474, 884, 150, 30], // Liver
  [471, 897, 16, 12, 0], // Liver çizgisinin tüpe değen ucu (keskin kenar, tüp çizgisine dokunmaz)
  [1822, 36, 50, 32], // 19
];

const ekran = (p: [number, number], pen: Pencere): [number, number] => {
  const k = 1920 / pen[2];
  return [(p[0] - pen[0]) * k, (p[1] - pen[1]) * k];
};

// kübik bezier noktası (dal boyunca akan glukoz)
const bez = (u: number, a: number[], b: number[], c: number[], d: number[]) => {
  const v = 1 - u;
  return [0, 1].map((i) => v ** 3 * a[i] + 3 * v * v * u * b[i] + 3 * v * u * u * c[i] + u ** 3 * d[i]);
};

const HEDEFLER = [
  { ifade: "muscles", ad: "MUSCLES", y: 450 },
  { ifade: "liver", ad: "LIVER", y: 610 },
  { ifade: "fat tissue", ad: "FAT TISSUE", y: 770 },
];
const GX = 1160, GY = 610, DX = 1446;

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [30, 40, 1760]);
  const tPank = K(0, "your pancreas"), tSal = K(0, "releases"), tIns = K(0, "insulin"), tHor = K(0, "the hormone");
  const tGlu = K(0, "move glucose"), tKan = K(0, "out of the blood"), tKul = K(0, "used or stored");
  const tKas = K(0, HEDEFLER[0].ifade);
  const halka = ilerle(t, tIns, 1.1);
  const [sg, ag] = pop(t, tGlu + 0.1, 0.5);
  const kaynak = ekran([792, 640], pen);
  const [sk, ak] = pop(t, tKul, 0.5);
  return (
    <>
      <Kamera gorsel="tam/08" pencere={pen}>
        {YAMALAR.map(([x, y, w, h, b = 3], i) => (
          <div key={i} style={{ position: "absolute", left: x, top: y, width: w, height: h, background: KAGIT_G, borderRadius: b ? 10 : 0,
            filter: b ? `blur(${b}px)` : undefined }} />
        ))}
        {/* insülin salınımı: yeşil parçacıklar kümeden damara */}
        <Parcaciklar t={t} bas={tSal} kaynak={[618, 478]} hedef={[700, 610]} adet={44} aralik={0.13} omur={1.6} yayilma={80}
          kavis={-20} hedefYayilma={90} renk="#79B866" boyut={6} tohum="s08i" />
        {halka > 0 && halka < 1 && (
          <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
            <circle cx={622} cy={482} r={62 + 50 * halka} fill="none" stroke={RENK.yesil} strokeWidth={5} opacity={(1 - halka) * 0.9} />
          </svg>
        )}
        <Etiket t={t} bas={tPank} bitis={tKas - 0.2} capa={[640, 292]} konum={[820, 118]} metin="PANCREAS" renk={RENK.yesil} />
        <Etiket t={t} bas={tKan} capa={[751, 607]} konum={[838, 512]} metin="BLOOD" renk={RENK.mercan} />
      </Kamera>
      {/* sağ sayfa: başlık + not */}
      <Baslik t={t} bas={tIns} metin="INSULIN" x={1060} y={182} boyut={140} renk={RENK.koyuYesil} />
      <Not t={t} bas={tHor} metin="the hormone that moves glucose" x={1068} y={272} boyut={36} />
      <Not t={t} bas={tHor + 0.12} metin="into your cells" x={1068} y={319} boyut={36} />
      {/* kandan glukoz düğümüne akan parçacıklar */}
      <Parcaciklar t={t} bas={tGlu} kaynak={kaynak} hedef={[GX - 90, GY]} adet={52} aralik={0.11} omur={1.3} yayilma={24}
        kavis={-70} hedefYayilma={24} boyut={6} tohum="s08g" />
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        {HEDEFLER.map((h, i) => {
          const b = K(0, h.ifade);
          const p = eout(ilerle(t, b - 0.15, 0.5));
          if (p <= 0) return null;
          const A = [GX + 112, GY], B = [GX + 210, GY], C = [DX - 110, h.y], D = [DX - 8, h.y];
          const yol = `M ${A[0]} ${A[1]} C ${B[0]} ${B[1]}, ${C[0]} ${C[1]}, ${D[0]} ${D[1]}`;
          const noktalar = [0, 1, 2, 3].map((k) => {
            const u = (((t - b) / 1.3 + k / 4) % 1 + 1) % 1;
            const [x, y] = bez(u, A, B, C, D);
            return <circle key={k} cx={x} cy={y} r={7} fill={RENK.altinAcik} stroke={RENK.altin} strokeWidth={2}
              opacity={p * Math.sin(Math.PI * u)} />;
          });
          return (
            <g key={h.ad}>
              <path d={yol} fill="none" stroke={RENK.altin} strokeWidth={5} strokeLinecap="round" pathLength={1}
                strokeDasharray={1} strokeDashoffset={1 - p} opacity={0.6} />
              {p >= 1 && noktalar}
            </g>
          );
        })}
      </svg>
      <div style={{ position: "absolute", left: GX, top: GY, transform: `translate(-50%, -50%) scale(${sg})`, opacity: ag }}>
        <Hap metin="GLUCOSE" renk={RENK.altin} boyut={30} />
      </div>
      {HEDEFLER.map((h) => {
        const [sc, al] = pop(t, K(0, h.ifade), 0.5);
        if (al <= 0) return null;
        return (
          <div key={h.ad} style={{ position: "absolute", left: DX, top: h.y, transform: `translate(0, -50%) scale(${sc})`,
            transformOrigin: "0 50%", opacity: al }}>
            <Hap metin={h.ad} renk={RENK.yesil} boyut={30} />
          </div>
        );
      })}
      {ak > 0 && (
        <div style={{ position: "absolute", left: DX, top: 888, transform: `translate(0, -50%) scale(${sk})`, transformOrigin: "0 50%",
          opacity: ak * sol(t, 1e9), background: RENK.lacivert, color: "#fff", borderRadius: 999, padding: "10px 26px",
          fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 2.5, whiteSpace: "nowrap" }}>USED OR STORED</div>
      )}
    </>
  );
};

export default S08;
