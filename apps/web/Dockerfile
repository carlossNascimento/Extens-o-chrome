FROM nginx:alpine

# Copy nginx config (build context is repo root in docker-compose)
COPY apps/web/nginx.conf /etc/nginx/conf.d/default.conf

# Copy static site
COPY apps/web/public /usr/share/nginx/html/

# Copy top-level icons (if present) into /usr/share/nginx/html/icons
COPY icon16.png icon32.png icon48.png icon128.png /usr/share/nginx/html/icons/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
