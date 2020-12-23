# İçerik

Bu uygulama dockerize edilmiştir.

Uygulamayı çalıştırmak için yapmanız gereken;

    $ docker-compose build

    $ docker-compose up

olacaktır.

## Önemli!

Eğer Docker for Windows ile uygulamayı çalıştıracaksanız bir problemle karşılaşmamanızı umuyorum fakat eğer **Docker for Windows ile çalıştırmayacaksanız "Frontend" klasörünün altında ".env" dosyasının içini**

    REACT_APP_BACKEND_URL=http://localhost:8080/api

**olarak değiştirdiğinizde uygulama çalışacaktır.**

Bu durum üzerinde düşündüm fakat uygulamanın Docker for Windows mu yoksa bir linux işletim sistemi üzerinden mi çalıştırıldığını bilemediğim için backend linkini manuel olarak değiştirmekteyim.

## Screenshots

*Giriş Sayfası*
<img src="screenshot1.png" alt="Giriş sayfası" width="800" />

*Kayıt sayfası*
<img src="screenshot2.png" alt="Kayıt sayfası" width="800" />

*Kayıt sayfası validasyon*
<img src="screenshot3.png" alt="Kayıt sayfası validasyon" width="800" />

*Giriş sayfası validasyon*
<img src="screenshot4.png" alt="Giriş sayfası validasyon" width="800" />

*Dashboard sayfası*
<img src="screenshot5.png" alt="Dashboard sayfası" width="800" />
