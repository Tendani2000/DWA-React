/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

const page = (
    <div>
        <img src ="./rl.png" width = "80px" />
        <h1>Fun Facts about React</h1>
        <ul>
            <li>React was developed by Facebook.</li>
            <li>React components are used to build the UI.</li>
            <li><a href="https://facebook.github.io/react/">Learn more here!</a></li>
        </ul>
    </div>
)  

ReactDOM.render(page, document.getElementById("root"))