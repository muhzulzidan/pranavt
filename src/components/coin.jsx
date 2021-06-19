import React from "react";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

class Coin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
    };
    this.coinToss = this.coinToss.bind(this)
    
  }

  coinToss() {
    setTimeout(()=>{ 
      this.setState({ result: "coin1" });

      setTimeout(()=>{ 
        this.setState({ result: "coin2" });

          setTimeout(()=>{ 
            this.setState({ result: "coin3" });

              setTimeout(()=>{ 
                this.setState({ result: "coin4" });

                  setTimeout(()=>{ 
                    this.setState({ result: "coin5" });
                  },3000);

              },3000);


          },3000);

      },3000);

  },3000);
}


  componentDidMount() {
    // Call this function so that it fetch first time right after mounting the component
    this.coinToss();

    // set Interval
    this.interval = setInterval(this.coinToss, 12000);     

}

componentWillUnmount() {
    // Clear the interval right before component unmount
    clearInterval(this.interval);
}

 

  render() {

    console.log(this.state.result)

    const {data} = this.props;

    return (
      <div className={`img`}>
        <div className="Coin">
          <div id="coin" className={this.state.result} key={+new Date()}>
          {/* <div id="coin" className={`coin1`} key={+new Date()}> */}
            <div className="side-a">
              <GatsbyImage image={getImage(data.img)} alt="token" className="img"/>
            </div>
            <div className="side-b">
              <img src={data.manyImg[0].file.url} className="img"/>
              {/* <GatsbyImage image={getImage(data.manyImg[0])} alt="token" className="img"/> */}
            </div>
            <div className="side-c">
              <img src={data.manyImg[1].file.url} className="img"/>
              {/* <GatsbyImage image={getImage(data.manyImg[1])} alt="token" className="img"/> */}
            </div>
            <div className="side-d">
              <img src={data.manyImg[2].file.url} className="img"/>
              {/* <GatsbyImage image={getImage(data.manyImg[2])} alt="token" className="img"/> */}
            </div>
            <div className="side-e">
              <img src={data.manyImg[3].file.url} className="img"/>
              {/* <GatsbyImage image={getImage(data.manyImg[3])} alt="token" className="img"/> */}
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default Coin;

