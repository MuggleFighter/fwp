(function () {
    function $(selector) {
        return document.querySelector(selector);
    }

    $('.nav-signin .signin').addEventListener('click', function (ev) {
        ev.preventDefault();
        ev.stopPropagation();
        modal.style.display = 'block';
    });
    var modal = $('.flip-modal');
    modal.addEventListener('click', function (ev) {
        ev.stopPropagation();
        var target = ev.target;
        if (target.classList.contains('close')) {
            ev.preventDefault();
            modal.style.display = 'none';
        } else if (target.classList.contains('tab-signin')) {
            ev.preventDefault();
            $('.modal.signup').classList.remove('active');
            $('.modal.signin').classList.add('active');
        } else if (target.classList.contains('tab-signup')) {
            ev.preventDefault();
            $('.modal.signin').classList.remove('active');
            $('.modal.signup').classList.add('active');
        }
    });
    document.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    /*certification*/


    $('.modal.signup form').addEventListener('submit', function (ev) {
        ev.preventDefault();
        var errMsg = $('.modal.signup .err-msg');
        if (!/^\w{3,8}$/.test($('.modal.signup input[name=username]').value)) {
            errMsg.innerText = '用户名需输入3-8个字符，包括字母数字下划线';
            return false;
        }
        if (!/^\w{6,10}$/.test($('.modal.signup input[name=password]').value)) {
            errMsg.innerText = '密码需输入6-10个字符，包括字母数字下划线';
            return false
        }
        if ($('.modal.signup input[name=password]').value !== $('.modal.signup input[name=password2]').value) {
            errMsg.innerText = '两次输入的密码不一致';
            return false
        }
        this.submit();
    });

    $('.modal.signin form').addEventListener('submit', function (ev) {
        ev.preventDefault();
        var errMsg = $('.modal.signin .err-msg');
        if (!/^\w{3,8}$/.test($('.modal.signin input[name=username]').value)) {
            errMsg.innerText = '用户名需输入3-8个字符，包括字母数字下划线';
            return false;
        }
        if (!/^\w{6,10}$/.test($('.modal.signin input[name=password]').value)) {
            errMsg.innerText = '密码需输入6-10个字符，包括字母数字下划线';
            return false;
        }
        this.submit();
    })
    // 用户名需输入3-8个字符，包括字母数字下划线
    // 密码需输入6-10个字符，包括字母数字下划线

})();