import axios from "axios";

//const gdMapKey = '1caf32ee46ec234c69a6a49e47db53e0'
//const baseApi = 'http://localhost:1227'
const baseApi = 'https://www.yym-free.com/wz'

/**
 * 基础接口
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
//获取IP信息
export const getIpAddress = ()=>{
    const getUrl = 'https://ip.useragentinfo.com/json?ip='
    return axios.get(getUrl)
}
//记录访问操作
export const postLog = (logOp)=>{
    const postUrl = baseApi + '/log/postNewLog'
    const logUUID = localStorage.getItem('UUID')
    const logIpAddress = localStorage.getItem('ipAddress')
    return axios.post(
        postUrl,
        null,
        {
            params:{
                logOp:logOp,
                logUUID:logUUID,
                logIpAddress:logIpAddress
            }
        }
    )
}
//比对管理员密码
export const checkManagerPassword = (password)=>{
    const postUrl = baseApi + '/params/checkManagerSecret'
    return axios.post(
        postUrl,
        null,
        {
            params:{
                password: password
            }
        })
}


/**
 * 我
 */
//获取基础信息
export const getMeList = ()=>{
    const getUrl = baseApi + '/me/getList'
    return axios.get(getUrl)
}
//更改基础信息
export const changeMeList = (key)=>{
    const postUrl = baseApi + '/me/changeKey'
    return axios.post(
        postUrl,
        null,
        {
            params:{
                type: key.type,
                value: key.value
            }
        }
    )
}

/**
 * 挑战板
 */
//获取所有计划
export const getPlanAllPlans = ()=>{
    const getUrl = baseApi + '/plan/getAllPlans'
    return axios.get(getUrl)
}
//增加新计划
export const addNewPlan = (plan)=>{
    const postUrl = baseApi + '/plan/addNewPlan'
    return axios.post(
        postUrl,
        null,
        {
            params:{
                year: plan.year,
                planName: plan.planName,
                planDetail: plan.planDetail,
                planCompleted: plan.planCompleted,
                planImg: plan.planImg
            }
        }
    )
}
//修改计划
export const changePlanApi = (plan)=>{
    const postUrl = baseApi + '/plan/changePlan'
    return axios.post(
        postUrl,
        null,
        {
            params:{
                planId: plan.planId,
                year: plan.year,
                planName: plan.planName,
                planDetail: plan.planDetail,
                planCompleted: plan.planCompleted,
                planImg: plan.planImg
            }
        }
    )
}

/**
 * 空间
 */
//增加一条
export const insertSpaceApi = (newSpace)=>{
    const postUrl = baseApi+'/space/insert'
    return axios.post(postUrl,null,{
        params:{
            spaceContent:newSpace.spaceContent,
            spaceImgs:newSpace.spaceImgs,
            spaceFiles:newSpace.spaceFiles
        }
    })
}

//删除一条
export const deleteSpaceApi = (spaceId)=>{
    const postUrl = baseApi + '/space/delete'
    return axios.post(postUrl, null, {
        params:{
            spaceId: spaceId
        }
    })
}

//更改一条
export const updateSpaceApi = (newSpace)=>{
    const postUrl = baseApi + '/space/update'
    return axios.post(postUrl, newSpace)
}

//查询n条
export const selectSpaceApi = (e)=>{
    const getUrl = baseApi + '/space/select'
    return axios.get(getUrl, {
        params:{
            startIndex: e.startIndex,
            length: e.length
        }
    })
}

//点赞
export const likeSpaceApi = (spaceId)=>{
    const postUrl = baseApi + '/space/like'
    return axios.post(postUrl, null, {
        params:{
            spaceId:spaceId
        }
    })
}

/**
 * 视频
 */
//增加一条
export const insertNewVideo = (newVideo)=>{
    const postUrl = baseApi + '/video/insert'
    return axios.post(postUrl, null, {
        params:{
            videoContent: newVideo.videoContent,
            videoUrl: newVideo.videoUrl
        }
    })
}
//删除一条
export const deleteVideoApi = (videoId)=>{
    const postUrl = baseApi + '/video/delete'
    return axios.post(postUrl, null, {
        params:{
            videoId: videoId
        }
    })
}
//分页查询
export const selectVideos = (videoProps)=>{
    const getUrl = baseApi + '/video/select'
    return axios.get(getUrl, {
        params:{
            startIndex: videoProps.firstIndex,
            length: videoProps.length
        }
    })
}

/**
 * mygit
 */
//分页查询
export const selectMyGit = (videoProps)=>{
    const getUrl = baseApi + '/mygit/select'
    return axios.get(getUrl, {
        params:{
            startIndex: videoProps.firstIndex,
            length: videoProps.length
        }
    })
}
//删除一条
export const deleteMyGit = (gitId)=>{
    const postUrl = baseApi + '/mygit/delete'
    return axios.post(postUrl, null, {
        params:{
            gitId: gitId
        }
    })
}
//增加一条
export const insertNewMyGit = (newMyGit)=>{
    const postUrl = baseApi + '/mygit/insert'
    return axios.post(postUrl, null, {
        params:{
            gitContent: newMyGit.gitContent,
            gitVideo: newMyGit.gitVideo,
            gitUrl: newMyGit.gitUrl,
            runUrl: newMyGit.runUrl
        }
    })
}

/**
 * 藏宝图
 */
//获取死亡信息
export const getAmIDead = ()=>{
    const getUrl = baseApi + '/amidead/getAmidead'
    return axios.get(getUrl)
}
//更新时间
export const refreshDeadTime = ()=>{
    const postUrl = baseApi + '/amidead/updateTime'
    return axios.post(postUrl)
}
//宝藏已经被发现
export const refreshDeadGift = ()=>{
    const postUrl = baseApi + '/amidead/updateGiftStill'
    return axios.post(postUrl)
}