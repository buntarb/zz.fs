
require( './../../../lib/filetools.js' );

var ft = new zz.fs.FileTools( );

console.log( ft.isWidowsOs( ) );
console.log( ft.getPathDelim( ) );
console.log( ft.execSync( 'node idk' ).toString( ) );
console.log( ft.getDirectories( './' ) );
console.log( ft.getFiles( './' ) );
console.log( ft.getRootPath( ) );
console.log( ft.getIdkPath( ) );

// // console.log( 'ft.existsSync = ' + ft.existsSync( './lib/filetools.js' ) );
//
// // for( var p in ft ){
// //
// //     var fStr =  '' + ft[ p ];
// //     console.log( 'ft.' + p + fStr.substring( fStr.indexOf( '(' ), fStr.indexOf( ')' ) ) + ')' );
// // }
//
// var testDirSync = './lib/sources/tests/testDirSync/';
// var testDirAsync = './lib/sources/tests/testDirSync/testDirAsync/';
//
// var path = testDirSync + 'oldfile.txt';
// var newPath = testDirSync + 'newfile.txt';
//
// var pathAsync = testDirAsync + 'oldfile.txt';
// var newPathAsync = testDirAsync + 'newfile.txt';
//
// ft.mkdirSync( testDirSync );
//
// var watcher = ft.watch( testDirSync, {persistent: true, recursive: true, encoding: 'utf8'}, function( eventType, filename ){
//
//     console.log( '-----------ft.watch detected-------------' );
//     console.log( 'Event : ' + eventType );
//     console.log(filename + ' file Changed ...');
// } );
//
// console.log( '-----------watcher = ' + watcher );
//
// ft.mkdir( testDirAsync, undefined, function( e ){
//
//     if( e ){
//
//         console.log( 'Error ft.mkdir = ' + e );
//     }else{
//
//         console.log( 'Success ft.mkdir' );
//     }
// } );
//
// ft.writeFileSync( path, 'крякозяблё', 'utf8' );
//
// ft.writeFile( pathAsync, 'test ft.writeFile', 'utf8', function( e ){
//
//     if( e ){
//
//         console.log( 'Error ft.writeFile = ' + e );
//     }else{
//
//         console.log( 'Success ft.writeFile' );
//     }
// } );
//
// try{
//
//     ft.renameSync( path, newPath );
//     console.log( 'Success ft.renameSync' );
//
// }catch ( e ){
//
//     console.log( 'Error ft.renameSync = ' + e );
// }
//
// ft.truncate( pathAsync, 1, function( e ){
//
//     if( e ){
//
//         console.log( 'Error ft.truncate = ' + e );
//     }else{
//
//         console.log( 'Success ft.truncate' );
//     }
// } );
//
// ft.rename( pathAsync, newPathAsync, function( e ){
//
//     if( e ){
//
//         console.log( 'Error ft.rename = ' + e );
//     }else{
//
//         console.log( 'Success ft.rename' );
//     }
// } );
//
// ft.truncateSync( newPath, 0 );
//
// //was not tested
// // ft.chown( path, uid, gid, callback )
// // ft.chownSync( path, uid, gid )
// // ft.fchown( fd, uid, gid, callback )
// // ft.fchownSync( fd, uid, gid )
//
// //Deprecated since: v0.4.7
// // ft.lchown( path, uid, gid, callback )
// // ft.lchownSync( path, uid, gid )
//
// //was not tested
// // ft.chmod( path, mode, callback )
// // ft.chmodSync( path, mode )
// // ft.fchmod( fd, mode, callback )
// // ft.fchmodSync( fd, mode )
//
// //Deprecated since: v0.4.7
// // ft.lchmod( path, mode, callback )
// // ft.lchmodSync( path, mode )
//
// ft.stat( newPathAsync, function( e, stats ){
//
//     if( e ){
//
//         console.log( 'Error ft.stat = ' + e );
//     }else{
//
//         console.log( 'ft.stat = ' + JSON.stringify( stats ) );
//     }
// } );
//
// console.log( 'ft.stat = ' + JSON.stringify( ft.statSync( newPath ) ) ); //if it's a file then there will be error thrown
//
// //was not tested
// // ft.fstat( fd, callback )
// // ft.fstatSync( fd )
// // ft.lstat( path, callback )
//
// var linkPathAsync = testDirAsync + 'testLink';
//
// ft.link( newPathAsync, linkPathAsync, function( e ){
//
//     if( e ){
//
//         console.log( 'Error ft.link = ' + e );
//     }else{
//
//         console.log( 'Success ft.link' );
//     }
// } );
//
// var linkPath = testDirSync + 'testLink2';
//
// ft.linkSync( newPath, linkPath );
//
// var symbolLinkPathAsync = testDirAsync + 'symbolLink';
//
// ft.symlink( newPathAsync, symbolLinkPathAsync, undefined, function( e ){
//
//     if( e ){
//
//         console.log( 'Error ft.symlink = ' + e );
//     }else{
//
//         console.log( 'Success ft.symlink' );
//     }
// } );
//
// var symbolLinkPath = testDirSync + 'symbolLink2';
//
// ft.symlinkSync( newPath, symbolLinkPath, undefined );
//
// ft.readlink( symbolLinkPathAsync, function( e, linkString ){
//
//     if( e ){
//
//         console.log( 'Error ft.readlink = ' + e );
//     }else{
//
//         console.log( 'linkString = ' + linkString );
//     }
// } );
//
// console.log( 'linkString = ' + ft.readlinkSync( symbolLinkPath ) );
//
// ft.realpath( newPathAsync, undefined, function( e, resolvedPath ){
//
//     if( e ){
//
//         console.log( 'Error ft.realpath = ' + e );
//     }else{
//
//         console.log( 'realpath = ' + resolvedPath );
//     }
// } );
//
// console.log( 'realpath = ' + ft.realpathSync( newPath ) );
//
// ft.unlink( linkPathAsync, function( e ){
//
//     if( e ){
//
//         console.log( 'Error ft.unlink = ' + e );
//     }else{
//
//         console.log( 'Success ft.unlink' );
//     }
// } );
//
// ft.unlinkSync( linkPath );
//
// ft.readdir( testDirAsync, function( e, files ){
//
//     if( e ){
//
//         console.log( 'Error ft.readdir = ' + e );
//     }else{
//
//         console.log( '-------files--------' );
//         for( var f in files ){
//
//             console.log( files[ f ] );
//         }
//     }
// } );
//
// var buf = new Buffer(1024);
// var bufWrite = new Buffer('Some text to write Async');
//
// console.log("Going to open an existing file");
//
// ft.open( newPathAsync, 'r+', function( err, fd ) {
//
//     if ( err ) {
//
//         return console.error( 'Error ft.open = ' + err );
//     }
//     console.log( fd + " File opened successfully!" );
//
//     console.log( "Going to write the file" );
//     ft.write( fd, bufWrite, 0, bufWrite.length, 0, function( err, written, bytes ){
//
//         if ( err ){
//
//             console.log( err );
//         }
//
//         // Print only read bytes to avoid junk.
//         if( written > 0 ){
//
//             console.log( '----written ' + written );
//         }
//
//         console.log( '-----bytes = ' + bytes );
//     });
//
//     console.log( "Going to read the file" );
//
//     ft.read( fd, buf, 0, buf.length, 0, function( err, bytes ){
//
//         if (err){
//
//             console.log(err);
//         }
//
//         // Print only read bytes to avoid junk.
//         if( bytes > 0 ){
//
//             console.log( '----' + buf.slice( 0, bytes ).toString( ) );
//         }else {
//
//             console.log( 'bytes = ' + bytes );
//         }
//
//         // Close the opened file.
//         ft.close( fd, function( err ){
//
//             if ( err ){
//
//                 console.log( err );
//             }
//             console.log("File closed successfully.");
//         });
//     });
// });
//
// var fileDescriptor = ft.openSync( newPath, 'r+', undefined );
// console.log( 'fileDescriptor = ' + fileDescriptor );
//
// var bufWriteSync = new Buffer('Some text to write Sync');
// var written = ft.writeSync( fileDescriptor, bufWriteSync, 0, bufWriteSync.length, 0 );
// console.log( 'written = ' + written );
//
// var bufSync = new Buffer(1024);
// var bytesReadNumber = ft.readSync( fileDescriptor, bufSync, 0, bufSync.length, 0 );
// if( bytesReadNumber > 0 ){
//
//     console.log( '----' + bufSync.slice( 0, bytesReadNumber ).toString( ) );
// }else {
//
//     console.log( 'bytesReadNumber = ' + bytesReadNumber );
// }
//
// ft.closeSync( fileDescriptor );
//
// //was not tested
// // ft.utimes( path, atime, mtime, callback )
// // ft.utimesSync( path, atime, mtime )
// // ft.futimes( fd, atime, mtime, callback )
// // ft.futimesSync( fd, atime, mtime )
// // ft.fsync( fd, callback )
// // ft.fsyncSync( fd )
//
// ft.appendFile( newPathAsync, 'Appended text', undefined, function( e ){
//
//     if( e ){
//
//         console.log( 'Error ft.appendFile = ' + e );
//     }else{
//
//         console.log("ft.appendFile successfully.");
//     }
// } );
//
// ft.appendFileSync( newPath, 'Appended text', 'utf8') ;
//
// ft.readFile( newPathAsync, 'utf8', function( e, data ){
//
//     if( e ){
//
//         console.log( 'Error ft.readFile = ' + e );
//     }else{
//
//         console.log( '-------data--------' );
//         console.log( data );
//     }
// } );
//
// console.log( 'data = ' + ft.readFileSync( newPath, undefined ) );
//
// //fs.watch should be used instead
// // ft.watchFile( filename, options, listener )
// // ft.unwatchFile( filename, listener )
//
// //Deprecated since: v1.0.0
// // ft.exists( path, callback )
//
// console.log( '==========' + path + ' exists = ' + ft.existsSync( path ) );
//
// setTimeout( function( ){ watcher.close();}, 2000 );
//
//
// ft.rmdir( testDirAsync, function( e ){
//
//     if( e ){
//
//         console.log( 'Error ft.rmdir = ' + e );
//     }else{
//
//         console.log("Dir removed successfully.");
//     }
// } );
//
// var files = ft.readdirSync( testDirSync );
// console.log( '-------files in Sync--------' );
// for( var i in files ){
//
//     var f = files[ i ];
//     console.log( f );
//
//     console.log( f + '.isFile( ) = ' + ft.lstatSync( testDirSync + f ).isFile( ) );
//
//     // if( ft.statSync( testDirSync + f ).isFile( ) ){
//     if( ft.lstatSync( testDirSync + f ).isFile( ) || ft.lstatSync( testDirSync + f ).isSymbolicLink( ) ){
//
//         ft.unlinkSync( testDirSync + f );
//     }
// }
//
// files = ft.readdirSync( testDirAsync );
// console.log( '-------files in Async--------' );
// for( i in files ){
//
//     f = files[ i ];
//     console.log( f );
//
//     // if( ft.statSync( testDirAsync + f ).isFile( ) ){
//     if( ft.lstatSync( testDirAsync + f ).isFile( ) || ft.lstatSync( testDirAsync + f ).isSymbolicLink( ) ){
//
//         ft.unlinkSync( testDirAsync + f );
//     }
// }
//
// ft.rmdirSync( testDirAsync );
// ft.rmdirSync( testDirSync );