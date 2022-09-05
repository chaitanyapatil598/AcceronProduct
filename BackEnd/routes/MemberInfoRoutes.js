const express = require('express')
const { creatMemberInfo,getAllMemberInfo } = require('../Controller/memberInfoController')


const router =  express.Router()
router.route("/member/new").post(creatMemberInfo);
router.route("/memberInfo").get(getAllMemberInfo);



module.exports = router