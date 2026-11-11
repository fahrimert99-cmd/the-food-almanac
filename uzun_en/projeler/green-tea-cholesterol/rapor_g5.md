# Grup 5 raporu (sahne 34–41)

Sahne dosyalarında hazır taslaklar vardı; hepsi önizlemeyle incelendi, kelime zamanları `--bilgi` ile doğrulandı, `tsc` temiz.

- **S34** (bölüm kartı, PART 5): 3 görsel kartı (35, 36, 39) + "THE SAFETY FINDING" hapı, "safety" kelimesinde. Değişiklik yok.
- **S35**: karaciğer ve kapsül kavanozu etiketleri; sağ panelde başlık, 6.7% ve 0.7% rozetleri sayılar söylenince geliyor. Değişiklik yok.
- **S36**: karaciğer etiketi, 26 ve ≈1 IN 20 rozetleri, ardından "ILLUSTRATIVE" etiketli şema (bırakınca normale iner, yeniden başlayınca çıkar; sayı yok). Değişiklik yok.
- **S37**: "A CLEAR SIGNAL" ve "2018" başlıkları, mühür üzerinde "EU REGULATORS" etiketi. Değişiklik yok.
- **S38**: 800 mg rozeti, karaciğer etiketi, "NO CONFIDENT SAFE DOSE" hapı. Görselde karaciğerin etrafında açık renk dikdörtgen vardı; `multiply` ile bir yama koydum, kenarı çok hafif belli oluyor (çözülmedi, küçük kusur).
- **S39**: demlenmiş çay için etiket, başlık, 5+ rozeti, "EVIDENCE LIMITED" hapı, "RARE REACTIONS". Değişiklik yok.
- **S40**: üç etiket (içecek, kavanoz, tablet). "INJURY: UNCOMMON" etiketi ekran kenarından taşıyordu, konumu `[1500, 190]` yapıldı (filigran bölgesi dışında).
- **S41**: üç vuruş (kapsül etiketi → aç karnına ok akışı → "WITH FOOD" etiketi ve başlık → doktor). "TELL YOUR DOCTOR" ikonu hapla çakışıyordu, kaydırıldı.

Görsel yeniden üretilmedi. Kütüphane hatası bulunmadı. S40'taki son etiket konumu yeniden render edilmedi, yalnızca `tsc` ile kontrol edildi.
