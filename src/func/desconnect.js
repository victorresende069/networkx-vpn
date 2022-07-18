const cmd = require('node-cmd');

const desconnectVPN = async function connect(event){
    cmd.run(`rasdial "VPN" /d`, function(err, data, stder){
        event.reply('return', JSON.stringify({status: data}));
     });
}

module.exports = desconnectVPN;

