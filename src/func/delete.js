const fs = require('fs');
const path = require('path');

const deletevpn = async function(){
    let dirV = path.join(__dirname, 'vpn.pbk')
    fs.unlinkSync(dirV);
}


module.exports = deletevpn;