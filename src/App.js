import React, { Component, useState } from "react";
import "./App.css";

import "rsuite/dist/styles/rsuite-default.css";
import {
  Slider,
  RangeSlider,
  Grid,
  Row,
  Col,
  Container,
  Header,
  Content,
  InputNumber,
  SelectPicker
} from "rsuite";
import { objectTypeSpreadProperty } from "@babel/types";

const Characters = [
  { value: "Diluc", label: "Diluc1" },
  { value: "Diluc2", label: "Diluc2" }
];

const EskillMultis = {
  Diluc: [0.944, 0.976, 1.29],
  Mona: [94.4, 97.6, 129]
};
Object.freeze(EskillMultis);

const skillMultis = {
  Diluc: [0.897, 0.876, 0.988, 1.34],
  Mona: [94.4, 97.6, 129]
};
Object.freeze(skillMultis);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { atk: 0, CR: 0, CD: 0, eSM: [] };
  }

  calcAtk = atk => {
    this.setState({ atk: atk });
  };

  calcCD = cd => {
    this.setState({ CD: cd * 0.01 + 1 });
  };

  calcCR = cr => {
    this.setState({ CR: cr / 100 });
  };

  render() {
    return (
      <div className="App">
        <h1 className="App-header"> Genshin Damage Calculator </h1>
        <Grid fluid>
          <Row>
            <Col md={12}>
              {" "}
              <h2>Character Stats</h2>
            </Col>
            <Col md={12}>
              <h2> Character Skill Multipliers</h2>
              <SelectPicker
                preventOverflow
                data={Characters}
                size="lg"
                style={{ width: 224 }}
                onSelect={(value, eSM) => {
                  this.setState({ eSM: EskillMultis[value] });
                }}
              />
            </Col>
          </Row>

          <div class="Slider">
            <h3>Attack</h3>
            <Atkslider value="atk" max="9999" calcThis={this.calcAtk} />
          </div>
          <div class="Slider">
            <h3>Crit Rate %</h3>
            <Atkslider max="80" calcThis={this.calcCR} />
          </div>
          <div class="Slider">
            <h3>Crit Dmg %</h3>
            <Atkslider calcThis={this.calcCD} max="350" />
          </div>
          <Row gutter={12}>
            <Col md={8}>
              <h3>Non-Crit Hit</h3>
              <h4>{Math.round(this.state.atk)} </h4>
            </Col>
            <Col md={8}>
              <h3>Critical Hit</h3>
              <h4>{Math.round(this.state.atk * this.state.CD)} </h4>
            </Col>
            <Col md={8}>
              <h3>Expected Damage</h3>
              <h4>
                {Math.round(
                  (1 - this.state.CR) * this.state.atk +
                    this.state.CR * (this.state.CD * this.state.atk)
                )}
              </h4>
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <h3>Total E Damage (Non Crit)</h3>
              <h4>
                {Math.round(
                  this.state.eSM
                    .map(x => x * this.state.atk)
                    .reduce((a, b) => a + b, 0)
                )}
              </h4>
            </Col>
            <Col md={8}>
              <h3>Total E Damage (Crit)</h3>
              <h4>
                {Math.round(
                  this.state.eSM
                    .map(x => x * this.state.atk * this.state.CD)
                    .reduce((a, b) => a + b, 0)
                )}
              </h4>
            </Col>
            <Col md={8}>
              <h3>Expected E Damage</h3>
              <h4>
                {Math.round(
                  this.state.eSM
                    .map(
                      x =>
                        x * this.state.atk * (1 - this.state.CR) +
                        this.state.CR * this.state.CD * this.state.atk * x
                    )
                    .reduce((a, b) => a + b, 0)
                )}
              </h4>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

function Atkslider(props) {
  const [atkvalue, setatkValue] = React.useState(0);
  return (
    <Row>
      <Col md={15}>
        <Slider
          progress
          min={0}
          max={props.max}
          style={{ margin: 20 }}
          value={atkvalue}
          onChange={atkvalue => {
            setatkValue(atkvalue);
            props.calcThis(atkvalue);
          }}
        />
      </Col>
      <Col md={4}>
        <InputNumber
          min={0}
          max={props.max}
          value={atkvalue}
          onChange={atkvalue => {
            setatkValue(atkvalue);
            props.calcThis(atkvalue);
          }}
        />
      </Col>
    </Row>
  );
}

export default App;
