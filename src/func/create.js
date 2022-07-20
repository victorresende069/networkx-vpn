const fs = require('fs');
const path = require('path');

const createvpn = async function(host){
    let dirV = path.join('vpn.pbk')

    const data = `[VPN]
PreferredPort=VPN4-0
PreferredDevice=WAN Miniport (PPTP)
MEDIA=rastapi
Port=VPN4-0
Device=WAN Miniport (PPTP)
DEVICE=vpn
PhoneNumber=${host}`;
    fs.writeFileSync(dirV, data)
}
    
module.exports = createvpn;