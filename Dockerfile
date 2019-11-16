FROM nginx:alpine

RUN mkdir usr/share/nginx/html/sitecheck
COPY /dist/ usr/share/nginx/html/sitecheck

EXPOSE 80