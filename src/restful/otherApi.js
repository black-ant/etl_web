'use strict'

import common from './common.js';

export default {
  // 获取配置信息
  getSetting(key) {
    console.info("this is in getSetting");
    return common.get("/get/" + key, null)
  },
  listSetting() {
    console.info("this is in listSetting");
    return common.get("/setting/list", null);
  },
  createSetting(data) {
    console.info("this is in createSetting");
    return common.post("/setting/insert", data)
  },
  saveOrUpdate(data) {
    console.info("this is in createSetting");
    return common.post("/setting/saveorupdate", data)
  },
  listFiledInfo() {
    console.info("this is in listSetting");
    return common.get("/setting/list", null);
  },


}
