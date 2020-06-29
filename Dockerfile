FROM nginx:alpine
LABEL MAINTAINER="likebeta<ixxoo.me@gmail.com>"

COPY www /var/www/img
COPY img.conf.template /etc/nginx/templates/default.conf.template

CMD ["nginx", "-g", "daemon off;"]
