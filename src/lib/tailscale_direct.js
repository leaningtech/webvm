class TailscaleDirectTCP {
  constructor(remoteAddress, remotePort, options = {}, network) {
    this._socket = new network.tcpSocket();
    const ip = this.ipStringToUint32(remoteAddress);

    this._socket.bind(0);
    const connectRet = this._socket.connect(ip, remotePort);
    if (connectRet != 0) {
      this._opened = Promise.reject(new DOMException("Connect failed", "NetworkError"));
      return;
    }

    this._opened = this._socket.waitOutgoing().then(ret => {
      if (ret != 0) {
        throw new DOMException("Connection wait failed", "NetworkError");
      }

      return {
        get_readable: () => null,  // not used in ipStack glue
        get_writable: () => null,  // not used in ipStack glue
        get_remoteAddress: () => remoteAddress,
        get_remotePort: () => remotePort,
        get_localAddress: () => "0.0.0.0",
        get_remotePort: () => 0,
      };
    });

    this._closed = new Promise(resolve => {
      this._closedResolve = resolve;
    });
  }

  get_opened() {
    return this._opened;
  }
  get_closed() {
    return this._closed;
  }
  close() {
    this._socket.close();
    if (this._closedResolve) {
      this._closedResolve();
    }
    return this._closed;
  }
  get_socket() {
    return this._socket;
  }
  ipStringToUint32(ipStr) {
    const parts = ipStr.split('.');
    return (parseInt(parts[0]) << 24) |
          (parseInt(parts[1]) << 16) |
          (parseInt(parts[2]) << 8) |
          parseInt(parts[3]);
  }
}

class TailscaleDirectUDP {
  constructor() {}
}
class TailscaleDirectServer {
  constructor() {}
}

export const TailscaleDirectSockets = {
  tcpSocket: (remoteAddress, remotePort, options, network) => {
    return new TailscaleDirectTCP(remoteAddress, remotePort, options, network);
  }
};
