FROM alpine:latest AS builder

RUN apk add --no-cache upx

COPY go1.23.0.linux-amd64.tar.gz .

RUN tar -C /usr/local -xzf go1.23.0.linux-amd64.tar.gz && \
    rm go1.23.0.linux-amd64.tar.gz && \
    ln -s /usr/local/go/bin/go /usr/bin/go

WORKDIR /root/hello

RUN go mod init example/hello

COPY hello.go .

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -ldflags="-s -w" -o hello

RUN upx --best hello

FROM scratch
COPY --from=builder /root/hello/hello .

ENTRYPOINT ["./hello"]