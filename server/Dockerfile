FROM ruby:3.3.3-alpine

ARG RAILS_ROOT=/rails

ARG BUILD_PACKAGES="gcc alpine-sdk curl curl-dev make autoconf libc-dev libtool"
ARG PACKAGES="build-base git libxml2-dev libxslt-dev postgresql-dev yaml-dev zlib zlib-dev readline cairo-dev jpeg-dev giflib-dev nodejs yarn tzdata yaml g++ tzdata yaml postgresql-client bash file libpng libjpeg libgcc libgomp libpng-dev libsodium libsodium-dev shared-mime-info graphviz msttcorefonts-installer fontconfig font-bitstream-type1 ghostscript-fonts ttf-freefont gcompat"

ENV BUNDLE_APP_CONFIG="$RAILS_ROOT/.bundle"
ENV RAILS_ENV=development
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.5/main' >> /etc/apk/repositories
# install packages
# RUN apk update \
#   && apk upgrade \
#   && apk add --update --no-cache $BUILD_PACKAGES $PACKAGES \
#   && apk add --no-cache imagemagick=6.9.6.8-r1 \
#   && apk add --no-cache imagemagick-dev=6.9.6.8-r1 \
#   && apk add --no-cache libc6-compat && ln -s /lib/libc.musl-x86_64.so.1 /lib/ld-linux-x86-64.so.2 \
#   && apk add --no-cache less \
#   && gem install bundler

RUN apk update \
  && apk upgrade \
  && apk add --update --no-cache $BUILD_PACKAGES $PACKAGES \
  && apk add --no-cache imagemagick=6.9.6.8-r1 \
  && apk add --no-cache imagemagick-dev=6.9.6.8-r1 \
  && apk add --no-cache libc6-compat \
  && [ ! -f /lib/ld-linux-x86-64.so.2 ] && ln -s /lib/libc.musl-x86_64.so.1 /lib/ld-linux-x86-64.so.2 || true \
  && apk add --no-cache less \
  && gem install bundler


RUN update-ms-fonts \
    && fc-cache -f \
    && rm -rf /var/cache/*

# entrykit
# ENV ENTRYKIT_VERSION 0.4.0
# RUN wget https://github.com/progrium/entrykit/releases/download/v${ENTRYKIT_VERSION}/entrykit_${ENTRYKIT_VERSION}_Linux_x86_64.tgz \
#   && tar -xvzf entrykit_${ENTRYKIT_VERSION}_Linux_x86_64.tgz \
#   && rm entrykit_${ENTRYKIT_VERSION}_Linux_x86_64.tgz \
#   && mv entrykit /bin/entrykit \
#   && chmod +x /bin/entrykit \
#   && entrykit --symlink

# work dir
WORKDIR $RAILS_ROOT

# RUN bundle config build.nokogiri --use-system-libraries
# RUN bundle config set path "vendor/bundle"

# ENTRYPOINT [ \
#   "prehook", "ruby -v", "--", \
#   "prehook", "bundle install -j3 --quiet --path vendor/bundle", "--"]

ADD Gemfile Gemfile
ADD Gemfile.lock Gemfile.lock
RUN bundle install -j3 --quiet
# CMD ["rails","s","-b","0.0.0.0"]
