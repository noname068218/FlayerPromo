# 🛠 ROADMAP.md — Promo Lombardia

> Полная документация по проекту: раздача рекламных флаеров в Ломбардии
> **Технологии:** React (TS) + MUI + ASP.NET Core Web API + SQLite

---

## 📁 Структура проекта

```
PromoLombardia/
├── client-app       # React + MUI (frontend)
├── server-api       # ASP.NET Core API (backend)
├── roadmap.md       # Документация проекта
```

---

## 🚀 Основная логика

### 🔹 Клиент (client-app)

- Реализован на **React + TypeScript**
- Используется **Material UI** для оформления
- React Router для маршрутов
- Страницы: Главная, Услуги, Контакты, Отзывы, Галерея, Админ-панель
- JWT сохраняется в `localStorage` после логина

### 🔹 Сервер (server-api)

- Реализован на **ASP.NET Core Web API (.NET 8)**
- **Entity Framework Core + SQLite** для хранения данных
- Модели: `Review`, `Message`, `AdminUser`
- JWT авторизация через `/api/auth/login`

---

## ⚛️ Фронтенд (React)

### 📦 Основные компоненты

- `/pages/Home.tsx` — главная страница
- `/pages/Services.tsx` — описание услуг
- `/pages/Contacts.tsx` — форма обратной связи
- `/pages/Reviews.tsx` — отзывы клиентов
- `/pages/Gallery.tsx` — фото работ
- `/pages/admin/Login.tsx` — вход администратора
- `/pages/admin/Dashboard.tsx` — админ-панель (доступ с токеном)

### 🧩 Вспомогательные файлы

- `api/*.ts` — модули для вызова API (fetch)
- `components/ProtectedRoute.tsx` — защита маршрутов

---

## 🧠 Основные принципы

### 🔐 JWT авторизация

- `POST /api/auth/login` → выдаёт токен
- Токен сохраняется в `localStorage`
- Защищённые маршруты обёрнуты в `ProtectedRoute`
- Backend проверяет токен через `[Authorize]`

### 🔄 useEffect / API fetch

```tsx
useEffect(() => {
  getReviews().then(setReviews);
}, []);
```

- Загружает данные при загрузке компонента
- Используется во всех страницах, где есть данные с API

### 📩 Отправка сообщений

```ts
await fetch("/api/messages", { method: "POST", body: JSON.stringify(...) })
```

- Отправка формы контактов на сервер

### 🗃 Доступ к БД

- Миграции: `dotnet ef migrations add <Name>`
- Применение: `dotnet ef database update`
- Таблицы: `Messages`, `Reviews`, `AdminUsers`

---

## 🌐 API (сервер)

### 🔹 Контроллеры

- `/api/reviews` — отзывы (GET/POST)
- `/api/messages` — сообщения с формы (POST)
- `/api/auth/login` — вход администратора (POST)

### 🔹 Авторизация

```csharp
builder.Services.AddAuthentication(...)
app.UseAuthentication();
app.UseAuthorization();
```

- Защищённые методы: `[Authorize]`

### 🔹 Пример ответа

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

## 🔧 Использование проекта

### 1. Запуск backend

```bash
cd server-api
dotnet run
```

### 2. Запуск frontend

```bash
cd client-app
npm start
```

### 3. Тестирование логина (Swagger/Postman)

```json
POST /api/auth/login
{
  "username": "admin",
  "password": "123"
}
```

### 4. Добавление отзывов, сообщений — через формы или API

---

## ✅ Что уже реализовано

- [x] Страницы: услуги, отзывы, контакты, галерея
- [x] Форма отправки заявки
- [x] Отзывы хранятся в базе
- [x] JWT авторизация
- [x] Админ-панель с защитой доступа

---

## 🧭 Следующие шаги

- [ ] Добавить редактирование и удаление отзывов в админке
- [ ] Загрузка изображений (галерея)
- [ ] Деплой frontend и backend (на Render, Vercel и т.п.)
- [ ] Подключить Redux Toolkit (по желанию)

---

## 📝 Полезно помнить

- `localStorage` = хранение токена
- `Authorization: Bearer <токен>` = доступ к API
- `ProtectedRoute` = защита маршрутов
- `EF Core` = работа с таблицами и миграциями
- `MUI` = быстрое и красивое оформление

---

> Автор: ты 🙌
> Проект создаётся для реального бизнеса и улучшения навыков fullstack-разработки 💼
