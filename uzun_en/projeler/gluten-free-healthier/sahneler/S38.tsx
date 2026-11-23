// Sahne 38 — 3.213 ürün, dört market, on kategori, sağlık yıldızı derecelendirmesi.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop, sayac } from "../kutuphane";

const YILDIZ = "M 0 -26 L 7.6 -8.4 26 -8 11.8 4.2 16.4 22 0 12.4 -16.4 22 -11.8 4.2 -26 -8 -7.6 -8.4 Z";

const Pil: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string }> = ({ t, bas, bitis = 1e9, x, y, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.55);
  if (al <= 0 || t > bitis) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
      <Hap metin={metin} renk={renk} boyut={30} />
    </div>
  );
};

const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kam = kameraYolu(t, s.sure, [0, 0, 1920], [20, 20, 1800]);
  const tSayi = K(0, "3,213");
  const tAv = K(0, "Australian");
  const b1 = K(1, "They") - 0.2;
  const tYildiz = K(1, "star");
  const sayi = Math.round(3213 * eout(ilerle(t, tSayi, 1.0))).toLocaleString("en-US");
  return (
    <>
      <Kamera gorsel="tam/38" pencere={kam}>
        <Etiket t={t} bas={K(0, "packaged")} bitis={b1} capa={[560, 590]} konum={[1260, 600]} metin="PACKAGED FOODS" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} y={920} bitis={1e9} />
      <Not t={t} bas={tAv} bitis={tSayi - 0.1} metin="AUSTRALIAN RESEARCHERS" x={1140} y={190} boyut={44} agirlik={800} />
      <Baslik t={t} bas={tSayi} metin={sayi} x={1140} y={250} boyut={130} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tSayi + 0.15} metin="PRODUCTS" x={1140} y={385} boyut={130} renk={RENK.lacivert} />
      <Not t={t} bas={tSayi + 0.5} metin="compared in Australian supermarkets" x={1140} y={470} boyut={30} agirlik={700} />
      <Pil t={t} bas={K(0, "four large")} bitis={b1} x={1200} y={690} metin="FOUR LARGE SUPERMARKETS" renk={RENK.lacivert} />
      <VurguRozet t={t} bas={K(1, "ten")} vurgu="10" not="FOOD CATEGORIES" x={1290} y={580} boyut={90} genislik={340} renk={RENK.altin} />
      <Pil t={t} bas={K(1, "government")} x={1140} y={820} metin="GOVERNMENT HEALTH STAR RATING" renk={RENK.koyuYesil} />
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        {[0, 1, 2, 3, 4].map((i) => {
          const [sc, al] = pop(t, tYildiz + 0.1 + i * 0.12, 0.45);
          return (
            <g key={i} transform={`translate(${1170 + i * 70} 905) scale(${sc})`} opacity={al}>
              <path d={YILDIZ} fill={RENK.altinAcik} stroke={RENK.altin} strokeWidth={3} strokeLinejoin="round" />
            </g>
          );
        })}
      </svg>
    </>
  );
};

export default S38;
