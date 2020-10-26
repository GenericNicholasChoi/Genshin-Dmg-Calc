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
  SelectPicker,
  Table
} from "rsuite";
import { objectTypeSpreadProperty } from "@babel/types";
const { Column, HeaderCell, Cell } = Table;
const Characters = [
  { value: "Diluc", label: "Diluc" },
  { value: "Chongyun", label: "Chongyun" },
  { value: "Bennet", label: "Bennet" },
  { value: "Beidou", label: "Beidou" },
  { value: "Fischl", label: "Fischl" },
  { value: "Amber", label: "Amber" },
  { value: "Keqing", label: "Keqing" },
  { value: "Klee", label: "Klee" },
  { value: "Lisa", label: "Lisa" },
  { value: "Jean", label: "Jean" },
  { value: "Kaeya", label: "Kaeya" },
  { value: "Mona", label: "Mona" },
  { value: "Ningguang", label: "Ninguang" },
  { value: "Noelle", label: "Noelle" },
  { value: "Qiqi", label: "Qiqi" },
  { value: "Razor", label: "Razor" },
  { value: "Traveler_g", label: "Geo MC" },
  { value: "Traveler_a", label: "Anemo MC" },
  { value: "Venti", label: "Venti" },
  { value: "Sucrose", label: "Sucrose" },
  { value: "Xiangling", label: "Xiangling" },
  { value: "Xingqiu", label: "Xiangqiu" }
];

const EskillMultis = {
  Diluc: [0.944, 0.976, 1.29],
  Chongyun: [1.72],
  Bennet: [1.38, 0.84 + 0.92, 0.88 + 0.96, 1.32],
  Beidou: [1.22, 1.6],
  Fischl: [0.888, 1.15],
  Amber: [1.23],
  Keqing: [0.504, 1.68, 0.84 * 2],
  Klee: [0.95 + 0.33],
  Lisa: [3.2],
  Jean: [2.92],
  Kaeya: [1.91],
  Mona: [1.33],
  Ningguang: [2.3],
  Noelle: [1.2],
  Qiqi: [0.92],
  Razor: [1.99],
  Traveler_g: [2.48],
  Traveler_a: [1.92],
  Venti: [2.76],
  Sucrose: [2.11],
  Xiangling: [1.11],
  Xingqiu: [1.68 + 1.91]
};
Object.freeze(EskillMultis);

const QskillMultis = {
  Diluc: [2.04, 0.6, 2.04],
  Chongyun: [1.42],
  Bennet: [2.33],
  Beidou: [1.22 + 0.96],
  Fischl: [2.08],
  Amber: [5.05],
  Keqing: [0.88, 0.24 * 8, 1.89],
  Klee: [0.426],
  Lisa: [0.366],
  Jean: [4.25],
  Kaeya: [0.776],
  Mona: [4.22],
  Ningguang: [0.87],
  Noelle: [0.928],
  Qiqi: [2.85],
  Razor: [1.25],
  Traveler_g: [1.48],
  Traveler_a: [0.808],
  Sucrose: [1.48 * 3],
  Venti: [0.47 * 8],
  Xiangling: [0.72, 0.88, 1.1, 1.12],
  Xingqiu: [0.543]
};
Object.freeze(QskillMultis);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { atk: 0, CR: 0, CD: 0, def: 0, EM: 0, eSM: [], qSM: [] };
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
  calcdef = def => {
    this.setState({ def: def });
  };
  calcEM = em => {
    this.setState({ EM: em });
  };

  render() {
    return (
      <div className="App">
        <h1 className="App-header"> Genshin Damage Calculator </h1>
        <Grid fluid>
          <Row gutter={12}>
            <Col md={12}>
              {" "}
              <h2>Character Stats</h2>
            </Col>
            <Col md={12}>
              <h2>Select Character Skill Multipliers</h2>
              <SelectPicker
                preventOverflow
                data={Characters}
                size="lg"
                style={{ width: 224 }}
                onSelect={(value, eSM) => {
                  this.setState({
                    eSM: EskillMultis[value],
                    qSM: QskillMultis[value]
                  });
                }}
              />
              <Row>
                <h6> *The Skill Multipliers are based on skill level 1</h6>
                <h6> Damage Assumes all possible hits are landed</h6>
                <h6> Damage for DOT is for max ticks (No Swirl dmg)</h6>
              </Row>
            </Col>
          </Row>
          <Row gutter={10}>
            <Col xs={24}>
              <div class="Slider">
                <h4 style={{ textAlign: "left" }}>Attack</h4>
                <Atkslider value="atk" max="9999" calcThis={this.calcAtk} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={24}>
              <div class="Slider">
                <h4 style={{ textAlign: "left" }}>Crit Rate %</h4>
                <Atkslider max="80" calcThis={this.calcCR} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={24}>
              <div class="Slider">
                <h4 style={{ textAlign: "left" }}>Crit Dmg %</h4>
                <Atkslider calcThis={this.calcCD} max="350" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <div class="Slider">
                <h4 style={{ textAlign: "" }}>Defense</h4>
                <InputNumber
                  min={0}
                  max={9999}
                  value={this.state.def}
                  onChange={def => {
                    this.calcdef(def);
                  }}
                />
              </div>
            </Col>
            <Col md={6}>
              <div class="Slider">
                <h4 style={{ textAlign: "" }}>Elemental Mastery</h4>
                <InputNumber
                  min={0}
                  max={9999}
                  value={this.state.EM}
                  onChange={EM => {
                    this.calcEM(EM);
                  }}
                />
              </div>
            </Col>
          </Row>

          <Row gutter={12}>
            {/* <Col md={8}>
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
            </Col> */}
            <Col xs={5}>
              {" "}
              <h4>Skill</h4>
            </Col>
            <Col xs={5}>
              {" "}
              <h4>Non Crit Hit</h4>
            </Col>
            <Col xs={5}>
              {" "}
              <h4>Crit Hit</h4>
            </Col>
            <Col xs={5}>
              {" "}
              <h4>Average Damage</h4>
            </Col>
          </Row>
          <Row>
            <Col xs={5}>
              <h4>Basic Attack</h4>
            </Col>
            <Col xs={5}>
              <h5>{Math.round(this.state.atk)} </h5>
            </Col>
            <Col xs={5}>
              <h5>{Math.round(this.state.atk * this.state.CD)} </h5>
            </Col>
            <Col xs={5}>
              <h5>
                {Math.round(
                  (1 - this.state.CR) * this.state.atk +
                    this.state.CR * (this.state.CD * this.state.atk)
                )}{" "}
              </h5>
            </Col>
          </Row>
          <Row>
            <Col xs={5}>
              <h4>Elemental Skill</h4>
            </Col>
            <Col xs={5}>
              {" "}
              <h5>
                {" "}
                {Math.round(
                  this.state.eSM
                    .map(x => x * this.state.atk)
                    .reduce((a, b) => a + b, 0)
                )}{" "}
              </h5>
            </Col>
            <Col xs={5}>
              {" "}
              <h5>
                {" "}
                {Math.round(
                  this.state.eSM
                    .map(x => x * this.state.atk * this.state.CD)
                    .reduce((a, b) => a + b, 0)
                )}
              </h5>
            </Col>
            <Col xs={5}>
              {" "}
              <h5>
                {" "}
                {Math.round(
                  this.state.eSM
                    .map(
                      x =>
                        x * this.state.atk * (1 - this.state.CR) +
                        this.state.CR * this.state.CD * this.state.atk * x
                    )
                    .reduce((a, b) => a + b, 0)
                )}
              </h5>
            </Col>
          </Row>
          <Row>
            <Col xs={5}>
              <h4>Elemental Burst</h4>
            </Col>
            <Col xs={5}>
              {" "}
              <h5>
                {" "}
                {Math.round(
                  this.state.qSM
                    .map(x => x * this.state.atk)
                    .reduce((a, b) => a + b, 0)
                )}{" "}
              </h5>
            </Col>
            <Col xs={5}>
              {" "}
              <h5>
                {" "}
                {Math.round(
                  this.state.qSM
                    .map(x => x * this.state.atk * this.state.CD)
                    .reduce((a, b) => a + b, 0)
                )}
              </h5>
            </Col>
            <Col xs={5}>
              {" "}
              <h5>
                {" "}
                {Math.round(
                  this.state.qSM
                    .map(
                      x =>
                        x * this.state.atk * (1 - this.state.CR) +
                        this.state.CR * this.state.CD * this.state.atk * x
                    )
                    .reduce((a, b) => a + b, 0)
                )}
              </h5>
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
      <Col md={10}>
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
