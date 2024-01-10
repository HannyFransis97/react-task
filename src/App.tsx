import { useState } from "react";
import Card from "@mui/material/Card";
import "./App.css";
import CardContent from "@mui/material/CardContent";
import RangeSlider from "./assets/Component/RangeSlider";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export interface StateType {
  isWeek: boolean;
  selectedDayIndex: number[];
}

function App() {
  const [weekStates, setWeekStates] = useState<Array<StateType>>([
    { isWeek: false, selectedDayIndex: [1, 2] },
    { isWeek: true, selectedDayIndex: [2, 4] },
    { isWeek: false, selectedDayIndex: [2, 5] },
    { isWeek: true, selectedDayIndex: [2, 4] },
    { isWeek: false, selectedDayIndex: [2, 5] },
    { isWeek: true, selectedDayIndex: [1, 4] },
    { isWeek: true, selectedDayIndex: [1, 5] },
  ]);

  const [showResult, setShowResult] = useState<boolean>(false);

  // Function to update isTrue for a specific week
  const setIsWeek = (weekIndex: number, newValue: boolean) => {
    setWeekStates((prevWeekStates) =>
      prevWeekStates.map((weekState, index) =>
        index === weekIndex ? { ...weekState, isWeek: newValue } : weekState
      )
    );
  };

  // Function to update range for a specific week
  const setSelectedDayIndex = (weekIndex: number, newRange: number[]) => {
    setWeekStates((prevWeekStates) =>
      prevWeekStates.map((weekState, index) =>
        index === weekIndex
          ? { ...weekState, selectedDayIndex: newRange }
          : weekState
      )
    );
  };

  return (
    <>
      <Card>
        <CardContent>
          <Box sx={{ marginLeft: "15rem" }}>
            <h3>MY AVAILABILITY FOR THE NEXT 7 WEEKS</h3>
          </Box>
          {weekStates.map((weekState, index) => (
            <RangeSlider
              key={index}
              w={`Week${index + 1}`}
              isWeek={weekState.isWeek}
              setIsWeek={(newValue) => setIsWeek(index, newValue)}
              selectedDayIndex={weekState.selectedDayIndex}
              setSelectedDayIndex={(newRange) =>
                setSelectedDayIndex(index, newRange)
              }
            />
          ))}
          <Button
            variant="contained"
            sx={{ marginLeft: "3rem" }}
            onClick={() => setShowResult(true)}
          >
            Save
          </Button>
        </CardContent>
      </Card>
      {showResult &&
        weekStates.map((weekState, index) => (
          <Box key={index} sx={{ marginTop: "1rem" }}>
            <Card>
              <CardContent>
                <p>Week: {index + 1}</p>
                <p>Is Avaiable: {weekState.isWeek ? "Yes" : "No"}</p>
                {weekState.isWeek && (
                  <p>Selected Days: {weekState.selectedDayIndex.join(", ")}</p>
                )}
              </CardContent>
            </Card>
          </Box>
        ))}
    </>
  );
}

export default App;
