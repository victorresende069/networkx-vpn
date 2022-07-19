const cmd = require('node-cmd');
const path = require('path');

const connectVPN = async function connect(event, user, pass){
    let dirV = path.join(__dirname, 'vpn.pbk')

    cmd.run(`rasdial "VPN" ${user} ${pass} /phonebook:"${dirV}"`, function(err, data, stder){


        let result = data.includes('sucedida');
        
        console.log(result);

       if (result) {
            event.reply('return', '200');
       }else {
            event.reply('return', '400');
       }


     });
}

module.exports = connectVPN;

