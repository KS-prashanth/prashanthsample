import './index.css';
function Classes() {
    const color = "blue";
    const dangerous = true;
    return (
        <div>
            <h2>Classes</h2>
            <div className={`wd-bg-${color} wd-fg-black wd-padding-10px`}>
                Dynamic {color} background!
            </div>


            <div className={`wd-bg-${dangerous ? "red" : "yellow"} wd-fg-black wd-padding-10px`}>
                Dangerous background!
            </div>
        </div>
    )
}
export default Classes;