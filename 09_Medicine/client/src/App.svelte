<script>
import { Router, Link, Route } from "svelte-routing";
import Home from "./pages/Home/Home.svelte";
import About from "./pages/About/About.svelte";
import Pharmacy from "./pages/Pharmacy/Pharmacy.svelte";
</script>
<Router>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/pharmacy">pharmacy</Link>
    </nav>

    <div>
        <Route path="/">
            <Home/>
        </Route>
        <Route path="/about">
            <About/>
        </Route>
        <Route path="/pharmacy">
            <Pharmacy/>
        </Route>
    </div>
</Router>
