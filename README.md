# Система управління списком книг

## Огляд проекту

Цей проект є односторінковим веб-додатком для управління книгами. Він побудований за допомогою **React** для інтерфейсу та **Django REST Framework** для бекенду. Додаток дозволяє користувачам керувати списком книг: додавати, редагувати, видаляти та переглядати книги.

![image](https://github.com/user-attachments/assets/85058191-6566-4e14-b623-5ddd12764b4d)

## Стек технологій

### Front-end

- **React.js**: Інтерфейс створений за допомогою функціональних компонентів та хуків.
- **Tailwind CSS**: Стилізація додатку з адаптивним та сучасним дизайном.
- **Axios**: Для створення API-запитів до бекенду.
- **Formik**: Для обробки та валідації форм.

### Back-end

- **Python**: Мова програмування.
- **Django**: Фреймворк для створення веб-додатків.
- **Django REST Framework**: Для створення RESTful API.

## Архітектура

### Front-end

- **Компонент `BookList`**: Відображає список книг та включає функціонал для їх фільтрації.
- **Компоненти `AddBookForm` та `EditBookForm`**: Кастомні форми для додавання та редагування книг.
- **Компонент `BookPreview`**: Дозволяє переглядати зміни, які користувачі вносять до книги перед збереженням.

![image](https://github.com/user-attachments/assets/8b8e5797-ab21-4374-8cc7-5d63b165be9c)


![image](https://github.com/user-attachments/assets/e89e54ad-c567-4017-84fe-27a4e1f7472e)



#### Користувацькі хуки

- `useCreateBook`: Для додавання книг.
- `useEditBook`: Для редагування книг.

#### Контекстний API

- `NotificationContext`: Для керування глобальними сповіщеннями.
- `AuthorContext`: Для зберігання та керування списком авторів.
- `BookContext`: Для керування фільтрацією, показом/приховуванням форм та зберіганням списку книг.

![image](https://github.com/user-attachments/assets/86a335c8-d30c-469a-b8cd-0ca04a0a7f16)

### Back-end

- **Моделі**: Створені моделі для книг та авторів з необхідними зв'язками.
- **Набори вюсетів та серіалізатори**: Реалізовано CRUD-функціонал для книг та авторів.
- **Політика CORS**: Налаштована для дозволу взаємодії між інтерфейсом і бекендом.

## API кінцеві точки

- **`/api/book/`**: Перегляд списку книг.
- **`/api/book/{id}/`**: Редагування, видалення або отримання конкретної книги.
- **`/api/author/`**: Перегляд списку авторів.
- **`/api/author/{id}/`**: Редагування, видалення або пошук конкретного автора.

## Інсталяція та Налаштування Проекту

**Переконайтеся, що на вашому комп'ютері встановлені `node.js` та `python`.**

### Налаштування фронтенду (Клієнтська частина)

1. Перейдіть до папки `client`:
    ```bash
    cd client
    ```
2. Встановіть залежності:
    ```bash
    npm install
    ```
3. Запустіть сервер розробки:
    ```bash
    npm run dev
    ```
   Сервер розробки фронтенду буде доступний за адресою: [http://localhost:3000](http://localhost:3000)

### Налаштування бекенду (Серверна частина)

1. Перейдіть до папки `server`:
    ```bash
    cd server
    ```
2. Активуйте віртуальне середовище:
    - Створіть віртуальне середовище, якщо у вас його немає:
        ```bash
        python -m venv venv
        ```
    - Активуйте віртуальне середовище:
        ```bash
        ./venv/Scripts/activate
        ```
3. Запустіть сервер розробки Django:
    ```bash
    python manage.py runserver
    ```
   Сервер розробки Django буде доступний за адресою: [http://localhost:8000](http://localhost:8000)


