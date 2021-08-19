import React from "react";
import DiaryCard from "./components/DiaryCard";
import DiaryHome from "./components/DiaryHome";
import './App.css';
import AppMenuBar from "./components/layouts/AppMenuBar";

function App() {
    return (
        <div className="App">
            <AppMenuBar/>
            <DiaryHome />
            <DiaryCard
                title='Reason Why Learning English is so important'
                subtitle='Noah'
                description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur doloribus harum quo. Deserunt ducimus fugit itaque minus nesciunt nihil praesentium, quaerat. Accusantium consectetur dolor ex iusto quas quos rerum sed!'
            />
        </div>
  );
}

export default App;
