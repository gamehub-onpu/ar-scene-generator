### Посилання на конструктор-генератор Веб-застосування доповненої реальності
[github.io/ar-scene-generator](https://saveniukoleg.github.io/ar-scene-generator/)

### Завантаження необхідних файлів
Клацніть на слово "here", щоб завантажити архів та витягти з нього папки з необхідними файлами. Ці файли нам знадобляться пізніше.

### Підготуйте свої файли
На даний момент генератор підтримує формати:
* .patt - шаблон маркеру, який ви можете створити за [цим посиланням](https://jeromeetienne.github.io/AR.js/three.js/examples/marker-training/examples/generator.html). Переконайтеся, що встановлено "Pattern Ration 0.90".
* .mtl .obj - модель. Обидва файли повинні бути правильно підготовлені з їх текстурою.
* .mp4 - відео
* .mp3 - аудіо
* .png - зображення

### Налаштування нового проекту
1. Створіть нове сховище на GitHub.
2. Завантажте потрібні файли до сховища. (Скористайтеся кнопкою "Upload files" або перетягніть файли зі свого пристрою до сховища)

> Необхідний файл не потрібно змінювати. Помістіть усі папки та файли в ту саму ієрархію файлів, якою вони були завантажені.

> Файли вашого вмісту повинні прийматися з index.html, який ми додамо пізніше. 
Якщо вони знаходяться на одному рівні ієрархії файлів, вам потрібно буде лише ввести їх ім'я в генератор, щоб визначити шлях до них.

### Робота з генератором
Генератор створить вихідний код для вашого файлу index.html, який ви згодом додасте до проекту.

**Крок №1** Введіть скільки шаблонів ви будете використовувати у своєму проекті. 
Це створить таблицю, яку ви можете використовувати для введення інших файлів вашого проекту.

**Крок №2** Введіть назви ваших шаблонів. Кожне поле шаблону обов’язкове.

* Наприклад: Якщо ваш файл `my_pattern.patt` вам потрібно буде ввести в поле лише `my_pattern`, якщо ви вирішили додати його в папку `patterns/my_pattern.patt`, ви введете `patterns/my_pattern`, щоб зберегти ієрархію файлів.

* Те саме правило працює з іншими файлами.

**Крок №3** Ви можете вибрати, який тип вмісту буде пов’язаний з кожним шаблоном. Для одного шаблону ви можете вибрати модель, відео чи зображення з одним аудіофайлом для кожного шаблону.

**Крок №4** Після натискання кнопки "Submit" з'явиться текст index.html.

### Публікація програми
1. Перейдіть до сховища проектів і додайте новий файл. Назвіть його `index.html` і вставте в нього заданий текст.
2. З вашого сховища перейдіть до **Setting** та прокрутіть вниз до **GitHub Pages**. У розділі **Source** виберіть основну гілку **main** замість **None** та натисніть Зберегти. **Save**. Для отримання додаткової інформації про розгортання на **GitHub Pages** відвідайте [pages.github.com](https://pages.github.com/).
3. Через кілька хвилин ваше застосування буде опубліковано за адресою `https://username.github.io/repository_name/`.
