// Sahne 20 — 140+ ile başlayanlarda ~10 puan fark; 140 altında belirgin fark yok. Ölçer kadranı özel çizimle örtülür (bozuk rakamlar).
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, RENK, SP, VurguRozet, einout, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const CX = 804, CY = 697, R = 138;
const aci = (d: number) => ((d - 90) * Math.PI) / 180; // 0° = yukarı

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBasla = K(0, "started"), t140 = K(0, "140"), tOn = K(0, "ten"), tAlt = K(1, "below"), tFark = K(1, "no clear");
  // ibre: yüksekten (140+) ~10 puan aşağıya
  const yuksek = 70, dusuk = 28;
  const ibre = yuksek + (dusuk - yuksek) * einout(ilerle(t, tOn, 1.2)) + (t > t140 ? Math.sin(t * 9) * 1.2 * (1 - ilerle(t, t140, 1.2)) : 0);
  const giris = eout(ilerle(t, 0.6, 0.6));
  const aUst = sol(t, tAlt - 0.1);
  const [sN, aN] = pop(t, tFark, 0.5);
  const tikler = Array.from({ length: 25 }, (_, i) => -120 + i * 10);
  return (
    <>
      <Kamera gorsel="tam/20" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 20, 1860])}>
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, opacity: giris }}>
          <circle cx={CX} cy={CY} r={R} fill="#FBF8F1" />
          {tikler.map((d, i) => (
            <line key={d} x1={CX + Math.cos(aci(d)) * (R - (i % 2 ? 14 : 24))} y1={CY + Math.sin(aci(d)) * (R - (i % 2 ? 14 : 24))}
              x2={CX + Math.cos(aci(d)) * (R - 6)} y2={CY + Math.sin(aci(d)) * (R - 6)} stroke={RENK.murekkep} strokeWidth={i % 2 ? 2 : 3.5} />
          ))}
          <line x1={CX} y1={CY} x2={CX + Math.cos(aci(ibre)) * (R - 22)} y2={CY + Math.sin(aci(ibre)) * (R - 22)} stroke={RENK.mercan} strokeWidth={6} strokeLinecap="round" />
          <circle cx={CX} cy={CY} r={11} fill={RENK.murekkep} />
        </svg>
        {/* görselin sağ kenarındaki dikey sınır kâğıt şeritle örtülür */}
        <div style={{ position: "absolute", left: 1130, top: 0, width: 790, height: 1080,
          background: "linear-gradient(to right, rgba(250,248,242,0) 0%, #FAF8F2 12%, #FAF8F2 100%)" }} />
        <Etiket t={t} bas={K(0, "systolic")} capa={[860, 590]} konum={[1010, 400]} metin="SYSTOLIC" renk={RENK.mercan} />
      </Kamera>
      <div style={{ opacity: aUst }}>
        <BaslikBlok t={t} bas={tBasla} satirlar={["STARTING", "AT 140+"]} x={1230} y={210} boyut={110} renkler={[RENK.lacivert, RENK.koyuYesil]} />
        <VurguRozet t={t} bas={tOn} vurgu="–10" not={s.meta.baslik?.not ?? ""} x={1530} y={470} genislik={560} boyut={130} renk={RENK.koyuYesil} />
      </div>
      <BaslikBlok t={t} bas={tAlt} satirlar={["STARTING", "BELOW 140"]} x={1230} y={210} boyut={110} renkler={[RENK.lacivert, RENK.gri]} />
      {aN > 0 && (
        <div style={{ position: "absolute", left: 1230, top: 520, transform: `scale(${sN})`, transformOrigin: "0% 50%", opacity: aN }}>
          <Hap metin="NO CLEAR DIFFERENCE" renk={RENK.gri} boyut={36} />
        </div>
      )}
    </>
  );
};

export default S20;
