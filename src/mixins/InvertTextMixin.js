export default {
    data: function() {
        return {
            mixinText: ''
        }
    },
    computed: {
        mixinCountCharacters() {
            this.mixinText = this.mixinText.toString();
            return this.mixinText.length;
        }
    }
}