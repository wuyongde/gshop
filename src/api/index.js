import axios from "axios";

// axios全局配置
axios.defaults.baseURL = "http://localhost:8000";

// 封装ajax请求函数；  封装所有ajax请求接口函数

// 接口

// 1---根据经纬度获取位置详情
function req_address(geohash, callback) {
  //geohash是经纬度字符串，如“40.10038,116.36867”
  axios
    .get(`/position/${geohash}`)
    .then(resp => {
      callback(null, resp.data.data.name);
    })
    .catch(err => {
      callback(err);
    });
}

// 2---获取食品分类列表
function req_foods_catalogs(callback) {
  axios
    .get("/index_category")
    .then(resp => {
      callback(null, resp.data.dataSource);
    })
    .catch(err => {
      callback(err);
    });
}

// 3---根据经纬度获取商铺列表
function req_nearby_shops(latitude, longitude, callback) {
  axios
    .get(`/shops?latitude=${latitude}&longitude=${longitude}`)
    .then(resp => {
      callback(null, resp.data.data);
    })
    .catch(err => {
      callback(err);
    });
}

// 4---根据经纬度和关键字搜索商铺列表
function req_search_shops({ geohash, keyword }, callback) {
  axios
    .get(`/search_shops?keyword=${keyword}&geohash=${geohash}`)
    .then(resp => {
      callback(null, resp.data.data);
    })
    .catch(err => {
      callback(err);
    });
}

//  5---获取一次性验证码

//  6---用户名密码登陆
function req_user_login(name, pwd, captcha, callback) {
  axios
    .post(`/login_pwd`, { name, pwd, captcha }) //注意：此处是通过json对象的方式提交的post请求体，服务端要做对应的解析
    .then(resp => {
      callback(null, resp.data);
    })
    .catch(err => {
      callback(err);
    });
}

//  7---发送短信验证码
function req_sms_veriyNumber(phone, callback) {
  axios
    .get(`/sendcode?phone=${phone}`)
    .then(resp => {
      callback(null, resp.data.code);
    })
    .catch(err => {
      callback(err);
    });
}

//  8---手机号验证码登陆
function req_sms_login(phone, code, callback) {
  axios
    .post(`/login_sms`, { phone, code }) //注意：此处是通过json对象的方式提交的post请求体，服务端要做对应的解析
    .then(resp => {
      callback(null, resp.data);
    })
    .catch(err => {
      callback(err);
    });
}

//  9---获取店铺信息
function req_shop_info(callback) {
  axios
    .get("/info")
    .then(resp => {
      callback(null, resp.data);
    })
    .catch(err => {
      callback(err);
    });
}

//  10---获取店铺的食物列表
function req_shop_goods(callback) {
  axios
    .get("/goods")
    .then(resp => {
      callback(null, resp.data);
    })
    .catch(err => {
      callback(err);
    });
}

//  11---获取店铺的评价信息
function req_shop_ratings(callback) {
  axios
    .get("/ratings")
    .then(resp => {
      callback(null, resp.data);
    })
    .catch(err => {
      callback(err);
    });
}

// 导出接口函数
export {
  req_address,
  req_foods_catalogs,
  req_nearby_shops,
  req_sms_veriyNumber,
  req_sms_login,
  req_user_login,
  req_shop_info,
  req_shop_goods,
  req_shop_ratings,
  req_search_shops
};
