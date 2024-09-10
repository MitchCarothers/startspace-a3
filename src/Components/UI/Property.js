export default function Property({label, type, value, action, min, max, options}) {
    if(type === "number") {
        return(
            <div className="property">
                <span>{label}</span>
                <input
                    type={type}
                    className={type}
                    value={value}
                    min={min}
                    max={max}
                    onChange={action}
                />
            </div>
        );
    } else if(type === "checkbox") {
        return(
            <div className="property">
                <span>{label}</span>
                <input
                    type={type}
                    className={type}
                    checked={value}
                    onChange={action}
                />
            </div>
        );
    } else if(type !== "select") {
        return(
            <div className="property">
                <span>{label}</span>
                <input
                    type={type}
                    className={type}
                    value={value}
                    onChange={action}
                />
            </div>
        );
    } else if(type === "select") {
        return(
            <div className="property">
                <span>{label}</span>
                <select
                    value={value}
                    onChange={action}
                >
                    {options}
                </select>
            </div>
        );
    }
};