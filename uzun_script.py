# uzun_script.py — UZUN (yatay) video metni uretir.
# Varsayilan tema "tuketici_belgesel": 8-12 dk (~1300-1600 kelime) marka/sirket
# hikayesi + tuketiciye kurulan tuzak (Onur Ulger tarzi "X Neden Y?" belgeseli).
# Eski ~3 dk "gizem" temasi config.uzun_tema="gizem" ile hala secilebilir.
import os, json, time, urllib.request
from ai_script import _gemini, _poll_post, _poll_get, _temizle, _claude, _claude_key

# Guncel UCRETSIZ katman modelleri; anahtarin erisebildigi ilki secilir.
GEMINI_MODELS = ["gemini-3.5-flash-lite", "gemini-2.5-flash"]

def _gemini_uzun(prompt, key, model):
    # ai_script._gemini ile ayni, ama maxOutputTokens buyuk (uzun JSON kesilmesin).
    url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={key}"
    body = {"contents": [{"parts": [{"text": prompt}]}],
            "generationConfig": {"temperature": 0.9, "maxOutputTokens": 16384,
                                 "responseMimeType": "application/json"}}
    req = urllib.request.Request(url, data=json.dumps(body).encode(),
                                 headers={"Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=120) as r:
        d = json.loads(r.read().decode())
    return d["candidates"][0]["content"]["parts"][0]["text"]

UZUN_PROMPT = """BAŞLIK: {baslik}
Bu başlık için, YouTube'da YATAY bir "gizem / gerçek olay" belgesel-anlatım videosu için Türkçe seslendirme metni yaz.
Ton: merak uyandıran, hafif gerilimli ama güven veren bir anlatıcı; izleyiciyi bir gizemin/olayın peşine takan, sürükleyici belgesel dili.
Uzunluk: yaklaşık 400 kelime (~2,5-3 dakika seslendirme). Bilgiler DOĞRU olsun, uydurma istatistik/tarih verme; kesin bilinmeyen yerde "kesin olarak bilinmiyor" de ve teori olduğunu belirt.
Yapı — RETENTION için kritik: SOĞUK AÇILIŞ ile başla (ilk cümle çarpıcı bir soru ya da merak boşluğu; izleyici ilk 3 saniyede DURSUN). Sonra bölümler halinde derinleştir:
(1) gizemi/olayı sahnele: nerede, ne zaman, ne oldu, (2) bilinen gerçekler ve kanıtlar, (3) teoriler ve olasılıklar, (4) en çarpıcı detay / dönüm noktası ("ama sonra işler tuhaflaşıyor" gibi açık döngülerle merak taze tut), (5) düşündüren güçlü kapanış + "bir sonraki gizem için abone ol" tarzı kısa merak-odaklı abone çağrısı.
Her 60-90 saniyede yeni bir soru/merak aç ki izleyici sonuna kadar kalsın.
Emoji YOK, madde YOK, başlık satırı YOK; düz akıcı paragraflar (tek metin).
Anlatımı 10-13 sahneye böl. Sahne 'metin'leri script'in SIRAYLA parçaları olsun (o an anlatılan şey).
Her sahne için 'gorsel': o cümlede anlatılan şeyi gösteren 2-4 KELİMELİK, SOMUT, ARANABİLİR İngilizce stok video anahtar kelimesi.
Somut nesne/mekân/eylem kullan; örnek: "supermarket shopping cart", "credit card payment", "shrinking product package", "child playing phone game".
YASAK: soyut/kavramsal ifadeler ("conceptual", "abstract", "cinematic shot", "shadowy figure", "coins dissolving" gibi). Başa "a"/"the" KOYMA, somut ismi başa yaz.
ÇOK ÖNEMLİ — TÜRKÇE YAZIM: 'script', 'baslik', 'aciklama', 'kanca' ve sahne 'metin' alanlarını KUSURSUZ Türkçe imlâ ile yaz.
Türkçe'ye özgü harfleri (ç, ğ, ı, İ, ö, ş, ü ve büyükleri Ç, Ğ, İ, Ö, Ş, Ü) HER ZAMAN ve EKSİKSİZ kullan.
Bu harfleri ASLA ASCII karşılıklarına (c, g, i, o, s, u) sadeleştirme; aksan/diakritik atlama. Örnek: "guclu" DEĞİL "güçlü", "cocuk" DEĞİL "çocuk", "sirri" DEĞİL "sırrı", "yasiyor" DEĞİL "yaşıyor".
(NOT: yalnızca 'gorsel' alanı İngilizce olacak; onun dışındaki tüm metin doğru Türkçe karakterlerle yazılır.)
SADECE şu JSON'u döndür:
{{"baslik":"...","aciklama":"2-3 cümle","etiketler":["e1","e2","e3","e4","e5","e6","e7","e8"],"kanca":"EN FAZLA 3 kelimelik ŞOK EDİCİ, kaydırmayı durduran, merak uyandıran Türkçe açılış (kapakta da kullanılır) - izleyici ilk 2 saniyede DURSUN; ZORUNLU, asla boş bırakma; örnek: 'GEMİLER NEDEN KAYBOLUYOR', 'KİM GÖNDERDİ', 'HERKES YANILDI'","script":"...","sahneler":[{{"metin":"...","gorsel":"cinematic english"}}]}}"""


BELGESEL_PROMPT = """BAŞLIK: {baslik}
{not_satiri}Bu başlık için TUZAK AVCISI kanalında yayınlanacak YATAY, 8-12 dakikalık bir "tüketici belgeseli" seslendirme metni yaz.

KONUMLANDIRMA: Herkesin bildiği bir markanın/sektörün iş modelini bir HİKÂYE olarak anlat, sonra o modelin TÜKETİCİYE nasıl yansıdığını (fark etmeden ödediğin bedel, kurulan tuzak) göster ve izleyiciye somut korunma yolları ver. Şirket tarihi tek başına amaç değil; amaç "bunu bilen tüketici bir daha kanmaz".

TON: Sakin, meraklı, güven veren bir belgesel anlatıcısı; birinci tekil şahıs ("bu videoda ... bakıyoruz"). Abartısız, sansasyonsuz; bağırmayan ama merak taşıyan dil. İzleyiciye "sen" diye hitap et.

UZUNLUK: 1300-1600 kelime (zorunlu; 1200'ün altı kabul edilmez).

YAPI (script içinde bölüm başlığı YAZMA, akıcı geçişlerle anlat; 7-9 bölüm, her biri ~1-1,5 dk):
1) ÇERÇEVE HİKÂYE AÇILIŞI (ilk 60-80 sn): Somut, gerçek ve kamuya açık bir kişi/vaka/sahneyle başla (örn. "1 milyon mil yapan kamyonet"; bizim için: kuyrukta bekleyen bir müşteri, şaşırtan bir fiş, bir şikâyet). Başlıktaki soruyu yeniden sor, cevabın beklenenden farklı olduğunu ima et. Ardından tek cümle: "Burası Tuzak Avcısı; hayatın içindeki tuzakları birlikte çözüyoruz." ve bu videoda neyi öğreneceğini söyle.
2) BEKLENMEDİK BAŞLANGIÇ: Hikâyenin sanıldığı yerde başlamadığını göster ("hikâye bir fabrikada değil, bir dokuma tezgâhında başlıyor" gibi). Kurucular, yıl, ilk fikir — yalnızca kamuya açık bilgiler.
3) KISIT / ZORUNLULUK: Şirketi bu modele iten şey neydi? ("hata yapacak parası yoktu" gibi bir kısıt anlatısı).
4) MEKANİZMA: Sistem nasıl çalışıyor? 3-6 kavramı ADIYLA ver ve gündelik örnekle açıkla (izleyici "yeni bir terim öğrendim" desin).
5) BÜYÜME: Model şirketi nasıl büyüttü?
6) TÜKETİCİ TARAFI: Bu model senin cüzdanına, alışkanlığına, dikkatine nasıl yansıyor? Fark edilmeyen maliyetler, psikolojik taktikler.
7) KRİZ / ELEŞTİRİ: Modelin karanlık tarafı, bir kriz ya da eleştiri — güvenilirlik için zorunlu, adil anlat.
8) KORUNMA REHBERİ: 3-5 somut, uygulanabilir adım.
9) ÇERÇEVEYE DÖNÜŞ VE KAPANIŞ: Açılıştaki kişiye/vakaya geri dön ve hikâyeyi onunla bağla; "bir sonraki tuzağı kaçırmamak için abone ol" de ve izleyiciye görüş soran TEK bir soru sor.
Her bölüm geçişinde yeni bir merak aç ("ama hikâye burada bitmiyor").

DOĞRULUK VE HUKUK (ÇOK ÖNEMLİ):
- Uydurma istatistik, tarih, alıntı, dava YAZMA. Emin olmadığın sayı yerine nitel ifade kullan ("milyonlarca", "yıllar içinde").
- Bir şirketi suç işlemekle SUÇLAMA; "yasadışı", "dolandırıyor" gibi hüküm kurma. Taktikleri "iş modeli", "tasarım tercihi", "pazarlama stratejisi" olarak anlat; tartışmalı konularda "eleştirmenlere göre", "araştırmalar gösteriyor ki" de.
- Hem şirketin mantığını hem tüketicinin bedelini adil göster.

BAŞLIK KURALI: "<Marka/Konu> Neden ...?" ya da "<Marka> Nasıl ...?" kalıbında, en fazla 60 karakter, cümle düzeninde (TAMAMI BÜYÜK HARF DEĞİL), emoji YOK. Verilen başlığı koru; yalnızca yazım hatası varsa düzelt.
AÇIKLAMA (Zaman damgalarını YAZMA, sistem ekler): 4 kısım, emoji YOK:
(1) Başlıktaki soru tek satır ("A101 Aldın Aldın neden hep bitiyor?").
(2) "Bu videoda [açılış vakası]ndan başlayıp [ana soru]ya bakıyoruz." + hikâyenin beklenmedik başlangıcını anlatan bir cümle.
(3) Videoda geçen kavramları ve konuları sayan, "... inceliyorum." diye biten bir paragraf.
(4) En sonda izleyiciye yorum yaptıracak TEK bir görüş sorusu.
BÖLÜMLER: 'bolumler' listesinde 7-9 bölüm ver. 'baslik' merak uyandıran kısa bir cümle (örn. "Toyota'nın hata yapacak parası yoktu"), 'sahne' o bölümün başladığı sahnenin 0'dan başlayan sıra numarası. İlk bölümün sahnesi 0; sonuncusu çerçeveye dönüş.
ETİKETLER: 10-12 Türkçe arama terimi (marka adı, "<marka> neden", sektör, "tüketici hakları", "belgesel" dahil).

Emoji YOK, madde işareti YOK, başlık satırı YOK; 'script' düz akıcı paragraflardan oluşan tek metin.
Anlatımı 35-50 sahneye böl. Sahne 'metin'leri script'in SIRAYLA ve EKSİKSİZ parçaları olsun (birleştirildiğinde script'in tamamı çıksın).
Her sahne için 'gorsel': o cümlede anlatılan şeyi gösteren 2-4 KELİMELİK, SOMUT, ARANABİLİR İngilizce stok video anahtar kelimesi.
Somut nesne/mekân/eylem kullan; örnek: "supermarket shopping cart", "credit card payment", "warehouse forklift", "people using smartphone".
Marka adı/logosu stok sitelerde bulunmaz ve telif riski taşır: markanın GENEL karşılığını yaz ("discount supermarket aisle", "crowded store checkout queue", "coffee shop counter", "fast food restaurant", "delivery courier scooter").
YASAK: soyut/kavramsal ifadeler ("conceptual", "abstract", "cinematic shot", "shadowy figure" gibi). Başa "a"/"the" KOYMA.
ÇOK ÖNEMLİ — TÜRKÇE YAZIM: 'script', 'baslik', 'aciklama', 'kanca' ve sahne 'metin' alanlarını KUSURSUZ Türkçe imlâ ile yaz; ç, ğ, ı, İ, ö, ş, ü harflerini ASLA ASCII'ye sadeleştirme. (Yalnızca 'gorsel' İngilizce.)
SADECE şu JSON'u döndür:
{{"baslik":"...","aciklama":"...","etiketler":["e1","e2","e3","e4","e5","e6","e7","e8","e9","e10"],"kanca":"EN FAZLA 3 kelimelik, kapakta kullanılacak çarpıcı Türkçe ifade ; marka adı YAZI olarak geçebilir (örn. 'A101'İN SIRRI', 'BEDAVA DEĞİL', 'ASIL ÜRÜN SENSİN'); ZORUNLU","script":"...","sahneler":[{{"metin":"...","gorsel":"english stock keywords"}}],"bolumler":[{{"baslik":"...","sahne":0}}]}}"""

TEMALAR = {"tuketici_belgesel": (BELGESEL_PROMPT, 1200), "gizem": (UZUN_PROMPT, 300)}


_TR_OZEL = set("çğıöşüÇĞİÖŞÜ")  # Türkçe'ye özgü, ASCII karşılığı olmayan harfler

def _turkce_yeterli(metin):
    """Metnin gercekten Turkce karakter icerdigini dogrular.
    Diakritiksiz (ASCII'ye sadelestirilmis) uretimi yakalar: gercek bir
    ~400 kelimelik Turkce metin bu harfleri yogun icerir; sadelestirilmis
    metinde neredeyse hic bulunmaz. Kisa metinlerde kontrol atlanir."""
    s = metin or ""
    if len(s) < 200:
        return True  # kanca gibi cok kisa alanlar tek basina yaniltici olabilir
    ozel = sum(1 for c in s if c in _TR_OZEL)
    # Gercek Turkce anlatim ~%8-10 ozel harf icerir; tamamen ASCII ~%0.
    # Esik %3: hem tam hem KISMEN diakritiksiz (kelimelerin bir kismi "guclu",
    # "cocuk" gibi bozuk) metinleri reddeder -> TTS'te yabanci aksan olmaz.
    return ozel >= len(s) * 0.03


def _gemini_key():
    # once UZUN hatta OZEL anahtar (ayri kota); yoksa ortak GEMINI_KEY.
    for _ad in ("GEMINI_KEY_UZUN", "GEMINI_KEY"):
        k = os.environ.get(_ad, "").strip()
        if k: return k
    raw = os.environ.get("GEMINI_API_KEY", "").strip()
    if raw.startswith("{"):
        try:
            j = json.loads(raw)
            return (j.get("gemini") or j.get("google") or "").strip()
        except Exception:
            return ""
    return raw


def _yeterli(data, min_kelime):
    """Script var, sahneli, Türkçe karakterli ve hedef uzunlukta mı?"""
    sc = data.get("script") or ""
    if not (sc and data.get("sahneler")):
        return "bos yanit"
    if not _turkce_yeterli(sc):
        return "turkce karakter eksik"
    if len(sc.split()) < min_kelime:
        return f"kisa ({len(sc.split())} kelime < {min_kelime})"
    return None


def uret(baslik, tema="tuketici_belgesel", not_=""):
    sablon, min_kelime = TEMALAR.get(tema, TEMALAR["tuketici_belgesel"])
    not_satiri = f"YAPIMCI NOTU (açı/odak): {not_}\n" if not_ else ""
    prompt = (sablon.format(baslik=baslik, not_satiri=not_satiri) if sablon is BELGESEL_PROMPT
              else sablon.format(baslik=baslik))
    hatalar = []
    # 1) Anthropic Claude (en kaliteli/en tutarli Turkce) — birincil saglayici
    ckey = _claude_key()
    if ckey:
        for deneme in range(2):
            try:
                data = json.loads(_temizle(_claude(prompt, ckey, max_tokens=16000)))
                sorun = _yeterli(data, min_kelime)
                if not sorun:
                    print(f"    Senaryo: Anthropic Claude ({len(data['script'].split())} kelime)")
                    return data
                hatalar.append(f"claude#{deneme+1}: {sorun}")
                if deneme == 0 and sorun != "bos yanit":
                    continue
                break
            except Exception as e:
                msg = str(e)
                hatalar.append(f"claude#{deneme+1}: {msg[:90]}")
                if "429" in msg and deneme == 0:
                    time.sleep(15); continue
                break  # 401/404/diger -> Gemini'ye dus
    # 2) Gemini (yedek)
    key = _gemini_key()
    if key:
        for model in GEMINI_MODELS:
            for deneme in range(2):
                try:
                    data = json.loads(_temizle(_gemini_uzun(prompt, key, model)))
                    sorun = _yeterli(data, min_kelime)
                    if not sorun:
                        print(f"    Senaryo: Gemini ({model}, {len(data['script'].split())} kelime)")
                        return data
                    # Diakritiksiz (ASCII) ya da kisa uretim -> kabul etme, tekrar dene.
                    hatalar.append(f"{model}#{deneme+1}: {sorun}")
                    if deneme == 0 and sorun != "bos yanit":
                        continue  # ayni modelle bir kez daha dene
                    break         # sonraki modele gec
                except Exception as e:
                    msg = str(e)
                    hatalar.append(f"{model}#{deneme+1}: {msg[:90]}")
                    if "429" in msg and deneme == 0:
                        time.sleep(20); continue
                    break  # 404/diger -> bu modeli birak, sonrakine gec
    for ad, fn in (("poll_post", lambda: _poll_post(prompt)),
                   ("poll_get", lambda: _poll_get(prompt))):
        try:
            data = json.loads(_temizle(fn()))
            sorun = _yeterli(data, min_kelime)
            if not sorun:
                print(f"    Senaryo: {ad} (yedek)")
                return data
            hatalar.append(f"{ad}: {sorun}")
        except Exception as e:
            hatalar.append(f"{ad}: {str(e)[:90]}")
    raise RuntimeError("Uzun script uretilemedi: " + " | ".join(hatalar[:8]))


if __name__ == "__main__":
    import sys
    print(json.dumps(uret(sys.argv[1] if len(sys.argv) > 1 else "A101 Aldın Aldın Neden Hep Bitiyor?"),
                     ensure_ascii=False, indent=2))
