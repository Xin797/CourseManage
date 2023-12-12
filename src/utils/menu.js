const menu = {
    list() {
        return [//管理员页面
            {"backMenu":[/*{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"公告信息","menuJump":"列表","tableName":"gonggaoxinxi"}],"menu":"公告信息管理"},
                {"child":[{"buttons":["新增","查看","修改","删除"],"menu":"班级","menuJump":"列表","tableName":"banji"}],"menu":"班级管理"},*/
                {"child":[{"buttons":["新增","查看","修改","删除"],"menu":"学生","menuJump":"列表","tableName":"xuesheng"}],"menu":"学生管理"},
                {"child":[{"buttons":["新增","查看","修改","删除"],"menu":"教师","menuJump":"列表","tableName":"jiaoshi"}],"menu":"教师管理"},
                {"child":[{"buttons":["新增","查看","修改","删除"],"menu":"课程类型","menuJump":"列表","tableName":"kechengleixing"}],"menu":"课程类型管理"},
                {"child":[{"buttons":["新增","查看","修改","删除"],"menu":"课程信息","menuJump":"列表","tableName":"kechengxinxi"}],"menu":"课程信息管理"},
                {"child":[{"buttons":["查看","修改","删除"],"menu":"学生选课","menuJump":"列表","tableName":"xueshengxuanke"}],"menu":"学生选课管理"},/*
                {"child":[{"buttons":["查看","修改","删除"],"menu":"作业布置","menuJump":"列表","tableName":"zuoyebuzhi"}],"menu":"作业布置管理"},
                    {"child":[{"buttons":["删除","修改","查看"],"menu":"作业提交","menuJump":"列表","tableName":"zuoyetijiao"}],"menu":"作业提交管理"},*//*
                    {"child":[{"buttons":["查看","修改","删除"],"menu":"作业评分","menuJump":"列表","tableName":"zuoyepingfen"}],"menu":"作业评分管理"},*/
                {"child":[{"buttons":["删除","修改","查看","报表"],"menu":"校园论坛","menuJump":"列表","tableName":"kechengpingjia"}],"menu":"校园论坛管理"},/*
                {"child":[{"buttons":["查看","修改","删除"],"menu":"课程资源","menuJump":"列表","tableName":"kechengziyuan"}],"menu":"课程资源管理"}*/],
            "frontMenu":[],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},
            //学生页面
            {"backMenu":[/*{"child":[{"buttons":["查看"],"menu":"公告信息","menuJump":"列表","tableName":"gonggaoxinxi"}],"menu":"公告信息管理"},*/
                    {"child":[{"buttons":["查看","选课"],"menu":"选课信息","menuJump":"列表","tableName":"kechengxinxi"}],"menu":"选课信息管理"},
                    {"child":[{"buttons":["查看","修改","删除","评价"],"menu":"已选课程","menuJump":"列表","tableName":"xueshengxuanke"}],"menu":"课表信息查看"},/*
                    {"child":[{"buttons":["查看","提交"],"menu":"作业布置","menuJump":"列表","tableName":"zuoyebuzhi"}],"menu":"作业布置管理"},
                    {"child":[{"buttons":["查看","修改","删除"],"menu":"作业提交","menuJump":"列表","tableName":"zuoyetijiao"}],"menu":"作业提交管理"},
                    {"child":[{"buttons":["查看"],"menu":"作业评分","menuJump":"列表","tableName":"zuoyepingfen"}],"menu":"作业评分管理"},*/
                    {"child":[{"buttons":["查看","修改","删除"],"menu":"校园论坛","menuJump":"列表","tableName":"kechengpingjia"}],"menu":"校园论坛"},/*
                    {"child":[{"buttons":["查看"],"menu":"课程资源","menuJump":"列表","tableName":"kechengziyuan"}],"menu":"课程资源管理"}*/],
                "frontMenu":[],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"学生","tableName":"xuesheng"},
            //教师页面
            {"backMenu":[{"child":[{"buttons":["查看"],"menu":"课程信息","menuJump":"列表","tableName":"kechengxinxi"}],"menu":"课程信息管理"},
                    {"child":[{"buttons":["查看","审核","作业","资料"],"menu":"学生选课","menuJump":"列表","tableName":"xueshengxuanke"}],"menu":"学生选课管理"},
                  //{"child":[{"buttons":["查看","修改","删除"],"menu":"作业布置","menuJump":"列表","tableName":"zuoyebuzhi"}],"menu":"作业布置管理"},
                    //{"child":[{"buttons":["查看","评分","审核"],"menu":"作业提交","menuJump":"列表","tableName":"zuoyetijiao"}],"menu":"作业提交管理"},
                    //{"child":[{"buttons":["查看","修改","删除"],"menu":"课程成绩","menuJump":"列表","tableName":"zuoyepingfen"}],"menu":"课程成绩管理"},
                    {"child":[{"buttons":["查看","审核"],"menu":"校园论坛","menuJump":"列表","tableName":"xiaoyuanluntan"}],"menu":"校园论坛管理"}],
                   // {"child":[{"buttons":["查看","修改","删除"],"menu":"课程资源","menuJump":"列表","tableName":"kechengziyuan"}],"menu":"课程资源管理"},
                "frontMenu":[],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"教师","tableName":"jiaoshi"}]

    }
}
export default menu;
