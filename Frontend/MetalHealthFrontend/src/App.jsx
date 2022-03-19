import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LandingPage from "./Routes/landingPage";
import Campaign from "./Routes/campaign";
import LoginAdmin from "./Routes/loginAdmin";
import RegisterAdmin from "./Routes/registerAdmin";
import AdminDashboard from "./Routes/adminDashboard";
import AboutUs from "./Routes/aboutUs";
import ContactUs from "./Routes/contactUs";
import PageNotFound from "./Routes/PageNotFound";
import NewCampaign from "./Routes/newCampaign";
import AllCampaigns from "./Routes/allCampaigns";
import EditCampaign from "./Routes/editCampaign";
import Footer from "./Components/footer";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import ChatBot from "./Routes/chatbotPage";
import AllBlogs from "./Routes/allBlogsPage";
import VideoConferencing from "./Routes/videoConferencingPage";
import ThoughtOfDay from "./Routes/thoughtPage";
import AllGames from "./Routes/allGamesPage";
import Music from "./Routes/musicPage";
import ExerciseWithUs from "./Routes/exercisePage";

const App = () => {
  return (
    <React.Fragment>
      <div id="page-container">
        <div id="content-wrap">
          <ToastContainer />
          <Switch>
            <Route path="/chatbot" exact component={ChatBot} />
            <Route path="/all-blogs" exact component={AllBlogs} />
            <Route
              path="/video-conferencing"
              exact
              component={VideoConferencing}
            />
            <Route path="/thought-of-the-day" exact component={ThoughtOfDay} />
            <Route path="/all-games" exact component={AllGames} />
            <Route path="/music" exact component={Music} />
            <Route path="/exercise-with-us" exact component={ExerciseWithUs} />
            <Route path="/all-campaigns" exact component={AllCampaigns} />

            <Route path="/campaign/:id" exact component={Campaign} />
            <Route path="/admin/login" exact component={LoginAdmin} />
            <Route path="/admin/dashboard" exact component={AdminDashboard} />
            <Route path="/admin/new" exact component={RegisterAdmin} />
            <Route
              path="/admin/campaign/:id/edit"
              exact
              component={EditCampaign}
            />
            <Route path="/admin/campaign/new" exact component={NewCampaign} />
            <Route path="/about-us" exact component={AboutUs} />
            <Route path="/contact-us" exact component={ContactUs} />
            <Route path="/page-not-found" exact component={PageNotFound} />
            <Route path="/" exact component={LandingPage} />
            <Redirect to="/page-not-found" />
          </Switch>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default App;
