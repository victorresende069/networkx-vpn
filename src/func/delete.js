const fs = require('fs');
const path = require('path');

const deletevpn = async function(){
    let dirV = path.join('vpn.pbk')
    fs.unlinkSync(dirV);
}


module.exports = deletevpn;