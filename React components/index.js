/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."

 */


function Reactlist () {
    return (
        <div>
            <header>
                <nav>
                    <img src = "./rl.png" width = "80px"/>
                </nav>
            </header>    
            <h1>Reasons I love React</h1>
            <ul>
                <li>React is strong and fast</li>
                <li>I can build apps in it without needing any other libraries or frameworks.</li>
                <li>The community around React is great, there are so many people who have built amazing things for me. </li>
            </ul>
            <footer>
                <samll>© 2023 Ramanyimi development.All rights reserved.</samll>
            </footer>
        </div>
    )
}

ReactDom.render( <Reactlist />, document.getElementById("root"))