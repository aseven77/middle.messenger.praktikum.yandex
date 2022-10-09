
import Block from '../../core/Block';


export class notFound extends Block {

    render() {
        // language=hbs
        return `
        <div class="error-page">
        <h1 class="error-page__title">404</h1>
        <p>Sorry, not page<br>
        Go <a href="index.html" class="link">home</a>, my dear user.</p>
    </div>
    `;
    }
}