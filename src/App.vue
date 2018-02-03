<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <input type="text" v-model="invertedText" placeholder="Text to invert">
                <br><br>
                <p>Inverted text: {{ invertedText | invertText }}</p>
                <hr>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <input type="text" v-model="countText" placeholder="Text to count characters">
                <br><br>
                <p>"{{ countText }}" => Gets Filtered to => "{{ countText }} ({{ countText | count-characters }})" </p>
                <hr>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <input type="text" v-model="invertedText" placeholder="Text to invert">
                <br><br>
                <p>Inverted text: {{ compInvertText }}</p>
                <br>
                <input type="text" v-model="countText" placeholder="Text to count characters">
                <br><br>
                <p>"{{ countText }}" => Gets Filtered to => "{{ countText }} ({{ compCountCharacters }})" </p>
                <hr>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                <input type="text" v-model="mixinText" placeholder="Text to count characters">
                <br><br>
                <p>"{{ mixinText }}" => Gets Filtered to => "{{ mixinText }} ({{ mixinCountCharacters }})" </p>
            </div>
        </div>
    </div>
</template>

<script>
    import InvertTextMixin from './mixins/InvertTextMixin.js';

    export default {
        mixins: [InvertTextMixin],
        data: function() {
            return {
                invertedText: '',
                countText: ''
            }
        },
        filters: {
            invertText(value) {
                value = value.toString();
                return value.split('').reverse().join('');
            }
        },
        computed: {
            compInvertText() {
                this.invertedText = this.invertedText.toString();
                return this.invertedText.split('').reverse().join('');
            },
            compCountCharacters() {
                this.countText = this.countText.toString();
                return this.countText.length;
            }
        }
    }
</script>

<style>
</style>
