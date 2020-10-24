/**
 * 本模块主要用于监控管理
 */
import { ajax, redirectAjax, fileAjax, newAjax } from './ajax.js'

//登录
async function login (param) {
    let login = await ajax.post(`/api/user/login`, param)
    return login
}

//最近搜索记录
async function latestWords (param) {
    let latestWords = await ajax.post(`/api/company/latestWords`, param)
    return latestWords
}

//搜索 
async function getSearchList (param) {
    let getSearchList = await ajax.post(`/api/company/searchList`, param)
    return getSearchList
}

//用户管理查询
async function getUserList (param) {
    //let getUserList = await ajax.post(`/api/user/searchUserList`, param)
    let getUserList = await ajax.post(`/api/user/searchUserListNew`, param)
    return getUserList
}
//用户管理是否启用
async function updateUser (param) {
    let updateUser = await ajax.post(`/api/user/updateUser`, param)
    return updateUser
}
//pdf下载
async function getPDF (param) {
    let getPDF = await fileAjax.post(`/api/company/getPDF`, param)
    return getPDF
}
//中信保pdf下载
async function getPDFList (param) {
    let getPDFList = await ajax.post(`/api/company/getPDFList`, param)
    return getPDFList
}

//关注清单列表
async function getCareList (param) {
    let getCareList = await ajax.post(`/api/user/getCareList`, param)
    return getCareList
}
//关注/取消关注 
async function careOrNot (param) {
    let careOrNot = await ajax.post(`/api/user/careOrNot`, param)
    return careOrNot
}
//申请中信保报告
async function zhongxinbao (param) {
    let zhongxinbao = await ajax.post(`/api/company/zhongxinbao`, param)
    return zhongxinbao
}
//申请中信保报告-发起申请
async function zhongxinbaoApply (param) {
    let zhongxinbaoApply = await ajax.post(`/api/company/zhongxinbaoApply`, param)
    return zhongxinbaoApply
}
//申请中信保报告-发起申请
async function zhongxinbaoApprove (param) {
    let zhongxinbaoApprove = await ajax.post(`/api/company/zhongxinbaoApprove`, param)
    return zhongxinbaoApprove
}
//模糊接口查询
async function directSearchList (param) {
    let directSearchList = await ajax.post(`/api/company/direct/searchList`, param)
    return directSearchList
}
//获取企业关注信息
async function getCareStatus (param) {
    let getCareStatus = await ajax.post(`/api/user/getCareStatus`, param)
    return getCareStatus
}
//获取省市区县信息 
async function getArea (param) {
    let getArea = await ajax.post(`/api/common/getArea`, param)
    return getArea
}
//获取用户信息
async function getUserInfo (param) {
    let getUserInfo = await ajax.post(`/api/user/getUserInfo`, param)
    return getUserInfo
}
//查询clientNo  
async function getCodeInfo (param) {
    let getCodeInfo = await ajax.post(`/api/company/getCodeInfo`, param)
    return getCodeInfo
}
//查询clientNo 只根据当前登录人
async function getCodeInfoByUserId (param) {
    let getCodeInfoByUserId = await ajax.post(`/api/company/getCodeInfoByUserId`, param)
    return getCodeInfoByUserId
}
//公司下拉框查询
async function getNewCompany (param) {
    let getNewCompany = await ajax.post(`/api/company/getNewCompany`, param)
    return getNewCompany
}
//获取html
async function getHtml (param) {
    let getHtml = await ajax.post(`/api/company/zhongChengXin/getLiteRatingHtml`, param)
    return getHtml
}
async function getData (param) {
    let getData = await newAjax.get(`/tycApi/services/open/search/2.0?word=` + param)
    return getData
}
//获取行业数据
async function getIndustry (param) {
    let getIndustry = await ajax.post(`/api/common/getIndustry`, param)
    return getIndustry
}
//产业信用评价下载
// async function getLiteRatingPDF (param) {
//     let getLiteRatingPDF = await fileAjax.post(`/api/company/zhongChengXin/getLiteRatingPDF`, param)
//     return getLiteRatingPDF
// }
async function getLiteRatingPDF (param) {
    let getLiteRatingPDF = await fileAjax.post(`/api/company/zhongChengXin/getReportPDF`, param)
    return getLiteRatingPDF
}
//企业基本信息
async function getBaseInfo (param) {
    let getBaseInfo = await ajax.post(`/api/company/getBaseInfo`, param)
    return getBaseInfo
}
//根据企业名字获取企业基本信息
async function getCompanyInfoByName (param) {
    let getCompanyInfoByName = await ajax.post(`/api/company/getCompanyInfoByName`, param)
    return getCompanyInfoByName
}
async function getLiteRatingList (param) {
    let getLiteRatingList = await ajax.post(`/api/company/zhongChengXin/getLiteRatingList`, param)
    return getLiteRatingList
}
//查询所有类型的历史报告
async function getReportList (param) {
    let getReportList = await ajax.post(`/api/company/zhongChengXin/getReportList`, param)
    return getReportList
}
//风险初筛html
async function getRiskScreenHtml (param) {
    let getRiskScreenHtml = await ajax.post(`/api/company/zhongChengXin/getRiskScreenHtml`, param)
    return getRiskScreenHtml
}
//财务排雷html
async function getLatestFinancialDeminingHtml (param) {
    let getLatestFinancialDeminingHtml = await ajax.post(`/api/company/zhongChengXin/getLatestFinancialDeminingHtml`, param)
    return getLatestFinancialDeminingHtml
}
//城投企业信用评价 
async function getCityInvRatingHtml (param) {
    let getCityInvRatingHtml = await ajax.post(`/api/company/zhongChengXin/getCityInvRatingHtml`, param)
    return getCityInvRatingHtml
}
//区域信用评价
async function getRegionRatingHtml (param) {
    let getRegionRatingHtml = await ajax.post(`/api/company/zhongChengXin/getRegionRatingHtml`, param)
    return getRegionRatingHtml
}
//黑名单
async function getBlackList (param) {
    let getBlackList = await ajax.post(`/api/common/getBlackList`, param)
    return getBlackList
}
//
async function getRegionInfo (param) {
    let getRegionInfo = await ajax.post(`/api/company/zhongChengXin/getRegionInfo`, param)
    return getRegionInfo
}
//中信保基本信息
async function getBusinessInfo (param) {
    let getBusinessInfo = await ajax.post(`/api/company/zhongxinbao/getBusinessInfo`, param)
    return getBusinessInfo
}
//中信保接口
async function getShareInfo (param) {
    let getShareInfo = await ajax.post(`/api/company/zhongxinbao/getShareInfo`, param)
    return getShareInfo
}
//国家代码接口
async function getNationCode (param) {
    let getNationCode = await ajax.post(`/api/common/getNationCode`, param)
    return getNationCode
}
//权限
async function verifyPermissions (param) {
    let verifyPermissions = await ajax.post(`/api/user/verifyPermissions`, param)
    return verifyPermissions
}
//维护用户的时候的公司列表
async function getUserCompany (param) {
    let getUserCompany = await ajax.post(`/api/common/getUserCompany`, param)
    return getUserCompany
}
//获取操作者对某个用户操作修改能拿到的权限
async function getEnablePermission (param) {
    let getEnablePermission = await ajax.post(`/api/user/getEnablePermission`, param)
    return getEnablePermission
}
//校验工号是否唯一
async function userExists (param) {
    let userExists = await ajax.post(`/api/user/userExists`, param)
    return userExists
}
//同步用户启用状态到FR
async function updateUserStatus (param) {
    let updateUserStatus = await ajax.post(`/api/user/updateUserStatus`, param)
    return updateUserStatus
}
//获取信保报告列表（全部）
async function getPDFListAll (param) {
    let getPDFListAll = await ajax.post(`/api/company/getPDFListAll`, param)
    return getPDFListAll
}
//记录日志
async function logPath (param) {
    let logPath = await ajax.post(`/api/common/logCreditOper`, param)
    return logPath
}
//信保报告申请列表
async function searchApplyList (param) {
    let searchApplyList = await ajax.post(`/api/common/searchApplyList`, param)
    return searchApplyList
}
//获取组织架构树信息
async function getAllCompanyLevel (param) {
    let getAllCompanyLevel = await ajax.post(`/api/company/getAllCompanyLevel`, param)
    return getAllCompanyLevel
}
const manage = {
    login: login,
    latestWords: latestWords,
    getSearchList: getSearchList,
    getUserList: getUserList,
    getPDF: getPDF,
    getPDFList: getPDFList,
    updateUser: updateUser,
    getCareList: getCareList,
    careOrNot: careOrNot,
    zhongxinbao: zhongxinbao,
    zhongxinbaoApply: zhongxinbaoApply,
    zhongxinbaoApprove:zhongxinbaoApprove,
    directSearchList: directSearchList,
    getCareStatus: getCareStatus,
    getArea: getArea,
    getUserInfo: getUserInfo,
    getCodeInfo: getCodeInfo,
    getCodeInfoByUserId:getCodeInfoByUserId,
    getNewCompany: getNewCompany,
    getHtml: getHtml,
    getData: getData,
    getIndustry: getIndustry,
    getLiteRatingPDF: getLiteRatingPDF,
    getBaseInfo: getBaseInfo,
    getCompanyInfoByName:getCompanyInfoByName,
    getLiteRatingList: getLiteRatingList,
    getReportList: getReportList,
    getRiskScreenHtml: getRiskScreenHtml,
    getCityInvRatingHtml: getCityInvRatingHtml,
    getRegionRatingHtml: getRegionRatingHtml,
    getBlackList: getBlackList,
    getRegionInfo: getRegionInfo,
    getShareInfo: getShareInfo,
    getBusinessInfo: getBusinessInfo,
    getNationCode: getNationCode,
	verifyPermissions: verifyPermissions,
    getUserCompany: getUserCompany,
    getEnablePermission: getEnablePermission,
    userExists: userExists,
    updateUserStatus: updateUserStatus,
	getLatestFinancialDeminingHtml: getLatestFinancialDeminingHtml,
    getPDFListAll: getPDFListAll,
    logPath: logPath,
    searchApplyList: searchApplyList,
    getAllCompanyLevel:getAllCompanyLevel,
}

export default manage