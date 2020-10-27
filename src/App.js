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

const AskillMultis = {
  Diluc: [0.897, 0.876, 0.988, 1.34],
  Chongyun: [0.7, 0.631, 0.803, 1.01],
  Bennet: [0.445, 0.427, 0.546, 0.597, 0.719],
  Beidou: [0.711, 0.709, 0.883, 0.865, 1.12],
  Fischl: [0.441, 0.468, 0.581, 0.577, 0.721],
  Amber: [0.361 * 2, 0.464, 0.593],
  Keqing: [0.41 * 2, 0.544, 0.315 + 0.344, 0.67],
  Klee: [0.722, 0.624, 0.899],
  Lisa: [0.396, 0.359, 0.428, 0.55],
  Jean: [0.483, 0.456, 0.603, 0.659, 0.792],
  Kaeya: [0.538, 0.517, 0.653, 0.709, 0.882],
  Mona: [0.376, 0.36, 0.448, 0.562],
  Ningguang: [0.28],
  Noelle: [0.791, 0.734, 0.863, 1.13],
  Qiqi: [0.378, 0.389, 0.242 * 2, 0.247 * 2, 0.63],
  Razor: [0.959, 0.826, 1.03, 1.36],
  Traveler_g: [0.445, 0.434, 0.53, 0.583, 0.708],
  Traveler_a: [0.445, 0.434, 0.53, 0.583, 0.708],
  Venti: [0.204 * 2, 0.444, 0.524, 0.261 * 2, 0.507, 0.71],
  Sucrose: [0.335, 0.306, 0.384, 0.479],
  Xiangling: [0.421 * 2, 0.261 * 2, 0.141 * 4, 0.71],
  Xingqiu: [0.466, 0.476, 0.286 * 2, 0.56, 0.359 * 2]
};

const ChargedskillMultis = {
  Diluc: [0.688, 1.25],
  Chongyun: [0.563, 1.02],
  Bennet: [0.559 + 0.607],
  Beidou: [0.5632, 1.02],
  Fischl: [1.24],
  Amber: [1.24],
  Keqing: [0.768 + 0.86],
  Klee: [1.57],
  Lisa: [1.77],
  Jean: [1.62],
  Kaeya: [0.55 + 0.731],
  Mona: [1.5],
  Ningguang: [0.174],
  Noelle: [0.507 + 0.905],
  Qiqi: [0.643 * 2],
  Razor: [0.625 + 1.13],
  Traveler_g: [0.559 + 0.722],
  Traveler_a: [0.559 + 0.722],
  Venti: [1.24],
  Sucrose: [1.2],
  Xiangling: [1.22],
  Xingqiu: [0.473 + 0.562]
};

Object.freeze(AskillMultis);
Object.freeze(ChargedskillMultis);

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
    this.state = {
      atk: 0,
      CR: 0,
      CD: 0,
      def: 0,
      elementalbonus: 0,
      physicalbonus: 0,
      eSM: [],
      qSM: [],
      aSM: [],
      ChargedSM: [],
      character: ""
    };
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
  calcelebonus = ebonus => {
    this.setState({ elementalbonus: ebonus });
  };
  calcphybonus = phybonus => {
    this.setState({ physicalbonus: phybonus });
  };

  calcDam = sm => {
    return Math.round(
      sm.map(x => x * this.state.atk).reduce((a, b) => a + b, 0)
    );
  };

  calcDamC = sm => {
    return Math.round(
      sm.map(x => x * this.state.atk * this.state.CD).reduce((a, b) => a + b, 0)
    );
  };

  CalcEDam = sm => {
    return Math.round(
      sm
        .map(
          x =>
            x * this.state.atk * (1 - this.state.CR) +
            this.state.CR * this.state.CD * this.state.atk * x
        )
        .reduce((a, b) => a + b, 0)
    );
  };
  calcdefDam = sm => {
    return Math.round(
      sm.map(x => x * this.state.def).reduce((a, b) => a + b, 0)
    );
  };

  calcdefDamC = sm => {
    return Math.round(
      sm.map(x => x * this.state.def * this.state.CD).reduce((a, b) => a + b, 0)
    );
  };

  CalcdefEDam = sm => {
    return Math.round(
      sm
        .map(
          x =>
            x * this.state.def * (1 - this.state.CR) +
            this.state.CR * this.state.CD * this.state.def * x
        )
        .reduce((a, b) => a + b, 0)
    );
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
                    qSM: QskillMultis[value],
                    aSM: AskillMultis[value],
                    ChargedSM: ChargedskillMultis[value],
                    character: value
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
                <h4 style={{ textAlign: "" }}>Elemental % Bonus</h4>
                <InputNumber
                  min={0}
                  max={400}
                  value={this.state.elementalbonus}
                  onChange={EM => {
                    this.calcelebonus(EM);
                  }}
                />
              </div>
            </Col>
            <Col md={6}>
              <div class="Slider">
                <h4 style={{ textAlign: "" }}>Physical % Bonus</h4>
                <InputNumber
                  min={0}
                  max={400}
                  value={this.state.physicalbonus}
                  onChange={EM => {
                    this.calcphybonus(EM);
                  }}
                />
              </div>
            </Col>
          </Row>

          <Row gutter={12}>
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
              <h5>{this.calcDam(this.state.aSM)} </h5>
            </Col>
            <Col xs={5}>
              <h5>{this.calcDamC(this.state.aSM)} </h5>
            </Col>
            <Col xs={5}>
              <h5>{this.CalcEDam(this.state.aSM)}</h5>
            </Col>
          </Row>
          <Row>
            <Col xs={5}>
              <h4>Charged Attack</h4>
            </Col>
            <Col xs={5}>
              {" "}
              <h5> {this.calcDam(this.state.ChargedSM)} </h5>
            </Col>
            <Col xs={5}>
              {" "}
              <h5> {this.calcDamC(this.state.ChargedSM)}</h5>
            </Col>
            <Col xs={5}>
              {" "}
              <h5> {this.CalcEDam(this.state.ChargedSM)}</h5>
            </Col>
          </Row>
          <Row>
            <Col xs={5}>
              <h4>Elemental Skill</h4>
            </Col>
            <Col xs={5}>
              <h5>
                {this.state.character == "Noelle"
                  ? this.calcdefDam(this.state.eSM)
                  : this.calcDam(this.state.eSM)}
              </h5>
            </Col>
            <Col xs={5}>
              <h5>
                {this.state.character == "Noelle"
                  ? this.calcdefDamC(this.state.eSM)
                  : this.calcDamC(this.state.eSM)}
              </h5>
            </Col>
            <Col xs={5}>
              <h5>
                {this.state.character == "Noelle"
                  ? this.CalcdefEDam(this.state.eSM)
                  : this.CalcEDam(this.state.eSM)}
              </h5>
            </Col>
          </Row>
          <Row>
            <Col xs={5}>
              <h4>Elemental Burst</h4>
            </Col>
            <Col xs={5}>
              {" "}
              <h5> {this.calcDam(this.state.qSM)}</h5>
            </Col>
            <Col xs={5}>
              {" "}
              <h5> {this.calcDamC(this.state.qSM)}</h5>
            </Col>
            <Col xs={5}>
              {" "}
              <h5> {this.CalcEDam(this.state.qSM)}</h5>
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
