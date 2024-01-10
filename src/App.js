import React, {useState} from "react";
import Calendar from 'react-calendar'

function App() {
    const [date, setDate] = useState(new Date())
    const onChange = date => {
        setDate(date)
    }

    return (
        <div className={"w-full"}>
            <div className={"m-auto flex flex-col justify-center text-center max-w-[300px]"}>
                <Calendar
                    className={"border-2"}
                    onChange={onChange}
                    value={date}
                />
                <div className={"text-center py-7 text-red-700"}>
                    {date.toDateString()}
                </div>
            </div>
        </div>
    );
}

export default App;
