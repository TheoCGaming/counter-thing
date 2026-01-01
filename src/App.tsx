import React from 'react'

const App: React.FC = () => {
    let count = 0;
    let p = document.getElementById("counter")
    return (
        <div className="bg-slate-900 gap-2 flex-row w-screen h-screen flex relative">
        <div className="gap-2 flex-row flex self-center">
            <p className="text-white" id="counter">000</p>
            <table className="block justify-center"><tbody><tr><td>
            <img src="deskthing/up.svg" className="flex-initial" onClick={incCount}/>
            </td></tr><tr><td>
            <img src="deskthing/down.svg" className="flex-initial invisible" onClick={decCount}/>
            </td><td>
            <img src="deskthing/reset.svg" className="flex-initial" onClick={resetCount}/>
            </td></tr><tr><td>
            <img src="deskthing/down.svg" className="flex-initial" onClick={decCount}/>
            </td></tr></tbody></table>
        </div>
        </div>

    )

    function incCount() {
        count++;
        if(count > 999)
            count = 0
        p.innerHTML = count.toString().padStart(3,"0");
    }

    function decCount() {
        count--
        if(count < 0)
        count = 999
        p.innerHTML = count.toString().padStart(3,"0");
    }

    function resetCount() {
        count = 0;
        p.innerHTML = count.toString().padStart(3,"0");
    }
}

export default App
