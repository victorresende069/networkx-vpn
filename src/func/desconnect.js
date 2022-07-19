const cmd = require('node-cmd');

const desconnectVPN = async function connect(event){
    cmd.run(`rasdial "VPN" /d`, function(err, data, stder){
        console.log(data);
        event.reply('return', '208');
     });
}

module.exports = desconnectVPN;

