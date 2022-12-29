
G191210018 Mert Can Yılmaz
G191210003 Yunus Akgül
Shop Listie
duo-dev-sakarya

video demo linki: https://www.youtube.com/watch?v=6oxlpFbSuQI
github linki: https://github.com/duo-dev-sakarya/finansal-bt-mobil
Google Playstore uygulama linki: https://play.google.com/store/apps/details?id=com.deonsky.finansalbtmcy
Uygulama Analiz Dökümanı: https://github.com/duo-dev-sakarya/finansal-bt-mobil/blob/main/docs/ShopListie-g191210018-03-analiz.pdf
Test Senaryosu Dökümanı: https://github.com/duo-dev-sakarya/finansal-bt-mobil/blob/main/docs/finansal-bt-g1912100-18-03-test.pdf
UX Arayüz Tasarım Dökümanı: https://github.com/duo-dev-sakarya/finansal-bt-mobil/blob/main/docs/finansal-bt-g191210-18-03-ux-desings.pdf
Veri Tabanı Diyagramı: https://github.com/duo-dev-sakarya/finansal-bt-mobil/blob/main/docs/ShoplistieDatabase-g191210018-03.drawio.pdf
Uygulama Mimarı Diyagramı: https://github.com/duo-dev-sakarya/finansal-bt-mobil/blob/main/docs/ShopListeiApplicationArchitectureDiagram.drawio-g191210018-03.pdf
Uygulamada kullanılan Apiler: https://firebase.google.com/?gclid=CjwKCAiAkrWdBhBkEiwAZ9cdcLbRG3ZU-80BcVwL_Xf8KZUT7g_3cV6OR6aEZ-tYqV5OtF7dHzR62BoCjxQQAvD_BwE&gclsrc=aw.ds
https://oauth2.googleapis.com/tokeninfo?id_token=${response.params.id_token}

Ürünün amacı ve Kattığı Değer
Ailesiyle kalan veya beraber kalan öğrenciler gibi topluca yaşayan ve alışveriş yapan insanlar arasındaki iletişimi kolaylaştırarak ev ekonomisinin daha doğru bir şekilde yönetilmesini sağlayacak olan Shop Listie uygulamamızın yönetilmesi, geliştirilmesi ve sorunlarının çözülmesidir.
Hangi sorunları çözüyor?
Ev ekonomisini düzenleyememeleri 
Topluluklarındaki mikro ekonomilerini düzenleyememeleri
Fiyat dalgalanmalarına karşı habersiz kalmaları 
Gereksinim listesi çıkarırken hiçbir şekilde scale edilemez olması

  Temelde uygulamamız kullanıcı için bir alışveriş listesi oluşturma imkânı sağlamaktır. Fakat diğer klasik alışveriş listesi uygulamalarından farklı olarak bu alışveriş listesi ortak bir grup açılarak grup içerisindeki herkesin alışveriş listesini düzenlemesine imkân vermekte bu sayede hem kullanıcılar ev ihtiyaçlarının neler olduğunu bilerek ona göre alışveriş yapabilmekte hem de çoktan başkası tarafından alınmış olan bir ürünün alındığının bilgisi diğer kullanıcılara sunularak ürünün tekrar alınmasını ve israf olmasını engellemekte. Daha organize ve verimli bir ev ekonomisinin kurulmasını sağlamakta 
Enflasyon ile birlikte durmadan değişen fiyatları takip etmek indirimleri yakalayarak ürünleri en ucuz fiyata almak tek başına her zaman mümkün olmamakta fakat shop listie ile aile bireyleri alışveriş konusundaki bilgi paylaşımlarını arttırabilir. Bu sayede ev ihtiyaçlarının neler olduğu, bu ihtiyaçların nerden daha ucuza alınabileceği gibi bilgileri birbirleri ile paylaşarak daha verimli bir ev ekonomisi sistemi kurabilirler. Aynı zamanda ihtiyaç listesinin yaptıkları alışverişe göre güncelleyerek aynı ürünün tekrardan başka bir kullanıcı tarafından alınarak gereğinden fazla ürün alınımını yani israfı engellemiş olurlar.

Müşterilerimiz genel olarak beraber yaşayan kimseler olacak örnek olarak aileler, ev arkadaşları, bir öğrenci evinde beraber kalan üniversite öğrencileri gibi. Sınırlı bir bütçeye sahip, evin ihtiyaçları konusunda maksimum verimli bir şekilde planlamasını yapmak isteyen bireyler. Diğer müşteriler olarak ise grup halinde herhangi bir organizasyon, etkinlik hazırlamak isteyen bireyler arasında etkinlik için gerekli malzemelerin alımını daha organize bir şekilde halletmek isteyen insanlar kullanıcılarımız arasında olacaktır.


Ürün Gelir Modeli ve 3 Yıllık Kazanç Takvimi
Uygulamamız firebase’e bağlı bulunmakta günlük 50.000 okuma 20.000 yazma ve 20.000 silme işlemi ücretsiz. Bu 100 kullanıcı için günlük 500 okuma 200 yazma ve 200 silme işlemine karşılık geliyor. Uygulamanın reklamını yapmak ve hızlıca kullanıcı sayısını arttırmak için ilk 100 kullanıcı ücretsiz olarak uygulamayı reklamsız kullanacak. Ama kişi başı ortalama günlük 100 okuma 50 yazma 50 silme işlemi yapılacağını düşündük. Ve bu kullanıcıların verisinin toplam boyutu 1GB’ı geçmeyecektir. Her kullanıcı içim 5mb ortalama data söyleyebiliriz. Depolama maliyeti ise kullanıcı başına aylık 1024mb / 5 = 205, 0.18/206 =~ 0.0009$ dolar oluyor
Sonraki 100 kullanıcı için yukarıdaki ortalama okuma yazma değerlerine göre hesaplarsak
0.06/1000$ = 0.00006$  okuma  ,  0.18/2000$ = 0.00009$ yazma , 0.02/2000$ = 0.00001 silme ücreti oluyor. Bu da kullanıcı başına aylık  toplam 0.00016 + 0.0009 = 0.00106 $’a karşılık geliyor. Reklamlar elde edilen geliri yada üyeliği aylık 0.20$ olarak varsayarsak. 1000 kullanıcıda 200$, 10.000 kullanıcıda 2.000$ gelire ulaşacaz. Ve bu gelir de başlangıç için 2 kişilik bir ekibin ihtiyaçlarını karşılayacak. 100.000 kullanıcıda 20.000$ aylık gelire ulaşacaz. Nihai hedefimiz 1.000.000 kullanıcıya ulaşmak. Bu süreçte kişi sayımızı arttıp ARGE süreçlerine ve yan uygulamalara başlayacağız, uygulamamıza daha kullanışlı hale getireceğiz.

3. ayda aylık 200$
6. ayda aylık 2000$
12. ayda aylık 20000$ gelire ulaşmayı hedefliyoruz.
12. Aydan sonra ARGE çalışmaları başlatıp yan projeler geliştirmeye başlayacağız. Bu süreçte ekibimizi 2 kişiden 5 kişiye çıkartıp 3 developer, 1 Reklam Pazarlama, 1 devops almayı planlıyoruz.

