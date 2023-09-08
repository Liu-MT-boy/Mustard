<template>
  <div class="login">
    <div class="loginL">
      <img src="../../assets/img/222.jpg" alt="" style="width: 100%; height: 100%" />
    </div>
    <div class="loginR">
      <div class="loginContent">
        <div>
          <h1>欢迎登录 Mustard</h1>
        </div>
        <div>
          <el-form
            ref="loginFormRef"
            :model="loginForm"
            :rules="loginRules"
            class="demo-ruleForm"
            size="default"
          >
            <el-form-item prop="account">
              <el-input v-model="loginForm.account" placeholder="用户名" size="large" />
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model="loginForm.password" placeholder="密码" size="large" />
            </el-form-item>
            <div style="text-align: center">
              <el-button type="primary" round @click="onSubmit(loginFormRef)" size="default"
                >提 交</el-button
              >
              <el-button round @click="resetForm(loginFormRef)" size="default">重 置</el-button>
            </div>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted, onBeforeUnmount } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { useRouter } from 'vue-router'
import { loginPost } from '../../api/login'
import { ElMessage } from 'element-plus'
const router = useRouter()

const loginFormRef = ref<FormInstance>()
interface LoginForm {
  account: string
  password: string
}
const loginRules = reactive<FormRules<LoginForm>>({
  account: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})

const loginForm = reactive<LoginForm>({
  account: '',
  password: ''
})

// 提交
const onSubmit = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
      let param = {
        name: loginForm.account,
        passwoed: loginForm.password
      }
      loginPost(param).then((resp) => {
        console.log(resp)
        if (resp.code === 200) {
          ElMessage.success(resp.msg)
          router.push('/')
        }
      })
    } else {
      console.log('error submit!')
      return false
    }
  })
}
// 重置
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const keydownEvent = (event: KeyboardEvent) => {
  if (event.keyCode === 13) {
    onSubmit(loginFormRef.value)
  }
}

onMounted(() => {
  window.addEventListener('keydown', keydownEvent)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', keydownEvent)
})
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  width: 100%;
  background-color: #d6bfe0;
  display: flex;
  .loginL {
    flex: 1;
    overflow: hidden;
  }
  .loginR {
    flex: 1;
    position: relative;
    .loginContent {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 350px;
      h1 {
        font-weight: 600;
        text-align: center;
        margin-bottom: 30px;
      }
    }
  }
}

.el-form-item--default {
  margin-bottom: 30px;
}
.el-button.is-round {
  padding: 20px 40px 20px 40px;
}
</style>
