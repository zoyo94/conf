function FindProxyForURL(url, host) {
    // 将所有流量导向本地的 SOCKS5 代理
    return "SOCKS5 127.0.0.1:8091";
}
