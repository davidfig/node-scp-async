 export enum errorCode {
  generic = 'ERR_GENERIC_CLIENT',
  connect = 'ERR_NOT_CONNECTED',
  badPath = 'ERR_BAD_PATH',
  permission = 'EACCES',
  notexist = 'ENOENT',
  notdir = 'ENOTDIR'
}

export enum targetType {
  writeFile = 1,
  readFile = 2,
  writeDir = 3,
  readDir = 4,
  readObj = 5,
  writeObj = 6
}