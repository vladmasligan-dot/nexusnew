# Nexus - Соціальна мережа

Nexus - це сучасна соціальна мережа, схожа на Instagram, створена з Node.js, Express та PostgreSQL.

## Функції

- ✅ Реєстрація та вхід користувачів
- ✅ Створення та публікація постів з фотографіями
- ✅ Лайки та коментарі
- ✅ Система підписок (followers/following)
- ✅ Прямі повідомлення
- ✅ Пошук користувачів та хештегів
- ✅ Профіль користувача з редагуванням
- ✅ Тренди та рекомендації

## Встановлення локально

### Вимоги
- Node.js 18+
- PostgreSQL 12+

### Кроки встановлення

1. **Клонуйте репозиторій**
```bash
git clone <repository-url>
cd nexus
```

2. **Встановіть залежності**
```bash
npm install
```

3. **Налаштуйте базу даних PostgreSQL**
```bash
# Створіть нову БД
createdb nexus_db

# Або за допомогою SQL
psql -c "CREATE DATABASE nexus_db;"
```

4. **Створіть файл .env**
```bash
cp .env.example .env
```

5. **Редагуйте файл .env**
```
DATABASE_URL=postgresql://username:password@localhost:5432/nexus_db
JWT_SECRET=your_super_secret_key_change_this_in_production
PORT=5000
NODE_ENV=development
```

6. **Запустіть сервер**
```bash
npm run dev
```

7. **Відвідайте застосунок**
```
http://localhost:5000
```

## Розгортання на Railway.com

### Кроки розгортання

1. **Зареєструйтесь на Railway.com**
   - Перейдіть на [railway.app](https://railway.app)
   - Зареєструйтесь через GitHub

2. **Створіть новий проект**
   - Натисніть "Create New Project"
   - Виберіть "Deploy from GitHub repo"

3. **Підключіть GitHub репозиторій**
   - Виберіть ваш репозиторій з Nexus

4. **Додайте PostgreSQL базу даних**
   - У Railway натисніть "Add Service"
   - Виберіть "PostgreSQL"

5. **Налаштуйте змінні середовища**
   - У Railway перейдіть на Variables
   - Додайте наступні змінні:
     - `DATABASE_URL`: будуть автоматично заповнені
     - `JWT_SECRET`: встановіть сильний ключ
     - `NODE_ENV`: `production`
     - `PORT`: `5000`

6. **Розгортання**
   - Railway автоматично розгорне застосунок при push на GitHub
   - Проверьте статус у Dashboard

7. **Ініціалізація БД**
   - На сервері запустіть:
   ```bash
   node -e "require('./database/init.js').then(() => process.exit(0))"
   ```

## API Endpoints

### Аутентифікація
- `POST /api/auth/register` - Реєстрація
- `POST /api/auth/login` - Вхід

### Користувачі
- `GET /api/users/:id` - Отримати профіль
- `PUT /api/users/:id` - Оновити профіль

### Пости
- `GET /api/posts` - Отримати стрічку
- `POST /api/posts` - Створити пост
- `GET /api/posts/:id` - Отримати пост
- `DELETE /api/posts/:id` - Видалити пост

### Коментарі
- `POST /api/comments` - Додати коментар
- `GET /api/comments/post/:postId` - Отримати коментарі
- `DELETE /api/comments/:id` - Видалити коментар

### Лайки
- `POST /api/likes` - Лайк пост
- `DELETE /api/likes/:postId` - Розлайк пост
- `GET /api/likes/post/:postId` - Отримати лайки

### Підписки
- `POST /api/follows` - Підписатися
- `DELETE /api/follows/:followingId` - Відписатися
- `GET /api/follows/followers/:userId` - Отримати підписників
- `GET /api/follows/following/:userId` - Отримати підписок

### Повідомлення
- `POST /api/messages` - Відправити повідомлення
- `GET /api/messages` - Отримати вхідні
- `GET /api/messages/conversation/:otherUserId` - Отримати розмову

### Пошук
- `GET /api/search/users?q=query` - Пошук користувачів
- `GET /api/search/hashtags?q=query` - Пошук хештегів
- `GET /api/search/hashtags/:name/posts` - Отримати пости за хештегом

## Структура проекту

```
nexus/
├── public/
│   ├── index.html      # Головна сторінка
│   ├── styles.css      # Стилі
│   └── app.js          # Клієнтський JavaScript
├── routes/
│   ├── auth.js         # Маршрути аутентифікації
│   ├── users.js        # Маршрути користувачів
│   ├── posts.js        # Маршрути постів
│   ├── comments.js     # Маршрути коментарів
│   ├── likes.js        # Маршрути лайків
│   ├── follows.js      # Маршрути підписок
│   ├── messages.js     # Маршрути повідомлень
│   └── search.js       # Маршрути пошуку
├── middleware/
│   └── auth.js         # Middleware для автентифікації
├── database/
│   └── init.js         # Ініціалізація БД
├── server.js           # Основний сервер
├── db.js               # Конфігурація БД
├── package.json        # Залежності
├── .env.example        # Приклад змінних
├── Procfile            # Конфігурація для Railway
└── README.md           # Цей файл
```

## Розробка

### Запуск з HotReload
```bash
npm run dev
```

### Запуск без HotReload
```bash
npm start
```

## Ліцензія

MIT

## Контакти

Для питань та пропозицій відкрийте Issue на GitHub.

---

**Nexus** - Поділися своїми моментами! 📸
