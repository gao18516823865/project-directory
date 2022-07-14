<script lang="ts">
import { defineComponent } from "vue"
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { key } from "@store/index";
export default defineComponent({
  name: "Login",
  setup() {
    const router = useRouter();
    const store = useStore(key);
    const login = () => {
      store.dispatch("user/Login", {
        username: "admin",
        password: "admin"
      }).then(res=>{
        loginSuccess();
      })
    }
    const loginSuccess = () => {
      router.push({ path: "/" })
    }
    return {
      login
    }
  }
})
</script>
<template>
  <div class="wrap" id="wrap">
    <div class="logGet">
      <!-- 头部提示信息 -->
      <div class="logD logDtip">
        <p class="p1">登录</p>
      </div>
      <!-- 输入框 -->
      <div class="lgD">
        <input type="text" placeholder="输入用户名" />
      </div>
      <div class="lgD">
        <input type="text" placeholder="输入用户密码" />
      </div>
      <div class="logC">
        <el-button type="primary" @click="login">登陆</el-button>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
body {
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center center;
}

* {
  margin: 0;
  padding: 0;
}

#wrap {
  height: 600px;
  background-position: center center;
  position: relative;

}

#head {
  height: 120px;
  background-color: #66CCCC;
  text-align: center;
  position: relative;
}

#wrap .logGet {
  height: 408px;
  position: absolute;
  background-color: #FFFFFF;
  top: 100px;
  right: 15%;
}

.logC a button {
  height: 45px;
  background-color: #ee7700;
  border: none;
  color: white;
  font-size: 18px;
}

.logGet .logD.logDtip .p1 {
  display: inline-block;
  font-size: 28px;
  margin-top: 30px;
}

#wrap .logGet .logD.logDtip {
  border-bottom: 1px solid #ee7700;
  margin-bottom: 60px;
  margin-top: 0px;
  margin-right: auto;
  margin-left: auto;
}

.logGet .lgD img {
  position: absolute;
  top: 12px;
  left: 8px;
}

.logGet .lgD input {
  height: 42px;
  text-indent: 2.5rem;
}

#wrap .logGet .lgD {
  position: relative;
  margin-bottom: 30px;
  margin-top: 30px;
  margin-right: auto;
  margin-left: auto;
}

#wrap .logGet .logC {
  margin-top: 0px;
  margin-right: auto;
  margin-bottom: 0px;
  margin-left: auto;
}


.title {
  font-family: "宋体";
  color: #FFFFFF;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* 使用css3的transform来实现 */
  font-size: 36px;
  height: 40px;
}

.copyright {
  font-family: "宋体";
  color: #FFFFFF;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* 使用css3的transform来实现 */
  height: 60px;
  text-align: center;
}
</style>