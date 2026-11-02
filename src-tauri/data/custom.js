window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});// 登录表单自动保存&自动填充脚本
(function(){
    // 页面加载完成后回填
    function fillLoginInfo(){
        let userInput = document.querySelector('input[name="username"]');
        let pwdInput = document.querySelector('input[name="pwd"]');
        if(localStorage.getItem("saveUser")){
            userInput.value = localStorage.getItem("saveUser");
        }
        if(localStorage.getItem("savePwd")){
            pwdInput.value = localStorage.getItem("savePwd");
        }
    }
    // 监听表单提交事件，保存账号密码
    document.addEventListener("submit",function(e){
        let userInput = document.querySelector('input[name="username"]');
        let pwdInput = document.querySelector('input[name="pwd"]');
        if(userInput && pwdInput && userInput.value && pwdInput.value){
            localStorage.setItem("saveUser", userInput.value);
            localStorage.setItem("savePwd", pwdInput.value);
        }
    })
    // 延迟执行，防止dom还没渲染完成
    setTimeout(fillLoginInfo, 800);
})()
