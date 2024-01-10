import { useState, ChangeEvent } from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface RangeSliderProp {
  w: string;
  isWeek: boolean;
  setIsWeek: (newValue: boolean) => void;
  selectedDayIndex: number[];
  setSelectedDayIndex?: (newRange: number[]) => void;
}
const valuetext = (value: number) => {
  return daysOfWeek[value];
};

const daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

const marks = daysOfWeek.map((day, index) => ({
  value: index,
  label: day,
}));

const RangeSlider = ({
  w,
  isWeek,
  setIsWeek,
  selectedDayIndex,
  setSelectedDayIndex,
}: RangeSliderProp) => {
  const [showMinus, setShowMinus] = useState(false);

  const handleChange = (
    _event: Event,
    newValue: number | number[],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _activeThumb: number = 0
  ) => {
    setSelectedDayIndex?.(Array.isArray(newValue) ? newValue : [newValue]);
    //console.log("Range" + selectedDayIndex);
  };
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsWeek(event.target.checked);
  };

  const toggleIcon = () => {
    setShowMinus((prev) => !prev);
  };

  return (
    <Box sx={{ width: 700, margin: "3rem" }}>
      <Box display="flex" alignItems="center">
        <FormControlLabel
          sx={{ paddingX: "2rem" }}
          label={w}
          control={
            <Checkbox
              checked={isWeek}
              onChange={handleCheckboxChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          }
        />
        <Slider
          size="small"
          getAriaLabel={() => "Days range"}
          value={selectedDayIndex}
          step={1}
          onChange={handleChange}
          valueLabelDisplay="on"
          getAriaValueText={valuetext}
          marks={marks}
          min={0}
          max={daysOfWeek.length - 1}
          disabled={!isWeek}
        />
        <div>
          {showMinus ? (
            <RemoveIcon
              sx={{
                marginBottom: "1.5rem",
                paddingX: "2rem",
                cursor: !isWeek ? "not-allowed" : "pointer",
                opacity: !isWeek ? 0.5 : 1,
              }}
              onClick={isWeek ? undefined : toggleIcon}
            />
          ) : (
            <AddIcon
              sx={{
                marginBottom: "1.5rem",
                paddingX: "2rem",
                cursor: !isWeek ? "not-allowed" : "pointer",
                opacity: !isWeek ? 0.5 : 1,
              }}
              onClick={isWeek ? undefined : toggleIcon}
            />
          )}
        </div>
      </Box>
    </Box>
  );
};

export default RangeSlider;
