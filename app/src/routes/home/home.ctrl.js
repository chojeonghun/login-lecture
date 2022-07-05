"use strict";

const User = require("../../models/User");
const loggers = require("../../config/logger");

const output = {
    home: (req, res) => {
        loggers.info(`GET / 200 "홈 화면으로 이동"`);
        res.render("home/index");
    },
    
    login: (req, res) => {
        loggers.info(`GET /login 200 "로그인 화면으로 이동"`);
        res.render("home/login");
    },
    
    register: (req, res) => {
        loggers.info(`GET /registr 200 "회원가입 화면으로 이동"`);
        res.render("home/register");
    }


}


const process = {
    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        if(response.err){
            loggers.error(
                `POST / login 200 Response: ${response.success}, msg: ${response.err}`
            )   
        }else{
            loggers.info(
                `POST / login 200 Response: ${response.success}, msg: ${response.msg}`
            )  
        }
         return res.json(response);
        },

    register: async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        if(response.err){
            loggers.error(
                `POST / register 200 Response: ${response.success}, msg: ${response.err}`
            )   
        }else{
            loggers.info(
                `POST / register 200 Response: ${response.success}, msg: ${response.msg}`
            )  
        }
        return res.json(response);    
    }       

}

module.exports = {
    output,
    process
};
