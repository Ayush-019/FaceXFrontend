import React, { Component } from "react";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Logo from "./Components/Logo/Logo";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import Rank from "./Components/Rank/Rank";
import "tachyons";
import Particles from "react-particles-js";
import FaceRecogniser from "./Components/FaceRecogniser/FaceRecogniser";
import Signin from "./Components/Signin/Signin";
import Register from "./Components/Register/Register";



const particlesparameters = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 900,
      },
    },
  },
};

const initialstate = {
      input: "",
      imageurl: "",
      box: {},
      route: "signin",
      isSignedIn: false,
      user: {
        id: "",
        name: "",
        email: "",
        entries: 0,
        joined: "",
      }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialstate;
}

  addUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.id,
        entries: data.entries,
        date: data.date,
      },
    });
  };

  calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
      // console.log(data.outputs[0].data.regions[0].region_info.bounding_box);
    const image = document.getElementById("image");
    const width = Number(image.width);
    const height = Number(image.height);

    return {
     leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    };
  };

  displayFaceBox = (box) => {
    this.setState({ box: box });
    console.log(box);
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
    console.log(event.target.value);
  };

  onSubmit = () => {
    this.setState({ imageurl: this.state.input });
     fetch("https://facex-abc.azurewebsites.net/imageurl", {
       method: "post",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({
         input: this.state.input,
       }),
     })
       .then((response) => response.json())
       .then((response) => {
         console.log("hi", response);
         if (response) {
           fetch("https://facex-abc.azurewebsites.net/image", {
             method: "put",
             headers: { "Content-Type": "application/json" },
             body: JSON.stringify({
               id: this.state.user.id,
             }),
           })
             .then((response) => response.json())
             .then((count) => {
               this.setState({
                 user: { ...this.state.user, entries: count.entries },
               });
               //  this.setState(
               //    Object.assign(this.state.user, { entries: count })
               //  );
             })
             .catch(console.log);
         }
         this.displayFaceBox(this.calculateFaceLocation(response));
       })
       .catch((err) => console.log(err));
  };

  onroutechange = (route) => {
    if (route === "signout") {
      this.setState(initialstate);
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    const { isSignedIn, imageurl, route } = this.state;
    return (
      <div className="App">
        <Particles className="particles" params={particlesparameters} />
        <Navigation isSignedIn={isSignedIn} onroute={this.onroutechange} />
        {route === "home" ? (
            <div>
            <Logo />
            <Rank
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            <ImageLinkForm
              InputChange={this.onInputChange}
              onSubmit={this.onSubmit}
            />
            <FaceRecogniser box = {this.state.box} imageurl={imageurl} />
          </div>
        ) : route === "signin" ? (
          <Signin onroute={this.onroutechange} addUser={this.addUser} />
        ) : (
          <Register onroute={this.onroutechange} addUser={this.addUser} />
        )}
      </div>
    );
  }
}

export default App;
