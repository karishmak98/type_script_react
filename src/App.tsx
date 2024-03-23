import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import roseImg from "./assets/rose.jpg";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(goal:string,summary:string) {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        title: goal,
        description: summary,
        id: Math.random(),
      };
      return [...prevGoals, newGoal];
    });
  }
  function handleDeleteGoal(id: number) {
    setGoals((prevGoal) => prevGoal.filter((goal) => goal.id !== id));
  }
  return (
    <main>
      <Header image={{ src: roseImg, alt: "A list of goal" }}>
        <h1>Your Course Goal</h1>
      </Header>
      {/* <button onClick={handleAddGoal}>Add Goal</button> */}
      <NewGoal handleAddGoal={handleAddGoal}/>
      <CourseGoalList handleDeleteGoal={handleDeleteGoal} goals={goals} />
    </main>
  );
}
