<template>
  <div class="signupAuth">
    <div class="cover">
      <div class="card" v-if="!checked">
        <router-link to="/"><i id="close" class="fas fa-lg fa-times"/></router-link>
        <h2 class="title">The - F2E<br/>前端精神時光屋</h2>
        <h3 class="sheetName">報名查詢</h3>
        <input
          id="mail"
          placeholder="exapmle@gmail.com..."
          v-model="email"
        />
        <primaryBtn text="查詢"  :clickFunc="check.bind(this, email)"/>
      </div>
      <div class="card" v-if="checked">
        <h2 class="title">{{ response.message }}！</h2>
        <div class="resContent" v-if="response.success">
          <p><strong>報名稱呼：</strong>{{ response.nickName}}</p>
          <p><strong>報名時間：</strong>{{ response.timeStamp }}</p>
        </div>
        <primaryBtn text="返回" :clickFunc="again.bind(this)"/>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/js/fontawesome-all.min.js';
import PrimaryBtn from '@/components/PrimaryBtn.vue';
export default {
  data() {
    return {
      email: '',
      checked: false,
      response: '',
    }
  },
  methods: {
    check(email) {
      var xhr = new XMLHttpRequest();
      xhr.open('post', 'https://www.thef2e.com/api/isSignUp');
      xhr.setRequestHeader('Content-Type', 'application/json');
      const data = JSON.stringify({email: email});
      xhr.send(data);
      xhr.onload = (info) => {
        this.response = JSON.parse(info.currentTarget.responseText);
        const date = new Date(this.response.timeStamp);
        const yy = date.getFullYear()
        const mm = date.getMonth() + 1;
        const dd = date.getDate();
        
        this.response.timeStamp = `${yy} / ${mm} / ${dd}`
        this.checked = true;
      }
    },
    again() {
      this.checked = !this.checked;
      this.response = '';
    },
  },
  components: {
    PrimaryBtn,
  },
}
</script>

<style lang="scss" scoped>
.signupAuth {
  position: relative;
  height: 100vh;
  background-image: url('https://firebasestorage.googleapis.com/v0/b/hexschool-api.appspot.com/o/blog%2F2018%2F05%2FTheF2E_banner.png?alt=media&token=4e663e89-554e-4bed-83ac-000fddabd8ab');
  background-size: cover;
  background-position: center;
  z-index: 5;
}
.cover {
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .8);
}
.card{
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  margin: 5rem 0;
  width: 90%;
  max-width: 450px;
  height: 400px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, .8);
  a {
    position: absolute !important;
    top: 1rem !important;
    right: 1rem !important;
    color: #222;
    border-radius: 50%;
    transition: all .3s ease-in-out;
    &:hover {
      color: #d6b161;
    }
  }
}
.title {
  margin: 3rem;
  font-size: 1.5rem;
  text-align: center;
}
.sheetName {
  font-size: 1.5rem;
}
#mail {
  width: 80%;
  height: 1.8rem;
  margin-top: 6rem;
  margin-bottom: 1rem;
  padding: 10px;
  border: none;
  border-radius: 5px;
}
.resContent{
  width: 85%;
  min-height: 200px;
  @media (min-width: 992px) {
    width: 60%;
  }
}
</style>
