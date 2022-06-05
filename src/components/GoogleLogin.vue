 // Button to logout
    <GoogleLogin :params="params" :logoutButton=true>Logout</GoogleLogin>
    export default {
        name: 'App',
        data() {
            return {
                // client_id is the only required property but you can add several more params, full list down bellow on the Auth api section
                params: {
                    client_id: '762526272137-6p4i29ea5qoae40uvlim6d6sirn282tm.apps.googleusercontent.com'
                },
                // only needed if you want to render the button with the google ui
                renderParams: {
                    width: 250,
                    height: 50,
                    longtitle: true
                }
            }
        },
        components: {
            GoogleLogin
        }
    }
