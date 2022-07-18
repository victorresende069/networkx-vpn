const cmd = require('node-cmd');

const connectVPN = async function connect(event, user, pass){
    cmd.run(`rasdial "VPN" ${user} ${pass}`, function(err, data, stder){
        event.reply('return', JSON.stringify({status: data}));
     });
}

module.exports = connectVPN;

