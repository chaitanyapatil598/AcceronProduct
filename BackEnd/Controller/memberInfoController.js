const MemberInfo = require('../models/memberInfoModel')


/// Creat MemberInfo
exports.creatMemberInfo = async (req, res, next) => {
    const MemberInfodata = await MemberInfo.create(req.body)
    res.status(201).json({
        success: true,
        MemberInfodata:MemberInfodata
    })
}

///  getAllMemberInfo

exports.getAllMemberInfo = async (req, res) => {
    const MemberInfoData = await MemberInfo.find()
    res.status(200).json({
        success: true,
        MemberInfoData
    })
}
