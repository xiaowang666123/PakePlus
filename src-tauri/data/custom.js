window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});(function(){
    // 回填账号密码
    function autoFill(){
        const userInp = document.querySelector('input[name="username"]');
        const pwdInp = document.querySelector('input[name="pwd"]');
        if(userInp) userInp.value = localStorage.getItem("merchant_user") || "";
        if(pwdInp) pwdInp.value = localStorage.getItem("merchant_pwd") || "";
    }
    // 监听表单提交，保存账号密码
    document.addEventListener("submit", function(e){
        const userInp = document.querySelector('input[name="username"]');
        const pwdInp = document.querySelector('input[name="pwd"]');
        if(userInp && pwdInp && userInp.value.trim() && pwdInp.value.trim()){
            localStorage.setItem("merchant_user", userInp.value.trim());
            localStorage.setItem("merchant_pwd", pwdInp.value.trim());
        }
    })
    // 延迟执行，等待表单DOM渲染完成
    setTimeout(autoFill, 800);
})()
