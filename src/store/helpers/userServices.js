import swal from "sweetalert";

export const handleResponse = (response) => {
	return response.text().then((text) => {
		if (response.status === 500) {
			swal({ title: "Error!", text: 'Something Went Wrong! Please Try Again Later.', icon: "error" });
		}
		const data = text && JSON.parse(text);
		if (!response.ok) {
			if (response.status === 401 || response.status === 400) {
				localStorage.removeItem("token");
				window.location.href = "/";
			}
			const error = (data && data.message) || response.statusText;
			return Promise.reject(error);
		}
		return data;
	});
};
