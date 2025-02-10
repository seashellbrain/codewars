function ipv4Parser(ip, mask) {
    let ipArray = ip.split('.').map(x => parseInt(x));
    let maskArray = mask.split('.').map(x => parseInt(x));
    
    let net = [];
    let host = [];

    for (let i = 0; i < 4; i++) {
        let netPart = ipArray[i] & maskArray[i];
        let hostPart = ipArray[i] & (~maskArray[i]);

        net.push(netPart);
        host.push(hostPart);
    }

    let netResult = net.join(".");
    let hostResult = host.join(".");

    return [netResult, hostResult];
}