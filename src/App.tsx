import { useState } from "react";
import Card from "@mui/material/Card";
import "./App.css";
import CardContent from "@mui/material/CardContent";
import RangeSlider from "./assets/Component/RangeSlider";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export interface WeekState {
  isWeek: boolean;
  arrayRange: number[];
}
const startRange: number = 1;
const endRange: number = 4;

function App() {
  const [isWeek, setIsWeek] = useState<boolean>(true);
  const [selectedDayIndex, setSelectedDayIndex] = useState([
    startRange,
    endRange,
  ]);
  const [showResult, setShowResukt] = useState<boolean>(false);

  const updateStates = () => {
    // Function to display isWeek and selectedDayIndex

    console.log("isWeek:", isWeek);
    console.log("selectedDayIndex:", selectedDayIndex);
    setShowResukt(true);
  };

  return (
    <>
      <Card>
        <CardContent>
          <Box sx={{ marginLeft: "15rem" }}>
            <h3>MY AVAILABILITY FOR THE NEXT 7 WEEKS</h3>
          </Box>
          <RangeSlider
            w="week1"
            isWeek={isWeek}
            setIsWeek={setIsWeek}
            selectedDayIndex={selectedDayIndex}
            setSelectedDayIndex={setSelectedDayIndex}
          />
          {/* <RangeSlider w="week2" />
          <RangeSlider w="week3" />
          <RangeSlider w="week4" />
          <RangeSlider w="week5" />
          <RangeSlider w="week6" />
          <RangeSlider w="week7" /> */}
          <Button
            variant="contained"
            sx={{ marginLeft: "3rem" }}
            onClick={updateStates}
          >
            Save
          </Button>
        </CardContent>
      </Card>
      {showResult && (
        <Card sx={{ marginTop: "1rem" }}>
          <CardContent>
            <p>Week: {isWeek.toString()}</p>
            <p>Selected Day: {selectedDayIndex.join(", ")}</p>
          </CardContent>
        </Card>
      )}
    </>
  );
}

export default App;
