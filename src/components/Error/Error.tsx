
    const Error = ({ errorMessage, customStyle }: { errorMessage?: string , customStyle?: string}) => {
        return (
            <div className="error-div">
                <img width={350} alt="not found"  src="/assets/error.gif" />
                <span className={customStyle || ""} style={{ marginRight: "2.5rem"}}>{errorMessage}</span>
            </div>
        )
    }
    export default Error;