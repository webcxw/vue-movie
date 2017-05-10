<template>
    <div>
        <h2 class="logintitle">登录</h2>
        <div class="logo">
            <img src="../assets/2017-05-02_212439.png">
        </div>
        <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
            <el-form-item prop="user">
                <el-input type="text" placeholder="账号" v-model="ruleForm2.user" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item  prop="checkPass">
                <el-input type="password" placeholder="密码" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button class="btn" type="warning" @click="submitForm('ruleForm2')">登录</el-button>
                <el-button class="rest" @click="resetForm('ruleForm2')">重置</el-button>
                <a style="float: right; color: #ffb816;" href="">忘记密码？</a>
            </el-form-item>
        </el-form>
        <div class="sflogin">
          <span></span><b>第三方登录</b><span></span>
          <div class="hot">
            <i class="iconfont icon-weibo sina"></i>
            <i class="iconfont icon-weixin weixin"></i>
            <i class="iconfont icon-qq qq"></i>
          </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:"login",
        data(){
          var validatePass = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入账号'));
            } else {
              if (this.ruleForm2.checkPass !== '') {
                this.$refs.ruleForm2.validateField('checkPass');
              }
              callback();
            }
          };
          var validatePass2 = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入密码'));
            } else {
              callback();
            }
          };
          return {
            ruleForm2: {
              user: '',
              checkPass: ''
            },
            rules2: {
              user: [
                { validator: validatePass, trigger: 'blur' }
              ],
              checkPass: [
                { validator: validatePass2, trigger: 'blur' }
              ]
            }
          };
        },
        methods: {
          submitForm(formName) {
            this.$refs[formName].validate((valid) => {
              if (valid) {
                alert('submit!');
                window.location.href = "#/"
              } else {
                console.log('error submit!!');
                return false;
              }
            });
          },
          resetForm(formName) {
            this.$refs[formName].resetFields();
          }
        }
    }
</script>

<style>
    .logintitle{width: 100%; height: 44px; background: #ffb816; color: #fff; text-align: center; 
                line-height: 44px;}
    .el-form{padding: 0 1rem;}
    .logo{width: 100%;height: 2rem;display: flex; align-items: center; justify-content: center;}
    .logo img{width: 1.5rem;height: 1.5rem; }
    .btn{width: 100%;}
    .rest{border:1px solid #ffb816 !important; color: #ffb816 !important; width: 100%;}
    .el-button+.el-button{margin-left: 0 !important; margin-top: 0.2rem;}
    .sflogin{height: 3.4rem; text-align: center;}
    .sflogin b{margin:0 0.25rem; font-size: 0.25rem; color: #999;}
    .sflogin span{width: 2.2rem; height: 1px; background: #ccc; display: inline-block;}
    .sflogin .hot i{font-size: 0.8rem !important; line-height: 3rem; margin: 0 0.2rem;}
    .hot .sina{color: #ff4a4f;}
    .hot .weixin{color: #1ce4b3;}
    .hot .qq{color: #49c1f5;}
</style> 