import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Categories from "./components/Categories/Categories";
import Reviews from "./components/Reviews/Reviews";
import Review from "./components/Review/Review";
import "./App.css";

const App = () => {
  return (
    <div className={`App`}>
      <Router>
        <div className="content">
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/categories">
              <Categories />
            </Route>
            <Route exact path="/reviews">
              <Reviews />
            </Route>
            <Route exact path="/reviews/:review_id">
              <Review />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
