# TaskFlow - Simple Todo ✅

Bu proje, React ve Tailwind CSS kullanarak geliştirdiğim basit ama işlevsel bir Todo uygulamasıdır. Projeyi hem öğrenme sürecimi pekiştirmek hem de iş başvurularımda somut örnek olarak sunmak amacıyla titizlikle hazırladım.

## ✨ Özellikler

- 🎯 **Görev Ekleme:** Input alanına görev yazıp "Ekle" butonuna bastığınızda görev listeye eklenir.
- 💾 **LocalStorage Desteği:** Tüm görevler tarayıcıda saklanır; sayfa yenilense bile veriler kaybolmaz.
- ✅ **Tamamlandı Olarak İşaretleme:** Her bir görevin bir onay kutusu (checkbox) vardır. İşaretlediğinizde tamamlandı olarak localStorage'da güncellenir.
- ❌ **Görev Silme:** Her görev için bir silme butonu vardır. Silmek istediğinizde SweetAlert2 ile “Emin misiniz?” uyarısı gösterilir.
- 🚫 **Boş Görev Engeli:** Eğer boş bir görev eklemeye çalışırsanız, SweetAlert2 ile “Lütfen bir görev girin!” uyarısı gösterilir.
- 📱 **Responsive Tasarım:** Tailwind CSS sayesinde her ekran boyutuna uygun modern bir görünüm sağlar.

## 🛠️ Kullanılan Teknolojiler

- **React** – UI bileşenlerini oluşturmak için
- **Tailwind CSS** – Hızlı ve modern stil uygulamaları için
- **SweetAlert2** – Bildirim ve onay kutuları için
- **React Icons** – Görevler için ikon desteği

## 🎯 Neden Bu Proje?

React öğrenme sürecimde gerçek hayata uygulanabilir örneklerle ilerlemek istedim. Bu proje sayesinde:

- React’te state yönetimini,
- localStorage ile veri saklamayı,
- kullanıcı deneyimini artıran geri bildirim sistemlerini (SweetAlert2),
- ve stil tarafında Tailwind CSS’i pratik ettim.

Amacım sadece öğrenmek değil, aynı zamanda profesyonel portföyüme katkı sağlayacak işler çıkarmak. Bu projeyi ileride TypeScript, context API, dark mode gibi ek özelliklerle de güncellemeyi planlıyorum.

## 📂 Kurulum

Projeyi kendi bilgisayarında çalıştırmak istersen:

```bash
git clone https://github.com/furkan-karapinar/React-Simple-Todo.git
cd React-Simple-Todo
npm install
npm start
