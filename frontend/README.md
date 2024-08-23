<!-- https://www.figma.com/design/nlowWDVF8yxl4EW4Qdk9eh/React-Projects-by-Alisher-Khujanov?node-id=0-1 -->
# SASS
```bash
npm install sass
```
<!-- ==================================================== -->
# Icons
<!-- https://react-icons.github.io/react-icons/ -->
```bash
npm install react-icons --save
```
<!-- ==================================================== -->
# Router
```bash
npm install react-router-dom@latest
```
- After installing react-router-dom you need to create a .jsx file to 
put all your components into one place together. 
Then, in App.jsx you need to import BrowserRouter and wrap AllComponents with it like this:
```jsx
import AllComponents from "./components/AllComponents.jsx"
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <AllComponents />
    </BrowserRouter>
  )
}
export default App
```
- BrowserRouter is the main component of library (rrd) that receives signal from brauser 
about the location and path of URL. Afterwards, it will send it to allComponents 
where they receive the same signal by useLocation

<!-- --------------------------------------------------------------------------- -->

<br><br>

<!-- --------------------------------------------------------------------------- -->
<!-- In AllComponents -->
```jsx
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from "./Home"
import About from './About'
import Navigation from './Navigation'

function AllComponents(props) {
    const location = useLocation()

    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigation />}>
                {/* http://localhost:5173/ */}
                <Route index element={<Home />} />

                {/* http://localhost:5173/about */}
                <Route path="about" element={<About />} />

                {/* http://localhost:5173/contact */}
                {/* <Route path="contacts" element={<Contacts />} /> */}
            </Route>
        </Routes>
    )
}

export default AllComponents;
```

- Navigation is the main component of all others that wraps up all components. This means that when you need any page, that page appears inside of Navigation. By doing so, we can make sure that every page has navbar and footer. The `<Outlet>` compoent identifies where we want to show other parts of our page rather that nav and footer.

```jsx
import { Outlet, Link } from 'react-router-dom'
import "./style.scss"

function Navigation() {
    return (
        <>
            <header>
                <Link to="/">Home</Link>
                <Link to="about">About</Link>
            </header>

            <main>
                <Outlet />
            </main>

            <footer></footer>
        </>
    );
}

export default Navigation;
```
- The `<Link to="">` component is used instead of tag `<a href="">`

<!-- ==================================================== -->





