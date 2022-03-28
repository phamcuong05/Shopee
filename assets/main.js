const btnRegister = document.querySelector('.js-register')
        const modal = document.querySelector('.js-modal')
        const modalClose = document.querySelector('.js-modal--close')
        const formRegister = document.querySelector('.js-formRegister')
        const btnLogIn = document.querySelector('.js-login')
        const formLogIn = document.querySelector('.js-form-login')
        const modalContainerRegister = document.querySelector('.js-modal-container-register')
        const modalContainerLogin = document.querySelector('.js-modal-container-login')
        const btnLoginModal = document.querySelector('.js-login-modal')
        const btnRegisterModal = document.querySelector('.js-register-modal')
        const btnLoginMobile = document.querySelector('.js-login-mobile')
        const btnRegisterMobile = document.querySelector('.js-register-mobile')
        // show form register
        function showFormRegister() {
            modal.classList.add('open__modal')
            formRegister.classList.add('open__form-register')
            formLogIn.classList.remove('open__form-login')
        }
        btnRegister.addEventListener('click', showFormRegister)
        btnRegisterModal.addEventListener('click', showFormRegister)
        btnRegisterMobile.addEventListener('click', showFormRegister)
        // show form login
        function showFormLogin() {
            modal.classList.add('open__modal')
            formLogIn.classList.add('open__form-login')
            formRegister.classList.remove('open__form-register')
        }
        btnLogIn.addEventListener('click', showFormLogin)
        btnLoginModal.addEventListener('click', showFormLogin)
        btnLoginMobile.addEventListener('click', showFormLogin)
        
        // close form
        modalClose.addEventListener('click', function() {
            modal.classList.remove('open__modal')
        })
        // stop close when click to form
        modalContainerRegister.addEventListener('click', function(event) {
            event.stopPropagation()
        })
        modalContainerLogin.addEventListener('click', function(event) {
            event.stopPropagation()
        })

        //show & off header mobile user
        const btnUser = document.querySelector('.js-user')
        const headerMobileUser = document.querySelector('.js-header-mobile__user')
        const headerMobileClose = document.querySelector('.js-container')
        const btnLoginBack = document.querySelector('.js-auth-form__login')
        const btnRegisterBack = document.querySelector('.js-auth-form__register')

        function showHeaderMobileUser() {
            headerMobileUser.classList.add('open__header-mobile-user')
        }
        btnUser.addEventListener('click', showHeaderMobileUser)
        
        function hideHeaderMobileUser() {
            headerMobileUser.classList.remove('open__header-mobile-user')
        }
        headerMobileClose.addEventListener('click', hideHeaderMobileUser)

        // return back
        btnLoginBack.addEventListener('click', function() {
            modal.classList.remove('open__modal')
        })
        btnRegisterBack.addEventListener('click', function() {
            modal.classList.remove('open__modal')
        })