<template>
  <view>
      <text>Hello</text>
  </view>
</template>

<script>
  export default {
    config: {
      component: true
    },
    component: {
      properties: {
        avatarUrl: {
          type: String,
          value: 'none'
        },
        nickName: {
          type: String,
          value: '-'
        }
      },
      methods: {
        test1() {
          console.log('hello');
        }
      }
    }
  };
  Component({
    properties: {
      avatarUrl: {
        type: String,
        value: 'none'
      },
      nickName: {
        type: String,
        value: '-'
      }
    },
    methods: {
      test1() {
        console.log('hello');
      }
    }
  });
</script>

<style>
    /*@import "/app.wxss";*/
    body {
        color: #f00;
    }
</style>
