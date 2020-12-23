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
![Giriş sayfası](.\screenshot1.png)

*Kayıt sayfası*
![Kayıt sayfası](.\screenshot2.png)

*Kayıt sayfası validasyon*
![Kayıt sayfası validasyon](.\screenshot3.png)

*Giriş sayfası validasyon*
![Giriş sayfası](.\screenshot4.png)

*Dashboard sayfası*
![Dashboard sayfası](.\screenshot5.png)
