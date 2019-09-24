"use strict";

module.exports = {
    name: "math",
    settings: {},
    dependencies: [],
    actions: {
        add(ctx) {
            console.log('params', ctx.params);
            return Number(ctx.params.a) + Number(ctx.params.b);
        }
    },
    events: {},
    methods: {},
    created() {},
    started() {},
    stopped() {},
}