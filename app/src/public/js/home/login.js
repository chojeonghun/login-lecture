"use strict";

const id = document.querySelector("#id"),
 psword = document.querySelector("#psword"),
 loginBtn = document.querySelector("#button");

loginBtn.addEventListener("click", login);

function login(){
    if(!id.value) return alert("아이디를 입력해 주세요.");
    if(!psword.value) return alert("비밃번호를 입력해 주세요.");

    const req = {
        id: id.value,
        psword: psword.value
    };

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success) {
            location.href = "/";
        }else{
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("로그인 중 에러 발생"));
    })
}
