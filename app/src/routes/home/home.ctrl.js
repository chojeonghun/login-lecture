"use strict";

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    
    login: (req, res) => {
        res.render("home/login");
    } 
}

const users = {
    id: ["4545","woorimIT", "나개발", "김팀장"],
    passwd: ["4545","1234", "1234", "123456"],
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
        psword = req.body.psword

        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);            
            if(users.passwd[idx] === psword){
  
                return res.json({
                    success: "true",
                    msg: "로그인에 성공하셨습니다."
                })
            }
        }
           return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다."
           }) 
    }

}

module.exports = {
    output,
    process
};