export default {
  name: 'Header',
  methods: {
    emitir() {
      this.$emit('atualizar', { msg: 'atualizou' });
    }
  }
};