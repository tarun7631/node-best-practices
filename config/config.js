var fs = require('fs');

var configs = {
  'CONFIGS_OVERWRITE_FILE'             : 'configs_overwrite.js',
  'SECRET'						       : '293849823bsdjcy82irnxiueycrbe2yrcoiuy2rkhwbudjxhfd' ,
  'MONGO_HOST' 					       : ["127.0.0.1"] ,
  'MONGO_PORT' 					       : "27017" ,

  'DB_NAME'		 				        : "test",
  "TIME_ZONE"                          : "Asia/Calcutta",
  "TOKEN_EXPIRE_TIME"                  : 84600 ,
  "OTP_EXPIRE_TIME"                    : 300 ,
};

var overwriteConfigFulFileName = __dirname + '/' + configs.CONFIGS_OVERWRITE_FILE;

if (fs.existsSync(overwriteConfigFulFileName)) {
    var overwriteConfig = require(overwriteConfigFulFileName);
    for (var key in overwriteConfig) {
        configs[key] = overwriteConfig[key];
    }
} else {
    console.log('[[[[[[[ No Overwrite Configs File Found to overwrite any config key ]]]]]]]]');
}

module.exports = configs;