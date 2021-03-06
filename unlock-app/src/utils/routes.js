import { LOCK_PATH_NAME_REGEXP } from '../constants'

/**
 * Returns a hash of lockAddress and prefix based on a path.
 * @param {*} path
 */
export const lockRoute = path => {
  const match = path.match(LOCK_PATH_NAME_REGEXP)

  if (!match) {
    return {
      lockAddress: null,
      prefix: null,
    }
  }

  return {
    lockAddress: match[2],
    prefix: match[1],
  }
}

export default {
  lockRoute,
}
