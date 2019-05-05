import WASI from 'wasi';
import process from 'process';

const WASI_ESUCCESS = 0;

const wasi = new WASI();

export function run (wasiModule, { env, args, preopenDirectories } = {}) {
  if (env) _env = env;
  if (args) _args = args;
  if (preopenDirectories) {
    throw new Error('preopenDirectories option not yet supported.');
  }
  wasi.setMemory(wasiModule.memory);
  wasiModule._start();
}

let _args = process.argv.slice(1), _env = process.env;

export function args_get (argv, argvBuf) {
  wasi.refreshMemory();
  let coffset = argv;
  let offset = argvBuf;
  _args.forEach((a) => {
    wasi.view.setUint32(coffset, offset, true);
    coffset += 4;
    offset += Buffer.from(wasi.memory.buffer).write(`${a}\0`, offset);
  });
  return WASI_ESUCCESS;
}
export function args_sizes_get (argc, argvBufSize) {
  wasi.refreshMemory();
  wasi.view.setUint32(argc, _args.length, true);
  const size = _args.reduce((acc, a) => acc + Buffer.byteLength(a), 0);
  wasi.view.setUint32(argvBufSize, size, true);
  return WASI_ESUCCESS;
}

export function environ_get (environ, environBuf) {
  wasi.refreshMemory();
  let coffset = environ;
  let offset = environBuf;
  const envProcessed = Object.entries(_env)
    .map(([key, value]) => `${key}=${value}`);
  envProcessed.forEach((e) => {
    wasi.view.setUint32(coffset, offset, true);
    coffset += 4;
    offset += Buffer.from(wasi.memory.buffer).write(e, offset);
  });
  return WASI_ESUCCESS;
}

export function environ_sizes_get (environCount, environBufSize) {
  wasi.refreshMemory();
  const envProcessed = Object.entries(_env)
    .map(([key, value]) => `${key}=${value}`);
  const size = envProcessed.reduce((acc, e) => acc + Buffer.byteLength(e), 0);
  wasi.view.setUint32(environCount, envProcessed.length, true);
  wasi.view.setUint32(environBufSize, size, true);
  return WASI_ESUCCESS;
}

export const clock_res_get = wasi.exports.clock_res_get;
export const clock_time_get = wasi.exports.clock_time_get;
export const fd_advise = wasi.exports.fd_advise;
export const fd_allocate = wasi.exports.fd_allocate;
export const fd_close = wasi.exports.fd_close;
export const fd_datasync = wasi.exports.fd_datasync;
export const fd_fdstat_get = wasi.exports.fd_fdstat_get;
export const fd_fdstat_set_flags = wasi.exports.fd_fdstat_set_flags;
export const fd_fdstat_set_rights = wasi.exports.fd_fdstat_set_rights;
export const fd_filestat_get = wasi.exports.fd_filestat_get;
export const fd_filestat_set_size = wasi.exports.fd_filestat_set_size;
export const fd_filestat_set_times = wasi.exports.fd_filestat_set_times;
export const fd_prestat_get = wasi.exports.fd_prestat_get;
export const fd_prestat_dir_name = wasi.exports.fd_prestat_dir_name;
export const fd_pwrite = wasi.exports.fd_pwrite;
export const fd_write = wasi.exports.fd_write;
export const fd_pread = wasi.exports.fd_pread;
export const fd_read = wasi.exports.fd_read;
export const fd_readdir = wasi.exports.fd_readdir;
export const fd_renumber = wasi.exports.fd_renumber;
export const fd_seek = wasi.exports.fd_seek;
export const fd_tell = wasi.exports.fd_tell;
export const fd_sync = wasi.exports.fd_sync;
export const path_create_directory = wasi.exports.path_create_directory;
export const path_filestat_get = wasi.exports.path_filestat_get;
export const path_filestat_set_times = wasi.exports.path_filestat_set_times;
export const path_link = wasi.exports.path_link;
export const path_open = wasi.exports.path_open;
export const path_readlink = wasi.exports.path_readlink;
export const path_remove_directory = wasi.exports.path_remove_directory;
export const path_rename = wasi.exports.path_rename;
export const path_symlink = wasi.exports.path_symlink;
export const path_unlink_file = wasi.exports.path_unlink_file;
export const poll_oneoff = wasi.exports.poll_oneoff;
export const proc_exit = wasi.exports.proc_exit;
export const proc_raise = wasi.exports.proc_raise;
export const random_get = wasi.exports.random_get;
export const sched_yield = wasi.exports.sched_yield;
export const sock_recv = wasi.exports.sock_recv;
export const sock_send = wasi.exports.sock_send;
export const sock_shutdown = wasi.exports.sock_shutdown;
