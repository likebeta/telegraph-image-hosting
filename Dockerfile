FROM nginx:alpine
LABEL MAINTAINER="likebeta<ixxoo.me@gmail.com>"

COPY www /var/www/img
COPY img.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
