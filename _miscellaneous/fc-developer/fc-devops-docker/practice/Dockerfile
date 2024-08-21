FROM nginx:latest

COPY html /usr/share/nginx/html

# CMD [ "World" ]
ENTRYPOINT [ "/docker-entrypoint.sh" ]
CMD [ "nginx", "-g", "daemon off;" ]