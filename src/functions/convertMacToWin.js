function convertMacToWin() {
	//Select input field
	const inputField = document.getElementsByClassName('inputField')[0];
	const inputText = inputField.value;

	// Replace content and search for /
	let initialText = inputText.replace(
		'smb://10.244.64.170/ClientesID/',
		'I:\\'
	);
	let searchText = initialText.search('/');

	while (searchText > 0) {
		const finalText = initialText.replace('/', '\\');
		initialText = finalText;
		searchText = initialText.search('/');
	}

	const convertionResult = initialText;

	//insert the convertionResult in the class "result" in LightBox componet

	const result = document.getElementsByClassName('result')[0];
	result.innerHTML = convertionResult;

	inputField.value = convertionResult;
}

export default convertMacToWin;
