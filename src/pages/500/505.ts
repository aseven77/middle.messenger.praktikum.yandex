
import Block from '../../core/Block';


export class errorServer extends Block {

    render() {
        // language=hbs
        return `
        <div class="error-page">
        <h1 class="error-page__title">5**</h1>
        <p>Sorry, Internal Server Error.<br>
        Go <a href="index.html" class="link">home</a>, my dear user.</p>
    </div>

    `;
    }
}