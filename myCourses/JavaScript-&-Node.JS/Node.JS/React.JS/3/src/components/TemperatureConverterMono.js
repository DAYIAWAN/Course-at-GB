import * as React from "react";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import DegreesCIcon from "./deg_C_icon.png";
import DegreesFIcon from "./deg_F_icon.png";

const label = { inputProps: { "aria-label": "Switch demo" } };

function TemperatureConverterMono() {
  const [temperature, setTemperature] = useState("");
  const [degreesCelsius, setDegreesCelsius] = useState(true);

  const changeDegrees = () => {
    setDegreesCelsius(degreesCelsius ? false : true);
  };

  const calculateTemperature = (e) => {
    e.preventDefault();
    if (degreesCelsius) {
      setTemperature((Number.parseFloat(temperature) * 1.8 + 32).toFixed(2));
    } else {
      setTemperature(((Number.parseFloat(temperature) - 32) / 1.8).toFixed(2));
    }
  };

  return (
    <div className="TemperatureConverter">
      <div className="temperatureDegreesSwitcher">
        <img src={DegreesFIcon} alt="Fahrenheit" width="32px" />
        <Switch {...label} defaultChecked onChange={changeDegrees} />
        <img src={DegreesCIcon} alt="Celsius" width="32px" />
      </div>
      <TextField
        label="Укажите температуру"
        variant="outlined"
        fullWidth
        value={temperature}
        onChange={(e) => setTemperature(e.target.value)}
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={calculateTemperature}
        style={{ marginBottom: 20 }}
      >
        Конвертировать
      </Button>
    </div>
  );
}

export default TemperatureConverterMono;
