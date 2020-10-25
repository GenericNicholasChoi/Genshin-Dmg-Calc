import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
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
  InputNumber
} from "rsuite";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// function Atkslider(props) {
//   const [atkvalue, setatkValue] = React.useState(0);
//   return (
//     <Row>
//       <Col md={10}>
//         <Slider
//           progress
//           style={{ marginTop: 16 }}
//           value={atkvalue}
//           onChange={atkvalue => {
//             setatkValue(atkvalue);
//           }}
//         />
//       </Col>
//       <Col md={4}>
//         <InputNumber
//           min={0}
//           max={100}
//           value={atkvalue}
//           onChange={atkvalue => {
//             setatkValue(atkvalue);
//           }}
//         />
//       </Col>
//     </Row>
//   );
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
