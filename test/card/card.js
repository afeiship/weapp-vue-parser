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