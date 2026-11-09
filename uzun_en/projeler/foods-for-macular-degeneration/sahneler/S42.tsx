// Sahne 42 — kliplı yazı tahtası üzerinde göreli (ILLUSTRATIVE) çubuklar: yumurta ~3x, ıspanak ve takviye 1x.
import React from "react";
import { Baslik, Etiket, Hap, INTER, Kamera, KaynakEtiketi, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const SATIRLAR = [
  { ad: "ENRICHED EGGS", ifade: "lutein-enriched", u: 3, renk: RENK.altin, y: 390 },
  { ad: "COOKED SPINACH", ifade: "cooked", u: 1, renk: RENK.yesil, y: 520 },
  { ad: "SUPPLEMENTS", ifade: "supplements", u: 1, renk: RENK.koyuYesil, y: 650 },
];

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tYaz = K(0, "blood lutein");
  const aKlip = eout(ilerle(t, tYaz, 0.5));
  const tFat = K(1, "fats");
  return (
    <>
      <Kamera gorsel="tam/42" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [30, 40, 1820])}>
        {/* tahta üzerindeki çubuklar (görsel koordinatı) */}
        <div style={{ position: "absolute", left: 760, top: 250, width: 340, opacity: aKlip, fontFamily: INTER, fontWeight: 800,
          fontSize: 24, letterSpacing: 1, color: RENK.lacivert, textAlign: "center" }}>BLOOD LUTEIN RISE</div>
        {SATIRLAR.map((r, i) => {
          const bas = K(0, r.ifade);
          const p = eout(ilerle(t, bas, 0.9));
          const [sc, al] = pop(t, bas + 0.6, 0.5);
          return (
            <React.Fragment key={r.ad}>
              <div style={{ position: "absolute", left: 830, top: r.y - 44, opacity: eout(ilerle(t, bas - 0.1, 0.4)), fontFamily: INTER,
                fontWeight: 800, fontSize: 22, color: RENK.lacivert }}>{r.ad}</div>
              <div style={{ position: "absolute", left: 830, top: r.y, height: 50, width: 55 * r.u * p, background: r.renk, borderRadius: 8 }} />
              <div style={{ position: "absolute", left: 830 + 55 * r.u + 12, top: r.y - 2, opacity: al, transform: `scale(${sc})`,
                transformOrigin: "0% 50%", fontFamily: INTER, fontWeight: 800, fontSize: 44, color: r.renk }}>{r.u === 3 ? "~3×" : "1×"}</div>
              {i === 0 && null}
            </React.Fragment>
          );
        })}
        <div style={{ position: "absolute", left: 830, top: 770, opacity: aKlip, fontFamily: INTER, fontWeight: 800, fontSize: 20,
          letterSpacing: 3, color: RENK.gri }}>ILLUSTRATIVE</div>
        <Etiket t={t} bas={K(0, "eggs")} capa={[200, 440]} konum={[260, 190]} metin="ENRICHED EGGS" renk={RENK.altin} boyut={26} />
        <Etiket t={t} bas={K(0, "spinach")} capa={[330, 790]} konum={[470, 905]} metin="COOKED SPINACH" renk={RENK.yesil} boyut={26} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <Baslik t={t} bas={K(0, "study")} metin={b.satirlar[0]} x={1860} y={240} boyut={110} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "study") + 0.18} metin={b.satirlar[1]} x={1860} y={360} boyut={110} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "10")} metin={b.not ?? ""} x={1860} y={440} hiza="sag" genislik={560} />
      {t >= tFat && (
        <div style={{ position: "absolute", left: 1860, top: 660, transform: `translate(-100%, ${(1 - eout(ilerle(t, tFat, 0.5))) * 14}px)`,
          opacity: eout(ilerle(t, tFat, 0.5)) }}>
          <Hap metin="FATS IN THE YOLK" renk={RENK.altin} boyut={34} />
        </div>
      )}
    </>
  );
};

export default S42;
