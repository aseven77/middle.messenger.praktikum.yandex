export default `
<div class="card w-100">
    <form action="" class="form-chat">
        <div class="title">{{ title }}</div>
        <div class="text-center">
            {{#each inputs}}
                {{> input }}
            {{/each}}
            <button class="button form-chat__btn d-block">Save</button>
            <p>
            Forgot your password?
            <a href="" class="link">Restore password.</a>
            </p>
        </div>

    </form>
</div>
`
