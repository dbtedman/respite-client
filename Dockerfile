FROM node:15.5.1 as ClientBuild
RUN useradd respite
COPY --chown=respite:respite ./ /respite/
WORKDIR /respite/
RUN yarn install && yarn build

FROM golang:1.15.6-buster as ServerBuild
RUN useradd respite
COPY --chown=respite:respite ./ /respite/
WORKDIR /respite/
RUN go mod vendor && go build -mod vendor

FROM golang:1.15.6-buster
RUN useradd respite
RUN mkdir /respite/ && chown -R respite:respite /respite/
WORKDIR /respite/
COPY --chown=respite:respite --from=ServerBuild /respite/respite /respite/
RUN chmod 550 /respite/respite
USER respite
CMD ["/respite/respite"]
