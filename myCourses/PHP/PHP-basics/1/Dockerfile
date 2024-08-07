# Используем базовый образ с PHP 8.2
FROM php:8.2-fpm

# Устанавливаем Nginx
RUN apt-get update && apt-get install -y nginx

# Копируем конфигурацию Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Копируем содержимое сайта
COPY html/ /var/www/html/

# Запускаем Nginx и PHP-FPM
CMD ["sh", "-c", "service nginx start && php-fpm"]
