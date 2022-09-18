export default `
<div class="card w-100">
    <form action="" class="form-chat">
        <div class="title">{{ title }}</div>
        <label class="avatar">
            <img src={{img}} class="avatar__picture">
            <input type="file" name="avatar" class="avatar__control"/>
            <div class="avatar__edit"> </div>
        </label>
        <div class="text-center">
            {{#each inputs}}
                {{> input }}
            {{/each}}
            <button class="button form-chat__btn d-block">Save</button>
            <a href="password-change.html" class="link">Create password</a>
        </div>

    </form>
</div>
`


