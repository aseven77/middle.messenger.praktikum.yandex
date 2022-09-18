export default `
<div class="card w-100">
    <form action="" class="form-chat">
        <div class="title">{{ title }}</div>
        <div class="text-center">
            {{#each inputs}}
                {{> input }}
            {{/each}}
            <button class="button form-chat__btn d-block">Create account</button>
            <p>
            Forgot your password?
            <a href="" class="link">Restore password </a>
            </p>
            <p>
            New to my Chat?
            <a href="" class="link">Create an account </a>
            </p>
        </div>

    </form>
</div>
`
