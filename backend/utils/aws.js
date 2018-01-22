var aws = require('aws-sdk');

aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION

});

exports = module.exports = {
  sign: function(filename, filetype) {
    var s3 = new aws.S3();

    console.log('signed content', filetype)

    var params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: filename,
      Expires: 60,
      ContentType: filetype
    };

   return new Promise((resolve, reject) => {
      s3.getSignedUrl('putObject', params, function(err, data) {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      });

    })
  }
};