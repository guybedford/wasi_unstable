import WASI from 'wasi';

const wasi = new WASI({});

export function run (wasiModule) {
  wasi.setMemory(wasiModule.memory);
  wasiModule._start();
}

export const args_get = wasi.exports.args_get;
export const args_sizes_get = wasi.exports.args_sizes_get;
export const environ_get = wasi.exports.environ_get;
export const environ_sizes_get = wasi.exports.environ_sizes_get;
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
