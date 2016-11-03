// Copyright 2016 Artem Lytvynov <buntarb@gmail.com>. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @license Apache-2.0
 * @copyright Artem Lytvynov <buntarb@gmail.com>
 * @fileoverview File tools is wrapper of nodejs fs.
 */

require( 'imazzine-developer-kit' );

goog.provide( 'zz.fs.FileTools' );


/**
 * File tools service class.
 * @constructor
 */
zz.fs.FileTools = function( ){

    /**
     * Node js File System.
     * @private
     */
    this.fs_ = require( 'fs' );

    /**
     * Node js Child Process.
     * @private
     */
    this.childProcess_ = require( 'child_process' );

    /**
     * Node.js modules folder name.
     * @const
     * @type {string}
     */
    this.NODE_MODULE_FOLDER = 'node_modules';

    /**
     * Imazzine Developer Kit root folder name.
     * @const
     * @type {string}
     */
    this.IDK_FOLDER_NAME = 'imazzine-developer-kit';
}

/**
 * @param {string} oldPath
 * @param {string} newPath
 * @param {function(...)=} callback
 */
zz.fs.FileTools.prototype.rename = function( oldPath, newPath, callback ) {

    return this.fs_.rename( oldPath, newPath, callback );
};

/**
 * @param {string} oldPath
 * @param {string} newPath
 */
zz.fs.FileTools.prototype.renameSync = function( oldPath, newPath ) {

    return this.fs_.renameSync( oldPath, newPath );
};

/**
 * @param {*} fd
 * @param {number} len
 * @param {function(...)=} callback
 */
zz.fs.FileTools.prototype.truncate = function( fd, len, callback ) {

    return this.fs_.truncate( fd, len, callback );
};

/**
 * @param {*} fd
 * @param {number} len
 */
zz.fs.FileTools.prototype.truncateSync = function( fd, len ) {

    return this.fs_.truncateSync( fd, len );
};

/**
 * @param {string} path
 * @param {number} uid
 * @param {number} gid
 * @param {function(...)=} callback
 */
zz.fs.FileTools.prototype.chown = function( path, uid, gid, callback ) {

    return this.fs_.chown( path, uid, gid, callback );
};

/**
 * @param {string} path
 * @param {number} uid
 * @param {number} gid
 */
zz.fs.FileTools.prototype.chownSync = function( path, uid, gid ) {

    return this.fs_.chownSync( path, uid, gid );
};

/**
 * @param {*} fd
 * @param {number} uid
 * @param {number} gid
 * @param {function(...)=} callback
 */
zz.fs.FileTools.prototype.fchown = function( fd, uid, gid, callback ) {

    return this.fs_.fchown( fd, uid, gid, callback );
};

/**
 * @param {*} fd
 * @param {number} uid
 * @param {number} gid
 */
zz.fs.FileTools.prototype.fchownSync = function( fd, uid, gid ) {

    return this.fs_.fchownSync( fd, uid, gid );
};

//Deprecated since: v0.4.7
// /**
//  * @param {string} path
//  * @param {number} uid
//  * @param {number} gid
//  * @param {function(...)=} callback
//  */
// zz.fs.FileTools.prototype.lchown = function( path, uid, gid, callback ) {
//
//     return this.fs_.lchown( path, uid, gid, callback );
// };
//
// /**
//  * @param {string} path
//  * @param {number} uid
//  * @param {number} gid
//  */
// zz.fs.FileTools.prototype.lchownSync = function( path, uid, gid ) {
//
//     return this.fs_.lchownSync( path, uid, gid );
// };

/**
 * @param {string} path
 * @param {number} mode
 * @param {function(...)=} callback
 */
zz.fs.FileTools.prototype.chmod = function( path, mode, callback ) {

    return this.fs_.chmod( path, mode, callback );
};

/**
 * @param {string} path
 * @param {number} mode
 */
zz.fs.FileTools.prototype.chmodSync = function( path, mode ) {

    return this.fs_.chmodSync( path, mode );
};

/**
 * @param {*} fd
 * @param {number} mode
 * @param {function(...)=} callback
 */
zz.fs.FileTools.prototype.fchmod = function( fd, mode, callback ) {

    return this.fs_.fchmod( fd, mode, callback );
};

/**
 * @param {*} fd
 * @param {number} mode
 */
zz.fs.FileTools.prototype.fchmodSync = function( fd, mode ) {

    return this.fs_.fchmodSync( fd, mode );
};

//Deprecated since: v0.4.7
// /**
//  * @param {string} path
//  * @param {number} mode
//  * @param {function(...)=} callback
//  */
// zz.fs.FileTools.prototype.lchmod = function( path, mode, callback ) {
//
//     return this.fs_.lchmod( path, mode, callback );
// };
//
// /**
//  * @param {string} path
//  * @param {number} mode
//  */
// zz.fs.FileTools.prototype.lchmodSync = function( path, mode ) {
//
//     return this.fs_.lchmodSync( path, mode );
// };

/**
 * @param {string} path
 * @param {function(string, fs.Stats)=} callback
 */
zz.fs.FileTools.prototype.stat = function( path, callback ) {

    return this.fs_.stat( path, callback );
};

/**
 * @param {string} path
 * @return {fs.Stats}
 */
zz.fs.FileTools.prototype.statSync = function( path ) {

    return this.fs_.statSync( path );
};

/**
 * @param {*} fd
 * @param {function(string, fs.Stats)=} callback
 */
zz.fs.FileTools.prototype.fstat = function( fd, callback ) {

    return this.fs_.fstat( fd, callback );
};

/**
 * @param {*} fd
 * @return {fs.Stats}
 */
zz.fs.FileTools.prototype.fstatSync = function( fd ) {

    return this.fs_.fstatSync( fd );
};

/**
 * @param {string} path
 * @param {function(string, fs.Stats)=} callback
 */
zz.fs.FileTools.prototype.lstat = function( path, callback ) {

    return this.fs_.lstat( path, callback );
};

/**
 * @param {string} path
 * @return {fs.Stats}
 */
zz.fs.FileTools.prototype.lstatSync = function( path ) {

    return this.fs_.lstatSync( path );
};

/**
 * @param {string} srcpath
 * @param {string} dstpath
 * @param {function(...)=} callback
 */
zz.fs.FileTools.prototype.link = function( srcpath, dstpath, callback ) {

    return this.fs_.link( srcpath, dstpath, callback );
};

/**
 * @param {string} srcpath
 * @param {string} dstpath
 */
zz.fs.FileTools.prototype.linkSync = function( srcpath, dstpath ) {

    return this.fs_.linkSync( srcpath, dstpath );
};

/**
 * @param {string} srcpath
 * @param {string} dstpath
 * @param {string=} type
 * @param {function(...)=} callback
 */
zz.fs.FileTools.prototype.symlink = function( srcpath, dstpath, type, callback ) {

    return this.fs_.symlink( srcpath, dstpath, type, callback );
};

/**
 * @param {string} srcpath
 * @param {string} dstpath
 * @param {string=} type
 */
zz.fs.FileTools.prototype.symlinkSync = function( srcpath, dstpath, type ) {

    return this.fs_.symlinkSync( srcpath, dstpath, type );
};

/**
 * @param {string} path
 * @param {function(string, string)=} callback
 */
zz.fs.FileTools.prototype.readlink = function( path, callback ) {

    return this.fs_.readlink( path, callback );
};

/**
 * @param {string} path
 * @return {string}
 */
zz.fs.FileTools.prototype.readlinkSync = function( path ) {

    return this.fs_.readlinkSync( path );
};

/**
 * @param {string} path
 * @param {Object.<string,string>|function(string, string)=} cache
 * @param {function(string, string)=} callback
 */
zz.fs.FileTools.prototype.realpath = function( path, cache, callback ) {

    return this.fs_.realpath( path, cache, callback );
};

/**
 * @param {string} path
 * @param {Object.<string,string>=} cache
 * @return {string}
 */
zz.fs.FileTools.prototype.realpathSync = function( path, cache ) {

    return this.fs_.realpathSync( path, cache );
};

/**
 * @param {string} path
 * @param {function(...)=} callback
 */
zz.fs.FileTools.prototype.unlink = function( path, callback ) {

    return this.fs_.unlink( path, callback );
};

/**
 * @param {string} path
 */
zz.fs.FileTools.prototype.unlinkSync = function( path ) {

    return this.fs_.unlinkSync( path );
};

/**
 * @param {string} path
 * @param {function(...)=} callback
 */
zz.fs.FileTools.prototype.rmdir = function( path, callback ) {

    return this.fs_.rmdir( path, callback );
};

/**
 * @param {string} path
 */
zz.fs.FileTools.prototype.rmdirSync = function( path ) {

    return this.fs_.rmdirSync( path );
};

/**
 * @param {string} path
 * @param {number=} mode
 * @param {function(...)=} callback
 */
zz.fs.FileTools.prototype.mkdir = function( path, mode, callback ) {

    return this.fs_.mkdir( path, mode, callback );
};

/**
 * @param {string} path
 * @param {number=} mode
 */
zz.fs.FileTools.prototype.mkdirSync = function( path, mode ) {

    return this.fs_.mkdirSync( path, mode );
};

/**
 * @param {string} path
 * @param {function(string,Array.<string>)=} callback
 */
zz.fs.FileTools.prototype.readdir = function( path, callback ) {

    return this.fs_.readdir( path, callback );
};

/**
 * @param {string} path
 * @return {Array.<string>}
 */
zz.fs.FileTools.prototype.readdirSync = function( path ) {

    return this.fs_.readdirSync( path );
};

/**
 * @param {*} fd
 * @param {function(...)=} callback
 */
zz.fs.FileTools.prototype.close = function( fd, callback ) {

    return this.fs_.close( fd, callback );
};

/**
 * @param {*} fd
 */
zz.fs.FileTools.prototype.closeSync = function( fd ) {

    return this.fs_.closeSync( fd );
};

/**
 * @param {string} path
 * @param {string} flags
 * @param {number=} mode
 * @param {function(string, *)=} callback
 */
zz.fs.FileTools.prototype.open = function( path, flags, mode, callback ) {

    return this.fs_.open( path, flags, mode, callback );
};

/**
 * @param {string} path
 * @param {string} flags
 * @param {number=} mode
 * @return {*}
 */
zz.fs.FileTools.prototype.openSync = function( path, flags, mode ) {

    return this.fs_.openSync( path, flags, mode );
};

/**
 * @param {string} path
 * @param {number|Date} atime
 * @param {number|Date} mtime
 * @param {function(...)=} callback
 */
zz.fs.FileTools.prototype.utimes = function( path, atime, mtime, callback ) {

    return this.fs_.utimes( path, atime, mtime, callback );
};

/**
 * @param {string} path
 * @param {number|Date} atime
 * @param {number|Date} mtime
 */
zz.fs.FileTools.prototype.utimesSync = function( path, atime, mtime ) {

    return this.fs_.utimesSync( path, atime, mtime );
};

/**
 * @param {*} fd
 * @param {number|Date} atime
 * @param {number|Date} mtime
 * @param {function(...)=} callback
 */
zz.fs.FileTools.prototype.futimes = function( fd, atime, mtime, callback ) {

    return this.fs_.futimes( fd, atime, mtime, callback );
};

/**
 * @param {*} fd
 * @param {number|Date} atime
 * @param {number|Date} mtime
 */
zz.fs.FileTools.prototype.futimesSync = function( fd, atime, mtime ) {

    return this.fs_.futimesSync( fd, atime, mtime );
};

/**
 * @param {*} fd
 * @param {function(...)=} callback
 */
zz.fs.FileTools.prototype.fsync = function( fd, callback ) {

    return this.fs_.fsync( fd, callback );
};

/**
 * @param {*} fd
 */
zz.fs.FileTools.prototype.fsyncSync = function( fd ) {

    return this.fs_.fsyncSync( fd );
};

/**
 * @param {*} fd
 * @param {*} buffer
 * @param {number} offset
 * @param {number} length
 * @param {number} position
 * @param {function(string, number, *)=} callback
 */
zz.fs.FileTools.prototype.write = function( fd, buffer, offset, length, position, callback ) {

    return this.fs_.write( fd, buffer, offset, length, position, callback );
};

/**
 * @param {*} fd
 * @param {*} buffer
 * @param {number} offset
 * @param {number} length
 * @param {number} position
 * @return {number}
 */
zz.fs.FileTools.prototype.writeSync = function( fd, buffer, offset, length, position ) {

    return this.fs_.writeSync( fd, buffer, offset, length, position );
};

/**
 * @param {*} fd
 * @param {*} buffer
 * @param {number} offset
 * @param {number} length
 * @param {number} position
 * @param {function(string, number, *)=} callback
 */
zz.fs.FileTools.prototype.read = function( fd, buffer, offset, length, position, callback ) {

    return this.fs_.read( fd, buffer, offset, length, position, callback );
};

/**
 * @param {*} fd
 * @param {*} buffer
 * @param {number} offset
 * @param {number} length
 * @param {number} position
 * @return {number}
 */
zz.fs.FileTools.prototype.readSync = function( fd, buffer, offset, length, position ) {

    return this.fs_.readSync( fd, buffer, offset, length, position );
};

/**
 * @param {string} filename
 * @param {string|{encoding:(string|undefined),flag:(string|undefined)}|function(string, (string|buffer.Buffer))=} encodingOrOptions
 * @param {function(string, (string|buffer.Buffer))=} callback
 */
zz.fs.FileTools.prototype.readFile = function( filename, encodingOrOptions, callback ) {

    return this.fs_.readFile( filename, encodingOrOptions, callback );
};

/**
 * @param {string} filename
 * @param {string|{encoding:(string|undefined),flag:(string|undefined)}=} encodingOrOptions
 * @return {string|buffer.Buffer}
 */
zz.fs.FileTools.prototype.readFileSync = function( filename, encodingOrOptions ) {

    return this.fs_.readFileSync( filename, encodingOrOptions );
};

/**
 * @param {string} filename
 * @param {*} data
 * @param {string|{encoding:(string|undefined),mode:(number|undefined),flag:(string|undefined)}|function(string)=} encodingOrOptions
 * @param {function(string)=} callback
 */
zz.fs.FileTools.prototype.writeFile = function( filename, data, encodingOrOptions, callback ) {

    return this.fs_.writeFile( filename, data, encodingOrOptions, callback );
};

/**
 * @param {string} filename
 * @param {*} data
 * @param {string|{encoding:(string|undefined),mode:(number|undefined),flag:(string|undefined)}|function(string)=} encodingOrOptions
 */
zz.fs.FileTools.prototype.writeFileSync = function( filename, data, encodingOrOptions ) {

    return this.fs_.writeFileSync( filename, data, encodingOrOptions );
};

/**
 * @param {string} filename
 * @param {*} data
 * @param {string|function(string)=} encoding
 * @param {function(string)=} callback
 */
zz.fs.FileTools.prototype.appendFile = function( filename, data, encoding, callback ) {

    return this.fs_.appendFile( filename, data, encoding, callback );
};

/**
 * @param {string} filename
 * @param {*} data
 * @param {string|function(string)=} encoding
 */
zz.fs.FileTools.prototype.appendFileSync = function( filename, data, encoding ) {

    return this.fs_.appendFileSync( filename, data, encoding );
};

/**
 * @param {string} filename
 * @param {{persistent: boolean, interval: number}|function(*,*)=} options
 * @param {function(*,*)=} listener
 */
zz.fs.FileTools.prototype.watchFile = function( filename, options, listener ) {

    return this.fs_.watchFile( filename, options, listener );
};

/**
 * @param {string} filename
 * @param {function(string, string)=} listener
 */
zz.fs.FileTools.prototype.unwatchFile = function( filename, listener ) {

    return this.fs_.unwatchFile( filename, listener );
};

/**
 *
 * @param {string} filename
 * @param {{persistent: boolean}|function(string, string)=} options
 * @param {function(string, string)=} listener
 * @return {fs.FSWatcher}
 */
zz.fs.FileTools.prototype.watch = function( filename, options, listener ) {

    return this.fs_.watch( filename, options, listener );
};

//Deprecated since: v1.0.0
// /**
//  * @param {string} path
//  * @param {function(boolean)} callback
//  */
// zz.fs.FileTools.prototype.exists = function( path, callback ) {
//
//     return this.fs_.exists( path, callback );
// };

/**
 * @param {string} path
 */
zz.fs.FileTools.prototype.existsSync = function( path ) {

    return this.fs_.existsSync( path );
};

// /**
//  * @constructor
//  */
// fs.Stats = function() {};
//
// /**
//  * @return {boolean}
//  */
// fs.Stats.prototype.isFile = function() {};
//
// /**
//  * @return {boolean}
//  */
// fs.Stats.prototype.isDirectory = function() {};
//
// /**
//  * @return {boolean}
//  */
// fs.Stats.prototype.isBlockDevice = function() {};
//
// /**
//  * @return {boolean}
//  */
// fs.Stats.prototype.isCharacterDevice = function() {};
//
// /**
//  * @return {boolean}
//  */
// fs.Stats.prototype.isSymbolicLink = function() {};
//
// /**
//  * @return {boolean}
//  */
// fs.Stats.prototype.isFIFO = function() {};
//
// /**
//  * @return {boolean}
//  */
// fs.Stats.prototype.isSocket = function() {};
//
// /**
//  * @type {number}
//  */
// fs.Stats.prototype.dev = 0;
//
// /**
//  * @type {number}
//  */
// fs.Stats.prototype.ino = 0;
//
// /**
//  * @type {number}
//  */
// fs.Stats.prototype.mode = 0;
//
// /**
//  * @type {number}
//  */
// fs.Stats.prototype.nlink = 0;
//
// /**
//  * @type {number}
//  */
// fs.Stats.prototype.uid = 0;
//
// /**
//  * @type {number}
//  */
// fs.Stats.prototype.gid = 0;
//
// /**
//  * @type {number}
//  */
// fs.Stats.prototype.rdev = 0;
//
// /**
//  * @type {number}
//  */
// fs.Stats.prototype.size = 0;
//
// /**
//  * @type {number}
//  */
// fs.Stats.prototype.blkSize = 0;
//
// /**
//  * @type {number}
//  */
// fs.Stats.prototype.blocks = 0;
//
// /**
//  * @type {Date}
//  */
// fs.Stats.prototype.atime;
//
// /**
//  * @type {Date}
//  */
// fs.Stats.prototype.mtime;
//
// /**
//  * @type {Date}
//  */
// fs.Stats.prototype.ctime;

/**
 * @param {string} path
 * @param {{flags: string, encoding: ?string, fd: *, mode: number, bufferSize: number}=} options
 * @return {fs.ReadStream}
 */
zz.fs.FileTools.prototype.createReadStream = function( path, options ) {

    return this.fs_.createReadStream( path, options );
};

// /**
//  * @constructor
//  * @extends stream.ReadableStream
//  */
// fs.ReadStream = function() {};

/**
 * @param {string} path
 * @param {{flags: string, encoding: ?string, mode: number}=} options
 * @return {fs.WriteStream}
 */
zz.fs.FileTools.prototype.createWriteStream = function( path, options ) {

    return this.fs_.createWriteStream( path, options );
};

// /**
//  * @constructor
//  * @extends stream.WritableStream
//  */
// fs.WriteStream = function() {};
//
// /**
//  * @constructor
//  * @extends events.EventEmitter
//  */
// fs.FSWatcher = function() {};
//
// /**
//  */
// fs.FSWatcher.prototype.close = function() {};

// console.log( 'ft.existsSync = ' + ft.existsSync( './lib/filetools.js' ) );







/**
 * @return {boolean}
 */
zz.fs.FileTools.prototype.isWidowsOs = function( ) {

    return /windows/i.test( process.env.OS );
};

/**
 * @return {string}
 */
zz.fs.FileTools.prototype.getPathDelim = function( ) {

    return this.isWidowsOs( ) ? '\\' : '/';
};

/** Execute shell command.
 * @param {string} command
 * @return {*}
 */
zz.fs.FileTools.prototype.execSync = function( command ){

    return this.childProcess_.execSync( command );
};

/**
 * Get all files in specified path.
 * @param {string} path
 * @return {Array.<string>}
 */
zz.fs.FileTools.prototype.getFiles = function( path ){

    var files = [ ];
    var d = this.getPathDelim( );
    path = this.realpathSync( path );

    if( this.lstatSync( path ).isDirectory( ) ) {

        var list = this.readdirSync( path );
        list.forEach( function ( item ) {

            item = path + d + item;
            if ( this.lstatSync( item ).isFile( ) ) {

                files.push( item );
            }
        }, this);
    }

    return files;
};

/**
 * Get directories for specific path.
 * @param {string} path
 * @return {Array.<string>}
 */
zz.fs.FileTools.prototype.getDirectories = function( path ){

    var dirs = [ ];
    var d = this.getPathDelim( );
    path = this.realpathSync( path );

    if( this.lstatSync( path ).isDirectory( ) ){

        var list = this.readdirSync( path );
        list.forEach( function( item ){

            item = path + d + item;
            if( this.lstatSync( item ).isDirectory( ) ){

                dirs.push( item );
            }
        }, this );
    }

    return dirs;
};

/**
 * Return project root absolute path.
 * @return {string}
 */
zz.fs.FileTools.prototype.getRootPath = function( ){

    var d = this.getPathDelim( );

    return __dirname
        .split( d + 'lib' )[ 0 ]
        .split( d + this.NODE_MODULE_FOLDER/* + d + this.IDK_FOLDER_NAME*/ )[ 0 ];
};

/**
 * Return IDK path.
 * @return {string}
 */
zz.fs.FileTools.prototype.getIdkPath = function( ){

    var d = this.getPathDelim( );

    return this.getRootPath( ) + d + this.NODE_MODULE_FOLDER + d + this.IDK_FOLDER_NAME;
};

/**
 * Transforming passed pseudo path into a real absolute path independently of OS.
 * @param {string} path is pseudo or absolute path.
 * 		moduleRoot in path param matches to a path for a module root.
 * 		idkRoot in path param matches to a path for a idk root.
 * 		Symbol / in path param matches to a path delimeter for current OS.
 * @return {string}
 */
zz.fs.FileTools.prototype.normalizePath = function( path ) {

    return path.replace( /\//g, this.getPathDelim( ) )
        .replace( /moduleRoot/, this.getRootPath() )
        .replace( /idkRoot/, this.getIdkPath() );
}
