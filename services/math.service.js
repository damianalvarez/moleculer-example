"use strict";

module.exports = {
    name: "math",
    settings: {},
    dependencies: [],
    actions: {
        add(ctx) {
            return Number(ctx.params.a) + Number(ctx.params.b);
        },
        sub(ctx) {
            return Number(ctx.params.a) - Number(ctx.params.b);
        },
    },
    events: {},
    methods: {},
    created() {},
    started() {},
    stopped() {},
}