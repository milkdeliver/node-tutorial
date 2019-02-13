function route(handle, pathname, response) {
    console.log('The route path name' + pathname);
    if( typeof handle[pathname] === 'function') {
        handle[pathname](response);
    } else {
        console.log('No request handle found for ' + pathname);
        response.writeHead(404, {'content-type': 'text/plain'});
        response.write('404 not found');
        response.end();
    }
}

exports.route = route;