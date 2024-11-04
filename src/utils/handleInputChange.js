function handleInputChange(e, name, setInputData, inputData) {
    setInputData({ ...inputData, [name]: e.target.value });
}

export default handleInputChange;