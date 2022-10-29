import Header from '../header/Header.vue'

export default {
  name: 'Dashboard',
  props: ['nome'],
  data() {
    return {
      msg: 'mensagem 1'
    }
  },
  methods: {
    novaMsg(evt) {
      this.msg = evt.msg;
    }
  },
  components: {
    Header
  }
};