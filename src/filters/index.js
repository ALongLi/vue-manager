/*
 * @Author: fillter
 * @Date: 2019-08-08 16:44:33
 * @Last Modified by: fillter
 * @Last Modified time: 2019-08-15 10:40:00
 */
import dayjs from "dayjs";

/**
 * Show plural label if time is plural number
 * @param {number} time
 * @param {string} label
 * @return {string}
 */
function pluralize(time, label) {
  if (time === 1) {
    return time + label;
  }
  return time + label + "s";
}

/**
 * Date formatting
 * like 1565253237551 => 2019-08-08 16:33:57
 * @param {Number} value
 * @param {string} fmt
 */
const formatDate = (value = "", fmt = "YYYY-MM-DD HH:mm:ss") => {
  return value ? dayjs(+value).format(fmt) : "";
};

export { formatDate, pluralize };
