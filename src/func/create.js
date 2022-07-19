const fs = require('fs');
const path = require('path');

const createvpn = async function(host){
    let dirV = path.join(__dirname, 'vpn.pbk')

    const data = `[VPN]
MEDIA=rastapi
Port=VPN2-0
Device=WAN Miniport (IKEv2)
DEVICE=vpn
PhoneNumber=${host}`;
    fs.writeFileSync(dirV, data)
}
    
module.exports = createvpn;