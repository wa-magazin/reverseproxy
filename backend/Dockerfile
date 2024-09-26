# Используем Node.js как базовый образ
FROM node:14

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json (если он есть)
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы проекта в контейнер
COPY . .

# Открываем порт 4000
EXPOSE 4000

# Команда для запуска приложения
CMD ["node", "app.js"]
