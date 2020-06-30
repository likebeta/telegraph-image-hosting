FROM nginx:alpine
LABEL MAINTAINER="likebeta<ixxoo.me@gmail.com>"

ENV NGINX_PORT=80
COPY www /var/www/img
COPY img.conf.template /etc/nginx/templates/default.conf.template

ENTRYPOINT []
CMD /docker-entrypoint.sh nginx -g 'daemon off;'
