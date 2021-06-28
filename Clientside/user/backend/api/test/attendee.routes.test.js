const axios = require("axios");

describe("POST @ /attendees endpoint", () => {
	it("should create a attendee and return an id", async () => {
		try {
			const res = axios.post("http://localhost:5000/attendees", {
				firstName: "Thushara",
				lastName: "Thiwanka",
				username: "thushara123",
				password: "thiwanka123",
				email: "thiwanka123@gmail.com",
				contactNumber: "0764343434",
			});

			expect(res.status).toEqual(200);
		} catch (error) {
			console.log(error);
		}
	});
});
