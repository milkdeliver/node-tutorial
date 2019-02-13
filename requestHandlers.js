var exec = require('child_process').exec;

function start(response) {
    console.log('Request handler "start" was called');
    // function sleep(milliSeconds) {
    //   var startTime = new Date().getTime();
    //   while (new Date().getTime() < startTime + milliSeconds);
    // }

    // sleep(10000);
    exec('find /', { timeout: 10000, maxBuffer: 20000*1024 }, function(error, stdout, stderr) {
        response.writeHead(200, {'content-type': 'text/plain'});
        response.write(stdout);
        response.end();
        console.log(stdout);
    });   
}

function upload(response) {
    console.log('Request handler "upload" was called');
    response.writeHead(200, {'content-type': 'text/plain'});
    response.write('Hello upload');
    response.end();
}

exports.start = start;
exports.upload = upload;