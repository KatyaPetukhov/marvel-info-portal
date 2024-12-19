import img from "./error.gif"
const ErrorMessage = () => {
    // return (
    //     <img src={process.env.PUBLIC_URL + '/error.gif'} />
    // )     -HOW TO USE FROM PUBLIC SOURCE

    return (
        <img src={img} style={{ display: 'block', width: '250px', height: '250px', margin: '0 auto', objectFit: 'contain' }} alt="Error"></img>
    )
}

export default ErrorMessage;