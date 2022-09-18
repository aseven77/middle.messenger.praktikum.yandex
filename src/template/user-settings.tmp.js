export default `
<div class="card w-100">
    <form action="" class="form-chat">
        <div class="title">{{ title }}</div>
        <div class="text-center">
            {{#each inputs}}
                {{> input }}
            {{/each}}
            <button class="button form-chat__btn d-block">Save</button>
            Forgot your password?
            <a href="" class="link">Sign in</a>
        </div>

    </form>
</div>
`


