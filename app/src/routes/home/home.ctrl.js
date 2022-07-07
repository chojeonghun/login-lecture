"use strict";

const User = require("../../models/User");
const loggers = require("../../config/logger");

const output = {
    home: (req, res) => {
        loggers.info(`GET / 304 "홈 화면으로 이동"`);
        res.render("home/index");
    },
    
    login: (req, res) => {
        loggers.info(`GET /login 304 "로그인 화면으로 이동"`);
        res.render("home/login");
    },
    
    register: (req, res) => {
        loggers.info(`GET /registr 304 "회원가입 화면으로 이동"`);
        res.render("home/register");
    }


}


const process = {
    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        const url = {
            method: "POST",
            path: "/login",
            status: response.err ? 400 : 200
        }
        log(response, url); 
         return res.status(url.status).json(response);
        },

    register: async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        const url = {
            method: "POST",
            path: "/register",
            status: response.err ? 400 : 201
        }
        log(response, url); 
        return res.status(url.status).json(response);    
    }       

}

module.exports = {
    output,
    process
};


const log = (response, url) => {
    if(response.err){
        loggers.error(
            `${url.method} ${url.path} ${url.status} Response: ${response.success} ${response.err}`
        )   
    }else{
        loggers.info(
            `${url.method} ${url.path} ${url.status} Response: ${response.success} ${response.msg || ""}`
        )  
    }

}